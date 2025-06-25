import React from 'react';
import { cn } from '@/lib/utils';

/**
 * @interface MainAppLayoutProps
 * @description Props for the MainAppLayout component.
 * @property {React.ReactNode} children - The content to be rendered within the layout.
 * @property {string} [className] - Optional additional CSS classes to apply to the layout container.
 */
interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * @component MainAppLayout
 * @description Provides the main application layout, which centers content on the screen.
 * This layout is ideal for focused views like login or signup pages.
 * It applies a full-screen background and uses flexbox to center its children both
 * vertically and horizontally.
 * @param {MainAppLayoutProps} props - The props for the component.
 * @returns {React.ReactElement} The rendered layout component.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex min-h-screen items-center justify-center bg-background',
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
