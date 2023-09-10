import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
  }, [dispatch]);

  return (
    <div className="App">
      <Outlet/>
    </div>
  );
}

export default App;