import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'glass-light' | 'glass-dark' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'glass-light', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-xl backdrop-blur-md border focus:outline-none disabled:opacity-50";

  const variants = {
    // 🔍 明亮玻璃按钮（白色半透明）
    "glass-light":
      "bg-white/20 text-white border-white/30 hover:bg-white/30 hover:border-white/50 shadow-lg",

    // 🔍 暗色玻璃按钮（黑色半透明，适合深色背景）
    "glass-dark":
      "bg-black/20 text-white border-white/10 hover:bg-black/30 hover:border-white/30 shadow-lg",

    // 🔍 线框按钮
    outline:
      "bg-transparent text-white border border-white/40 hover:bg-white/10 hover:border-white",
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
