
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Star, MapPin, Calendar, Users, ArrowRight } from 'lucide-react';
import { College } from '@/types/college';

interface CollegeCardProps {
  college: College;
  onViewDetails: (college: College) => void;
  onCompare: (college: College) => void;
}

const CollegeCard = ({ college, onViewDetails, onCompare }: CollegeCardProps) => {
  return (
    <Card className="group interactive-card rounded-2xl border-0 shadow-lg hover:shadow-2xl overflow-hidden bg-white">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={college.image}
          alt={college.name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop&q=80`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {college.tags.slice(0, 2).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-white/95 text-slate-700 hover:bg-white transition-all duration-300 backdrop-blur-sm"
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="absolute top-4 right-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-1 shadow-lg">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="text-sm font-semibold">{college.rating}</span>
          </div>
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="space-y-3">
          <h3 className="text-xl font-bold font-sora line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {college.name}
          </h3>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
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
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {college.description}
          </p>

          {/* Courses */}
          <div>
            <div className="flex flex-wrap gap-1">
              {college.courses.slice(0, 3).map((course) => (
                <Badge key={course} variant="outline" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
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
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100">
            <div className="text-xs text-muted-foreground mb-1">Annual Fees</div>
            <div className="text-lg font-bold text-primary">
              {college.fees.currency} {college.fees.min.toLocaleString()} - {college.fees.max.toLocaleString()}
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-3 flex gap-3">
        <Button
          variant="outline"
          className="flex-1 smooth-hover hover:bg-primary hover:text-primary-foreground"
          onClick={() => onCompare(college)}
        >
          Compare
        </Button>
        <Button
          className="flex-1 smooth-hover hover:shadow-lg group"
          onClick={() => onViewDetails(college)}
        >
          View Details
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CollegeCard;
