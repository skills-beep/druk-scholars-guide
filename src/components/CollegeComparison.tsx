
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  Star, 
  MapPin, 
  Calendar, 
  DollarSign, 
  GraduationCap,
  Award,
  Phone,
  Mail,
  Globe,
  X
} from 'lucide-react';
import { College } from '@/types/college';

interface CollegeComparisonProps {
  colleges: College[];
  isOpen: boolean;
  onClose: () => void;
  onRemoveCollege: (collegeId: string) => void;
}

const CollegeComparison = ({ colleges, isOpen, onClose, onRemoveCollege }: CollegeComparisonProps) => {
  if (colleges.length === 0) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Compare Colleges ({colleges.length})
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {colleges.map((college) => (
              <Card key={college.id} className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 z-10"
                  onClick={() => onRemoveCollege(college.id)}
                >
                  <X className="h-4 w-4" />
                </Button>

                <CardHeader className="pb-3">
                  <div className="relative">
                    <img
                      src={college.image}
                      alt={college.name}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <div className="absolute top-2 left-2">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <span className="text-xs font-semibold">{college.rating}</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{college.name}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Basic Info */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {college.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      Est. {college.established}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <GraduationCap className="h-4 w-4" />
                      {college.type}
                    </div>
                  </div>

                  <Separator />

                  {/* Fees */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="h-4 w-4" />
                      <span className="text-sm font-medium">Annual Fees</span>
                    </div>
                    <div className="text-lg font-semibold">
                      {college.fees.currency} {college.fees.min.toLocaleString()} - {college.fees.max.toLocaleString()}
                    </div>
                  </div>

                  <Separator />

                  {/* Courses */}
                  <div>
                    <h4 className="text-sm font-medium mb-2">Courses ({college.courses.length})</h4>
                    <div className="flex flex-wrap gap-1">
                      {college.courses.slice(0, 4).map((course) => (
                        <Badge key={course} variant="outline" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                      {college.courses.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{college.courses.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Separator />

                  {/* Scholarships */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="h-4 w-4" />
                      <span className="text-sm font-medium">Scholarships</span>
                    </div>
                    <div className="space-y-1">
                      {college.scholarships.slice(0, 2).map((scholarship, index) => (
                        <div key={index} className="text-xs">
                          <div className="font-medium">{scholarship.name}</div>
                          <div className="text-muted-foreground">{scholarship.amount}</div>
                        </div>
                      ))}
                      {college.scholarships.length > 2 && (
                        <div className="text-xs text-muted-foreground">
                          +{college.scholarships.length - 2} more scholarships
                        </div>
                      )}
                    </div>
                  </div>

                  <Separator />

                  {/* Contact */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Phone className="h-3 w-3" />
                      {college.contact.phone}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Mail className="h-3 w-3" />
                      {college.contact.email}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Globe className="h-3 w-3" />
                      {college.contact.website}
                    </div>
                  </div>

                  <Button className="w-full mt-4" size="sm">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {colleges.length < 3 && (
            <div className="text-center py-8 border-2 border-dashed border-muted rounded-lg">
              <GraduationCap className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground">
                Add more colleges to compare (up to 3 total)
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CollegeComparison;
