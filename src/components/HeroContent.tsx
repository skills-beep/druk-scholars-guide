
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ArrowRight, Sparkles, Star, MapPin } from 'lucide-react';

interface HeroContentProps {
  onSearch: (query: string) => void;
}

const HeroContent = ({ onSearch }: HeroContentProps) => {
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
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="space-y-8 md:space-y-12">
        {/* Enhanced Main Heading */}
        <div className="space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-fade-in">
            <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-white/90 text-sm font-medium">Discover Excellence in Education</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-sora text-white leading-tight animate-fade-in drop-shadow-2xl" style={{ animationDelay: '0.2s' }}>
            Find Your
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent drop-shadow-lg mt-2">
              Perfect College
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 max-w-4xl mx-auto leading-relaxed animate-fade-in font-light" style={{ animationDelay: '0.4s' }}>
            Explore exceptional educational opportunities and unlock your potential with 
            <span className="font-semibold text-yellow-300"> comprehensive college search</span> and comparison tools.
          </p>
        </div>

        {/* Enhanced Search Section */}
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <div className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/30 dark:border-gray-700/30 p-3 sm:p-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500 h-5 sm:h-6 w-5 sm:w-6 transition-colors group-focus-within:text-blue-500" />
                  <Input
                    type="text"
                    placeholder="Search colleges, programs, or locations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="pl-12 sm:pl-16 py-6 text-base sm:text-lg border-0 focus:ring-2 focus:ring-blue-500/20 rounded-2xl bg-transparent text-slate-700 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 font-medium"
                  />
                </div>
                <Button
                  onClick={handleSearch}
                  size="lg"
                  className="py-6 px-6 sm:px-10 rounded-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl group border-0 text-base sm:text-lg"
                >
                  <Search className="mr-2 sm:mr-3 h-5 sm:h-6 w-5 sm:w-6" />
                  Search
                  <ArrowRight className="ml-2 sm:ml-3 h-5 sm:h-6 w-5 sm:w-6 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick search suggestions */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {['Engineering', 'Medicine', 'Business', 'Arts & Humanities'].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => {
                  setSearchQuery(suggestion);
                  onSearch(suggestion);
                }}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 text-white/90 hover:text-white transition-all duration-300 hover:scale-105 font-medium text-sm sm:text-base"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="space-y-6 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="flex items-center justify-center space-x-2 text-yellow-300">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
            <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
            <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
            <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
            <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-white/95 max-w-3xl mx-auto drop-shadow-xl font-light">
            Join thousands of students who discovered their perfect academic match through our comprehensive platform
          </p>
          <div className="flex items-center justify-center space-x-2 text-white/80">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-base sm:text-lg font-medium">Serving students across Bhutan</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
