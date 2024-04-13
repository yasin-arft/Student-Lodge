import PropTypes from 'prop-types';
import { IoCheckmarkDone } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const EstateCard = ({ estate }) => {
  const { id, estate_title, image, segment_name, description, location, facilities, price, status, area } = estate;

  const navigate = useNavigate();

  return (
    <div className="card p-5 border border-gray">
      <figure className='max-h-52'><img className='h-full w-full' src={image} alt="Shoes" /></figure>
      <div className="card-body p-0 pt-6">
        {/* title */}
        <h2 className="card-title items-start line-clamp-1">{estate_title}</h2>

        {/* description */}
        <p className='line-clamp-2 grow-0'>{description}</p>

        <div className='flex gap-4'>
          <span className='border border-royal-blue text-royal-blue px-4 py-1 rounded-full'>{segment_name}</span>
          <span className='border border-royal-blue text-royal-blue px-4 py-1 rounded-full'>For {status}</span>
        </div>

        <hr className='text-gray my-2 opacity-50' />

        {/* facilities */}
        <span className='font-medium'>Facilities</span>
        <ul className='grow'>
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

        <hr className='text-gray my-2 opacity-50' />

        {/* info */}
        <div className='flex gap-4 flex-wrap font-medium'>
          <span className='bg-[#ddd] px-4 py-1 rounded-full'>Price: {price} BDT</span>
          <span className='bg-[#ddd] px-4 py-1 rounded-full'>Area: {area} sqft</span>
          <span className='line-clamp-1'>Location: {location}</span>
        </div>

        {/* view property btn */}
        <div className="card-actions">
          <button onClick={() => navigate(`/estate_details/${id}`)} className="btn bg-royal-blue text-white hover:bg-royal-blue-dark mt-4">View Property</button>
        </div>
      </div>
    </div>
  );
};

EstateCard.propTypes = {
  estate: PropTypes.object
};

export default EstateCard;