import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MapPin, 
  Calendar, 
  Star, 
  Phone, 
  Mail, 
  Globe, 
  DollarSign,
  GraduationCap,
  Clock,
  Award,
  BookOpen,
  Users,
  Target,
  Building,
  Camera,
  Quote,
  ExternalLink
} from 'lucide-react';
import { College } from '@/types/college';

interface CollegeModalProps {
  college: College;
  isOpen: boolean;
  onClose: () => void;
}

const CollegeModal = ({ college, isOpen, onClose }: CollegeModalProps) => {
  // Map college names to their official websites
  const getCollegeWebsite = (collegeName: string): string | null => {
    const websiteMap: { [key: string]: string } = {
      'Royal Thimphu College': 'https://www.rtc.bt/',
      'Gaeddu College of Business Studies': 'http://www.gcbs.edu.bt',
      'Paro College of Education': 'http://www.pce.edu.bt',
      'Samtse College of Education': 'http://www.sce.edu.bt',
      'College of Natural Resources': 'http://www.cnr.edu.bt',
      'College of Science and Technology': 'http://www.cst.edu.bt',
      'Jigme Namgyel Engineering College': 'https://www.jnec.edu.bt/',
      'College of Language and Culture Studies': 'http://www.clcs.edu.bt',
      'Sherubtse College': 'https://www.sherubtse.edu.bt/',
      'Institute of Traditional Medicine': 'https://www.moh.gov.bt/',
      'Gyalpozhing College of Information Technology': 'http://www.gcit.edu.bt'
    };
    
    // First check the website map, then fallback to college.contact.website, then college.applyUrl
    return websiteMap[collegeName] || college.contact?.website || college.applyUrl || null;
  };

  const handleApplyNow = () => {
    const website = getCollegeWebsite(college.name);
    if (website) {
      window.open(website, '_blank', 'noopener,noreferrer');
    } else {
      console.warn(`No website found for ${college.name}`);
    }
  };

  // Sample student reviews data
  const studentReviews = [
    {
      name: "Tenzin Norbu",
      program: "Computer Science",
      year: "2023 Graduate",
      rating: 4.5,
      review: "Excellent faculty and modern facilities. The practical approach to learning really prepared me for the industry."
    },
    {
      name: "Pema Lhamo",
      program: "Environmental Science",
      year: "Final Year",
      rating: 4.8,
      review: "Great research opportunities and supportive environment. The campus is beautiful and well-maintained."
    },
    {
      name: "Karma Wangchuk",
      program: "Business Administration",
      year: "2022 Graduate",
      rating: 4.3,
      review: "Strong industry connections and internship programs. The career guidance was very helpful for job placement."
    }
  ];

  // Sample campus tour images
  const campusImages = [
    { title: "Main Campus Building", url: college.image },
    { title: "Library & Study Areas", url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop&q=80" },
    { title: "Student Dormitories", url: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=400&fit=crop&q=80" },
    { title: "Sports & Recreation", url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop&q=80" },
    { title: "Cafeteria & Common Areas", url: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=400&fit=crop&q=80" },
    { title: "Science Laboratories", url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=400&fit=crop&q=80" }
  ];

  const applyUrl = getCollegeWebsite(college.name);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto animate-scale-in transition-all duration-300">
        <DialogHeader className="transition-all duration-300">
          <DialogTitle className="text-2xl font-bold font-sora transition-colors duration-300">
            {college.name}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Detailed information about {college.name} including programs, admission requirements, and facilities.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Hero Image and Basic Info with transitions */}
          <div className="relative overflow-hidden rounded-lg group">
            <img
              src={college.image}
              alt={college.name}
              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=400&fit=crop&q=80`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {college.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-white/95 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 transition-all duration-300 hover:scale-105">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span className="font-semibold">{college.rating}</span>
            </div>
          </div>

          {/* Basic Information with smooth transitions */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2 text-muted-foreground transition-all duration-300 hover:text-blue-600 hover:scale-105">
              <MapPin className="h-5 w-5 transition-colors duration-300" />
              <span>{college.location}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground transition-all duration-300 hover:text-green-600 hover:scale-105">
              <Calendar className="h-5 w-5 transition-colors duration-300" />
              <span>Est. {college.established}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground transition-all duration-300 hover:text-purple-600 hover:scale-105">
              <Building className="h-5 w-5 transition-colors duration-300" />
              <span>{college.type}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground transition-all duration-300 hover:text-orange-600 hover:scale-105">
              <Clock className="h-5 w-5 transition-colors duration-300" />
              <span>Deadline: {college.admissionDeadline}</span>
            </div>
          </div>

          <Separator className="transition-colors duration-300" />

          {/* Tabbed Content with enhanced transitions */}
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 h-auto transition-all duration-300">
              <TabsTrigger value="about" className="text-xs sm:text-sm px-2 py-2 transition-all duration-300 hover:scale-105">About</TabsTrigger>
              <TabsTrigger value="courses" className="text-xs sm:text-sm px-2 py-2 transition-all duration-300 hover:scale-105">Courses</TabsTrigger>
              <TabsTrigger value="admission" className="text-xs sm:text-sm px-2 py-2 transition-all duration-300 hover:scale-105">Admission</TabsTrigger>
              <TabsTrigger value="scholarships" className="text-xs sm:text-sm px-2 py-2 transition-all duration-300 hover:scale-105">Scholarships</TabsTrigger>
              <TabsTrigger value="tours" className="text-xs sm:text-sm px-2 py-2 transition-all duration-300 hover:scale-105">Virtual Tour</TabsTrigger>
              <TabsTrigger value="reviews" className="text-xs sm:text-sm px-2 py-2 transition-all duration-300 hover:scale-105">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-4 animate-fade-in">
              <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 transition-colors duration-300">
                    <BookOpen className="h-5 w-5" />
                    About {college.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4 transition-colors duration-300">
                    {college.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="transition-all duration-300 hover:bg-slate-50 dark:hover:bg-gray-800 p-3 rounded-lg">
                      <h4 className="font-semibold mb-2">Quick Facts</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Established in {college.established}</li>
                        <li>• Located in {college.location}</li>
                        <li>• Type: {college.type}</li>
                        <li>• Rating: {college.rating}/5.0</li>
                        <li>• {college.courses.length} Programs Offered</li>
                      </ul>
                    </div>
                    <div className="transition-all duration-300 hover:bg-slate-50 dark:hover:bg-gray-800 p-3 rounded-lg">
                      <h4 className="font-semibold mb-2">Mission & Vision</h4>
                      <p className="text-sm text-muted-foreground">
                        Committed to providing quality education that aligns with Bhutan's Gross National Happiness philosophy, 
                        fostering academic excellence, cultural preservation, and sustainable development.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="courses" className="space-y-4 animate-fade-in">
              <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 transition-colors duration-300">
                    <GraduationCap className="h-5 w-5" />
                    Academic Programs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {college.courses.map((course, index) => (
                      <Card key={course} className="border-l-4 border-l-primary transition-all duration-300 hover:shadow-md hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <CardContent className="p-4">
                          <h4 className="font-semibold transition-colors duration-300">{course}</h4>
                          <p className="text-sm text-muted-foreground mt-1 transition-colors duration-300">
                            Comprehensive program with modern curriculum and practical training
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="admission" className="space-y-4 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 transition-colors duration-300">
                      <DollarSign className="h-5 w-5" />
                      Fee Structure
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-2xl font-bold transition-colors duration-300">
                        {college.fees.currency} {college.fees.min.toLocaleString()} - {college.fees.max.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground transition-colors duration-300">Annual tuition fees</div>
                      <div className="bg-muted/50 p-3 rounded-lg transition-all duration-300 hover:bg-muted/70">
                        <p className="text-sm">
                          <strong>Note:</strong> Fees may vary by program. Additional costs for accommodation, 
                          meals, and study materials may apply.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 transition-colors duration-300">
                      <Clock className="h-5 w-5" />
                      Admission Requirements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="font-semibold text-primary transition-colors duration-300">
                        Application Deadline: {college.admissionDeadline}
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Eligibility Criteria:</h4>
                        <ul className="space-y-1 text-sm">
                          {college.eligibility.map((criteria, index) => (
                            <li key={index} className="flex items-start gap-2 transition-all duration-300 hover:text-primary">
                              <span className="text-primary">•</span>
                              {criteria}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="scholarships" className="space-y-4 animate-fade-in">
              <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 transition-colors duration-300">
                    <Award className="h-5 w-5" />
                    {college.name} Scholarships
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {college.scholarships.map((scholarship, index) => (
                      <Card key={index} className="border-l-4 border-l-green-500 transition-all duration-300 hover:shadow-md hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <CardContent className="pt-4">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold transition-colors duration-300">{scholarship.name}</h4>
                            <Badge variant="secondary" className="bg-green-100 text-green-800 transition-all duration-300 hover:scale-105">
                              {scholarship.amount}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground transition-colors duration-300">{scholarship.criteria}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tours" className="space-y-4 animate-fade-in">
              <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 transition-colors duration-300">
                    <Camera className="h-5 w-5" />
                    Virtual Campus Tour
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {campusImages.map((image, index) => (
                      <div key={index} className="relative group overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <img
                          src={image.url}
                          alt={image.title}
                          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                          <p className="text-white font-semibold text-center px-4 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                            {image.title}
                          </p>
                        </div>
                        <div className="absolute bottom-2 left-2 right-2 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                          <Badge className="bg-white/90 text-gray-800 text-xs transition-all duration-300">
                            {image.title}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg transition-all duration-300 hover:bg-blue-100">
                    <p className="text-sm text-blue-800">
                      <strong>Schedule a Visit:</strong> Contact the admissions office to arrange an in-person campus tour 
                      or request a virtual guided tour session.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-4 animate-fade-in">
              <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 transition-colors duration-300">
                    <Quote className="h-5 w-5" />
                    Student Reviews & Testimonials
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {studentReviews.map((review, index) => (
                      <Card key={index} className="border-l-4 border-l-blue-500 transition-all duration-300 hover:shadow-md hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <CardContent className="pt-4">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="font-semibold transition-colors duration-300">{review.name}</h4>
                              <p className="text-sm text-muted-foreground transition-colors duration-300">
                                {review.program} • {review.year}
                              </p>
                            </div>
                            <div className="flex items-center gap-1 transition-all duration-300 hover:scale-110">
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <span className="text-sm font-semibold">{review.rating}</span>
                            </div>
                          </div>
                          <p className="text-sm leading-relaxed transition-colors duration-300">{review.review}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-green-50 rounded-lg transition-all duration-300 hover:bg-green-100">
                    <p className="text-sm text-green-800">
                      <strong>Share Your Experience:</strong> Are you a current student or alumni? 
                      Contact us to share your testimonial and help future students make informed decisions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Contact Information with transitions */}
          <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
            <CardHeader>
              <CardTitle className="transition-colors duration-300">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 transition-all duration-300 hover:text-blue-600 hover:scale-105">
                  <Phone className="h-5 w-5 text-muted-foreground transition-colors duration-300" />
                  <span>{college.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2 transition-all duration-300 hover:text-green-600 hover:scale-105">
                  <Mail className="h-5 w-5 text-muted-foreground transition-colors duration-300" />
                  <span>{college.contact.email}</span>
                </div>
                <div className="flex items-center gap-2 transition-all duration-300 hover:text-purple-600 hover:scale-105">
                  <Globe className="h-5 w-5 text-muted-foreground transition-colors duration-300" />
                  <span>{college.contact.website}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons with enhanced transitions */}
          <div className="flex gap-4 pt-4 border-t transition-colors duration-300">
            {applyUrl && (
              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium group rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
                onClick={handleApplyNow}
              >
                Apply Now
                <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CollegeModal;
