import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Outlet, useLoaderData } from "react-router-dom";
import EstateContextProvider from "../Providers/EstateContextProvider";

const Root = () => {
  // estate data
  const estates = useLoaderData();

  return (
    <div className="font-poppins text-dark">
      <div className="container mx-auto px-3">
        <Navbar />

        {/* estate data provider */}
        <EstateContextProvider value={estates}>
          <Outlet />
        </EstateContextProvider>

      </div>
      <div className=" bg-dark text-white mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default Root;