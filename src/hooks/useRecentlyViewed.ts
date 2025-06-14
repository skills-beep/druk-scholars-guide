
import { useEffect } from 'react';
import { College } from '@/types/college';

export const useRecentlyViewed = () => {
  const addToRecentlyViewed = (college: College) => {
    const existing = JSON.parse(localStorage.getItem('recentlyViewed') || '[]') as College[];
    const filtered = existing.filter(c => c.id !== college.id);
    const updated = [college, ...filtered].slice(0, 10); // Keep last 10
    localStorage.setItem('recentlyViewed', JSON.stringify(updated));
  };

  return { addToRecentlyViewed };
};
