
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
  Building
} from 'lucide-react';
import { College } from '@/types/college';
import { governmentScholarships } from '@/data/colleges';

interface CollegeModalProps {
  college: College;
  isOpen: boolean;
  onClose: () => void;
  onCompare?: (college: College) => void;
}

const CollegeModal = ({ college, isOpen, onClose, onCompare }: CollegeModalProps) => {
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
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto">
              <TabsTrigger value="about" className="text-xs sm:text-sm px-2 py-2">About</TabsTrigger>
              <TabsTrigger value="courses" className="text-xs sm:text-sm px-2 py-2">Courses</TabsTrigger>
              <TabsTrigger value="admission" className="text-xs sm:text-sm px-2 py-2">Admission</TabsTrigger>
              <TabsTrigger value="scholarships" className="text-xs sm:text-sm px-2 py-2">Scholarships</TabsTrigger>
              <TabsTrigger value="careers" className="text-xs sm:text-sm px-2 py-2">Careers</TabsTrigger>
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
              {/* College-specific scholarships */}
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

              {/* External scholarships */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Available External Scholarships
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4">
                    {governmentScholarships.slice(0, 3).map((scholarship, index) => (
                      <Card key={index} className="border-l-4 border-l-blue-500">
                        <CardContent className="pt-4">
                          <div className="space-y-2">
                            <div className="flex justify-between items-start">
                              <h4 className="font-semibold text-sm">{scholarship.name}</h4>
                              <Badge variant="outline" className="text-xs">
                                {scholarship.provider.includes('Loden') ? 'Loden Foundation' : 'Government'}
                              </Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">{scholarship.criteria}</p>
                            <div className="text-xs font-medium text-blue-600">
                              Coverage: {scholarship.coverage}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              <strong>Deadline:</strong> {scholarship.deadline}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Apply through:</strong> Visit the scholarships page for complete details and application processes.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="careers" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Career Opportunities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Graduates from {college.name} have excellent career prospects in both government and private sectors.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {college.careerOpportunities.map((career, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-medium">{career.split(' - ')[0]}</h4>
                            {career.includes(' - ') && (
                              <p className="text-sm text-muted-foreground">
                                {career.split(' - ')[1]}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Employment Support</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Career counseling and guidance</li>
                        <li>• Industry internship programs</li>
                        <li>• Job placement assistance</li>
                        <li>• Alumni networking opportunities</li>
                      </ul>
                    </div>
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
                variant="outline" 
                className="flex-1"
                onClick={() => onCompare(college)}
              >
                Add to Compare
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
