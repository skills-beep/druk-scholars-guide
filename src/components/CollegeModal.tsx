
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
  Building,
  ExternalLink
} from 'lucide-react';
import { College } from '@/types/college';

interface CollegeModalProps {
  college: College;
  isOpen: boolean;
  onClose: () => void;
}

const CollegeModal = ({ college, isOpen, onClose }: CollegeModalProps) => {
  console.log('CollegeModal: Rendering with isOpen:', isOpen, 'college:', college?.name);

  if (!college) {
    console.log('CollegeModal: No college provided');
    return null;
  }

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
    
    return websiteMap[collegeName] || college.contact?.website || college.applyUrl || null;
  };

  const handleApplyNow = () => {
    console.log('CollegeModal: Apply Now clicked for:', college.name);
    const website = getCollegeWebsite(college.name);
    if (website) {
      window.open(website, '_blank', 'noopener,noreferrer');
    } else {
      console.warn(`No website found for ${college.name}`);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {college.name}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Detailed information about {college.name} including programs, admission requirements, and facilities.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Hero Image and Basic Info */}
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={college.image}
              alt={college.name}
              className="w-full h-64 object-cover"
            />
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {college.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-white/95 backdrop-blur-sm">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
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

          {/* Tabbed Content */}
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
              <TabsTrigger value="about" className="text-xs sm:text-sm px-2 py-2">About</TabsTrigger>
              <TabsTrigger value="courses" className="text-xs sm:text-sm px-2 py-2">Courses</TabsTrigger>
              <TabsTrigger value="admission" className="text-xs sm:text-sm px-2 py-2">Admission</TabsTrigger>
              <TabsTrigger value="scholarships" className="text-xs sm:text-sm px-2 py-2">Scholarships</TabsTrigger>
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
                    <div className="p-3 rounded-lg bg-slate-50 dark:bg-gray-800">
                      <h4 className="font-semibold mb-2">Quick Facts</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Established in {college.established}</li>
                        <li>• Located in {college.location}</li>
                        <li>• Type: {college.type}</li>
                        <li>• Rating: {college.rating}/5.0</li>
                        <li>• {college.courses.length} Programs Offered</li>
                      </ul>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-50 dark:bg-gray-800">
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
                    {college.courses.map((course, index) => (
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
            <Button
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium group rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
              onClick={handleApplyNow}
            >
              Apply Now
              <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CollegeModal;
