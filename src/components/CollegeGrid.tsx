
import { useState } from 'react';
import { College, CollegeFilters } from '@/types/college';
import CollegeCard from './CollegeCard';
import CollegeModal from './CollegeModal';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LayoutGrid, List, X } from 'lucide-react';

interface CollegeGridProps {
  colleges: College[];
  filters: CollegeFilters;
  compareList: College[];
  onCompare: (college: College) => void;
  onRemoveFromCompare: (collegeId: string) => void;
}

const CollegeGrid = ({ 
  colleges, 
  filters, 
  compareList, 
  onCompare, 
  onRemoveFromCompare 
}: CollegeGridProps) => {
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
      {/* Results Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold font-sora">
            {filteredColleges.length} College{filteredColleges.length !== 1 ? 's' : ''} Found
          </h2>
          <p className="text-muted-foreground">
            Discover the perfect institution for your academic journey
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('grid')}
          >
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('list')}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Compare Bar */}
      {compareList.length > 0 && (
        <div className="sticky top-20 z-20 bg-primary text-primary-foreground rounded-lg p-4 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold">Compare ({compareList.length}):</span>
              {compareList.map((college) => (
                <Badge
                  key={college.id}
                  variant="secondary"
                  className="bg-white/20 text-white hover:bg-white/30 flex items-center gap-1"
                >
                  {college.name}
                  <X 
                    className="h-3 w-3 cursor-pointer" 
                    onClick={() => onRemoveFromCompare(college.id)}
                  />
                </Badge>
              ))}
            </div>
            <Button variant="secondary" size="sm">
              View Comparison
            </Button>
          </div>
        </div>
      )}

      {/* Colleges Grid/List */}
      {filteredColleges.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🎓</div>
          <h3 className="text-xl font-semibold mb-2">No colleges found</h3>
          <p className="text-muted-foreground">
            Try adjusting your filters or search criteria
          </p>
        </div>
      ) : (
        <div className={`
          ${viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
            : 'space-y-4'
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
                onCompare={onCompare}
              />
            </div>
          ))}
        </div>
      )}

      {/* College Modal */}
      {selectedCollege && (
        <CollegeModal
          college={selectedCollege}
          isOpen={!!selectedCollege}
          onClose={() => setSelectedCollege(null)}
          onCompare={onCompare}
        />
      )}
    </div>
  );
};

export default CollegeGrid;
