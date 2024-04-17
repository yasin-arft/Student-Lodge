import { useContext } from "react";
import { EstateContext } from "../../../Providers/EstateContextProvider";
import EstateCard from "./EstateCard";

const Estates = () => {
  // estates data
  const estates = useContext(EstateContext);

  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-semibold text-center my-2 md:my-4">Estates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4 md:py-6">
        {
          estates.map(item => <EstateCard key={item.id} estate={item} />)
        }
      </div>
    </section>
  );
};

export default Estates;