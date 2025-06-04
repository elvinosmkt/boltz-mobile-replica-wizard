
import { useEffect } from 'react';

export const useImagePreloader = (images: string[]) => {
  useEffect(() => {
    const preloadImages = images.map(src => {
      const img = new Image();
      img.src = src;
      return img;
    });

    return () => {
      preloadImages.forEach(img => {
        img.src = '';
      });
    };
  }, [images]);
};
