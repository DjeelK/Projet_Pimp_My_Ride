import App from "./App";
import ErrorPage from './routes/ErrorPage'
import HomePage from './routes/HomePage'

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
        ]
    }
])

export default router