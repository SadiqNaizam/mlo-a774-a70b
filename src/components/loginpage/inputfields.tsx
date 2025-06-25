import React from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface InputFieldsProps {
  className?: string;
}

const InputFields: React.FC<InputFieldsProps> = ({ className }) => {
  return (
    <div className={cn("space-y-4", className)}>
      <Input
        id="username"
        name="username"
        type="text"
        placeholder="Username"
        autoComplete="username"
        required
      />
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        autoComplete="current-password"
        required
      />
    </div>
  );
};

export default InputFields;
