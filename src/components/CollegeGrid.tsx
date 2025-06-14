
import { useState } from 'react';
import { College, CollegeFilters } from '@/types/college';
import CollegeCard from './CollegeCard';
import CollegeModal from './CollegeModal';
import RecentlyViewed from './RecentlyViewed';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LayoutGrid, List, TrendingUp } from 'lucide-react';
import { useRecentlyViewed } from '@/hooks/useRecentlyViewed';

interface CollegeGridProps {
  colleges: College[];
  filters: CollegeFilters;
}

const CollegeGrid = ({ colleges, filters }: CollegeGridProps) => {
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const { addToRecentlyViewed } = useRecentlyViewed();

  const handleViewDetails = (college: College) => {
    addToRecentlyViewed(college);
    setSelectedCollege(college);
  };

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

    const matchesAccreditation = filters.accreditation.length === 0 ||
      filters.accreditation.includes(college.accreditation);

    const matchesDegreeProgram = !filters.degreeProgram ||
      college.programs.undergraduate.some(program => 
        program.toLowerCase().includes(filters.degreeProgram.toLowerCase())
      ) ||
      college.programs.postgraduate.some(program => 
        program.toLowerCase().includes(filters.degreeProgram.toLowerCase())
      ) ||
      college.programs.doctorate.some(program => 
        program.toLowerCase().includes(filters.degreeProgram.toLowerCase())
      ) ||
      (college.programs.diploma && college.programs.diploma.some(program => 
        program.toLowerCase().includes(filters.degreeProgram.toLowerCase())
      ));

    return matchesSearch && matchesLocation && matchesCourseType && 
           matchesFeeRange && matchesRating && matchesCollegeType && 
           matchesAccreditation && matchesDegreeProgram;
  });

  // Sort colleges based on selected criteria
  const sortedColleges = [...filteredColleges].sort((a, b) => {
    switch (filters.sortBy) {
      case 'alphabetical':
        return a.name.localeCompare(b.name);
      case 'newest':
        return b.established - a.established;
      case 'rating':
        return b.rating - a.rating;
      case 'popularity':
      default:
        return (b.popularity || b.studentCount) - (a.popularity || a.studentCount);
    }
  });

  return (
    <div className="space-y-6">
      {/* Recently Viewed Section */}
      <RecentlyViewed onViewCollege={handleViewDetails} />

      {/* Enhanced Results Header with transitions */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-white/20 dark:border-gray-700/50 transition-all duration-500 hover:shadow-xl hover:scale-[1.01]">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-bold font-sora text-slate-900 dark:text-white transition-colors duration-300">
                {sortedColleges.length} College{sortedColleges.length !== 1 ? 's' : ''} Found
              </h2>
              <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 border-0 animate-pulse">
                <TrendingUp className="h-3 w-3 mr-1" />
                Live Results
              </Badge>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-lg transition-colors duration-300">
              Discover exceptional educational opportunities in Bhutan
            </p>
            {filters.sortBy !== 'popularity' && (
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Sorted by: {filters.sortBy === 'alphabetical' ? 'A-Z' : 
                          filters.sortBy === 'newest' ? 'Newest First' : 
                          filters.sortBy === 'rating' ? 'Highest Rated' : 'Most Popular'}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-600 dark:text-slate-300 font-medium transition-colors duration-300">View:</span>
            <div className="flex items-center bg-slate-100 dark:bg-gray-700 rounded-xl p-1 transition-colors duration-300">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className={`rounded-lg transition-all duration-300 ${
                  viewMode === 'grid' 
                    ? 'bg-white dark:bg-gray-600 shadow-md scale-105 transform' 
                    : 'hover:bg-white/50 dark:hover:bg-gray-600/50 hover:scale-105'
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
                    ? 'bg-white dark:bg-gray-600 shadow-md scale-105 transform' 
                    : 'hover:bg-white/50 dark:hover:bg-gray-600/50 hover:scale-105'
                }`}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Colleges Grid/List with smooth transitions */}
      {sortedColleges.length === 0 ? (
        <div className="text-center py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-2xl transition-all duration-500 animate-fade-in">
          <div className="text-8xl mb-6 animate-bounce">🎓</div>
          <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white transition-colors duration-300">No colleges found</h3>
          <p className="text-slate-600 dark:text-slate-300 text-lg transition-colors duration-300">
            Try adjusting your filters or search criteria to discover more options
          </p>
        </div>
      ) : (
        <div className={`
          transition-all duration-500 ease-out
          ${viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' 
            : 'space-y-6'
          }
        `}>
          {sortedColleges.map((college, index) => (
            <div
              key={college.id}
              className="animate-fade-in transition-all duration-300 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CollegeCard
                college={college}
                onViewDetails={handleViewDetails}
              />
            </div>
          ))}
        </div>
      )}

      {/* Modal with transition */}
      {selectedCollege && (
        <CollegeModal
          college={selectedCollege}
          isOpen={!!selectedCollege}
          onClose={() => setSelectedCollege(null)}
        />
      )}
    </div>
  );
};

export default CollegeGrid;
