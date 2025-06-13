
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, GraduationCap, BookOpen, Users, ArrowRight, Sparkles, Star, MapPin } from 'lucide-react';

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          {/* Fallback to image if video doesn't load */}
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/lovable-uploads/4ff992ab-496d-4d88-bc68-2cc75a40661e.png')`
            }}
          ></div>
        </video>
        {/* Enhanced gradient overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-blue-900/40 to-purple-900/60"></div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-yellow-400/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12 py-16">
          {/* Enhanced Main Heading */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-white/90 text-sm font-medium">Discover Excellence in Education</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-sora text-white leading-tight animate-fade-in drop-shadow-2xl" style={{ animationDelay: '0.2s' }}>
              Find Your
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent drop-shadow-lg mt-2">
                Perfect College
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-white/95 max-w-4xl mx-auto leading-relaxed animate-fade-in font-light" style={{ animationDelay: '0.4s' }}>
              Explore exceptional educational opportunities and unlock your potential with 
              <span className="font-semibold text-yellow-300"> comprehensive college search</span> and comparison tools.
            </p>
          </div>

          {/* Enhanced Search Section */}
          <div className="max-w-4xl mx-auto space-y-10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/30 dark:border-gray-700/30 p-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500 h-6 w-6 transition-colors group-focus-within:text-blue-500" />
                    <Input
                      type="text"
                      placeholder="Search colleges, programs, or locations..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="pl-16 h-18 text-lg border-0 focus:ring-2 focus:ring-blue-500/20 rounded-2xl bg-transparent text-slate-700 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 font-medium"
                    />
                  </div>
                  <Button
                    onClick={handleSearch}
                    size="lg"
                    className="h-18 px-10 rounded-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl group border-0 text-lg"
                  >
                    <Search className="mr-3 h-6 w-6" />
                    Search Colleges
                    <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick search suggestions */}
            <div className="flex flex-wrap justify-center gap-3">
              {['Engineering', 'Medicine', 'Business', 'Arts & Humanities'].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => {
                    setSearchQuery(suggestion);
                    onSearch(suggestion);
                  }}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 text-white/90 hover:text-white transition-all duration-300 hover:scale-105 font-medium"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto animate-fade-in pt-8" style={{ animationDelay: '0.8s' }}>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-2xl rounded-3xl p-8 lg:p-10 shadow-2xl border border-white/30 dark:border-gray-700/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 rounded-2xl flex items-center justify-center mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  <GraduationCap className="h-8 w-8 lg:h-10 lg:w-10 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3">15+</div>
                <div className="text-slate-600 dark:text-slate-300 font-semibold mb-2 text-lg">Colleges & Universities</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Comprehensive institutions</div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-2xl rounded-3xl p-8 lg:p-10 shadow-2xl border border-white/30 dark:border-gray-700/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/50 dark:to-purple-800/50 rounded-2xl flex items-center justify-center mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  <BookOpen className="h-8 w-8 lg:h-10 lg:w-10 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3">100+</div>
                <div className="text-slate-600 dark:text-slate-300 font-semibold mb-2 text-lg">Academic Programs</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Diverse specializations</div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-2xl rounded-3xl p-8 lg:p-10 shadow-2xl border border-white/30 dark:border-gray-700/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/50 dark:to-green-800/50 rounded-2xl flex items-center justify-center mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  <Users className="h-8 w-8 lg:h-10 lg:w-10 text-green-600 dark:text-green-400" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3">5000+</div>
                <div className="text-slate-600 dark:text-slate-300 font-semibold mb-2 text-lg">Students Enrolled</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Active learners</div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="space-y-8 animate-fade-in pt-8" style={{ animationDelay: '1s' }}>
            <div className="flex items-center justify-center space-x-2 text-yellow-300">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-lg lg:text-xl text-white/95 max-w-3xl mx-auto drop-shadow-xl font-light">
              Join thousands of students who discovered their perfect academic match through our comprehensive platform
            </p>
            <div className="flex items-center justify-center space-x-2 text-white/80">
              <MapPin className="w-5 h-5" />
              <span className="text-lg font-medium">Serving students across Bhutan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
