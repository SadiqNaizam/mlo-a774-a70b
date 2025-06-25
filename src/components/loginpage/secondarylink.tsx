import React from 'react';
import { cn } from '@/lib/utils';

interface SecondaryLinkProps {
  className?: string;
}

const SecondaryLink: React.FC<SecondaryLinkProps> = ({ className }) => {
  return (
    <a
      href="/dashboard"
      className={cn(
        "text-center text-sm text-muted-foreground hover:text-primary transition-colors",
        className
      )}
    >
      Or, continue to dashboard
    </a>
  );
};

export default SecondaryLink;