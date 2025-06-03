
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({ 
  children, 
  className = '', 
  onClick,
  variant = 'primary',
  type = 'button'
}: ButtonProps) => {
  const baseClasses = "px-6 py-1 pt-2 2xl:py-3 2xl:pt-4 rounded-full font-regular text-lg 2xl:text-xl font-objective";
  
  const variantClasses = {
    primary: "bg-[#7918f9] text-white hover:bg-boltz-dark-purple",
    outline: "bg-transparent border border-[#7918f9] text-[#7918f9] hover:bg-[#7918f9]/10",
  };
  
  return (
    <button 
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};
