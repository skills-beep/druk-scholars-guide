-- Create user profiles table
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  avatar_url TEXT,
  bio TEXT,
  college TEXT,
  graduation_year INTEGER,
  major TEXT,
  user_type TEXT CHECK (user_type IN ('student', 'alumni', 'mentor')) DEFAULT 'student',
  is_available_for_mentorship BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create forums table
CREATE TABLE public.forums (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  created_by UUID NOT NULL REFERENCES public.profiles(user_id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create forum posts table
CREATE TABLE public.forum_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  forum_id UUID NOT NULL REFERENCES public.forums(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  author_id UUID NOT NULL REFERENCES public.profiles(user_id),
  likes_count INTEGER DEFAULT 0,
  replies_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create forum replies table
CREATE TABLE public.forum_replies (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID NOT NULL REFERENCES public.forum_posts(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  author_id UUID NOT NULL REFERENCES public.profiles(user_id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create study groups table
CREATE TABLE public.study_groups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  subject TEXT NOT NULL,
  max_members INTEGER DEFAULT 10,
  current_members INTEGER DEFAULT 1,
  meeting_schedule TEXT,
  location TEXT,
  is_virtual BOOLEAN DEFAULT false,
  created_by UUID NOT NULL REFERENCES public.profiles(user_id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create study group members table
CREATE TABLE public.study_group_members (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  group_id UUID NOT NULL REFERENCES public.study_groups(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES public.profiles(user_id),
  joined_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(group_id, user_id)
);

-- Create mentorship connections table
CREATE TABLE public.mentorship_connections (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  mentor_id UUID NOT NULL REFERENCES public.profiles(user_id),
  mentee_id UUID NOT NULL REFERENCES public.profiles(user_id),
  status TEXT CHECK (status IN ('pending', 'accepted', 'declined', 'completed')) DEFAULT 'pending',
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create chat rooms table
CREATE TABLE public.chat_rooms (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT CHECK (type IN ('public', 'study_group', 'mentorship')) DEFAULT 'public',
  study_group_id UUID REFERENCES public.study_groups(id),
  mentorship_id UUID REFERENCES public.mentorship_connections(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create chat messages table
CREATE TABLE public.chat_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  room_id UUID NOT NULL REFERENCES public.chat_rooms(id) ON DELETE CASCADE,
  sender_id UUID NOT NULL REFERENCES public.profiles(user_id),
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forums ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forum_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forum_replies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.study_groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.study_group_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mentorship_connections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view all profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = user_id);

-- RLS Policies for forums
CREATE POLICY "Everyone can view forums" ON public.forums FOR SELECT USING (true);
CREATE POLICY "Authenticated users can create forums" ON public.forums FOR INSERT WITH CHECK (auth.uid() = created_by);
CREATE POLICY "Users can update their own forums" ON public.forums FOR UPDATE USING (auth.uid() = created_by);

-- RLS Policies for forum posts
CREATE POLICY "Everyone can view forum posts" ON public.forum_posts FOR SELECT USING (true);
CREATE POLICY "Authenticated users can create posts" ON public.forum_posts FOR INSERT WITH CHECK (auth.uid() = author_id);
CREATE POLICY "Users can update their own posts" ON public.forum_posts FOR UPDATE USING (auth.uid() = author_id);

-- RLS Policies for forum replies
CREATE POLICY "Everyone can view forum replies" ON public.forum_replies FOR SELECT USING (true);
CREATE POLICY "Authenticated users can create replies" ON public.forum_replies FOR INSERT WITH CHECK (auth.uid() = author_id);

-- RLS Policies for study groups
CREATE POLICY "Everyone can view study groups" ON public.study_groups FOR SELECT USING (true);
CREATE POLICY "Authenticated users can create study groups" ON public.study_groups FOR INSERT WITH CHECK (auth.uid() = created_by);
CREATE POLICY "Users can update their own study groups" ON public.study_groups FOR UPDATE USING (auth.uid() = created_by);

-- RLS Policies for study group members
CREATE POLICY "Everyone can view study group members" ON public.study_group_members FOR SELECT USING (true);
CREATE POLICY "Users can join study groups" ON public.study_group_members FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can leave study groups" ON public.study_group_members FOR DELETE USING (auth.uid() = user_id);

-- RLS Policies for mentorship connections
CREATE POLICY "Users can view their mentorship connections" ON public.mentorship_connections 
FOR SELECT USING (auth.uid() = mentor_id OR auth.uid() = mentee_id);
CREATE POLICY "Users can create mentorship requests" ON public.mentorship_connections 
FOR INSERT WITH CHECK (auth.uid() = mentee_id);
CREATE POLICY "Mentors can update connection status" ON public.mentorship_connections 
FOR UPDATE USING (auth.uid() = mentor_id);

-- RLS Policies for chat rooms
CREATE POLICY "Everyone can view public chat rooms" ON public.chat_rooms FOR SELECT USING (true);
CREATE POLICY "Authenticated users can create chat rooms" ON public.chat_rooms FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

-- RLS Policies for chat messages
CREATE POLICY "Everyone can view chat messages" ON public.chat_messages FOR SELECT USING (true);
CREATE POLICY "Authenticated users can send messages" ON public.chat_messages FOR INSERT WITH CHECK (auth.uid() = sender_id);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_forums_updated_at
  BEFORE UPDATE ON public.forums
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_forum_posts_updated_at
  BEFORE UPDATE ON public.forum_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_mentorship_connections_updated_at
  BEFORE UPDATE ON public.mentorship_connections
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Enable realtime for chat messages
ALTER TABLE public.chat_messages REPLICA IDENTITY FULL;
ALTER publication supabase_realtime ADD TABLE public.chat_messages;