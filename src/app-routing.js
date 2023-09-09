import App from "./App";
import ErrorPage from './routes/ErrorPage';
import HomePageRoute from './routes/HomePageRoute';
import ApplicationPageRoute from './routes/ApplicationPageRoute';
import SignInPageRoute from './routes/SignInPageRoute';

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
        path: '/application',
        element: <ApplicationPageRoute/>,
      },
    ]
  }
]);

export default router;