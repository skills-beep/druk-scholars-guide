
import { Star } from 'lucide-react';

interface DynamicRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  className?: string;
}

const DynamicRating = ({ 
  rating, 
  maxRating = 5, 
  size = 'md', 
  showValue = true,
  className = '' 
}: DynamicRatingProps) => {
  const sizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star 
          key={`full-${i}`} 
          className={`${sizeClasses[size]} text-amber-400 fill-amber-400 transition-all duration-300`} 
        />
      );
    }
    
    // Half star
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className={`${sizeClasses[size]} text-gray-300 fill-gray-300`} />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className={`${sizeClasses[size]} text-amber-400 fill-amber-400`} />
          </div>
        </div>
      );
    }
    
    // Empty stars
    const emptyStars = maxRating - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star 
          key={`empty-${i}`} 
          className={`${sizeClasses[size]} text-gray-300 fill-gray-300`} 
        />
      );
    }
    
    return stars;
  };

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="flex items-center gap-0.5">
        {renderStars()}
      </div>
      {showValue && (
        <span className={`font-semibold text-slate-700 dark:text-slate-200 ${textSizeClasses[size]} ml-1`}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default DynamicRating;
