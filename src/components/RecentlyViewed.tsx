
import { useEffect, useState } from 'react';
import { College } from '@/types/college';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, X, Eye } from 'lucide-react';

interface RecentlyViewedProps {
  onViewCollege: (college: College) => void;
}

const RecentlyViewed = ({ onViewCollege }: RecentlyViewedProps) => {
  const [recentColleges, setRecentColleges] = useState<College[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('recentlyViewed');
    if (stored) {
      setRecentColleges(JSON.parse(stored));
    }
  }, []);

  const clearRecent = () => {
    localStorage.removeItem('recentlyViewed');
    setRecentColleges([]);
  };

  if (recentColleges.length === 0) return null;

  return (
    <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border-0 shadow-lg rounded-2xl mb-6">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-slate-800 dark:text-white">
            <Clock className="h-5 w-5 text-blue-600" />
            Recently Viewed
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={clearRecent}
            className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {recentColleges.slice(0, 5).map((college) => (
            <div
              key={college.id}
              className="flex-shrink-0 w-48 p-3 bg-slate-50 dark:bg-gray-700/50 rounded-xl cursor-pointer hover:bg-slate-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
              onClick={() => onViewCollege(college)}
            >
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={college.image}
                  alt={college.name}
                  className="w-8 h-8 rounded-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=100&h=100&fit=crop&q=80`;
                  }}
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-white truncate">
                    {college.name}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {college.location}
                  </p>
                </div>
              </div>
              <Badge variant="outline" className="text-xs">
                <Eye className="h-3 w-3 mr-1" />
                View
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentlyViewed;
