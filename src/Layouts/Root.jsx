import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="font-poppins text-dark">
      <div className="container mx-auto px-3">
        <Navbar />
        <Outlet />
      </div>
      <div className=" bg-royal-blue text-white mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default Root;