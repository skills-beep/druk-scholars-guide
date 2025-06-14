
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top left */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/10 rounded-full blur-xl animate-float"></div>
      
      {/* Top right */}
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      {/* Bottom left */}
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-yellow-400/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Center right */}
      <div className="absolute top-1/2 right-36 w-40 h-40 bg-green-400/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Bottom right */}
      <div className="absolute bottom-40 right-40 w-28 h-28 bg-red-400/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2.5s' }}></div>
      
      {/* Center left */}
      <div className="absolute top-2/3 left-36 w-36 h-36 bg-cyan-400/10 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
    </div>
  );
};

export default FloatingElements;
