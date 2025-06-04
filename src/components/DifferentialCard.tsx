
import React from 'react';

interface DifferentialCardProps {
  title: string;
  backgroundImage: string;
  className?: string;
}

export const DifferentialCard = ({ title, backgroundImage, className = "" }: DifferentialCardProps) => {
  return (
    <div 
      className={`relative rounded-lg overflow-hidden h-[600px] bg-cover bg-center ${className}`} 
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center left',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 p-10 pt-14 h-full flex flex-col justify-start">
        <h3 className="text-white font-regular text-3xl mb-2">{title}</h3>
      </div>
    </div>
  );
};
