
import { useEffect, useState } from 'react';
import { GraduationCap } from 'lucide-react';

const LoadingAnimation = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(() => setIsVisible(false), 300);
          return 100;
        }
        return prev + 3;
      });
    }, 40);

    return () => clearInterval(progressTimer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-50 to-white">
      <div className="text-center space-y-8">
        {/* Clean Logo Animation */}
        <div className="relative">
          <div className="relative flex items-center justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center animate-pulse">
              <GraduationCap className="h-10 w-10 text-blue-600" />
            </div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-blue-200 border-t-blue-600 rounded-2xl animate-spin"></div>
          </div>
        </div>

        {/* Brand Name */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold font-sora text-slate-900 animate-fade-in">
            EduBhutan
          </h1>
          <p className="text-slate-600 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Discovering your academic journey
          </p>
        </div>
        
        {/* Modern Progress Bar */}
        <div className="w-80 max-w-sm mx-auto space-y-2">
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-slate-500 text-sm">{progress}%</div>
        </div>

        {/* Simple Loading Dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
