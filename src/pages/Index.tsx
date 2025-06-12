
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FilterSidebar from '@/components/FilterSidebar';
import CollegeGrid from '@/components/CollegeGrid';
import ScholarshipsSection from '@/components/ScholarshipsSection';
import CareersSection from '@/components/CareersSection';
import DeveloperSection from '@/components/DeveloperSection';
import Footer from '@/components/Footer';
import LoadingAnimation from '@/components/LoadingAnimation';
import { colleges } from '@/data/colleges';
import { College, CollegeFilters } from '@/types/college';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [filterSidebarOpen, setFilterSidebarOpen] = useState(false);
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

  useEffect(() => {
    // Simulate realistic loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSearch = (query: string) => {
    setFilters({ ...filters, search: query });
  };

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <HeroSection onSearch={handleSearch} />
      
      <main className="relative" id="colleges">
        <div className="flex max-w-7xl mx-auto">
          {/* Filter Sidebar */}
          <div className="hidden lg:block w-80 shrink-0">
            <div className="sticky top-20 h-[calc(100vh-5rem)] p-4">
              <FilterSidebar
                filters={filters}
                onFiltersChange={setFilters}
                isOpen={filterSidebarOpen}
                onToggle={() => setFilterSidebarOpen(!filterSidebarOpen)}
              />
            </div>
          </div>

          {/* Mobile Filter Sidebar */}
          <div className="lg:hidden">
            <FilterSidebar
              filters={filters}
              onFiltersChange={setFilters}
              isOpen={filterSidebarOpen}
              onToggle={() => setFilterSidebarOpen(!filterSidebarOpen)}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1 p-4 lg:p-6">
            <CollegeGrid
              colleges={colleges}
              filters={filters}
            />
          </div>
        </div>
      </main>

      <CareersSection />
      <Footer />
    </div>
  );
};

export default Index;
