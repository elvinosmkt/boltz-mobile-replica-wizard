
import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description?: string;
  variant?: 'default' | 'dark';
  iconBg?: string;
}

export const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  variant = 'default',
  iconBg = 'bg-purple-600'
}: FeatureCardProps) => {
  const cardBg = variant === 'dark' ? 'bg-black' : 'bg-white';
  const titleColor = variant === 'dark' ? 'text-white' : 'text-black';

  return (
    <div className={`${cardBg} p-6 rounded-lg text-center`}>
      <div className={`w-24 h-32 ${iconBg} rounded mx-auto mb-4 flex items-center justify-center`}>
        <span className="text-white">{icon}</span>
      </div>
      <h3 className={`font-bold text-lg mb-2 ${titleColor}`}>{title}</h3>
      {description && <p className="text-gray-600">{description}</p>}
    </div>
  );
};
