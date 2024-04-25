import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { AboutSection } from './About.styled';

export const About = () => {
  return (
    <AboutSection>
      <div className="container">
        <p className="about-project">Про проєкт</p>

        <h2 className="about-title">
          <span className="accent">Містохаб</span> це
        </h2>

        <Swiper
          wrapperTag="ul"
          wrapperClass="about-list"
          className="swiper"
          observer={true}
          breakpoints={{
            1440: {
              slidesPerView: 3,
              enabled: false,
              autoHeight: true,
              spaceBetween: '24px',
            },
            768: {
              slidesPerView: 2,
              enabled: true,
              autoHeight: true,
              spaceBetween: '16px',
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

        <div className="about-info">
          80% прибутку <span className="accent">МІСТОХАБ</span> буде спрямовано
          на фінансування соціальних проєктів містян
        </div>
      </div>
    </AboutSection>
  );
};
