import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
  to?: string;
  label?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({ 
  to,
  label = 'Back'
}) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors mb-6"
    >
      <ArrowLeft className="h-5 w-5" />
      <span>{label}</span>
    </button>
  );
};