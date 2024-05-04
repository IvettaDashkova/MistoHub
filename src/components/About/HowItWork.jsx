import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useModal } from '../../contexts/ModalHook';

import { HowItWorkBackground, HowItWorkContainer } from './HowItWork.styled';

export const HowItWork = () => {
  const bg = useRef(null);
  const { openModal } = useModal();

  useEffect(() => {
    const setBackgroundPosition = () => {
      const width = window.innerWidth;
      let positionX = 0;
      if (width >= 1440) {
        positionX = (width - 1440)/2 - 335;
      }else if(width >= 768 && width < 1440) {
        positionX = (width - 768)/2 - 393;
      }else{
        positionX = (width - 375)/2 - 194;
      }
      bg.current.style.backgroundPosition = `left ${positionX}px center`;
    }
      window.addEventListener('resize', setBackgroundPosition);
      setBackgroundPosition();

    return () => window.removeEventListener('resize', setBackgroundPosition);

  });

  return (
    <HowItWorkBackground ref={bg}>
      <HowItWorkContainer>
        <div className="container-inner">
          <h2 className="how-it-work-title">Як це працює?</h2>
            <Swiper
              wrapperTag="ul"
              wrapperClass="how-it-work-list"
              className="swiper"
              resizeObserver={true}
              onResize={(swiper) => {
                swiper.slideTo(0);
                swiper.update();
              }}
              breakpoints={{
                768: {
                  slidesPerView: 5,
                  enabled: true,
                  initialSlide: 0,
                  slideTo: 0,
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
              enabled={true}
              initialSlide = {0}
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
                  У відновленій будівлі відкривається МІСТОХАБ, в якому
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
          <button className="how-it-work-btn" 
          type="button"
          onClick={() => openModal('join_modal')}
          >
            Приєднатися
          </button>
        </div>
      </HowItWorkContainer>
    </HowItWorkBackground>
  );
};
