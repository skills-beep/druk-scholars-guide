-- Restrict public access to profiles and require authentication for reads
-- 1) Drop overly permissive public SELECT policy
DROP POLICY IF EXISTS "Users can view all profiles" ON public.profiles;

-- 2) Create safer SELECT policy limited to authenticated users only
CREATE POLICY "Authenticated users can view profiles"
ON public.profiles
FOR SELECT
TO authenticated
USING (true);

-- Keep existing insert/update self policies as-is