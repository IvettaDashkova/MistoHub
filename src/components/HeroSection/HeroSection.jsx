import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { heroData } from '/src/constants/dataHeroSwiper.js';
import { HeroSectionStyled } from '/src/components/HeroSection/HeroSection.styled';
import { HeroContainer } from '/src/components/HeroSection/HeroSection.styled';
import Icon from '/src/components/Icon/Icon';

const HeroSection = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.on('slideChange', () => {
        setIsBeginning(swiperRef.current.swiper.isBeginning);
        setIsEnd(swiperRef.current.swiper.isEnd);
      });
    }
  }, []);

  const slideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <HeroSectionStyled>
      <HeroContainer>
        <Swiper className="my-swiper" navigation={true}>
          {heroData.map((item, index) => (
            <SwiperSlide key={index}>
              <picture className="hero-img">
                <source
                  srcSet={`${item.imgWebP1} 1x, ${item.imgWebP2} 2x`}
                  media="(max-width:1440px)"
                  type="image/webp"
                />
                <source
                  srcSet={`${item.imgPng1} 1x, ${item.imgPng2} 2x`}
                  media="(max-width:1440px)"
                  type="image/png"
                />
                <img src={item.imgPng1} alt={item.alt} />
              </picture>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-navigation">
          <button
            className={`swiper-btn-prev ${isBeginning ? 'disabled' : ''}`}
            onClick={slidePrev}
            disabled={isBeginning}
          >
            <Icon iconName="arrow-left2" />
          </button>
          <button
            className={`swiper-btn-next ${isEnd ? 'disabled' : ''}`}
            onClick={slideNext}
            disabled={isEnd}
          >
            <Icon iconName="arrow-right2" />
          </button>
        </div>
        <h1 className="hero-title">
          <span>Містохаб -</span> створюємо простір розвитку міста
        </h1>
      </HeroContainer>
    </HeroSectionStyled>
  );
};

export default HeroSection;
