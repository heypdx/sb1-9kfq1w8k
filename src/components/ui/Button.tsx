import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  to?: string;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  to,
  onClick,
  className = ''
}) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-light',
    secondary: 'bg-dark-lighter text-white hover:bg-primary/90',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
  };

  const buttonClass = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return <Link to={to} className={buttonClass}>{children}</Link>;
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
};