import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [],
  }
]);

const OurRouterProvider = () => {
  return (
    <RouterProvider router={router}/>
  );
};

export default OurRouterProvider;