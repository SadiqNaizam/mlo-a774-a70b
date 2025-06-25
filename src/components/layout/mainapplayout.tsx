import React from 'react';
import { cn } from '@/lib/utils';
import Sidebar from '../dashboard/Sidebar';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn("min-h-screen w-full bg-background flex", className)}>
      <Sidebar />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
    </div>
  );
};

export default MainAppLayout;