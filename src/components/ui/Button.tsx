import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
    'bg-accent-500 text-white hover:bg-accent-600 hover:shadow-lg hover:shadow-accent-500/20 focus:ring-accent-500',
    secondary:
    'bg-brand-50 text-brand-700 hover:bg-brand-100 focus:ring-brand-500',
    outline:
    'border-2 border-brand-500 text-brand-700 hover:bg-brand-50 focus:ring-brand-500',
    ghost:
    'text-brand-700 hover:bg-brand-50 hover:text-brand-700 focus:ring-brand-500'
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