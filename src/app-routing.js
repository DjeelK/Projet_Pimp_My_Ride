import App from "./App";
import ErrorPage from './routes/ErrorPage';
import HomePageRoute from './routes/HomePageRoute';
import ApplicationPageRoute from './routes/ApplicationPageRoute';
import SignInPageRoute from './routes/SignInPageRoute';
import SignUpPageRoute from "./routes/SignUpPageRoute";
import ProfilPageRoute from "./routes/ProfilPageRoute";
import TripPageRoute from "./routes/TripPageRoute";
import MesTrajetsPageRoute from "./routes/MesTrajetsPageRoute";
import { isUserLoggedIn } from './services/AuthService'
import {Navigate} from 'react-router-dom'


const { createBrowserRouter } = require("react-router-dom");

function AuthenticatedRoute({children}){

  const isAuth = isUserLoggedIn();

  console.log(isAuth)
  if(isAuth) {
    return children;
  }

  return <Navigate to="/" />

}

const router = createBrowserRouter([

  
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePageRoute />
      },
      {
        path: "/login", 
        element: <SignInPageRoute/>
      },
      {
        path: "/register", 
        element: <SignUpPageRoute/>
      },
      {
        path: '/application',
        element: <ApplicationPageRoute/>,
      },
      {
        path: '/covoiturage',
        element: <AuthenticatedRoute CovoituragePageRoute>
          </AuthenticatedRoute>,
      },
      {
        path: '/profil',
        element: <ProfilPageRoute/>,
      },
      {
        path: '/addTrajet',
        element: <TripPageRoute/>,
      },
      {
        path: '/mesTrajets',
        element: <MesTrajetsPageRoute/>,
      },
    ]
  }
]);

export default router;