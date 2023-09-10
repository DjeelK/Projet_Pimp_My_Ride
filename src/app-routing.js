import App from "./App";
import ErrorPage from './routes/ErrorPage';
import HomePageRoute from './routes/HomePageRoute';
import ApplicationPageRoute from './routes/ApplicationPageRoute';
import SignInPageRoute from './routes/SignInPageRoute';
import SignUpPageRoute from "./routes/SignUpPageRoute";
import CovoituragePageRoute from "./routes/CovoituragePageRoute";
import ProfilPageRoute from "./routes/ProfilPageRoute";


const { createBrowserRouter } = require("react-router-dom");

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
        path: "/signIn", 
        element: <SignInPageRoute/>
      },
      {
        path: "/signUp", 
        element: <SignUpPageRoute/>
      },
      {
        path: '/application',
        element: <ApplicationPageRoute/>,
      },
      {
        path: '/covoiturage',
        element: <CovoituragePageRoute/>,
      },
      {
        path: '/profil',
        element: <ProfilPageRoute/>,
      },
    ]
  }
]);

export default router;