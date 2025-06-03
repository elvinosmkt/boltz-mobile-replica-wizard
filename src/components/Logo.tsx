
import React from 'react';

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center cursor-pointer hover:opacity-80 transition-opacity ${className}`}>
      <img 
        src="/lovable-uploads/c33e716f-4400-452d-93e5-2dcd5348ae84.png" 
        alt="OpenBio Logo" 
        className="h-10 w-auto"
      />
    </div>
  );
};

export const LogoMobile = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center cursor-pointer hover:opacity-80 transition-opacity ${className}`}>
      <img 
        src="/lovable-uploads/c33e716f-4400-452d-93e5-2dcd5348ae842.png" 
        alt="OpenBio Logo" 
        className="h-12 w-auto"
      />
    </div>
  );
};

