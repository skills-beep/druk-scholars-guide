
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { Clock, MessageSquare, TrendingUp, Users, Star, Send } from 'lucide-react';
import DynamicRating from '@/components/DynamicRating';
import { colleges } from '@/data/colleges';

interface Update {
  id: string;
  collegeId: string;
  collegeName: string;
  title: string;
  content: string;
  category: 'academics' | 'facilities' | 'admission' | 'events' | 'general';
  author: string;
  timestamp: Date;
  likes: number;
}

interface RatingSubmission {
  collegeId: string;
  rating: number;
  comment: string;
  author: string;
}

const CollegeUpdates = () => {
  const [updates, setUpdates] = useState<Update[]>([
    {
      id: '1',
      collegeId: '1',
      collegeName: 'Royal Thimphu College',
      title: 'New Computer Lab Inaugurated',
      content: 'RTC has opened a state-of-the-art computer lab with 50 new workstations and high-speed internet connectivity.',
      category: 'facilities',
      author: 'Student Council',
      timestamp: new Date('2024-01-15'),
      likes: 24
    },
    {
      id: '2',
      collegeId: '6',
      collegeName: 'College of Science and Technology',
      title: 'Admission Deadline Extended',
      content: 'Due to high demand, CST has extended the admission deadline for engineering programs to July 20, 2024.',
      category: 'admission',
      author: 'Admissions Office',
      timestamp: new Date('2024-01-14'),
      likes: 18
    }
  ]);

  const [newUpdate, setNewUpdate] = useState({
    collegeId: '',
    title: '',
    content: '',
    category: 'general' as const,
    author: ''
  });

  const [ratingData, setRatingData] = useState({
    collegeId: '',
    rating: 0,
    comment: '',
    author: ''
  });

  const handleSubmitUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newUpdate.collegeId || !newUpdate.title || !newUpdate.content || !newUpdate.author) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const selectedCollege = colleges.find(c => c.id === newUpdate.collegeId);
    if (!selectedCollege) return;

    const update: Update = {
      id: Date.now().toString(),
      collegeId: newUpdate.collegeId,
      collegeName: selectedCollege.name,
      title: newUpdate.title,
      content: newUpdate.content,
      category: newUpdate.category,
      author: newUpdate.author,
      timestamp: new Date(),
      likes: 0
    };

    setUpdates(prev => [update, ...prev]);
    setNewUpdate({
      collegeId: '',
      title: '',
      content: '',
      category: 'general',
      author: ''
    });

    toast({
      title: "Update Posted",
      description: "Your update has been posted successfully!"
    });
  };

  const handleSubmitRating = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!ratingData.collegeId || !ratingData.rating || !ratingData.author) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const selectedCollege = colleges.find(c => c.id === ratingData.collegeId);
    if (!selectedCollege) return;

    // Here you would typically update the college rating in your data source
    toast({
      title: "Rating Submitted",
      description: `Thank you for rating ${selectedCollege.name}!`
    });

    setRatingData({
      collegeId: '',
      rating: 0,
      comment: '',
      author: ''
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      academics: 'bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20',
      facilities: 'bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 dark:text-green-400 border border-green-500/20',
      admission: 'bg-gradient-to-r from-purple-500/10 to-violet-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20',
      events: 'bg-gradient-to-r from-orange-500/10 to-amber-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20',
      general: 'bg-gradient-to-r from-gray-500/10 to-slate-500/10 text-gray-600 dark:text-gray-400 border border-gray-500/20'
    };
    return colors[category as keyof typeof colors] || colors.general;
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-primary/20">
            <TrendingUp className="h-4 w-4" />
            Real-time College Updates
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent mb-6 font-sora">
            College Updates Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay connected with the latest happenings at colleges across Bhutan. Share updates, rate institutions, and help fellow students make informed decisions.
          </p>
        </div>

        <Tabs defaultValue="updates" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-card/50 backdrop-blur-sm border border-border/50 p-2 rounded-2xl">
            <TabsTrigger value="updates" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl transition-all duration-300 data-[state=active]:shadow-lg data-[state=active]:shadow-primary/25">
              <MessageSquare className="h-4 w-4" />
              Recent Updates
            </TabsTrigger>
            <TabsTrigger value="post" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl transition-all duration-300 data-[state=active]:shadow-lg data-[state=active]:shadow-primary/25">
              <Send className="h-4 w-4" />
              Post Update
            </TabsTrigger>
            <TabsTrigger value="rate" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl transition-all duration-300 data-[state=active]:shadow-lg data-[state=active]:shadow-primary/25">
              <Star className="h-4 w-4" />
              Rate College
            </TabsTrigger>
          </TabsList>

          <TabsContent value="updates" className="space-y-8">
            <div className="grid gap-8">
              {updates.map((update, index) => (
                <Card key={update.id} className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:scale-[1.02] group rounded-3xl overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Badge className={`${getCategoryColor(update.category)} rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm`}>
                            {update.category.charAt(0).toUpperCase() + update.category.slice(1)}
                          </Badge>
                          <span className="text-sm text-muted-foreground font-medium bg-secondary/50 px-3 py-1 rounded-full">
                            {update.collegeName}
                          </span>
                        </div>
                        <CardTitle className="text-2xl font-semibold group-hover:text-primary transition-colors duration-300">{update.title}</CardTitle>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/30 px-3 py-2 rounded-full backdrop-blur-sm">
                        <Clock className="h-4 w-4" />
                        {formatTimeAgo(update.timestamp)}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-card-foreground/80 mb-6 leading-relaxed text-lg">
                      {update.content}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border/30">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                            <Users className="h-4 w-4 text-primary-foreground" />
                          </div>
                          <span className="text-sm text-muted-foreground font-medium">
                            By {update.author}
                          </span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="gap-2 hover:bg-primary/10 hover:text-primary transition-all duration-300 rounded-full">
                        <TrendingUp className="h-4 w-4" />
                        {update.likes} likes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="post">
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden shadow-2xl shadow-primary/5">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 border-b border-border/30">
                <CardTitle className="text-2xl font-semibold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Share an Update</CardTitle>
                <p className="text-muted-foreground text-lg">
                  Help fellow students stay informed about college news and updates
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmitUpdate} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="block text-sm font-semibold text-foreground">College *</label>
                      <Select value={newUpdate.collegeId} onValueChange={(value) => 
                        setNewUpdate(prev => ({ ...prev, collegeId: value }))
                      }>
                        <SelectTrigger className="h-12 rounded-xl border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                          <SelectValue placeholder="Select a college" />
                        </SelectTrigger>
                        <SelectContent>
                          {colleges.map((college) => (
                            <SelectItem key={college.id} value={college.id}>
                              {college.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-3">
                      <label className="block text-sm font-semibold text-foreground">Category</label>
                      <Select value={newUpdate.category} onValueChange={(value: any) => 
                        setNewUpdate(prev => ({ ...prev, category: value }))
                      }>
                        <SelectTrigger className="h-12 rounded-xl border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="academics">Academics</SelectItem>
                          <SelectItem value="facilities">Facilities</SelectItem>
                          <SelectItem value="admission">Admission</SelectItem>
                          <SelectItem value="events">Events</SelectItem>
                          <SelectItem value="general">General</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-foreground">Title *</label>
                    <Input
                      value={newUpdate.title}
                      onChange={(e) => setNewUpdate(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="Enter update title"
                      className="h-12 rounded-xl border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/30 focus:border-primary transition-all duration-300"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-foreground">Content *</label>
                    <Textarea
                      value={newUpdate.content}
                      onChange={(e) => setNewUpdate(prev => ({ ...prev, content: e.target.value }))}
                      placeholder="Share the details of your update..."
                      rows={5}
                      className="rounded-xl border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/30 focus:border-primary transition-all duration-300 resize-none"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-foreground">Your Name *</label>
                    <Input
                      value={newUpdate.author}
                      onChange={(e) => setNewUpdate(prev => ({ ...prev, author: e.target.value }))}
                      placeholder="Enter your name"
                      className="h-12 rounded-xl border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/30 focus:border-primary transition-all duration-300"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full h-14 rounded-xl bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold text-lg shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-[1.02]">
                    <Send className="mr-2 h-5 w-5" />
                    Post Update
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rate">
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden shadow-2xl shadow-primary/5">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 border-b border-border/30">
                <CardTitle className="text-2xl font-semibold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Rate a College</CardTitle>
                <p className="text-muted-foreground text-lg">
                  Share your experience and help others make informed decisions
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmitRating} className="space-y-8">
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-foreground">College *</label>
                    <Select value={ratingData.collegeId} onValueChange={(value) => 
                      setRatingData(prev => ({ ...prev, collegeId: value }))
                    }>
                      <SelectTrigger className="h-12 rounded-xl border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                        <SelectValue placeholder="Select a college to rate" />
                      </SelectTrigger>
                      <SelectContent>
                        {colleges.map((college) => (
                          <SelectItem key={college.id} value={college.id}>
                            <div className="flex items-center justify-between w-full">
                              <span>{college.name}</span>
                              <DynamicRating rating={college.rating} size="sm" />
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-4">
                    <label className="block text-sm font-semibold text-foreground">Your Rating *</label>
                    <div className="flex items-center gap-6">
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRatingData(prev => ({ ...prev, rating: star }))}
                            className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                              star <= ratingData.rating 
                                ? 'text-amber-400 bg-amber-400/10' 
                                : 'text-muted-foreground hover:text-amber-400/70 hover:bg-amber-400/5'
                            }`}
                          >
                            <Star className={`h-8 w-8 ${star <= ratingData.rating ? 'fill-current' : ''}`} />
                          </button>
                        ))}
                      </div>
                      <div className="bg-secondary/30 px-4 py-2 rounded-full backdrop-blur-sm">
                        <span className="text-sm text-muted-foreground font-medium">
                          {ratingData.rating > 0 ? `${ratingData.rating} out of 5 stars` : 'Click to rate'}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-foreground">Review (Optional)</label>
                    <Textarea
                      value={ratingData.comment}
                      onChange={(e) => setRatingData(prev => ({ ...prev, comment: e.target.value }))}
                      placeholder="Share your experience with this college..."
                      rows={4}
                      className="rounded-xl border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/30 focus:border-primary transition-all duration-300 resize-none"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-foreground">Your Name *</label>
                    <Input
                      value={ratingData.author}
                      onChange={(e) => setRatingData(prev => ({ ...prev, author: e.target.value }))}
                      placeholder="Enter your name"
                      className="h-12 rounded-xl border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/30 focus:border-primary transition-all duration-300"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full h-14 rounded-xl bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold text-lg shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-[1.02]">
                    <Star className="mr-2 h-5 w-5" />
                    Submit Rating
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CollegeUpdates;
