// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import OurSlide from './OurSlide';
import { useEffect, useState } from 'react';

const Banner = () => {
  const [bannerData, setBannerDate] = useState([]);

  useEffect(() => {
    fetch('/banner.json')
      .then(res => res.json())
      .then(data => setBannerDate(data));
  }, []);

  return (
    <section className='mb-10'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          bannerData.map(item => <SwiperSlide key={item.id}><OurSlide data={item} /></SwiperSlide>)
        }
      </Swiper>
    </section>
  );
};

export default Banner;