import React from 'react';
import NavigationBar from './NavigationBar';
import SearchBar from '../components/SearchBar';
import '../css/Covoiturage.css';
import '../css/SearchBar.css';

const CovoituragePage = () => {
  return (
    <div>
      <NavigationBar />
      <div className="container-covoiturage">
        {/* <div className="transparent-rectangle">
          <SearchBar className="search-bar-covoiturage" />
        </div> */}
        <SearchBar/>
      </div>
    </div>
  );
};

export default CovoituragePage;
