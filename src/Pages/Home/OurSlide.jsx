import PropTypes from 'prop-types';

const OurSlide = ({ data }) => {
  const {image, location} = data;

  return (
    <div className='rounded-xl overflow-hidden relative'>
      <figure className='w-full h-[80vh]'>
        <img className='w-full h-auto' src={image} alt="" />
      </figure>
      <div className='h-full w-full bg-dark absolute top-0 left-0 opacity-50'></div>
      <div className='p-4 text-white absolute left-0 bottom-10'>
        <h1 className='text-4xl mb-5'>{location}</h1>
        <button className='btn px-5 bg-royal-blue hover:bg-royal-blue-dark text-white border-0'>See All</button>
      </div>
    </div>
  );
};

OurSlide.propTypes = {
  data: PropTypes.object
};

export default OurSlide;