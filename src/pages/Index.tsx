import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import FilterSidebar from '@/components/FilterSidebar';
import CollegeGrid from '@/components/CollegeGrid';
import CollegeRecommendations from '@/components/CollegeRecommendations';
import Footer from '@/components/Footer';
import LoadingAnimation from '@/components/LoadingAnimation';
import { colleges } from '@/data/colleges';
import { College, CollegeFilters } from '@/types/college';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [filterSidebarOpen, setFilterSidebarOpen] = useState(false);
  const [filters, setFilters] = useState<CollegeFilters>({
    search: '',
    location: [],
    courseType: [],
    feeRange: [0, 500000], // Increased to include all colleges
    rating: 0,
    collegeType: [],
    accreditation: [],
    degreeProgram: '',
    sortBy: 'popularity'
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (query: string) => {
    setFilters(prev => ({ ...prev, search: query }));
  };

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation />
      
      <main>
        <HeroSection onSearch={handleSearch} />
        <StatsSection />
        
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-80 shrink-0">
              <FilterSidebar 
                filters={filters} 
                onFiltersChange={setFilters}
                isOpen={filterSidebarOpen}
                onToggle={() => setFilterSidebarOpen(!filterSidebarOpen)}
              />
            </aside>
            
            <div className="flex-1 space-y-6">
              <CollegeRecommendations onViewCollege={(college) => {
                console.log('Opening college details from recommendations:', college.name);
                const collegeGrid = document.getElementById('colleges');
                if (collegeGrid) {
                  collegeGrid.scrollIntoView({ behavior: 'smooth' });
                }
                // You can add logic here to open the college modal directly
              }} />
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <CollegeGrid 
                  colleges={colleges} 
                  filters={filters}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
