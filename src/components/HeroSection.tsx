
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, GraduationCap, BookOpen, Users } from 'lucide-react';

interface HeroSectionProps {
  onSearch: (query: string) => void;
}

const HeroSection = ({ onSearch }: HeroSectionProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
    document.getElementById('colleges')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-blue-300/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-purple-300/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-60 right-40 w-8 h-8 bg-yellow-300/20 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold font-sora text-white mb-4">
              <span className="inline-block animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Discover Your
              </span>
              <br />
              <span className="text-yellow-300 inline-block animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Perfect College
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Explore the finest educational institutions in the Land of the Thunder Dragon. 
              Find your path to academic excellence and career success.
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="relative flex-1 group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5 transition-colors group-focus-within:text-yellow-500" />
              <Input
                type="text"
                placeholder="Search colleges, courses, or locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="pl-12 h-16 text-lg rounded-2xl border-2 border-white/20 bg-white/95 backdrop-blur-sm focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 hover:bg-white"
              />
            </div>
            <Button
              onClick={handleSearch}
              size="lg"
              className="h-16 px-8 rounded-2xl font-semibold bg-yellow-500 hover:bg-yellow-400 text-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Search className="mr-2 h-5 w-5" />
              Search Colleges
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '1s' }}>
              <GraduationCap className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
              <div className="text-3xl font-bold text-yellow-300 mb-2">15+</div>
              <div className="text-blue-100">Colleges & Universities</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <BookOpen className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
              <div className="text-3xl font-bold text-yellow-300 mb-2">100+</div>
              <div className="text-blue-100">Academic Programs</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '1.4s' }}>
              <Users className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
              <div className="text-3xl font-bold text-yellow-300 mb-2">5000+</div>
              <div className="text-blue-100">Students Enrolled</div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="animate-fade-in" style={{ animationDelay: '1.6s' }}>
            <p className="text-lg text-blue-200 mb-6">
              Join thousands of students who found their perfect academic match
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Browse Programs
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Compare Colleges
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
