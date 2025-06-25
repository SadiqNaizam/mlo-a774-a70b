import React from 'react';
import { cn } from '@/lib/utils';

interface SecondaryLinkProps {
  className?: string;
}

const SecondaryLink: React.FC<SecondaryLinkProps> = ({ className }) => {
  return (
    <a
      href="#"
      className={cn(
        "text-center text-sm text-muted-foreground hover:text-primary transition-colors",
        className
      )}
    >
      or, sign up
    </a>
  );
};

export default SecondaryLink;
