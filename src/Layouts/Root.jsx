import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Outlet, useLoaderData } from "react-router-dom";
import EstateContextProvider from "../Providers/EstateContextProvider";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthContextProvider";
import Loader from "../Components/Loader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Root = () => {
  // estate data
  const estates = useLoaderData();

  const { loading } = useContext(AuthContext);

  if (loading) {
    return <Loader />
  }


  return (
    <div className="font-poppins text-dark">
      <div className="container mx-auto px-3">
        {/* toast container  */}

        <Navbar />

        <ToastContainer className='z-50'/>

        {/* estate data provider */}
        <EstateContextProvider value={estates}>
          <Outlet />
        </EstateContextProvider>

      </div>
      <div className=" bg-dark text-white mt-3 md:mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default Root;