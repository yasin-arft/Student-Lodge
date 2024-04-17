import { useContext } from "react";
import { EstateContext } from "../../Providers/EstateContextProvider";
import { useParams } from "react-router-dom";
import { IoCheckmarkDone } from "react-icons/io5";
import { Helmet } from "react-helmet-async";

const EstateDetails = () => {
  const { id } = useParams();
  const estates = useContext(EstateContext);

  const currentEstate = estates.find(estate => estate.id == id);
  const { estate_title, image, segment_name, description, location, facilities, price, status, area } = currentEstate;

  return (
    <div className="hero">
      
      <Helmet>
        <title>Student Lodge | {estate_title} </title>
      </Helmet>

      <div className="hero-content flex-col lg:flex-row">
        <img data-aos='zoom-in' data-aos-duration='1000' src={image} className="w-full md:max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 data-aos='fade-left' data-aos-duration='1000' className="text-2xl md:text-3xl font-bold">{estate_title}</h1>
          <p data-aos='fade-left' data-aos-duration='1000' data-aos-delay='300' className="py-4 md:py-6">{description}</p>
          <span className='font-medium' data-aos='fade-left' data-aos-duration='1000' data-aos-delay='600' >Facilities</span>
          <ul data-aos='fade-left' data-aos-duration='1000' data-aos-delay='900' >
            {
              facilities.map((item, idx) => <li
                key={idx}
                className='flex items-center gap-2'
              >
                <IoCheckmarkDone className='text-royal-blue-dark' />
                {item}
              </li>)
            }
          </ul>
          {/* info */}
          <div data-aos='fade-left' data-aos-duration='1000' data-aos-delay='1200' className='flex gap-2 md:gap-4 flex-wrap font-medium mt-3'>
            <span className='bg-[#ddd] px-4 py-1 rounded-full'>{segment_name}</span>
            <span className='bg-[#ddd] px-4 py-1 rounded-full'>For {status}</span>
            <span className='bg-[#ddd] px-4 py-1 rounded-full'>Price: {price} BDT</span>
            <span className='bg-[#ddd] px-4 py-1 rounded-full'>Area: {area} sqft</span>
            <span>Location: {location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;