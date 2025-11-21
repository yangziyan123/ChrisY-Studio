import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-none focus:outline-none disabled:opacity-50";
  
  const variants = {
    primary: "bg-white text-black hover:bg-zinc-200 border border-white",
    secondary: "bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-800",
    outline: "bg-transparent text-white border border-zinc-700 hover:border-white hover:bg-white hover:text-black"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;