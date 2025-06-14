
import { useState, useEffect } from 'react';

const BackgroundSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of background images
  const backgroundImages = [
    '/lovable-uploads/4ff992ab-496d-4d88-bc68-2cc75a40661e.png', // Buddha statue silhouette
    '/lovable-uploads/02acbdd7-bad8-4a97-9f8c-b8836214a9cb.png', // Traditional dance mask
    '/lovable-uploads/294b0d4f-6b24-4136-8631-f72858b48637.png', // Thimphu cityscape
    '/lovable-uploads/3723aa71-e99f-452d-ac66-b3d36b45cee5.png'  // Tiger's Nest monastery
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
      {/* Dynamic Background Images with enhanced overlay */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-70' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${image}')`
          }}
        >
          {/* Enhanced gradient overlay for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-blue-900/40 to-purple-900/60"></div>
        </div>
      ))}

      {/* Smaller image indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
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
