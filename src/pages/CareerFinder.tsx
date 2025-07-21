import { useState } from "react";
import { Search, Filter, BookOpen, Briefcase, Users, TrendingUp, Palette, Beaker, Monitor, Heart, Leaf, MapPin } from "lucide-react";
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
    const matchesLevel = !educationLevel || course.level === educationLevel;
    const matchesType = !courseType || course.type === courseType;
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

              {/* Filters */}
              <div className="flex flex-wrap gap-4 mb-6">
                <Select value={educationLevel} onValueChange={setEducationLevel}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Education Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Levels</SelectItem>
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
                    <SelectItem value="">All Types</SelectItem>
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
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Career Interest Assessment</h2>
                <p className="text-muted-foreground mb-6">
                  Take this quick quiz to discover career paths that align with your interests and strengths.
                </p>
                <Button size="lg" className="mt-4">
                  Start Career Quiz
                </Button>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Coming Soon: Interactive Career Assessment</CardTitle>
                  <CardDescription>
                    We're developing a comprehensive career quiz that will help match your interests, 
                    skills, and academic background to suitable career paths in Bhutan.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h4 className="font-semibold">The quiz will assess:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Subject preferences and academic strengths</li>
                      <li>• Work environment preferences (office, outdoor, creative, etc.)</li>
                      <li>• Career values (job security, creativity, helping others, etc.)</li>
                      <li>• Skills and aptitudes</li>
                      <li>• Geographic preferences within Bhutan</li>
                    </ul>
                    
                    <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold mb-2">Meanwhile, consider these questions:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• What subjects do you enjoy most in school?</li>
                        <li>• Do you prefer working with people, data, or hands-on tasks?</li>
                        <li>• Are you interested in traditional Bhutanese industries or emerging sectors?</li>
                        <li>• Do you want to stay in Bhutan or study abroad?</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default CareerFinder;