import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Developer from './Developer';
import data from '/src/constants/developsData.js';

const SwiperComponent = () => {
  const shuffle = (data) => {
    return data.sort(function () {
      return Math.random() - 0.5;
    });
  };

  const shuffledData = shuffle(data);
  return (
    <Swiper
      wrapperTag="ul"
      wrapperClass="list"
      className="swiper"
      resizeObserver={true}
      breakpoints={{
        1440: {
          slidesPerView: 5,
          spaceBetween: 40,
          initialSlide: 0,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
          initialSlide: 0,
        },
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
          initialSlide: 0,
        },
      }}
      slidesPerView={4}
      initialSlide={0}
      spaceBetween={10}
      enabled={true}
      navigation={{
        nextEl: '.next-btn',
        prevEl: '.prev-btn',
      }}
      modules={[Navigation]}
    >
      {shuffledData.map((person) => (
        <SwiperSlide tag="li" className="item" key={person.id}>
          <Developer
            name={person.name}
            role={person.role}
            link={person.link}
            jpg={person.jpg}
            jpgx2={person.jpgx2}
            webp={person.webp}
            webpx2={person.webpx2}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
