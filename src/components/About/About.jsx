import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { AboutSection, AboutInfo } from './About.styled';

const About = () => {
  return (
    <AboutSection>
      <div className="container">
        <p>Про проект</p>
        <h2>
          <span className="accent">Містохаб</span> це
        </h2>
        <Swiper
          wrapperTag="ul"
          wrapperClass="about-list"
          className='swiper'
          breakpoints={{
            1440: {
              enabled: false,
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
              enabled: true,
            },
            375: {
              slidesPerView: 1,
              enabled: false,
            },
          }}
          pagination={{
            enabled: true,
            clickable: true,
          }}
          modules={[Pagination]}
        >
          <SwiperSlide tag="li" className="about-list-item">
            <div className="about-list-item-number">1</div>
            <h3 className="about-list-item-title">Кафе</h3>
            <p className="about-list-item-text">
              Стане місцем якісного відпочинку, знайомств та генерування ідей.
            </p>
          </SwiperSlide>
          <SwiperSlide tag="li" className="about-list-item">
            <div className="about-list-item-number">2</div>
            <h3 className="about-list-item-title">Івент-простір</h3>
            <p className="about-list-item-text">
              Розвиватиме культурне життя Полтави та стане місцем для
              самореалізації.
            </p>
          </SwiperSlide>
          <SwiperSlide tag="li" className="about-list-item">
            <div className="about-list-item-number">3</div>
            <h3 className="about-list-item-title">Крамниця МІСТОШОП</h3>
            <p className="about-list-item-text">
              Продаватиме унікальні сучасні сувеніри, що відображають дух міста
              та його культурну спадщину.
            </p>
          </SwiperSlide>
        </Swiper>
        <AboutInfo>
          80% прибутку <span className="accent">МІСТОХАБ</span> буде спрямовано
          на фінансування соціальних проєктів містян
        </AboutInfo>
      </div>
    </AboutSection>
  );
};

export default About;
