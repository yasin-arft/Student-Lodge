import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="container mx-auto px-3 font-poppins text-dark">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;