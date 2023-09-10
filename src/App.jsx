import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import SignInPageRoute from './routes/SignInPageRoute';
// import SignUpPageRoute from './routes/SignUpPageRoute';
// import ApplicationPageRoute from './routes//ApplicationPageRoute';
// import HomePageRoute from './routes/HomePageRoute';
import CovoituragePageRoute from './routes/CovoituragePageRoute';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
  }, [dispatch]);

  return (
    <div className="App">
      {/* <HomePageRoute/> */}
      {/* <ApplicationPageRoute/> */}
      {/* <SignInPageRoute/> */}
      {/* <SignUpPageRoute/> */}
      <CovoituragePageRoute/>
    </div>
  );
}

export default App;