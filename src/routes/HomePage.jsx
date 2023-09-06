import React from 'react';
import NavigationBar from '../components/NavigationBar';
import MainPage from '../components/MainPage';

const HomePage = () => {
  return (
    <div>
      <NavigationBar />
      <div className="container">
      <MainPage />
      </div>
    </div>
  );
};

export default HomePage;