import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
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