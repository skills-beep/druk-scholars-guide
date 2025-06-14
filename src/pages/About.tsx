
import Navigation from '@/components/Navigation';
import DeveloperSection from '@/components/DeveloperSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation />
      
      <div className="pt-16">
        <HowItWorksSection />
        <DeveloperSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
