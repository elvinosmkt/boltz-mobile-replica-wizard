
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
  const baseClasses = "px-4 py-2 rounded-full font-medium text-sm";
  
  const variantClasses = {
    primary: "bg-boltz-purple text-white hover:bg-boltz-dark-purple",
    outline: "bg-transparent border border-boltz-purple text-boltz-purple hover:bg-boltz-purple/10",
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
