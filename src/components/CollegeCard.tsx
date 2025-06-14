
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { MapPin, Calendar, ArrowRight, Users, GraduationCap, Building2, ExternalLink } from 'lucide-react';
import { College } from '@/types/college';
import DynamicRating from './DynamicRating';

interface CollegeCardProps {
  college: College;
  onViewDetails: (college: College) => void;
}

const CollegeCard = ({ college, onViewDetails }: CollegeCardProps) => {
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

  const applyUrl = getCollegeWebsite(college.name);

  return (
    <Card className="group overflow-hidden bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl">
      {/* Image with Overlay */}
      <div className="relative overflow-hidden h-48">
        <img
          src={college.image}
          alt={college.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=400&fit=crop&q=80`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Type Badge */}
        <div className="absolute top-4 left-4">
          <Badge className="bg-white/95 text-slate-700 border-0 shadow-md backdrop-blur-sm hover:bg-white font-medium">
            <Building2 className="h-3 w-3 mr-1" />
            {college.type}
          </Badge>
        </div>
        
        {/* Rating Badge */}
        <div className="absolute top-4 right-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg border border-white/20">
            <DynamicRating rating={college.rating} size="sm" />
          </div>
        </div>
      </div>

      <CardHeader className="pb-3 space-y-3">
        <div className="space-y-2">
          <h3 className="text-xl font-bold font-sora line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 text-slate-900 dark:text-white">
            {college.name}
          </h3>
          
          <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3 text-blue-500" />
              <span className="font-medium">{college.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3 text-green-500" />
              <span className="font-medium">Est. {college.established}</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="py-0 space-y-4">
        <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
          {college.description}
        </p>

        {/* Student & Faculty Info */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-gray-700/50 rounded-lg p-2">
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            <span>{college.studentCount.toLocaleString()} students</span>
          </div>
          <div className="flex items-center gap-1">
            <GraduationCap className="h-3 w-3" />
            <span>{college.facultyCount} faculty</span>
          </div>
        </div>

        {/* Popular Programs */}
        <div className="space-y-2">
          <p className="text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wide">Popular Programs</p>
          <div className="flex flex-wrap gap-1.5">
            {college.courses.slice(0, 3).map((course) => (
              <Badge 
                key={course} 
                variant="outline" 
                className="text-xs hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-all duration-300 border-slate-200 dark:border-gray-600 text-slate-600 dark:text-slate-300 px-2 py-1"
              >
                {course}
              </Badge>
            ))}
            {college.courses.length > 3 && (
              <Badge variant="outline" className="text-xs border-slate-200 dark:border-gray-600 text-slate-500 dark:text-slate-400 px-2 py-1">
                +{college.courses.length - 3}
              </Badge>
            )}
          </div>
        </div>

        {/* Fees */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-3 border border-blue-100 dark:border-blue-800/50">
          <div className="text-xs text-slate-600 dark:text-slate-300 mb-1 font-medium">Annual Fees</div>
          <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {college.fees.currency} {college.fees.min.toLocaleString()} - {college.fees.max.toLocaleString()}
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-4 flex gap-3">
        {applyUrl && (
          <Button
            variant="outline"
            className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white border-0 font-medium group rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
            onClick={handleApplyNow}
          >
            Apply Now
            <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        )}
        
        <Button
          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium group rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
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
