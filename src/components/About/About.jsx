import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import 'swiper/css';
import {
  AboutSection,
  AboutProject,
  AboutTitle,
  Mistohub,
  AboutList,
  AboutItem,
  AboutNumber,
  AboutItemTitle,
  AboutItemText,
  AboutInfo,
} from './About.styled';

const About = () => {
  return (
    <AboutSection>
      <AboutProject>Про проект</AboutProject>
      <AboutTitle>
        <Mistohub>Містохаб</Mistohub> це
      </AboutTitle>
      <AboutList>
        <AboutItem>
          <AboutNumber>1</AboutNumber>
          <AboutItemTitle>Кафе</AboutItemTitle>
          <AboutItemText>
            Стане місцем якісного відпочинку, знайомств та генерування ідей.
          </AboutItemText>
        </AboutItem>
        <AboutItem>
          <AboutNumber>2</AboutNumber>
          <AboutItemTitle>Івент-простір</AboutItemTitle>
          <AboutItemText>
            Розвиватиме культурне життя Полтави та стане місцем для
            самореалізації.
          </AboutItemText>
        </AboutItem>
        <AboutItem>
          <AboutNumber>3</AboutNumber>
          <AboutItemTitle>Крамниця МІСТОШОП</AboutItemTitle>
          <AboutItemText>
            Продаватиме унікальні сучасні сувеніри, що відображають дух міста та
            його культурну спадщину.
          </AboutItemText>
        </AboutItem>
      </AboutList>
      <AboutInfo>
        80% прибутку <Mistohub>МІСТОХАБ</Mistohub> буде спрямовано на
        фінансування соціальних проєктів містян
      </AboutInfo>

      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="swiper"
      >
        <SwiperSlide className='swiper-slide'>Slide 1</SwiperSlide>
        <SwiperSlide className='swiper-slide'>Slide 2</SwiperSlide>
        <SwiperSlide className='swiper-slide'>Slide 3</SwiperSlide>
        <SwiperSlide className='swiper-slide'>Slide 4</SwiperSlide>
        <SwiperSlide className='swiper-slide'>Slide 5</SwiperSlide>
        <SwiperSlide className='swiper-slide'>Slide 6</SwiperSlide>
        <SwiperSlide className='swiper-slide'>Slide 7</SwiperSlide>
        <SwiperSlide className='swiper-slide'>Slide 8</SwiperSlide>
        <SwiperSlide className='swiper-slide'>Slide 9</SwiperSlide>
      </Swiper>

    </AboutSection>
  );
};

export default About;
