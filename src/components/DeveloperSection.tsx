
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const DeveloperSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border-0 shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar */}
              <div className="relative group">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img 
                      src="/lovable-uploads/0b851ea9-2dcc-4353-acb9-e2d1f2a98381.png" 
                      alt="Bishal Sharma"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-slate-800 animate-bounce">
                  <Heart className="h-4 w-4 text-white absolute top-1 left-1" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold font-sora text-slate-900 dark:text-white mb-2">
                    Bishal Sharma
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-3">
                    Full Stack Developer
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Passionate about creating innovative educational platforms that empower students 
                    and transform learning experiences. Built with ❤️ for the Bhutanese community.
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                    onClick={() => window.open('https://www.linkedin.com/in/bishal-sharma-12b7211b6/', '_blank')}
                  >
                    <Linkedin className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                    LinkedIn
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    className="group hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all duration-300"
                    onClick={() => window.open('https://github.com/skills-beep', '_blank')}
                  >
                    <Github className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                    GitHub
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    className="group hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300"
                    onClick={() => window.open('mailto:bishalsharma153@gmail.com', '_blank')}
                  >
                    <Mail className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                    Email
                  </Button>
                </div>

                {/* Tech Stack */}
                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Built with:</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Shadcn/ui'].map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
              <blockquote className="text-center italic text-slate-600 dark:text-slate-300">
                "You are the future of Bhutan. Dream big, work hard, and never forget your roots and values that make you who you are."
                <cite className="block mt-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
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
