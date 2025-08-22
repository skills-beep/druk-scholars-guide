-- Tighten profiles SELECT RLS to prevent email scraping while preserving app features
-- 1) Remove overly permissive policy
DROP POLICY IF EXISTS "Authenticated users can view profiles" ON public.profiles;

-- 2) Allow users to view their own profile
CREATE POLICY "Users can view their own profile"
ON public.profiles
FOR SELECT
USING (auth.uid() = user_id);

-- 3) Allow viewing mentor profiles (publicly intended)
CREATE POLICY "Users can view mentor profiles"
ON public.profiles
FOR SELECT
USING (is_available_for_mentorship IS TRUE);

-- 4) Allow viewing profiles of members who share a study group with the requester
CREATE POLICY "Users can view profiles in their study groups"
ON public.profiles
FOR SELECT
USING (
  EXISTS (
    SELECT 1
    FROM public.study_group_members gm_self
    JOIN public.study_group_members gm_other
      ON gm_self.group_id = gm_other.group_id
    WHERE gm_self.user_id = auth.uid()
      AND gm_other.user_id = profiles.user_id
  )
);

-- 5) Allow viewing profiles of users connected via mentorship (mentor or mentee)
CREATE POLICY "Users can view profiles in their mentorship connections"
ON public.profiles
FOR SELECT
USING (
  EXISTS (
    SELECT 1
    FROM public.mentorship_connections mc
    WHERE (mc.mentor_id = auth.uid() AND mc.mentee_id = profiles.user_id)
       OR (mc.mentee_id = auth.uid() AND mc.mentor_id = profiles.user_id)
  )
);
