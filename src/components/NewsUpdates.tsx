
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ExternalLink, Newspaper, TrendingUp, AlertCircle } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  category: 'policy' | 'program' | 'scholarship' | 'admission' | 'announcement';
  priority: 'high' | 'medium' | 'low';
  source: string;
  link?: string;
  isNew: boolean;
}

const NewsUpdates = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedNews, setExpandedNews] = useState<Set<string>>(new Set());

  const newsItems: NewsItem[] = [
    {
      id: '1',
      title: 'New Scholarship Program Launched for STEM Students',
      summary: 'Ministry of Education announces comprehensive scholarship program for Science, Technology, Engineering, and Mathematics students.',
      content: 'The Ministry of Education has launched a new scholarship program targeting students pursuing STEM fields. The program covers tuition fees, accommodation, and living expenses for eligible students. Applications are now open and will close on March 15, 2024.',
      date: '2024-01-15',
      category: 'scholarship',
      priority: 'high',
      source: 'Ministry of Education',
      link: 'https://education.gov.bt/scholarships',
      isNew: true
    },
    {
      id: '2',
      title: 'Royal University of Bhutan Introduces New Engineering Programs',
      summary: 'RUB announces new undergraduate programs in Renewable Energy Engineering and Data Science.',
      content: 'Starting from the 2024 academic year, RUB will offer two new undergraduate programs: B.Tech in Renewable Energy Engineering and B.Sc in Data Science. These programs are designed to meet the growing demand for skilled professionals in emerging technologies.',
      date: '2024-01-12',
      category: 'program',
      priority: 'high',
      source: 'Royal University of Bhutan',
      isNew: true
    },
    {
      id: '3',
      title: 'Updated Admission Requirements for 2024',
      summary: 'New admission criteria and procedures announced for all higher education institutions.',
      content: 'The admission process for 2024 has been updated with new requirements including mandatory career counseling sessions and revised entrance exam patterns. Students are advised to check the latest guidelines on the official education portal.',
      date: '2024-01-10',
      category: 'admission',
      priority: 'high',
      source: 'Department of Higher Education',
      isNew: true
    },
    {
      id: '4',
      title: 'Digital Skills Training Program for Youth',
      summary: 'Government launches free digital literacy program for young Bhutanese.',
      content: 'A comprehensive digital skills training program has been launched to enhance the digital literacy of Bhutanese youth. The program covers basic computer skills, internet usage, digital marketing, and e-commerce fundamentals.',
      date: '2024-01-08',
      category: 'program',
      priority: 'medium',
      source: 'Department of Youth & Sports',
      isNew: false
    },
    {
      id: '5',
      title: 'New Education Policy Framework 2024-2030',
      summary: 'Government unveils comprehensive education policy focusing on skill development and innovation.',
      content: 'The new education policy framework emphasizes practical skills, innovation, and entrepreneurship. It includes provisions for industry partnerships, internship programs, and startup incubation support for students.',
      date: '2024-01-05',
      category: 'policy',
      priority: 'medium',
      source: 'Cabinet Secretariat',
      isNew: false
    },
    {
      id: '6',
      title: 'College Fest 2024 - Inter-College Competition',
      summary: 'Annual inter-college competition featuring academic, cultural, and sports events.',
      content: 'The annual College Fest 2024 will be held from February 15-18, featuring competitions in academics, cultural performances, sports, and innovation challenges. Students from all colleges are encouraged to participate.',
      date: '2024-01-03',
      category: 'announcement',
      priority: 'low',
      source: 'Student Affairs Council',
      isNew: false
    }
  ];

  const filteredNews = newsItems.filter(item => 
    selectedCategory === 'all' || item.category === selectedCategory
  );

  const toggleExpanded = (newsId: string) => {
    const newExpanded = new Set(expandedNews);
    if (newExpanded.has(newsId)) {
      newExpanded.delete(newsId);
    } else {
      newExpanded.add(newsId);
    }
    setExpandedNews(newExpanded);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'policy': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'program': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'scholarship': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'admission': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'announcement': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return <AlertCircle className="h-4 w-4 text-red-500" />;
      case 'medium': return <TrendingUp className="h-4 w-4 text-yellow-500" />;
      default: return null;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-full">
            <Newspaper className="h-8 w-8 text-orange-600 dark:text-orange-400" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold">News & Updates</CardTitle>
        <CardDescription>
          Stay informed about the latest education policies, programs, and opportunities in Bhutan
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center">
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory('all')}
          >
            All Updates
          </Button>
          <Button
            variant={selectedCategory === 'policy' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory('policy')}
          >
            Policies
          </Button>
          <Button
            variant={selectedCategory === 'program' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory('program')}
          >
            Programs
          </Button>
          <Button
            variant={selectedCategory === 'scholarship' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory('scholarship')}
          >
            Scholarships
          </Button>
          <Button
            variant={selectedCategory === 'admission' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory('admission')}
          >
            Admissions
          </Button>
          <Button
            variant={selectedCategory === 'announcement' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory('announcement')}
          >
            Announcements
          </Button>
        </div>

        {/* News Items */}
        <div className="space-y-4">
          {filteredNews.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {item.isNew && (
                        <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                          NEW
                        </Badge>
                      )}
                      <Badge className={getCategoryColor(item.category)}>
                        {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                      </Badge>
                      {getPriorityIcon(item.priority)}
                    </div>
                    <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {item.summary}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mt-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(item.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>Source: {item.source}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
                      >
                        <ExternalLink className="h-3 w-3" />
                        <span>Read More</span>
                      </a>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleExpanded(item.id)}
                      className="text-xs"
                    >
                      {expandedNews.has(item.id) ? 'Show Less' : 'Show More'}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              {expandedNews.has(item.id) && (
                <CardContent className="pt-0 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.content}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-8">
            <p className="text-slate-500 dark:text-slate-400">
              No updates found for the selected category.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default NewsUpdates;
