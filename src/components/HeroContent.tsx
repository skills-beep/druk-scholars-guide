
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ArrowRight, Sparkles, Star, MapPin, Quote } from 'lucide-react';

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
    <div className="w-full max-w-6xl mx-auto px-3 sm:px-4 lg:px-8 text-center">
      <div className="space-y-6 sm:space-y-8 md:space-y-10">
        {/* Enhanced Main Heading - Mobile Optimized */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8 pt-6 sm:pt-8 md:pt-12">
          <div className="inline-flex items-center px-2.5 py-1 sm:px-3 sm:py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-fade-in">
            <Sparkles className="w-3 h-3 text-yellow-400 mr-1 sm:mr-1.5" />
            <span className="text-white/90 text-xs sm:text-sm font-medium">Discover Excellence in Education</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-sora text-white leading-[1.1] animate-fade-in drop-shadow-2xl mx-auto max-w-5xl px-2" style={{ animationDelay: '0.2s' }}>
            Find Your
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent drop-shadow-lg">
              Perfect College
            </span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed animate-fade-in font-light px-2 sm:px-4" style={{ animationDelay: '0.4s' }}>
            Explore exceptional educational opportunities and unlock your potential with 
            <span className="font-semibold text-yellow-300"> comprehensive college search</span> and comparison tools.
          </p>
        </div>

        {/* Enhanced Search Section - Mobile Optimized */}
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6 animate-fade-in px-2 sm:px-4" style={{ animationDelay: '0.6s' }}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl group-hover:blur-2xl sm:group-hover:blur-3xl transition-all duration-500"></div>
            <div className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl shadow-2xl border border-white/30 dark:border-gray-700/30 p-2.5 sm:p-3 md:p-4">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 sm:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 transition-colors group-focus-within:text-blue-500" />
                  <Input
                    type="text"
                    placeholder="Search colleges, programs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="pl-10 sm:pl-12 lg:pl-16 py-3.5 sm:py-4 lg:py-5 xl:py-6 text-sm sm:text-base lg:text-lg border-0 focus:ring-2 focus:ring-blue-500/20 rounded-xl sm:rounded-2xl bg-transparent text-slate-700 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 font-medium"
                  />
                </div>
                <Button
                  onClick={handleSearch}
                  size="lg"
                  className="py-3.5 sm:py-4 lg:py-5 xl:py-6 px-4 sm:px-6 lg:px-8 rounded-xl sm:rounded-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl group border-0 text-sm sm:text-base lg:text-lg touch-manipulation"
                >
                  <Search className="mr-1.5 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden xs:inline">Search</span>
                  <span className="xs:hidden">Go</span>
                  <ArrowRight className="ml-1.5 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile-optimized quick search suggestions */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 lg:gap-3">
            {['Engineering', 'Medicine', 'Business', 'Arts'].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => {
                  setSearchQuery(suggestion);
                  onSearch(suggestion);
                }}
                className="px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 text-white/90 hover:text-white transition-all duration-300 hover:scale-105 font-medium text-xs sm:text-sm lg:text-base touch-manipulation"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section with King's Quote - Mobile Optimized */}
        <div className="space-y-4 sm:space-y-6 animate-fade-in px-2 sm:px-4" style={{ animationDelay: '1s' }}>
          {/* King's Quote - Mobile Optimized */}
          <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/20">
              <Quote className="absolute top-3 left-3 sm:top-4 sm:left-4 w-4 h-4 sm:w-6 sm:h-6 text-yellow-300 opacity-50" />
              <blockquote className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 font-light italic leading-relaxed mb-3 sm:mb-4 pl-6 sm:pl-8">
                "Education must be a priority for all nations. It is the foundation upon which we build our future and the key to unlocking human potential."
              </blockquote>
              <div className="text-right">
                <p className="text-yellow-300 font-semibold text-sm sm:text-base">— His Majesty Jigme Khesar Namgyel Wangchuck</p>
                <p className="text-white/70 text-xs sm:text-sm">Fifth Druk Gyalpo of Bhutan</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-1 sm:space-x-2 text-yellow-300">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 fill-current" />
            ))}
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 max-w-3xl mx-auto drop-shadow-xl font-light">
            Join thousands of students who discovered their perfect academic match through our comprehensive platform
          </p>
          <div className="flex items-center justify-center space-x-1.5 sm:space-x-2 text-white/80">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
            <span className="text-sm sm:text-base lg:text-lg font-medium">Serving students across Bhutan</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
