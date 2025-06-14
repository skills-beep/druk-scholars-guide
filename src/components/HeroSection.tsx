
import BackgroundSlider from './BackgroundSlider';
import FloatingElements from './FloatingElements';
import HeroContent from './HeroContent';
import StatsSection from './StatsSection';

interface HeroSectionProps {
  onSearch: (query: string) => void;
}

const HeroSection = ({ onSearch }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <BackgroundSlider />
      <FloatingElements />
      
      <div className="relative w-full z-10 flex flex-col items-center justify-between h-full py-12">
        {/* Hero content positioned in the middle */}
        <div className="flex-grow flex items-center justify-center w-full">
          <HeroContent onSearch={onSearch} />
        </div>
        
        {/* Stats section positioned at the bottom with proper spacing */}
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-auto">
          <StatsSection />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
