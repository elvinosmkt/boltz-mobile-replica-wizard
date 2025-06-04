
import React from 'react';

interface TimelineItemProps {
  icon: string;
  title: string;
  description: string;
  isActive?: boolean;
}

export const TimelineItem = ({ icon, title, description, isActive = false }: TimelineItemProps) => {
  const iconBgColor = isActive ? 'bg-purple-600' : 'bg-gray-400';
  const titleColor = isActive ? 'text-purple-600' : 'text-gray-500';
  const descriptionColor = isActive ? 'text-gray-600' : 'text-gray-400';

  return (
    <div className="flex items-start gap-6">
      <div className={`w-16 h-16 ${iconBgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
        <span className="text-white font-bold">{icon}</span>
      </div>
      <div>
        <h3 className={`${titleColor} font-bold text-lg mb-2`}>{title}</h3>
        <p className={`${descriptionColor}`}>{description}</p>
      </div>
    </div>
  );
};
