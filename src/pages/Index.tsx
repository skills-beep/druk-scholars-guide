
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FilterSidebar from '@/components/FilterSidebar';
import CollegeGrid from '@/components/CollegeGrid';
import { colleges } from '@/data/colleges';
import { College, CollegeFilters } from '@/types/college';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [filterSidebarOpen, setFilterSidebarOpen] = useState(false);
  const [compareList, setCompareList] = useState<College[]>([]);
  const [filters, setFilters] = useState<CollegeFilters>({
    search: '',
    location: [],
    courseType: [],
    feeRange: [0, 400000],
    rating: 0,
    collegeType: []
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSearch = (query: string) => {
    setFilters({ ...filters, search: query });
  };

  const handleCompare = (college: College) => {
    if (compareList.find(c => c.id === college.id)) {
      return; // Already in compare list
    }
    
    if (compareList.length >= 3) {
      // Remove the first item if we have 3 items
      setCompareList([...compareList.slice(1), college]);
    } else {
      setCompareList([...compareList, college]);
    }
  };

  const handleRemoveFromCompare = (collegeId: string) => {
    setCompareList(compareList.filter(c => c.id !== collegeId));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <HeroSection onSearch={handleSearch} />
      
      <main className="relative" id="colleges">
        <div className="flex">
          {/* Filter Sidebar */}
          <div className="hidden md:block w-80 shrink-0">
            <div className="sticky top-20 h-[calc(100vh-5rem)]">
              <FilterSidebar
                filters={filters}
                onFiltersChange={setFilters}
                isOpen={filterSidebarOpen}
                onToggle={() => setFilterSidebarOpen(!filterSidebarOpen)}
              />
            </div>
          </div>

          {/* Mobile Filter Sidebar */}
          <div className="md:hidden">
            <FilterSidebar
              filters={filters}
              onFiltersChange={setFilters}
              isOpen={filterSidebarOpen}
              onToggle={() => setFilterSidebarOpen(!filterSidebarOpen)}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 md:p-8">
            <CollegeGrid
              colleges={colleges}
              filters={filters}
              compareList={compareList}
              onCompare={handleCompare}
              onRemoveFromCompare={handleRemoveFromCompare}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
