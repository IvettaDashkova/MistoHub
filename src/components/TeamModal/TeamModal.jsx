import Modal from 'react-modal';
import { TeamModalStyled } from './TeamModal.styled';
import Developer from './Developer';
import Iconsvg from '../Icon/Icon';
import { useModal } from '/src/contexts/ModalHook';
import data from './develops.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const TeamModal = () => {
  const { isModalOpen, closeModal } = useModal();
  return (
    <TeamModalStyled isOpen={isModalOpen} onRequestClose={closeModal}>
      <div className="dev-modal-up">
        <span>Команда</span>
        <button className="сloseBtn" type="button" onClick={closeModal}>
          <span className="сloseText">Закрити</span>
          <Iconsvg
            width="12"
            height="12"
            iconName="icon-close"
            styles="icon-close"
          />
        </button>
      </div>
      <h2>
        <span className="orange-el">Команда</span>, що створила сайт
      </h2>
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
        slidesPerView={2}
        initialSlide={0}
        spaceBetween={10}
        enabled={true}
        navigation={{
          nextEl: '.next-btn',
          prevEl: '.prev-btn',
        }}
        modules={[Navigation]}
      >
        {data.map((person) => (
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
      <div className="nav-control">
        <button type="button" className="prev-btn">
          Prev
        </button>
        <button type="button" className="next-btn">
          Next
        </button>
      </div>
    </TeamModalStyled>
  );
};

export default TeamModal;
