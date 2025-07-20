import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { MessageCircle, Users, GraduationCap, Heart, Plus, Send, Clock, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type User = {
  id: string;
  email?: string;
} | null;

type Profile = {
  id: string;
  user_id: string;
  full_name: string;
  email: string;
  avatar_url?: string;
  bio?: string;
  college?: string;
  graduation_year?: number;
  major?: string;
  user_type: string;
  is_available_for_mentorship: boolean;
};

type Forum = {
  id: string;
  title: string;
  description: string;
  category: string;
  created_by: string;
  created_at: string;
  profiles: Profile;
};

type StudyGroup = {
  id: string;
  name: string;
  description: string;
  subject: string;
  max_members: number;
  current_members: number;
  meeting_schedule?: string;
  location?: string;
  is_virtual: boolean;
  created_by: string;
  created_at: string;
  profiles: Profile;
};

type ChatMessage = {
  id: string;
  content: string;
  sender_id: string;
  created_at: string;
  profiles: Profile;
};

const Community = () => {
  const [user, setUser] = useState<User>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [forums, setForums] = useState<Forum[]>([]);
  const [studyGroups, setStudyGroups] = useState<StudyGroup[]>([]);
  const [mentors, setMentors] = useState<Profile[]>([]);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Auth state
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Load user profile
  useEffect(() => {
    if (user) {
      loadProfile();
    }
  }, [user]);

  // Load data
  useEffect(() => {
    loadForums();
    loadStudyGroups();
    loadMentors();
    loadChatMessages();
  }, []);

  // Real-time chat updates
  useEffect(() => {
    const channel = supabase
      .channel('chat-messages')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'chat_messages'
        },
        (payload) => {
          loadChatMessages();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const loadProfile = async () => {
    if (!user) return;
    
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', user.id)
      .single();

    if (error && error.code !== 'PGRST116') {
      console.error('Error loading profile:', error);
    } else if (data) {
      setProfile(data);
    }
    setIsLoading(false);
  };

  const loadForums = async () => {
    const { data, error } = await supabase
      .from('forums')
      .select(`
        *,
        profiles (*)
      `)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error loading forums:', error);
    } else {
      setForums(data || []);
    }
  };

  const loadStudyGroups = async () => {
    const { data, error } = await supabase
      .from('study_groups')
      .select(`
        *,
        profiles (*)
      `)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error loading study groups:', error);
    } else {
      setStudyGroups(data || []);
    }
  };

  const loadMentors = async () => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('is_available_for_mentorship', true)
      .eq('user_type', 'mentor');

    if (error) {
      console.error('Error loading mentors:', error);
    } else {
      setMentors(data || []);
    }
  };

  const loadChatMessages = async () => {
    const { data, error } = await supabase
      .from('chat_messages')
      .select(`
        *,
        profiles (*)
      `)
      .order('created_at', { ascending: true })
      .limit(50);

    if (error) {
      console.error('Error loading chat messages:', error);
    } else {
      setChatMessages(data || []);
    }
  };

  const sendMessage = async () => {
    if (!user || !newMessage.trim()) return;

    const { error } = await supabase
      .from('chat_messages')
      .insert({
        content: newMessage,
        sender_id: user.id,
        room_id: '00000000-0000-0000-0000-000000000001' // Default public room
      });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to send message",
        variant: "destructive"
      });
    } else {
      setNewMessage("");
    }
  };

  const createProfile = async (formData: any) => {
    if (!user) return;

    const { error } = await supabase
      .from('profiles')
      .insert({
        user_id: user.id,
        full_name: formData.full_name,
        email: formData.email,
        college: formData.college,
        graduation_year: parseInt(formData.graduation_year),
        major: formData.major,
        user_type: formData.user_type,
        is_available_for_mentorship: formData.user_type === 'mentor'
      });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to create profile",
        variant: "destructive"
      });
    } else {
      toast({
        title: "Success",
        description: "Profile created successfully!"
      });
      loadProfile();
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <Navigation />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Join Our Community</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Please sign in to access community features like forums, study groups, and mentorship.
            </p>
            <Button onClick={() => window.location.href = '/auth'}>Sign In</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <Navigation />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Complete Your Profile</CardTitle>
                <CardDescription>
                  Please complete your profile to access community features.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ProfileForm onSubmit={createProfile} />
              </CardContent>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Community Hub</h1>
          <p className="text-lg text-muted-foreground">
            Connect, learn, and grow together with fellow students and alumni
          </p>
        </div>

        <Tabs defaultValue="forums" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="forums" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              Forums
            </TabsTrigger>
            <TabsTrigger value="study-groups" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Study Groups
            </TabsTrigger>
            <TabsTrigger value="mentorship" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Mentorship
            </TabsTrigger>
            <TabsTrigger value="alumni" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Alumni Network
            </TabsTrigger>
            <TabsTrigger value="chat" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              Live Chat
            </TabsTrigger>
          </TabsList>

          <TabsContent value="forums" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Discussion Forums</h2>
              <CreateForumDialog onForumCreated={loadForums} />
            </div>
            <div className="grid gap-4">
              {forums.map((forum) => (
                <Card key={forum.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{forum.title}</CardTitle>
                        <CardDescription>{forum.description}</CardDescription>
                      </div>
                      <Badge>{forum.category}</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>Created by {forum.profiles.full_name}</span>
                      <span>•</span>
                      <span>{new Date(forum.created_at).toLocaleDateString()}</span>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="study-groups" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Study Groups</h2>
              <CreateStudyGroupDialog onGroupCreated={loadStudyGroups} />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {studyGroups.map((group) => (
                <Card key={group.id}>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-start">
                      <span>{group.name}</span>
                      <Badge variant="secondary">
                        {group.current_members}/{group.max_members}
                      </Badge>
                    </CardTitle>
                    <CardDescription>{group.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge>{group.subject}</Badge>
                        {group.is_virtual && <Badge variant="outline">Virtual</Badge>}
                      </div>
                      {group.meeting_schedule && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {group.meeting_schedule}
                        </div>
                      )}
                      {group.location && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {group.location}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="mentorship" className="space-y-6">
            <h2 className="text-2xl font-semibold">Find a Mentor</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {mentors.map((mentor) => (
                <Card key={mentor.id}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={mentor.avatar_url || undefined} />
                        <AvatarFallback>
                          {mentor.full_name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle>{mentor.full_name}</CardTitle>
                        <CardDescription>
                          {mentor.major} • {mentor.college}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {mentor.bio && <p className="text-sm text-muted-foreground mb-4">{mentor.bio}</p>}
                    <Button className="w-full">Connect</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="alumni" className="space-y-6">
            <h2 className="text-2xl font-semibold">Alumni Network</h2>
            <div className="text-center py-12">
              <GraduationCap className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
              <p className="text-muted-foreground">
                Connect with alumni from your college and build professional networks.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="chat" className="space-y-6">
            <h2 className="text-2xl font-semibold">Live Chat</h2>
            <Card className="h-96">
              <CardHeader>
                <CardTitle>General Discussion</CardTitle>
                <CardDescription>Chat with current students</CardDescription>
              </CardHeader>
              <CardContent className="h-full flex flex-col">
                <ScrollArea className="flex-1 mb-4 pr-4">
                  <div className="space-y-4">
                    {chatMessages.map((message) => (
                      <div key={message.id} className="flex items-start gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={message.profiles.avatar_url || undefined} />
                          <AvatarFallback className="text-xs">
                            {message.profiles.full_name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-sm">{message.profiles.full_name}</span>
                            <span className="text-xs text-muted-foreground">
                              {new Date(message.created_at).toLocaleTimeString()}
                            </span>
                          </div>
                          <p className="text-sm">{message.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <div className="flex gap-2">
                  <Input
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  />
                  <Button onClick={sendMessage} size="icon">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

const ProfileForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    college: '',
    graduation_year: '',
    major: '',
    user_type: 'student'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="full_name">Full Name</Label>
        <Input
          id="full_name"
          value={formData.full_name}
          onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
          required
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>
      <div>
        <Label htmlFor="college">College</Label>
        <Input
          id="college"
          value={formData.college}
          onChange={(e) => setFormData({ ...formData, college: e.target.value })}
          required
        />
      </div>
      <div>
        <Label htmlFor="graduation_year">Graduation Year</Label>
        <Input
          id="graduation_year"
          type="number"
          value={formData.graduation_year}
          onChange={(e) => setFormData({ ...formData, graduation_year: e.target.value })}
          required
        />
      </div>
      <div>
        <Label htmlFor="major">Major</Label>
        <Input
          id="major"
          value={formData.major}
          onChange={(e) => setFormData({ ...formData, major: e.target.value })}
          required
        />
      </div>
      <div>
        <Label htmlFor="user_type">User Type</Label>
        <Select onValueChange={(value) => setFormData({ ...formData, user_type: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select user type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="student">Student</SelectItem>
            <SelectItem value="alumni">Alumni</SelectItem>
            <SelectItem value="mentor">Mentor</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="w-full">Create Profile</Button>
    </form>
  );
};

const CreateForumDialog = ({ onForumCreated }: { onForumCreated: () => void }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { error } = await supabase
      .from('forums')
      .insert({
        title: formData.title,
        description: formData.description,
        category: formData.category,
        created_by: user.id
      });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to create forum",
        variant: "destructive"
      });
    } else {
      toast({
        title: "Success",
        description: "Forum created successfully!"
      });
      setFormData({ title: '', description: '', category: '' });
      setOpen(false);
      onForumCreated();
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Forum
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Forum</DialogTitle>
          <DialogDescription>
            Start a new discussion topic for the community.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="category">Category</Label>
            <Select onValueChange={(value) => setFormData({ ...formData, category: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="academic">Academic</SelectItem>
                <SelectItem value="career">Career</SelectItem>
                <SelectItem value="social">Social</SelectItem>
                <SelectItem value="general">General</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button type="submit">Create Forum</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const CreateStudyGroupDialog = ({ onGroupCreated }: { onGroupCreated: () => void }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    subject: '',
    max_members: '10',
    meeting_schedule: '',
    location: '',
    is_virtual: false
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { error } = await supabase
      .from('study_groups')
      .insert({
        name: formData.name,
        description: formData.description,
        subject: formData.subject,
        max_members: parseInt(formData.max_members),
        meeting_schedule: formData.meeting_schedule,
        location: formData.location,
        is_virtual: formData.is_virtual,
        created_by: user.id
      });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to create study group",
        variant: "destructive"
      });
    } else {
      toast({
        title: "Success",
        description: "Study group created successfully!"
      });
      setFormData({
        name: '',
        description: '',
        subject: '',
        max_members: '10',
        meeting_schedule: '',
        location: '',
        is_virtual: false
      });
      setOpen(false);
      onGroupCreated();
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Study Group
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Study Group</DialogTitle>
          <DialogDescription>
            Start a study group to learn together with other students.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Group Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="max_members">Max Members</Label>
            <Input
              id="max_members"
              type="number"
              value={formData.max_members}
              onChange={(e) => setFormData({ ...formData, max_members: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="meeting_schedule">Meeting Schedule (Optional)</Label>
            <Input
              id="meeting_schedule"
              value={formData.meeting_schedule}
              onChange={(e) => setFormData({ ...formData, meeting_schedule: e.target.value })}
              placeholder="e.g., Tuesdays 7 PM"
            />
          </div>
          <div>
            <Label htmlFor="location">Location (Optional)</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="e.g., Library Room 101"
            />
          </div>
          <DialogFooter>
            <Button type="submit">Create Study Group</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Community;