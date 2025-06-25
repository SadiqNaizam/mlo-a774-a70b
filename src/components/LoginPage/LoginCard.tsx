import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import InputFields from './InputFields';
import PrimaryButton from './PrimaryButton';
import SecondaryLink from './SecondaryLink';

interface LoginCardProps {
  className?: string;
}

const LoginCard: React.FC<LoginCardProps> = ({ className }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    console.log("Login attempt initiated...");

    // Simulate network request
    setTimeout(() => {
      setIsLoading(false);
      console.log("Login attempt finished.");
    }, 2000);
  };

  return (
    <div className={cn("bg-card text-card-foreground rounded-lg shadow-lg w-96", className)}>
      <form onSubmit={handleLogin} className="p-6 flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-left text-card-foreground">
          Log in
        </h1>
        <InputFields />
        <PrimaryButton isLoading={isLoading} />
        <SecondaryLink />
      </form>
    </div>
  );
};

export default LoginCard;
