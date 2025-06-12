
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
  Award
} from 'lucide-react';
import { College } from '@/types/college';

interface CollegeModalProps {
  college: College;
  isOpen: boolean;
  onClose: () => void;
  onCompare: (college: College) => void;
}

const CollegeModal = ({ college, isOpen, onClose, onCompare }: CollegeModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>{college.location}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-5 w-5" />
              <span>Established {college.established}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <GraduationCap className="h-5 w-5" />
              <span>{college.type}</span>
            </div>
          </div>

          <Separator />

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About</h3>
            <p className="text-muted-foreground leading-relaxed">
              {college.description}
            </p>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Courses Offered</h3>
            <div className="flex flex-wrap gap-2">
              {college.courses.map((course) => (
                <Badge key={course} variant="outline">
                  {course}
                </Badge>
              ))}
            </div>
          </div>

          {/* Fees and Admission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Fees Structure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-2xl font-bold">
                    {college.fees.currency} {college.fees.min.toLocaleString()} - {college.fees.max.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Per year</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Admission Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="font-semibold">Deadline: {college.admissionDeadline}</div>
                  <div className="text-sm text-muted-foreground">
                    <div className="font-medium mb-1">Eligibility:</div>
                    <ul className="list-disc list-inside space-y-1">
                      {college.eligibility.map((criteria, index) => (
                        <li key={index}>{criteria}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Scholarships */}
          {college.scholarships.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Award className="h-5 w-5" />
                Scholarships & Financial Aid
              </h3>
              <div className="space-y-3">
                {college.scholarships.map((scholarship, index) => (
                  <Card key={index}>
                    <CardContent className="pt-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{scholarship.name}</h4>
                        <Badge variant="secondary">{scholarship.amount}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{scholarship.criteria}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
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
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4 border-t">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => onCompare(college)}
            >
              Add to Compare
            </Button>
            <Button className="flex-1">
              Apply Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CollegeModal;
