import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import LoginCard from '../components/LoginPage/LoginCard';

/**
 * @page IndexPage
 * @description The main entry page for the application, which serves as the login page.
 * It uses the MainAppLayout to center the LoginCard component on the screen.
 * This page is responsible for composing the main view by integrating the layout and the primary feature component.
 * @returns {React.ReactElement} The rendered login page.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginCard />
    </MainAppLayout>
  );
};

export default IndexPage;
