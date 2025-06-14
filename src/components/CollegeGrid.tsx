import { useState } from 'react';
import { College, CollegeFilters } from '@/types/college';
import CollegeCard from './CollegeCard';
import CollegeModal from './CollegeModal';
import RecentlyViewed from './RecentlyViewed';
import { useRecentlyViewed } from '@/hooks/useRecentlyViewed';

interface CollegeGridProps {
  colleges: College[];
  filters: CollegeFilters;
}

const CollegeGrid = ({ colleges, filters }: CollegeGridProps) => {
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  const { addToRecentlyViewed } = useRecentlyViewed();

  const handleViewDetails = (college: College) => {
    console.log('CollegeGrid: View Details clicked for:', college.name);
    console.log('CollegeGrid: Setting selectedCollege to:', college);
    setSelectedCollege(college);
    addToRecentlyViewed(college);
  };

  const handleCloseModal = () => {
    console.log('CollegeGrid: Closing modal');
    setSelectedCollege(null);
  };

  // Filter colleges based on search criteria
  const filteredColleges = colleges.filter(college => {
    const matchesSearch = filters.search === '' || 
      college.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      college.location.toLowerCase().includes(filters.search.toLowerCase()) ||
      college.courses.some(course => course.toLowerCase().includes(filters.search.toLowerCase()));

    const matchesLocation = filters.location.length === 0 || 
      filters.location.includes(college.location);

    const matchesCourseType = filters.courseType.length === 0 || 
      filters.courseType.some(type => college.courses.some(course => course.toLowerCase().includes(type.toLowerCase())));

    const matchesFeeRange = college.fees.min <= filters.feeRange[1] && college.fees.max >= filters.feeRange[0];

    const matchesRating = college.rating >= filters.rating;

    const matchesCollegeType = filters.collegeType.length === 0 || 
      filters.collegeType.includes(college.type);

    const matchesAccreditation = filters.accreditation.length === 0 || 
      filters.accreditation.some(acc => college.accreditation?.includes(acc));

    const matchesDegreeProgram = filters.degreeProgram === '' || 
      college.courses.some(course => course.toLowerCase().includes(filters.degreeProgram.toLowerCase()));

    return matchesSearch && matchesLocation && matchesCourseType && 
           matchesFeeRange && matchesRating && matchesCollegeType && 
           matchesAccreditation && matchesDegreeProgram;
  });

  // Sort colleges
  const sortedColleges = [...filteredColleges].sort((a, b) => {
    switch (filters.sortBy) {
      case 'alphabetical':
        return a.name.localeCompare(b.name);
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.established - a.established;
      case 'popularity':
      default:
        return b.rating - a.rating; // Default to rating for popularity
    }
  });

  return (
    <div className="space-y-6">
      <RecentlyViewed onViewCollege={handleViewDetails} />
      
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
          {sortedColleges.length} Colleges Found
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {sortedColleges.map((college) => (
          <CollegeCard
            key={college.id}
            college={college}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>

      {sortedColleges.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No colleges match your current filters. Try adjusting your search criteria.
          </p>
        </div>
      )}

      {selectedCollege && (
        <CollegeModal
          college={selectedCollege}
          isOpen={!!selectedCollege}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default CollegeGrid;
