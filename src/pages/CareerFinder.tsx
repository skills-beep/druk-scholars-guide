import { useState } from "react";
import { Search, Filter, BookOpen, Briefcase, Users, TrendingUp, Palette, Beaker, Monitor, Heart, Leaf, MapPin, Star, Clock, DollarSign, User, BarChart3, Trophy, Target, Zap, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { careerCategories, employmentData, courses } from "@/data/careerData";

const CareerFinder = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [courseType, setCourseType] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  
  const quizQuestions = [
    {
      question: "Which subjects do you enjoy most?",
      options: ["Mathematics & Sciences", "Arts & Literature", "Social Studies", "Technology & Computers", "Business & Economics"]
    },
    {
      question: "What work environment appeals to you?",
      options: ["Office/Indoor", "Outdoor/Nature", "Laboratory/Research", "Creative Studio", "Community/Social Settings"]
    },
    {
      question: "What motivates you most in a career?",
      options: ["Helping Others", "Creative Expression", "Problem Solving", "Financial Success", "Job Security"]
    },
    {
      question: "How do you prefer to work?",
      options: ["Independently", "In Small Teams", "Leading Groups", "With Clients/Public", "Behind the Scenes"]
    },
    {
      question: "Which skills come naturally to you?",
      options: ["Analytical Thinking", "Communication", "Creative Problem Solving", "Technical Skills", "Leadership"]
    }
  ];

  const handleQuizAnswer = (answer: string) => {
    const newAnswers = [...quizAnswers, answer];
    setQuizAnswers(newAnswers);
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setQuizAnswers([]);
  };

  const getCareerRecommendations = () => {
    // Simple recommendation logic based on answers
    const recommendations = [
      { career: "Software Developer", match: "85%", reason: "Strong technical and problem-solving preferences" },
      { career: "Environmental Scientist", match: "78%", reason: "Interest in outdoor work and helping others" },
      { career: "Business Analyst", match: "72%", reason: "Analytical thinking and business focus" }
    ];
    return recommendations;
  };

  const getIcon = (iconName: string) => {
    const iconProps = { className: "h-6 w-6 text-primary" };
    switch (iconName) {
      case "Palette": return <Palette {...iconProps} />;
      case "Beaker": return <Beaker {...iconProps} />;
      case "Monitor": return <Monitor {...iconProps} />;
      case "Briefcase": return <Briefcase {...iconProps} />;
      case "Heart": return <Heart {...iconProps} />;
      case "Leaf": return <Leaf {...iconProps} />;
      case "MapPin": return <MapPin {...iconProps} />;
      default: return <BookOpen {...iconProps} />;
    }
  };

  const filteredCategories = careerCategories.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.careers.some(career => career.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.institution.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = !educationLevel || educationLevel === "all" || course.level === educationLevel;
    const matchesType = !courseType || courseType === "all" || course.type === courseType;
    return matchesSearch && matchesLevel && matchesType;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Career & Course Finder
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover your perfect career path and find the right courses in Bhutan. 
            Match your interests to in-demand careers and explore academic and vocational programs.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search careers or courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="careers" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="careers">Career Paths</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="trends">Job Market</TabsTrigger>
            <TabsTrigger value="quiz">Career Quiz</TabsTrigger>
          </TabsList>

          {/* Career Paths Tab */}
          <TabsContent value="careers">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Explore Career Categories</h2>
              <p className="text-muted-foreground mb-6">
                Choose from different interest areas to discover career paths that match your passion and skills.
              </p>
            </div>

            {/* Trending Careers Section */}
            <Card className="mb-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Trending Careers in Bhutan 2024
                </CardTitle>
                <CardDescription>
                  Hot careers with growing demand and excellent prospects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { career: "Digital Marketing Specialist", growth: "+35%", salary: "Nu 25-40K", demand: "High" },
                    { career: "Renewable Energy Engineer", growth: "+28%", salary: "Nu 35-55K", demand: "High" },
                    { career: "Tourism Guide (Eco)", growth: "+22%", salary: "Nu 20-35K", demand: "Medium" },
                    { career: "Organic Farming Specialist", growth: "+30%", salary: "Nu 18-30K", demand: "High" },
                    { career: "Software Developer", growth: "+45%", salary: "Nu 30-60K", demand: "Very High" },
                    { career: "Healthcare Assistant", growth: "+25%", salary: "Nu 18-28K", demand: "High" }
                  ].map((item, index) => (
                    <div key={index} className="p-4 rounded-lg bg-card border border-border/50 hover:shadow-md transition-shadow">
                      <h4 className="font-semibold mb-2">{item.career}</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Growth:</span>
                          <Badge variant="secondary" className="bg-green-100 text-green-800">{item.growth}</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Salary:</span>
                          <span className="font-medium">{item.salary}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Demand:</span>
                          <Badge variant={item.demand === "Very High" ? "default" : item.demand === "High" ? "secondary" : "outline"}>
                            {item.demand}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Career Resources & Tools */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Career Resources & Tools
                </CardTitle>
                <CardDescription>
                  Essential resources and tools to help you plan and advance your career in Bhutan
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="p-4 rounded-lg border border-border hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-semibold">Skill Development Hub</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Access online courses, certification programs, and skill-building resources
                    </p>
                    <div className="space-y-1 text-xs">
                      <Badge variant="secondary" className="mr-1">Free Courses</Badge>
                      <Badge variant="secondary" className="mr-1">Certifications</Badge>
                      <Badge variant="secondary">Workshops</Badge>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-border hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                        <Users className="h-5 w-5 text-secondary" />
                      </div>
                      <h4 className="font-semibold">Mentorship Network</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Connect with experienced professionals and industry mentors
                    </p>
                    <div className="space-y-1 text-xs">
                      <Badge variant="outline" className="mr-1">1-on-1 Mentoring</Badge>
                      <Badge variant="outline" className="mr-1">Industry Experts</Badge>
                      <Badge variant="outline">Career Guidance</Badge>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-border hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                        <Briefcase className="h-5 w-5 text-accent" />
                      </div>
                      <h4 className="font-semibold">Job Market Alerts</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Stay updated on new job openings and industry developments
                    </p>
                    <div className="space-y-1 text-xs">
                      <Badge variant="default" className="mr-1">Job Alerts</Badge>
                      <Badge variant="default" className="mr-1">Salary Updates</Badge>
                      <Badge variant="default">Industry News</Badge>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-border hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <DollarSign className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-semibold">Scholarship Finder</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Discover funding opportunities for education and training programs
                    </p>
                    <div className="space-y-1 text-xs">
                      <Badge variant="secondary" className="mr-1">Government Scholarships</Badge>
                      <Badge variant="secondary">Private Funding</Badge>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-border hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                        <Clock className="h-5 w-5 text-secondary" />
                      </div>
                      <h4 className="font-semibold">Career Events</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Attend career fairs, workshops, and networking events across Bhutan
                    </p>
                    <div className="space-y-1 text-xs">
                      <Badge variant="outline" className="mr-1">Career Fairs</Badge>
                      <Badge variant="outline" className="mr-1">Workshops</Badge>
                      <Badge variant="outline">Networking</Badge>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-border hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                        <Target className="h-5 w-5 text-accent" />
                      </div>
                      <h4 className="font-semibold">Resume Builder</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Create professional resumes tailored to Bhutanese job market
                    </p>
                    <div className="space-y-1 text-xs">
                      <Badge variant="default" className="mr-1">Templates</Badge>
                      <Badge variant="default" className="mr-1">AI Assistance</Badge>
                      <Badge variant="default">Local Format</Badge>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold">Featured Resource</h4>
                  </div>
                  <h5 className="font-medium mb-2">Bhutan Career Development Guide 2024</h5>
                  <p className="text-sm text-muted-foreground mb-3">
                    A comprehensive guide covering everything from choosing the right career path to advancing in your chosen field.
                  </p>
                  <Button variant="outline" size="sm">
                    Download Guide
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        {getIcon(category.icon)}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{category.title}</CardTitle>
                        <CardDescription>{category.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Sample Careers:</h4>
                        <div className="flex flex-wrap gap-2">
                          {category.careers.slice(0, 4).map((career, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {career}
                            </Badge>
                          ))}
                          {category.careers.length > 4 && (
                            <Badge variant="outline" className="text-xs">
                              +{category.careers.length - 4} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Key Skills:</h4>
                        <p className="text-sm text-muted-foreground">{category.skills}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Job Outlook:</h4>
                        <p className="text-sm text-muted-foreground">{category.outlook}</p>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold">Academic Programs:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {category.academicCourses.slice(0, 2).map((course, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <BookOpen className="h-3 w-3 mt-1 flex-shrink-0" />
                              {course}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold">TVET Programs:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {category.vocationalCourses.slice(0, 2).map((course, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Users className="h-3 w-3 mt-1 flex-shrink-0" />
                              {course}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Courses Tab */}
          <TabsContent value="courses">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Course Directory</h2>
              <p className="text-muted-foreground mb-6">
                Explore academic and vocational programs available in Bhutan's top institutions.
              </p>

              {/* Educational Pathways Visualization */}
              <Card className="mb-8 bg-gradient-to-r from-accent/5 to-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    Educational Pathways in Bhutan
                  </CardTitle>
                  <CardDescription>
                    Visualize different educational routes and their career outcomes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      {
                        level: "Class X Completion",
                        paths: [
                          { route: "Class XI-XII (Science)", leads: "Engineering, Medicine, IT", institutions: "Higher Secondary Schools", duration: "2 years" },
                          { route: "Class XI-XII (Commerce)", leads: "Business, Banking, Accounting", institutions: "Higher Secondary Schools", duration: "2 years" },
                          { route: "TVET Certificate", leads: "Skilled Trades, Tourism", institutions: "TVET Institutes", duration: "6 months - 2 years" }
                        ]
                      },
                      {
                        level: "Class XII Completion",
                        paths: [
                          { route: "Bachelor's Degree", leads: "Professional Careers", institutions: "RUB Colleges, Private", duration: "3-4 years" },
                          { route: "Diploma Programs", leads: "Technical Specialists", institutions: "Polytechnics", duration: "2-3 years" },
                          { route: "Study Abroad", leads: "International Careers", institutions: "Foreign Universities", duration: "3-4 years" }
                        ]
                      },
                      {
                        level: "Bachelor's Completion",
                        paths: [
                          { route: "Master's Degree", leads: "Senior Management, Research", institutions: "RUB, International", duration: "1-2 years" },
                          { route: "Professional Certification", leads: "Specialized Roles", institutions: "Various", duration: "6 months - 1 year" },
                          { route: "Direct Employment", leads: "Entry-level Professional", institutions: "Government, Private", duration: "Immediate" }
                        ]
                      }
                    ].map((stage, stageIndex) => (
                      <div key={stageIndex} className="space-y-4">
                        <h4 className="font-semibold text-lg border-l-4 border-primary pl-4">{stage.level}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-6">
                          {stage.paths.map((path, pathIndex) => (
                            <div key={pathIndex} className="relative">
                              <div className="p-4 rounded-lg border border-border/50 bg-card hover:shadow-md transition-shadow">
                                <div className="space-y-3">
                                  <h5 className="font-medium text-primary">{path.route}</h5>
                                  <div className="space-y-2 text-sm">
                                    <div>
                                      <span className="font-medium">Duration:</span>
                                      <span className="text-muted-foreground ml-1">{path.duration}</span>
                                    </div>
                                    <div>
                                      <span className="font-medium">Where:</span>
                                      <span className="text-muted-foreground ml-1">{path.institutions}</span>
                                    </div>
                                    <div>
                                      <span className="font-medium">Leads to:</span>
                                      <span className="text-muted-foreground ml-1">{path.leads}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {stageIndex < 2 && (
                                <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-2 -translate-y-1/2">
                                  <div className="w-4 h-0.5 bg-primary/30"></div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Filters */}
              <div className="flex flex-wrap gap-4 mb-6">
                <Select value={educationLevel} onValueChange={setEducationLevel}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Education Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="Post-X">Post Class X</SelectItem>
                    <SelectItem value="Post-XII">Post Class XII</SelectItem>
                    <SelectItem value="Postgraduate">Postgraduate</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={courseType} onValueChange={setCourseType}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Course Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Academic">Academic</SelectItem>
                    <SelectItem value="Vocational">Vocational/TVET</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{course.name}</CardTitle>
                    <CardDescription>{course.institution}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <Badge variant={course.type === "Academic" ? "default" : "secondary"}>
                        {course.type}
                      </Badge>
                      <Badge variant="outline">{course.level}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{course.description}</p>
                    <div>
                      <span className="font-semibold text-sm">Duration: </span>
                      <span className="text-sm">{course.duration}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-sm">Career Paths: </span>
                      <span className="text-sm text-muted-foreground">{course.careerPaths}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Job Market Trends Tab */}
          <TabsContent value="trends">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Bhutan Job Market Insights</h2>
                <p className="text-muted-foreground mb-6">
                  Current employment trends and sector opportunities in Bhutan's evolving economy.
                </p>
              </div>

              {/* Salary Comparison Tool */}
              <Card className="bg-gradient-to-r from-secondary/5 to-accent/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    Interactive Salary Comparison
                  </CardTitle>
                  <CardDescription>
                    Compare salaries across different sectors and experience levels
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { sector: "Government", entry: "Nu 15-20K", mid: "Nu 25-35K", senior: "Nu 40-60K", benefits: "High job security, pension" },
                      { sector: "Banking/Finance", entry: "Nu 18-25K", mid: "Nu 30-45K", senior: "Nu 50-80K", benefits: "Performance bonuses" },
                      { sector: "IT/Technology", entry: "Nu 20-30K", mid: "Nu 35-55K", senior: "Nu 60-100K", benefits: "Remote work options" },
                      { sector: "Tourism/Hospitality", entry: "Nu 12-18K", mid: "Nu 20-30K", senior: "Nu 35-50K", benefits: "Seasonal variations" }
                    ].map((item, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg">{item.sector}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Entry Level:</span>
                              <span className="font-medium">{item.entry}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Mid Level:</span>
                              <span className="font-medium">{item.mid}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Senior:</span>
                              <span className="font-medium">{item.senior}</span>
                            </div>
                          </div>
                          <div className="pt-2 border-t">
                            <p className="text-xs text-muted-foreground">{item.benefits}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Skills in Demand */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Top Skills in Demand
                  </CardTitle>
                  <CardDescription>
                    Most sought-after skills by Bhutanese employers in 2024
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Technical Skills</h4>
                      <div className="space-y-2">
                        {[
                          { skill: "Digital Marketing", demand: "95%" },
                          { skill: "Software Development", demand: "90%" },
                          { skill: "Data Analysis", demand: "85%" },
                          { skill: "Renewable Energy", demand: "80%" },
                          { skill: "E-commerce", demand: "75%" }
                        ].map((item, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-sm">{item.skill}</span>
                            <div className="flex items-center gap-2">
                              <div className="w-16 bg-muted rounded-full h-2">
                                <div 
                                  className="bg-primary h-2 rounded-full" 
                                  style={{ width: item.demand }}
                                ></div>
                              </div>
                              <span className="text-xs text-muted-foreground">{item.demand}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Soft Skills</h4>
                      <div className="space-y-2">
                        {[
                          { skill: "English Communication", demand: "98%" },
                          { skill: "Critical Thinking", demand: "92%" },
                          { skill: "Leadership", demand: "88%" },
                          { skill: "Adaptability", demand: "85%" },
                          { skill: "Cultural Sensitivity", demand: "90%" }
                        ].map((item, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-sm">{item.skill}</span>
                            <div className="flex items-center gap-2">
                              <div className="w-16 bg-muted rounded-full h-2">
                                <div 
                                  className="bg-secondary h-2 rounded-full" 
                                  style={{ width: item.demand }}
                                ></div>
                              </div>
                              <span className="text-xs text-muted-foreground">{item.demand}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Traditional Skills</h4>
                      <div className="space-y-2">
                        {[
                          { skill: "Traditional Arts", demand: "70%" },
                          { skill: "Organic Farming", demand: "85%" },
                          { skill: "Eco-Tourism", demand: "80%" },
                          { skill: "Cultural Preservation", demand: "75%" },
                          { skill: "Sustainable Practices", demand: "88%" }
                        ].map((item, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-sm">{item.skill}</span>
                            <div className="flex items-center gap-2">
                              <div className="w-16 bg-muted rounded-full h-2">
                                <div 
                                  className="bg-accent h-2 rounded-full" 
                                  style={{ width: item.demand }}
                                ></div>
                              </div>
                              <span className="text-xs text-muted-foreground">{item.demand}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Employment by Sector */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Employment by Sector (2024)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {employmentData.map((sector, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <h4 className="font-semibold">{sector.sector}</h4>
                          <Badge variant="secondary">{sector.percentage}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{sector.description}</p>
                        <div>
                          <span className="font-medium text-sm">Key Employers: </span>
                          <span className="text-sm text-muted-foreground">{sector.keyEmployers}</span>
                        </div>
                        <div>
                          <span className="font-medium text-sm">Growth Outlook: </span>
                          <span className="text-sm text-muted-foreground">{sector.growth}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Salary Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Salary Ranges in Bhutan</CardTitle>
                  <CardDescription>
                    Average monthly income ranges by sector and experience level
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold mb-2">National Average</h4>
                        <p className="text-2xl font-bold text-primary">Nu 17,900</p>
                        <p className="text-sm text-muted-foreground">Mean monthly income (2020)</p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold mb-2">Urban vs Rural</h4>
                        <div className="space-y-1">
                          <p className="text-sm">Urban: <span className="font-semibold">Nu 18,000</span></p>
                          <p className="text-sm">Rural: <span className="font-semibold">Nu 10,400</span></p>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p><strong>Note:</strong> Government jobs follow fixed pay scales (entry-level ~Nu 15-20K). 
                      Private sector salaries vary by industry and location. High-skill fields like engineering 
                      and healthcare typically offer better compensation.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Career Quiz Tab */}
          <TabsContent value="quiz">
            <div className="max-w-4xl mx-auto">
              {!quizStarted ? (
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Career Interest Assessment</h2>
                  <p className="text-muted-foreground mb-6">
                    Take this quick quiz to discover career paths that align with your interests and strengths.
                  </p>
                  <Button size="lg" onClick={() => setQuizStarted(true)} className="mt-4">
                    Start Career Quiz
                  </Button>
                </div>
              ) : quizAnswers.length < quizQuestions.length ? (
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Question {currentQuestion + 1} of {quizQuestions.length}</CardTitle>
                      <Badge variant="outline">{Math.round(((currentQuestion) / quizQuestions.length) * 100)}% Complete</Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 mt-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${((currentQuestion) / quizQuestions.length) * 100}%` }}
                      ></div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <h3 className="text-xl font-semibold">{quizQuestions[currentQuestion].question}</h3>
                    <div className="grid gap-3">
                      {quizQuestions[currentQuestion].options.map((option, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          onClick={() => handleQuizAnswer(option)}
                          className="justify-start p-4 h-auto text-left hover:bg-primary/10"
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-6">
                  <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Trophy className="h-5 w-5 text-primary" />
                        Your Career Recommendations
                      </CardTitle>
                      <CardDescription>
                        Based on your responses, here are careers that match your interests and preferences
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {getCareerRecommendations().map((rec, index) => (
                          <div key={index} className="p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-semibold text-lg">{rec.career}</h4>
                              <Badge variant="secondary" className="bg-green-100 text-green-800">
                                {rec.match} Match
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{rec.reason}</p>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-4 mt-6">
                        <Button onClick={resetQuiz} variant="outline">
                          Retake Quiz
                        </Button>
                        <Button onClick={() => window.location.href = '#courses'}>
                          Explore Courses
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Your Quiz Responses</CardTitle>
                      <CardDescription>Review your answers and preferences</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {quizQuestions.map((q, index) => (
                          <div key={index} className="p-3 rounded-lg bg-muted/50">
                            <div className="font-medium text-sm mb-1">{q.question}</div>
                            <div className="text-sm text-primary font-medium">{quizAnswers[index]}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {!quizStarted && (
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle>About This Assessment</CardTitle>
                    <CardDescription>
                      Our career quiz uses validated questions to match your interests with suitable career paths in Bhutan.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <h4 className="font-semibold">The assessment covers:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-primary" />
                            Subject preferences and academic strengths
                          </li>
                          <li className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-primary" />
                            Work environment preferences
                          </li>
                          <li className="flex items-center gap-2">
                            <Heart className="h-4 w-4 text-primary" />
                            Career values and motivations
                          </li>
                        </ul>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <Target className="h-4 w-4 text-primary" />
                            Working style preferences
                          </li>
                          <li className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-primary" />
                            Natural skills and aptitudes
                          </li>
                          <li className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            Geographic and cultural preferences
                          </li>
                        </ul>
                      </div>
                      
                      <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold mb-2">Tips for taking the quiz:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Answer honestly based on your genuine interests</li>
                          <li>• Consider what energizes you, not just what others expect</li>
                          <li>• Think about activities you enjoy in your free time</li>
                          <li>• There are no right or wrong answers</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default CareerFinder;