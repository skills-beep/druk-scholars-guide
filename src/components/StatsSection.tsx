
import { GraduationCap, BookOpen, Users } from 'lucide-react';

const StatsSection = () => {
  return (
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
  );
};

export default StatsSection;
