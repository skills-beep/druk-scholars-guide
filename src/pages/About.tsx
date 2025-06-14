
import Navigation from '@/components/Navigation';
import DeveloperSection from '@/components/DeveloperSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';

const About = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <div className="pt-16">
        <HowItWorksSection />
        <DeveloperSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
