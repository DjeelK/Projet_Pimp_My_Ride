import App from "./App";
import ErrorPage from './routes/ErrorPage';
import HomePageRoute from './routes/HomePageRoute';
import SignInForm from "./routes/auth/SignForm";
import ApplicationPageRoute from './routes/ApplicationPageRoute';

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
        path: "/auth", 
        element: <SignInForm/>
      },
      {
        path: '/application',
        element: <ApplicationPageRoute/>,
      },
    ]
  }
]);

export default router;