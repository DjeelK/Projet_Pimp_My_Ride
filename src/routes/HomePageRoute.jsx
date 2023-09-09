import React from 'react';
import NavigationBar from '../components/NavigationBar';
import MainPage from '../components/MainPage';
import FooterPage from '../components/FooterPage';

const HomePageRoute = () => {
  return (
    <div>
      <NavigationBar />
        <MainPage />
        <FooterPage/>
    </div>
  );
};

export default HomePageRoute;