-- Remove policies that expose email addresses through study groups and mentorship
DROP POLICY IF EXISTS "Users can view profiles in their study groups" ON public.profiles;
DROP POLICY IF EXISTS "Users can view profiles in their mentorship connections" ON public.profiles;

-- Create sanitized RPC functions for public profile views (no emails)

-- Function for forum/chat profiles (just name and avatar)
CREATE OR REPLACE FUNCTION public.get_public_profile_basic(profile_user_id uuid)
RETURNS TABLE (
  id uuid,
  user_id uuid,
  full_name text,
  avatar_url text
) AS $$
  SELECT 
    p.id,
    p.user_id,
    p.full_name,
    p.avatar_url
  FROM public.profiles p
  WHERE p.user_id = profile_user_id;
$$ LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public;

-- Function for study group member profiles (name, avatar, college, major)
CREATE OR REPLACE FUNCTION public.get_study_group_member_profiles(group_id_param uuid)
RETURNS TABLE (
  id uuid,
  user_id uuid,
  full_name text,
  avatar_url text,
  college text,
  major text,
  user_type text
) AS $$
  SELECT 
    p.id,
    p.user_id,
    p.full_name,
    p.avatar_url,
    p.college,
    p.major,
    p.user_type
  FROM public.profiles p
  JOIN public.study_group_members sgm ON p.user_id = sgm.user_id
  WHERE sgm.group_id = group_id_param
    AND (
      -- User can see profiles in groups they're a member of
      EXISTS (
        SELECT 1 FROM public.study_group_members sgm_self
        WHERE sgm_self.group_id = group_id_param 
          AND sgm_self.user_id = auth.uid()
      )
      -- Or if they created the group
      OR EXISTS (
        SELECT 1 FROM public.study_groups sg
        WHERE sg.id = group_id_param
          AND sg.created_by = auth.uid()
      )
    );
$$ LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public;

-- Function for mentorship connection profiles (name, avatar, bio, college, major)
CREATE OR REPLACE FUNCTION public.get_mentorship_connection_profiles()
RETURNS TABLE (
  id uuid,
  user_id uuid,
  full_name text,
  avatar_url text,
  bio text,
  college text,
  major text,
  user_type text,
  connection_type text
) AS $$
  SELECT 
    p.id,
    p.user_id,
    p.full_name,
    p.avatar_url,
    p.bio,
    p.college,
    p.major,
    p.user_type,
    CASE 
      WHEN mc.mentor_id = auth.uid() THEN 'mentee'
      WHEN mc.mentee_id = auth.uid() THEN 'mentor'
    END as connection_type
  FROM public.profiles p
  JOIN public.mentorship_connections mc ON (
    p.user_id = mc.mentor_id OR p.user_id = mc.mentee_id
  )
  WHERE (mc.mentor_id = auth.uid() OR mc.mentee_id = auth.uid())
    AND p.user_id != auth.uid()
    AND mc.status = 'accepted';
$$ LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public;

GRANT EXECUTE ON FUNCTION public.get_public_profile_basic(uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_study_group_member_profiles(uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_mentorship_connection_profiles() TO authenticated;