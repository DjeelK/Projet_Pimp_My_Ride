import React from 'react';
import '../css/SearchBar.css'
import IconeLocalisation from './IconeLocalisation';

const SearchBar = () => {
  return (
    <div className="container col-12">
      <div className="row justify-content-center align-items-center vh-100 col-12">
        <div className="rounded p-3 text-light text-center" id="bar_search">
          <IconeLocalisation/>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
