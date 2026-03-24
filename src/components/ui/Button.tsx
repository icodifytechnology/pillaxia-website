import React, { Component } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  as?: 'button' | 'a' | typeof Link;
  href?: string;
  to?: string;
  className?: string;
  children: React.ReactNode;
}
export function Button({
  variant = 'primary',
  size = 'md',
  as: Component = 'button',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
  'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    primary:
    'text-white bg-gradient-to-r from-[#3b9eff] to-[#ec4899] hover:shadow-[0_0_25px_rgba(59,158,255,0.5),0_0_50px_rgba(236,72,153,0.3)] focus:ring-accent-500',
    secondary:
    'bg-[#010d3e] text-[#3b9eff] border border-[#3b9eff]/30 hover:border-[#3b9eff] hover:shadow-[0_0_15px_rgba(59,158,255,0.4)] focus:ring-accent-500',
    outline:
    'border-2 border-[#3b9eff] text-[#3b9eff] hover:bg-[#3b9eff]/10 hover:shadow-[0_0_15px_rgba(59,158,255,0.4)] focus:ring-accent-500',
    ghost: 'text-[#3b9eff] hover:bg-[#3b9eff]/10 focus:ring-accent-500'
  };
  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  const MotionComponent = motion(Component as any);
  return (
    <MotionComponent
      whileHover={{
        scale: 1.02
      }}
      whileTap={{
        scale: 0.98
      }}
      className={classes}
      {...props}>
      
      {children}
    </MotionComponent>);

}