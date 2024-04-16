import { cn } from '@/utils/cn';
import React from 'react';

const Button = ({ size, variants, className, children, onClick }) => {
  return (
    <button
      type='submit'
      onClick={onClick}
      className={cn(
        'text-sm font-semibold text-white rounded bg-secondary',
        {
          'w-full px-5 py-4': size === 'large',
          'w-max px-2.5 py-2': size === 'medium',
          'bg-secondary hover:bg-purple2': variants === 'primary',
          'bg-white text-primary border border-borderGrey hover:bg-borderGrey2': variants === 'secondary',
          'bg-primary': variants === 'tertiary',
        },
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
