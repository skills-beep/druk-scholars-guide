
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
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(progressTimer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="relative mb-8">
          <div className="relative">
            <GraduationCap className="h-20 w-20 text-yellow-300 animate-pulse mx-auto" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-yellow-300/30 border-t-yellow-300 rounded-full animate-spin"></div>
            </div>
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-4xl font-bold font-sora text-white mb-2 animate-fade-in">
          EduBhutan
        </h1>
        <p className="text-blue-200 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Discovering your academic journey
        </p>
        
        {/* Progress Bar */}
        <div className="w-80 max-w-sm mx-auto">
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-white/80 text-sm mt-2">{progress}%</div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          <div className="w-2 h-2 bg-yellow-300 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-yellow-300 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-yellow-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
