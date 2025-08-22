-- Remove overly permissive chat message policy
DROP POLICY IF EXISTS "Everyone can view chat messages" ON public.chat_messages;

-- Create secure RLS policies for chat messages based on room access

-- Policy 1: Users can view messages in public rooms
CREATE POLICY "Users can view public chat messages"
ON public.chat_messages
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.chat_rooms cr
    WHERE cr.id = chat_messages.room_id
      AND cr.type = 'public'
  )
);

-- Policy 2: Users can view messages in study group rooms if they're members
CREATE POLICY "Users can view study group chat messages"
ON public.chat_messages
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.chat_rooms cr
    JOIN public.study_group_members sgm ON cr.study_group_id = sgm.group_id
    WHERE cr.id = chat_messages.room_id
      AND cr.type = 'study_group'
      AND sgm.user_id = auth.uid()
  )
);

-- Policy 3: Users can view messages in mentorship rooms if they're part of the connection
CREATE POLICY "Users can view mentorship chat messages"
ON public.chat_messages
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM public.chat_rooms cr
    JOIN public.mentorship_connections mc ON cr.mentorship_id = mc.id
    WHERE cr.id = chat_messages.room_id
      AND cr.type = 'mentorship'
      AND (mc.mentor_id = auth.uid() OR mc.mentee_id = auth.uid())
      AND mc.status = 'accepted'
  )
);

-- Update chat rooms RLS to be more restrictive
DROP POLICY IF EXISTS "Everyone can view public chat rooms" ON public.chat_rooms;

-- New chat room policies
CREATE POLICY "Users can view public chat rooms"
ON public.chat_rooms
FOR SELECT
USING (type = 'public');

CREATE POLICY "Users can view study group chat rooms if member"
ON public.chat_rooms
FOR SELECT
USING (
  type = 'study_group' AND
  EXISTS (
    SELECT 1 FROM public.study_group_members sgm
    WHERE sgm.group_id = chat_rooms.study_group_id
      AND sgm.user_id = auth.uid()
  )
);

CREATE POLICY "Users can view mentorship chat rooms if connected"
ON public.chat_rooms
FOR SELECT
USING (
  type = 'mentorship' AND
  EXISTS (
    SELECT 1 FROM public.mentorship_connections mc
    WHERE mc.id = chat_rooms.mentorship_id
      AND (mc.mentor_id = auth.uid() OR mc.mentee_id = auth.uid())
      AND mc.status = 'accepted'
  )
);

-- Update INSERT policy for messages to check room access
DROP POLICY IF EXISTS "Authenticated users can send messages" ON public.chat_messages;

CREATE POLICY "Users can send messages to accessible rooms"
ON public.chat_messages
FOR INSERT
WITH CHECK (
  auth.uid() = sender_id AND
  (
    -- Can send to public rooms
    EXISTS (
      SELECT 1 FROM public.chat_rooms cr
      WHERE cr.id = room_id AND cr.type = 'public'
    )
    OR
    -- Can send to study group rooms if member
    EXISTS (
      SELECT 1 FROM public.chat_rooms cr
      JOIN public.study_group_members sgm ON cr.study_group_id = sgm.group_id
      WHERE cr.id = room_id
        AND cr.type = 'study_group'
        AND sgm.user_id = auth.uid()
    )
    OR
    -- Can send to mentorship rooms if connected
    EXISTS (
      SELECT 1 FROM public.chat_rooms cr
      JOIN public.mentorship_connections mc ON cr.mentorship_id = mc.id
      WHERE cr.id = room_id
        AND cr.type = 'mentorship'
        AND (mc.mentor_id = auth.uid() OR mc.mentee_id = auth.uid())
        AND mc.status = 'accepted'
    )
  )
);