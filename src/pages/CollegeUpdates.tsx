
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
      academics: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      facilities: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      admission: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      events: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      general: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            College Updates Hub
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest news from colleges across Bhutan and share your experiences
          </p>
        </div>

        <Tabs defaultValue="updates" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="updates" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Recent Updates
            </TabsTrigger>
            <TabsTrigger value="post" className="flex items-center gap-2">
              <Send className="h-4 w-4" />
              Post Update
            </TabsTrigger>
            <TabsTrigger value="rate" className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              Rate College
            </TabsTrigger>
          </TabsList>

          <TabsContent value="updates" className="space-y-6">
            <div className="grid gap-6">
              {updates.map((update) => (
                <Card key={update.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge className={getCategoryColor(update.category)}>
                            {update.category.charAt(0).toUpperCase() + update.category.slice(1)}
                          </Badge>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {update.collegeName}
                          </span>
                        </div>
                        <CardTitle className="text-xl">{update.title}</CardTitle>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="h-4 w-4" />
                        {formatTimeAgo(update.timestamp)}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {update.content}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          By {update.author}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="gap-2">
                          <TrendingUp className="h-4 w-4" />
                          {update.likes}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="post">
            <Card>
              <CardHeader>
                <CardTitle>Share an Update</CardTitle>
                <p className="text-gray-600 dark:text-gray-300">
                  Help fellow students stay informed about college news and updates
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitUpdate} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">College *</label>
                      <Select value={newUpdate.collegeId} onValueChange={(value) => 
                        setNewUpdate(prev => ({ ...prev, collegeId: value }))
                      }>
                        <SelectTrigger>
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
                    <div>
                      <label className="block text-sm font-medium mb-2">Category</label>
                      <Select value={newUpdate.category} onValueChange={(value: any) => 
                        setNewUpdate(prev => ({ ...prev, category: value }))
                      }>
                        <SelectTrigger>
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
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Title *</label>
                    <Input
                      value={newUpdate.title}
                      onChange={(e) => setNewUpdate(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="Enter update title"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Content *</label>
                    <Textarea
                      value={newUpdate.content}
                      onChange={(e) => setNewUpdate(prev => ({ ...prev, content: e.target.value }))}
                      placeholder="Share the details of your update..."
                      rows={4}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name *</label>
                    <Input
                      value={newUpdate.author}
                      onChange={(e) => setNewUpdate(prev => ({ ...prev, author: e.target.value }))}
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Post Update
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rate">
            <Card>
              <CardHeader>
                <CardTitle>Rate a College</CardTitle>
                <p className="text-gray-600 dark:text-gray-300">
                  Share your experience and help others make informed decisions
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitRating} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">College *</label>
                    <Select value={ratingData.collegeId} onValueChange={(value) => 
                      setRatingData(prev => ({ ...prev, collegeId: value }))
                    }>
                      <SelectTrigger>
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
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Rating *</label>
                    <div className="flex items-center gap-4">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRatingData(prev => ({ ...prev, rating: star }))}
                            className={`p-1 rounded ${
                              star <= ratingData.rating 
                                ? 'text-amber-400' 
                                : 'text-gray-300 dark:text-gray-600'
                            }`}
                          >
                            <Star className={`h-6 w-6 ${star <= ratingData.rating ? 'fill-current' : ''}`} />
                          </button>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {ratingData.rating > 0 && `${ratingData.rating} out of 5 stars`}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Review (Optional)</label>
                    <Textarea
                      value={ratingData.comment}
                      onChange={(e) => setRatingData(prev => ({ ...prev, comment: e.target.value }))}
                      placeholder="Share your experience with this college..."
                      rows={3}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name *</label>
                    <Input
                      value={ratingData.author}
                      onChange={(e) => setRatingData(prev => ({ ...prev, author: e.target.value }))}
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    <Star className="mr-2 h-4 w-4" />
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
