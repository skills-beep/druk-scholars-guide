import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
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
  GitCompare,
  Check
} from 'lucide-react';
import { College } from '@/types/college';
import { governmentScholarships } from '@/data/colleges';

interface CollegeModalProps {
  college: College;
  isOpen: boolean;
  onClose: () => void;
  onCompare?: (college: College) => void;
  isCompared?: boolean;
  canCompare?: boolean;
}

const CollegeModal = ({ college, isOpen, onClose, onCompare, isCompared = false, canCompare = true }: CollegeModalProps) => {
  const handleCompare = () => {
    if (onCompare && !isCompared && canCompare) {
      onCompare(college);
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold font-sora">
            {college.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Hero Image and Basic Info */}
          <div className="relative">
            <img
              src={college.image}
              alt={college.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {college.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-white/90">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span className="font-semibold">{college.rating}</span>
            </div>
          </div>

          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>{college.location}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-5 w-5" />
              <span>Est. {college.established}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Building className="h-5 w-5" />
              <span>{college.type}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-5 w-5" />
              <span>Deadline: {college.admissionDeadline}</span>
            </div>
          </div>

          <Separator />

          {/* Tabbed Content with responsive layout */}
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 h-auto">
              <TabsTrigger value="about" className="text-xs sm:text-sm px-2 py-2">About</TabsTrigger>
              <TabsTrigger value="courses" className="text-xs sm:text-sm px-2 py-2">Courses</TabsTrigger>
              <TabsTrigger value="admission" className="text-xs sm:text-sm px-2 py-2">Admission</TabsTrigger>
              <TabsTrigger value="scholarships" className="text-xs sm:text-sm px-2 py-2">Scholarships</TabsTrigger>
              <TabsTrigger value="tours" className="text-xs sm:text-sm px-2 py-2">Virtual Tour</TabsTrigger>
              <TabsTrigger value="reviews" className="text-xs sm:text-sm px-2 py-2">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    About {college.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {college.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Quick Facts</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Established in {college.established}</li>
                        <li>• Located in {college.location}</li>
                        <li>• Type: {college.type}</li>
                        <li>• Rating: {college.rating}/5.0</li>
                        <li>• {college.courses.length} Programs Offered</li>
                      </ul>
                    </div>
                    <div>
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

            <TabsContent value="courses" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    Academic Programs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {college.courses.map((course) => (
                      <Card key={course} className="border-l-4 border-l-primary">
                        <CardContent className="p-4">
                          <h4 className="font-semibold">{course}</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Comprehensive program with modern curriculum and practical training
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="admission" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      Fee Structure
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-2xl font-bold">
                        {college.fees.currency} {college.fees.min.toLocaleString()} - {college.fees.max.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">Annual tuition fees</div>
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <p className="text-sm">
                          <strong>Note:</strong> Fees may vary by program. Additional costs for accommodation, 
                          meals, and study materials may apply.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Admission Requirements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="font-semibold text-primary">
                        Application Deadline: {college.admissionDeadline}
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Eligibility Criteria:</h4>
                        <ul className="space-y-1 text-sm">
                          {college.eligibility.map((criteria, index) => (
                            <li key={index} className="flex items-start gap-2">
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

            <TabsContent value="scholarships" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    {college.name} Scholarships
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {college.scholarships.map((scholarship, index) => (
                      <Card key={index} className="border-l-4 border-l-green-500">
                        <CardContent className="pt-4">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold">{scholarship.name}</h4>
                            <Badge variant="secondary" className="bg-green-100 text-green-800">
                              {scholarship.amount}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{scholarship.criteria}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tours" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="h-5 w-5" />
                    Virtual Campus Tour
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {campusImages.map((image, index) => (
                      <div key={index} className="relative group overflow-hidden rounded-lg">
                        <img
                          src={image.url}
                          alt={image.title}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <p className="text-white font-semibold text-center px-4">
                            {image.title}
                          </p>
                        </div>
                        <div className="absolute bottom-2 left-2 right-2">
                          <Badge className="bg-white/90 text-gray-800 text-xs">
                            {image.title}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Schedule a Visit:</strong> Contact the admissions office to arrange an in-person campus tour 
                      or request a virtual guided tour session.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Quote className="h-5 w-5" />
                    Student Reviews & Testimonials
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {studentReviews.map((review, index) => (
                      <Card key={index} className="border-l-4 border-l-blue-500">
                        <CardContent className="pt-4">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="font-semibold">{review.name}</h4>
                              <p className="text-sm text-muted-foreground">
                                {review.program} • {review.year}
                              </p>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <span className="text-sm font-semibold">{review.rating}</span>
                            </div>
                          </div>
                          <p className="text-sm leading-relaxed">{review.review}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>Share Your Experience:</strong> Are you a current student or alumni? 
                      Contact us to share your testimonial and help future students make informed decisions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <span>{college.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span>{college.contact.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-muted-foreground" />
                  <span>{college.contact.website}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4 border-t">
            {onCompare && (
              <Button 
                variant={isCompared ? "default" : "outline"}
                className={`flex-1 ${isCompared ? "bg-green-500 hover:bg-green-600" : ""}`}
                onClick={handleCompare}
                disabled={isCompared || !canCompare}
              >
                {isCompared ? (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    Added to Compare
                  </>
                ) : (
                  <>
                    <GitCompare className="h-4 w-4 mr-2" />
                    Add to Compare
                  </>
                )}
              </Button>
            )}
            <Button className={onCompare ? "flex-1" : "w-full"}>
              Apply Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CollegeModal;
