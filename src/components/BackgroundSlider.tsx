
import { useState, useEffect } from 'react';

const BackgroundSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of background images - updated with new Bhutanese landmarks
  const backgroundImages = [
    '/lovable-uploads/6b94c9c8-929a-444c-987f-feb8faac6030.png', // Traditional Bhutanese dzong with river reflection
    '/lovable-uploads/c94e5199-f9f6-4b14-8ef3-d19491151ba2.png', // Punakha Dzong with mountains
    '/lovable-uploads/d8d18649-00ee-48ef-9703-c38cbc030ad6.png', // Tiger's Nest monastery on cliff
    '/lovable-uploads/dda7f772-be9d-442f-b557-22fe7bd2d311.png'  // Young Bhutanese monks
  ];

  // Change background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Dynamic Background Images with mobile optimization */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-70' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            // Mobile optimization - prevent overscroll and improve performance
            backgroundAttachment: 'scroll', // Better for mobile than 'fixed'
            willChange: index === currentImageIndex ? 'opacity' : 'auto'
          }}
        >
          {/* Enhanced gradient overlay with mobile-optimized contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-900/50 to-purple-900/70 sm:from-black/60 sm:via-blue-900/40 sm:to-purple-900/60"></div>
        </div>
      ))}

      {/* Mobile-optimized image indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-1.5 sm:space-x-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 touch-manipulation ${
                index === currentImageIndex 
                  ? 'bg-white shadow-md scale-125' 
                  : 'bg-white/40 hover:bg-white/60 hover:scale-110'
              }`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Switch to background image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BackgroundSlider;
