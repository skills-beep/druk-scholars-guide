
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, GraduationCap, BookOpen, Users, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';

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
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/94d00c17-1893-44d4-99be-b41cc6245b11.png')`
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg px-6 py-3 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 shadow-lg border border-white/30 dark:border-gray-700/50 animate-fade-in">
              <Sparkles className="h-4 w-4 text-blue-600" />
              Discover Your Academic Future in Bhutan
              <TrendingUp className="h-4 w-4 text-green-600" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-sora text-white leading-tight animate-fade-in drop-shadow-2xl" style={{ animationDelay: '0.2s' }}>
              Find Your
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent drop-shadow-lg">
                Perfect College
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in drop-shadow-lg" style={{ animationDelay: '0.4s' }}>
              Explore exceptional educational opportunities and unlock your potential with 
              comprehensive college search and comparison tools.
            </p>
          </div>

          {/* Enhanced Search Section */}
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 dark:border-gray-700/50 p-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500 h-5 w-5 transition-colors group-focus-within:text-blue-500" />
                    <Input
                      type="text"
                      placeholder="Search colleges, programs, or locations..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="pl-14 h-16 text-lg border-0 focus:ring-0 rounded-2xl bg-transparent text-slate-700 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500"
                    />
                  </div>
                  <Button
                    onClick={handleSearch}
                    size="lg"
                    className="h-16 px-8 rounded-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl group border-0"
                  >
                    <Search className="mr-2 h-5 w-5" />
                    Search Colleges
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/40 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">15+</div>
                <div className="text-slate-600 dark:text-slate-300 font-semibold mb-1">Colleges & Universities</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Comprehensive institutions</div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/40 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/50 dark:to-purple-800/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">100+</div>
                <div className="text-slate-600 dark:text-slate-300 font-semibold mb-1">Academic Programs</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Diverse specializations</div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/40 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/50 dark:to-green-800/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">5000+</div>
                <div className="text-slate-600 dark:text-slate-300 font-semibold mb-1">Students Enrolled</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Active learners</div>
              </div>
            </div>
          </div>

          {/* Clean CTA Section */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '1s' }}>
            <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-lg">
              Join thousands of students who discovered their perfect academic match through our platform
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border-white/40 dark:border-gray-600/50 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-xl"
              >
                Browse Programs
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border-white/40 dark:border-gray-600/50 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-xl"
              >
                Compare Colleges
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
