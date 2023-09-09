import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ApplicationPageRoute from './routes//ApplicationPageRoute';
// import HomePageRoute from './routes/HomePageRoute';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
  }, [dispatch]);

  return (
    <div className="App">
      {/* <HomePageRoute/> */}
      <ApplicationPageRoute/>
    </div>
  );
}

export default App;