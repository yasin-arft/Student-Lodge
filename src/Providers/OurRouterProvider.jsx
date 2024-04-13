import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import EstateDetails from "../Pages/EstateDetails/EstateDetails";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
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
        path: '/estate_details/:id',
        element: <EstateDetails />
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