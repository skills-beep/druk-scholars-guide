
import { useState } from 'react';
import { College, CollegeFilters } from '@/types/college';
import CollegeCard from './CollegeCard';
import CollegeModal from './CollegeModal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LayoutGrid, List, TrendingUp } from 'lucide-react';

interface CollegeGridProps {
  colleges: College[];
  filters: CollegeFilters;
  onCompareCollege?: (college: College) => void;
  comparedColleges?: College[];
}

const CollegeGrid = ({ colleges, filters, onCompareCollege, comparedColleges = [] }: CollegeGridProps) => {
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredColleges = colleges.filter((college) => {
    const matchesSearch = !filters.search || 
      college.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      college.location.toLowerCase().includes(filters.search.toLowerCase()) ||
      college.courses.some(course => 
        course.toLowerCase().includes(filters.search.toLowerCase())
      );

    const matchesLocation = filters.location.length === 0 || 
      filters.location.includes(college.location);

    const matchesCourseType = filters.courseType.length === 0 ||
      filters.courseType.some(type => 
        college.courses.some(course => 
          course.toLowerCase().includes(type.toLowerCase())
        )
      );

    const matchesFeeRange = college.fees.min <= filters.feeRange[1] && 
      college.fees.max >= filters.feeRange[0];

    const matchesRating = college.rating >= filters.rating;

    const matchesCollegeType = filters.collegeType.length === 0 ||
      filters.collegeType.includes(college.type);

    return matchesSearch && matchesLocation && matchesCourseType && 
           matchesFeeRange && matchesRating && matchesCollegeType;
  });

  return (
    <div className="space-y-6">
      {/* Enhanced Results Header */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-700/50">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-bold font-sora text-slate-900 dark:text-white">
                {filteredColleges.length} College{filteredColleges.length !== 1 ? 's' : ''} Found
              </h2>
              <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 border-0">
                <TrendingUp className="h-3 w-3 mr-1" />
                Live Results
              </Badge>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-lg">
              Discover exceptional educational opportunities in Bhutan
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">View:</span>
            <div className="flex items-center bg-slate-100 dark:bg-gray-700 rounded-xl p-1">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className={`rounded-lg transition-all duration-300 ${
                  viewMode === 'grid' 
                    ? 'bg-white dark:bg-gray-600 shadow-md scale-105' 
                    : 'hover:bg-white/50 dark:hover:bg-gray-600/50'
                }`}
              >
                <LayoutGrid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className={`rounded-lg transition-all duration-300 ${
                  viewMode === 'list' 
                    ? 'bg-white dark:bg-gray-600 shadow-md scale-105' 
                    : 'hover:bg-white/50 dark:hover:bg-gray-600/50'
                }`}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Colleges Grid/List */}
      {filteredColleges.length === 0 ? (
        <div className="text-center py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl">
          <div className="text-8xl mb-6">🎓</div>
          <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">No colleges found</h3>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            Try adjusting your filters or search criteria to discover more options
          </p>
        </div>
      ) : (
        <div className={`
          ${viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' 
            : 'space-y-6'
          }
        `}>
          {filteredColleges.map((college, index) => (
            <div
              key={college.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CollegeCard
                college={college}
                onViewDetails={setSelectedCollege}
                onCompare={onCompareCollege}
                isCompared={comparedColleges.some(c => c.id === college.id)}
                canCompare={comparedColleges.length < 3}
              />
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedCollege && (
        <CollegeModal
          college={selectedCollege}
          isOpen={!!selectedCollege}
          onClose={() => setSelectedCollege(null)}
          onCompare={onCompareCollege}
          isCompared={comparedColleges.some(c => c.id === selectedCollege.id)}
          canCompare={comparedColleges.length < 3}
        />
      )}
    </div>
  );
};

export default CollegeGrid;
