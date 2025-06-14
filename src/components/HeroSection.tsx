
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
      
      <HeroContent onSearch={onSearch} />
      
      {/* Stats Section positioned at the bottom */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <StatsSection />
      </div>
    </section>
  );
};

export default HeroSection;
