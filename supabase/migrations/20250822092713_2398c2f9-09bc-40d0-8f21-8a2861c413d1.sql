-- Restrict mentor visibility to sanitized RPC and remove broad policy
DROP POLICY IF EXISTS "Users can view mentor profiles" ON public.profiles;

-- Create a SECURITY DEFINER function that returns only non-sensitive mentor fields
CREATE OR REPLACE FUNCTION public.get_mentor_public_profiles()
RETURNS TABLE (
  id uuid,
  user_id uuid,
  full_name text,
  avatar_url text,
  bio text,
  college text,
  major text,
  user_type text,
  is_available_for_mentorship boolean
) AS $$
  SELECT 
    id,
    user_id,
    full_name,
    avatar_url,
    bio,
    college,
    major,
    user_type,
    is_available_for_mentorship
  FROM public.profiles
  WHERE is_available_for_mentorship IS TRUE AND user_type = 'mentor';
$$ LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public;

GRANT EXECUTE ON FUNCTION public.get_mentor_public_profiles() TO authenticated;