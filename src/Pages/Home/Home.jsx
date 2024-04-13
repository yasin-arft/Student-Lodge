import { useContext } from "react";
import { EstateContext } from "../../Providers/EstateContextProvider";

const Home = () => {
  const estates = useContext(EstateContext);
  console.log(estates);
  
  return (
    <div>
      home
    </div>
  );
};

export default Home;