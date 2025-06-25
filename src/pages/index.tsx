import React from 'react';
import LoginCard from '../components/loginpage/LoginCard';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-background flex items-center justify-center">
      <LoginCard />
    </div>
  );
};

export default LoginPage;