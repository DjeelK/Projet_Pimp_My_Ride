import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SignInPageRoute from './routes/SignInPageRoute';
// import ApplicationPageRoute from './routes//ApplicationPageRoute';
// import HomePageRoute from './routes/HomePageRoute';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
  }, [dispatch]);

  return (
    <div className="App">
      {/* <HomePageRoute/> */}
      {/* <ApplicationPageRoute/> */}
      <SignInPageRoute/>
    </div>
  );
}

export default App;