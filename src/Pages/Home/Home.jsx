import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Estates from "./Estates/Estates";

const Home = () => {
  return (
    <div>

      <Helmet>
        <title>Student Lodge | Home</title>
      </Helmet>
      
      <Banner />
      <Estates />
    </div>
  );
};

export default Home;