import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import EstateDetails from "../Pages/EstateDetails/EstateDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import Support from "../Pages/Support/Support";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: () => fetch('/estate.json'),
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/update_Profile',
        element: <PrivateRoute><UpdateProfile /></PrivateRoute>
      },
      {
        path: '/estate_details/:id',
        element: <PrivateRoute><EstateDetails /></PrivateRoute>
      },
      {
        path: '/support',
        element: <PrivateRoute><Support /></PrivateRoute>
      }
    ],
  }
]);

const OurRouterProvider = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default OurRouterProvider;