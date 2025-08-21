
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

const DeveloperSection = () => {
  const [stars, setStars] = useState<Array<{ id: number; left: number; top: number; delay: number; size: number }>>([]);
  const [raindrops, setRaindrops] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    // Generate random stars
    const starArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      size: Math.random() * 3 + 1,
    }));
    setStars(starArray);

    // Generate random raindrops
    const rainArray = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: Math.random() * 1 + 1,
    }));
    setRaindrops(rainArray);
  }, []);

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Animated Night Sky Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900 to-purple-900">
        {/* Mountains Silhouette */}
        <div className="absolute bottom-0 left-0 w-full h-48">
          <svg viewBox="0 0 1200 300" className="absolute bottom-0 w-full h-full">
            <defs>
              <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1a1a2e" />
                <stop offset="100%" stopColor="#0f0f1a" />
              </linearGradient>
            </defs>
            <polygon 
              points="0,300 0,150 200,80 400,120 600,60 800,100 1000,40 1200,80 1200,300"
              fill="url(#mountainGradient)"
            />
            <polygon 
              points="0,300 100,200 300,140 500,180 700,120 900,160 1100,100 1200,140 1200,300"
              fill="#0a0a15"
              opacity="0.8"
            />
          </svg>
        </div>

        {/* Animated Moon */}
        <div className="absolute top-8 right-8 w-24 h-24">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-100 to-yellow-300 shadow-lg animate-pulse">
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-400 opacity-50"></div>
            <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-500 rounded-full opacity-60"></div>
            <div className="absolute top-6 right-6 w-1 h-1 bg-yellow-600 rounded-full opacity-40"></div>
          </div>
          <div className="absolute -inset-4 rounded-full bg-yellow-300 opacity-20 animate-ping"></div>
        </div>

        {/* Animated Stars */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          >
            <div className="absolute inset-0 rounded-full bg-blue-200 opacity-50 animate-ping" 
                 style={{ animationDelay: `${star.delay + 0.5}s` }}></div>
          </div>
        ))}

      {/* Rain Animation */}
      {raindrops.map((drop) => (
        <div
          key={drop.id}
          className="absolute w-0.5 h-8 bg-gradient-to-b from-blue-300 to-transparent opacity-60 animate-rain"
          style={{
            left: `${drop.left}%`,
            animationDelay: `${drop.delay}s`,
            animationDuration: `${drop.duration}s`,
          }}
        ></div>
      ))}
    </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white/10 dark:bg-slate-800/20 backdrop-blur-lg border border-white/20 shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar */}
              <div className="relative group">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1 shadow-2xl animate-pulse">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img 
                      src="/lovable-uploads/adfa09cf-b4d1-491b-a774-41af69661809.png" 
                      alt="Bishal Sharma"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white/50 animate-bounce">
                  <Heart className="h-4 w-4 text-white absolute top-1 left-1" />
                </div>
                <div className="absolute -inset-2 rounded-full bg-blue-400 opacity-20 animate-ping"></div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold font-sora text-white mb-2 drop-shadow-lg">
                    Bishal Sharma
                  </h3>
                  <p className="text-lg text-blue-300 font-medium mb-3 drop-shadow-md">
                    Front End Developer
                  </p>
                  <p className="text-white/90 leading-relaxed drop-shadow-md">
                    Passionate about creating innovative educational platforms that empower students 
                    and transform learning experiences. Built with ❤️ for the Bhutanese community.
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <a
                    href="https://www.linkedin.com/in/bishal-sharma-12b7211b6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-md bg-white/10 hover:bg-blue-500 text-white border border-white/30 hover:border-blue-500 transition-all duration-300 backdrop-blur-sm min-h-[44px]"
                  >
                    <Linkedin className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                    LinkedIn
                  </a>
                  
                  <a
                    href="https://github.com/skills-beep"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-md bg-white/10 hover:bg-gray-700 text-white border border-white/30 hover:border-gray-700 transition-all duration-300 backdrop-blur-sm min-h-[44px]"
                  >
                    <Github className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                    GitHub
                  </a>
                  
                  <a
                    href="mailto:bishalsharma153@gmail.com"
                    className="group inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-md bg-white/10 hover:bg-red-500 text-white border border-white/30 hover:border-red-500 transition-all duration-300 backdrop-blur-sm min-h-[44px]"
                  >
                    <Mail className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                    Email
                  </a>
                </div>

                {/* Tech Stack */}
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm text-white/70 mb-2 drop-shadow-md">Built with:</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Shadcn/ui'].map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium hover:bg-blue-500/30 transition-colors cursor-default border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <blockquote className="text-center italic text-white/90 drop-shadow-md">
                "You are the future of Bhutan. Dream big, work hard, and never forget your roots and values that make you who you are."
                <cite className="block mt-2 text-sm font-semibold text-white/70 drop-shadow-md">
                  - His Majesty the King of Bhutan
                </cite>
              </blockquote>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DeveloperSection;
