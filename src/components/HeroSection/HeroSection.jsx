import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { HeroStyledСontainer } from './HeroSection.styled.jsx';

const HeroSection = () => {
  return (
    <HeroStyledСontainer>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img
            className="heroImg"
            src="/src/assets/hero/hero1.png"
            srcSet="/src/assets/hero/hero1@2x.png 2x"
            alt="Kitchen 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="heroImg"
            src="/src/assets/hero/hero2.png"
            srcSet="/src/assets/hero/hero2@2x.png 2x"
            alt="Kitchen 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="heroImg"
            src="/src/assets/hero/hero3.png"
            srcSet="/src/assets/hero/hero3@2x.png 2x"
            alt="Kitchen 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="heroImg"
            src="/src/assets/hero/hero4.png"
            srcSet="/src/assets/hero/hero4@2x.png 2x"
            alt="Kitchen 4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="heroImg"
            src="/src/assets/hero/hero5.png"
            srcSet="/src/assets/hero/hero5@2x.png 2x"
            alt="Kitchen 5"
          />
        </SwiperSlide>
      </Swiper>
      <h2>
        <span>Містохаб -</span> створюємо простір розвитку міста
      </h2>
    </HeroStyledСontainer>
  );
};

export default HeroSection;
