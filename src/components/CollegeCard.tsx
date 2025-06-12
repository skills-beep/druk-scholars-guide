
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Star, MapPin, Calendar, Users } from 'lucide-react';
import { College } from '@/types/college';

interface CollegeCardProps {
  college: College;
  onViewDetails: (college: College) => void;
  onCompare: (college: College) => void;
}

const CollegeCard = ({ college, onViewDetails, onCompare }: CollegeCardProps) => {
  return (
    <Card className="group hover-lift rounded-xl border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={college.image}
          alt={college.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {college.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-white/90 text-slate-700 hover:bg-white"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div className="absolute top-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="text-sm font-semibold">{college.rating}</span>
          </div>
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="space-y-2">
          <h3 className="text-xl font-bold font-sora line-clamp-2 group-hover:text-primary transition-colors">
            {college.name}
          </h3>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {college.location}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              Est. {college.established}
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="py-3">
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground line-clamp-2">
            {college.description}
          </p>

          {/* Courses */}
          <div>
            <div className="flex flex-wrap gap-1">
              {college.courses.slice(0, 3).map((course) => (
                <Badge key={course} variant="outline" className="text-xs">
                  {course}
                </Badge>
              ))}
              {college.courses.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{college.courses.length - 3} more
                </Badge>
              )}
            </div>
          </div>

          {/* Fees */}
          <div className="bg-muted/50 rounded-lg p-3">
            <div className="text-sm text-muted-foreground">Annual Fees</div>
            <div className="text-lg font-semibold">
              {college.fees.currency} {college.fees.min.toLocaleString()} - {college.fees.max.toLocaleString()}
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-3 flex gap-2">
        <Button
          variant="outline"
          className="flex-1"
          onClick={() => onCompare(college)}
        >
          Compare
        </Button>
        <Button
          className="flex-1"
          onClick={() => onViewDetails(college)}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CollegeCard;
