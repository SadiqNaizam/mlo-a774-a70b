import React from 'react';
import LoginCard from '../components/loginpage/LoginCard';
import { ThemeProvider } from '@/components/theme-provider';

const LoginPage: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <div className="min-h-screen w-full bg-background flex items-center justify-center">
        <LoginCard />
      </div>
    </ThemeProvider>
  );
};

export default LoginPage;