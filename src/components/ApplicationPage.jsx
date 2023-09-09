import React from 'react';
import NavigationBar from './NavigationBar';
import '../css/Application.css'; 

const ApplicationPage = () => {
  return (
    <div>
      <NavigationBar />
      <div className="container-application">
      </div>
    </div>
  );
};

export default ApplicationPage;
