
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, GraduationCap, BookOpen, Users, ArrowRight, Sparkles } from 'lucide-react';

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        {/* Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-green-100 to-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-60 right-40 w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full text-sm font-medium text-slate-700 animate-fade-in">
              <Sparkles className="h-4 w-4" />
              Welcome to the Future of Education
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-sora text-slate-900 leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Find Your
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Perfect College
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Discover exceptional educational opportunities and unlock your potential with 
              comprehensive college search and comparison tools.
            </p>
          </div>

          {/* Enhanced Search Section */}
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-3xl shadow-xl border border-slate-200 p-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5 transition-colors group-focus-within:text-blue-500" />
                    <Input
                      type="text"
                      placeholder="Search colleges, programs, or locations..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="pl-14 h-16 text-lg border-0 focus:ring-0 rounded-2xl bg-transparent text-slate-700 placeholder:text-slate-400"
                    />
                  </div>
                  <Button
                    onClick={handleSearch}
                    size="lg"
                    className="h-16 px-8 rounded-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                  >
                    <Search className="mr-2 h-5 w-5" />
                    Search Colleges
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Redesigned Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">15+</div>
                <div className="text-slate-600 font-medium">Colleges & Universities</div>
                <div className="text-sm text-slate-500 mt-2">Comprehensive institutions</div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">100+</div>
                <div className="text-slate-600 font-medium">Academic Programs</div>
                <div className="text-sm text-slate-500 mt-2">Diverse specializations</div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">5000+</div>
                <div className="text-slate-600 font-medium">Students Enrolled</div>
                <div className="text-sm text-slate-500 mt-2">Active learners</div>
              </div>
            </div>
          </div>

          {/* Clean CTA Section */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '1s' }}>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Join thousands of students who discovered their perfect academic match through our platform
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white border-slate-300 text-slate-700 hover:bg-slate-50 transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                Browse Programs
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white border-slate-300 text-slate-700 hover:bg-slate-50 transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                Compare Colleges
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
