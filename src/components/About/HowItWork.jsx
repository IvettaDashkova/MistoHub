import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { HowItWorkSection } from './HowItWork.styled';

export const HowItWork = () => {

  return (
    <HowItWorkSection id="how-it-work">
      <div className="container">
        <div className="container-inner">
          <h2 className="how-it-work-title">Як це працює?</h2>
            <Swiper
              wrapperTag="ul"
              wrapperClass="how-it-work-list"
              className="swiper"
              breakpoints={{
                768: {
                  enabled: false,
                  pagination: {
                    enabled: false,
                  },
                  spaceBetween: 0,
                },
              }}
              slidesPerView={1}
              grid={{
                row: 1,
              }}
              resizeObserver={true}
              enabled={true}
              pagination={{
                enabled: true,
                clickable: true,
              }}
              spaceBetween={16}
              modules={[Pagination]}
            >
              <SwiperSlide tag="li" className="how-it-work-item">
                <div className="how-it-work-number">1</div>
                <p className="how-it-work-text">
                  Люди і компанії вкладають кошти у відновлення історичної
                  будівлі <span className="accent">МІСТОХАБ</span>
                </p>
              </SwiperSlide>
              <SwiperSlide tag="li" className="how-it-work-item">
                <div className="how-it-work-number">2</div>
                <p className="how-it-work-text">
                  У відновленій будівлі відкривається МІСТОХАБ в якому
                  функціонують:{' '}
                  <span className="accent">
                    Кафе, Крамниця локальних виробників Містошоп, Івент-простір
                  </span>{' '}
                  та генерують прибуток
                </p>
              </SwiperSlide>
              <SwiperSlide tag="li" className="how-it-work-item">
                <div className="how-it-work-number">3</div>
                <p className="how-it-work-text">
                  80% прибутку передається у Фонд міських ініціатив{' '}
                  <span className="accent">МІСТОХАБу</span>
                </p>
              </SwiperSlide>
              <SwiperSlide tag="li" className="how-it-work-item">
                <div className="how-it-work-number">4</div>
                <p className="how-it-work-text">
                  <span className="accent">Фонд міських ініціатив</span>{' '}
                  оголошує конкурс проєктів містян, a імпакт-інвестори обирають
                  найкращі ідеї
                </p>
              </SwiperSlide>
              <SwiperSlide tag="li" className="how-it-work-item">
                <div className="how-it-work-number">5</div>
                <p className="how-it-work-text">
                  <span className="accent">Фонд міських ініціатив</span>{' '}
                  фінансує проєкти переможців
                </p>
              </SwiperSlide>
            </Swiper>
          <button className="how-it-work-btn" type="button">
            Приєднатися
          </button>
        </div>
      </div>
    </HowItWorkSection>
  );
};
