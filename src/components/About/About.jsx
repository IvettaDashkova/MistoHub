import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {  AboutContainer } from './About.styled';

export const About = () => {
  return (
      <AboutContainer>
        <p className="about-project">Про проєкт</p>

        <h2 className="about-title">
          <span className="accent">МІСТОХАБ</span> це
        </h2>

        <Swiper
          wrapperTag="ul"
          wrapperClass="about-list"
          className="swiper"
          resizeObserver={true}
          onResize={(swiper) => {
            swiper.slideTo(0);
            swiper.update();
          }}
          breakpoints={{
            1440: {
              slidesPerView: 3,
              initialSlide: 0,
              slideTo: 0,
              enabled: true,
              spaceBetween: 0,
              grid: {
                row: 1,
              }
            },
            768: {
              slidesPerView: 2,
              initialSlide: 0,
              slideTo: 0,
              enabled: true,
              spaceBetween: '16px',
              allowTouchMove: true,
              grid: {
                row: 1,
              },
              pagination: {
                enabled: true,
                clickable: true,
              }
            },
          }}
          slidesPerView={1}
          allowTouchMove={false}
          grid={{
            rows: 3,
          }}
          initialSlide={0}
          enabled={true}
          pagination={{
            enabled: false,
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

        <p className="about-info">
          80% прибутку <span className="accent">МІСТОХАБ</span> буде спрямовано
          на фінансування соціальних проєктів містян
        </p>
      </AboutContainer>
  );
};
