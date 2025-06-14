
import BackgroundSlider from './BackgroundSlider';
import FloatingElements from './FloatingElements';
import HeroContent from './HeroContent';

interface HeroSectionProps {
  onSearch: (query: string) => void;
}

const HeroSection = ({ onSearch }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <BackgroundSlider />
      <FloatingElements />
      
      <div className="relative w-full z-10 flex flex-col items-center justify-center h-full py-12">
        <HeroContent onSearch={onSearch} />
      </div>
    </section>
  );
};

export default HeroSection;
