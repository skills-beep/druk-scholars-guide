
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Star, Calendar, Clock, ExternalLink, Eye } from 'lucide-react';
import { College } from '@/types/college';

interface CollegeCardProps {
  college: College;
  onViewDetails: (college: College) => void;
}

const CollegeCard = ({ college, onViewDetails }: CollegeCardProps) => {
  const handleViewDetails = () => {
    console.log('CollegeCard: View Details button clicked for', college.name);
    onViewDetails(college);
  };

  const handleVisitWebsite = () => {
    console.log('CollegeCard: Visit Website button clicked for', college.name);
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
    
    const website = websiteMap[college.name] || college.contact?.website || college.applyUrl;
    if (website) {
      window.open(website, '_blank', 'noopener,noreferrer');
    } else {
      console.warn(`No website found for ${college.name}`);
    }
  };

  return (
    <Card className="group h-full bg-white dark:bg-gray-900 backdrop-blur-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-2xl overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={college.image}
          alt={college.name}
          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=200&fit=crop&q=80`;
          }}
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {college.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm text-xs text-gray-800 dark:text-gray-200">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="absolute top-4 right-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
          <Star className="h-3 w-3 text-yellow-500 fill-current" />
          <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">{college.rating}</span>
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold text-slate-800 dark:text-slate-100 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {college.name}
        </CardTitle>
        <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{college.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>Est. {college.established}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
          {college.description}
        </p>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Annual Fees</span>
            <span className="text-sm font-bold text-green-600 dark:text-green-400">
              {college.fees.currency} {college.fees.min.toLocaleString()} - {college.fees.max.toLocaleString()}
            </span>
          </div>
          
          <div className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400">
            <Clock className="h-4 w-4" />
            <span>Deadline: {college.admissionDeadline}</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Popular Programs</h4>
          <div className="flex flex-wrap gap-1">
            {college.courses.slice(0, 3).map((course) => (
              <Badge key={course} variant="outline" className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700">
                {course}
              </Badge>
            ))}
            {college.courses.length > 3 && (
              <Badge variant="outline" className="text-xs bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600">
                +{college.courses.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button
            onClick={handleViewDetails}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium group rounded-xl transition-all duration-300 hover:scale-105"
          >
            <Eye className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            View Details
          </Button>
          <Button
            onClick={handleVisitWebsite}
            variant="outline"
            className="border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all duration-300 hover:scale-105 rounded-xl"
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CollegeCard;
