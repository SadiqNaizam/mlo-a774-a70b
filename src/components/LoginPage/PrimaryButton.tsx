import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface PrimaryButtonProps {
  isLoading?: boolean;
  className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ isLoading = false, className }) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={cn("w-full", className)}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      Log in
    </Button>
  );
};

export default PrimaryButton;
