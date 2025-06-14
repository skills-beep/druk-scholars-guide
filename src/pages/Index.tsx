
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import FilterSidebar from '@/components/FilterSidebar';
import CollegeGrid from '@/components/CollegeGrid';
import CollegeComparison from '@/components/CollegeComparison';
import Footer from '@/components/Footer';
import LoadingAnimation from '@/components/LoadingAnimation';
import { colleges } from '@/data/colleges';
import { College, CollegeFilters } from '@/types/college';
import { Button } from '@/components/ui/button';
import { Compare } from 'lucide-react';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState<CollegeFilters>({
    search: '',
    location: [],
    courseType: [],
    feeRange: [0, 200000],
    rating: 0,
    collegeType: []
  });
  const [comparedColleges, setComparedColleges] = useState<College[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

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

  const handleCompareCollege = (college: College) => {
    if (comparedColleges.length >= 3) {
      return; // Maximum 3 colleges for comparison
    }
    
    if (!comparedColleges.find(c => c.id === college.id)) {
      setComparedColleges([...comparedColleges, college]);
    }
  };

  const handleRemoveFromComparison = (collegeId: string) => {
    setComparedColleges(comparedColleges.filter(c => c.id !== collegeId));
  };

  const handleOpenComparison = () => {
    setShowComparison(true);
  };

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <HeroSection />
        <StatsSection />
        
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-80 shrink-0">
              <FilterSidebar filters={filters} onFiltersChange={setFilters} />
            </aside>
            
            <div className="flex-1 space-y-6">
              {/* Comparison Bar */}
              {comparedColleges.length > 0 && (
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-white/20 dark:border-gray-700/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Compare className="h-5 w-5 text-blue-600" />
                      <span className="font-medium">
                        {comparedColleges.length} college{comparedColleges.length !== 1 ? 's' : ''} selected for comparison
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        onClick={handleOpenComparison}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        Compare Now
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setComparedColleges([])}
                      >
                        Clear All
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              <CollegeGrid 
                colleges={colleges} 
                filters={filters}
                onCompareCollege={handleCompareCollege}
                comparedColleges={comparedColleges}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* College Comparison Modal */}
      <CollegeComparison
        colleges={comparedColleges}
        isOpen={showComparison}
        onClose={() => setShowComparison(false)}
        onRemoveCollege={handleRemoveFromComparison}
      />
    </div>
  );
};

export default Index;
