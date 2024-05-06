import { DevelopersModalStyled, ModalDown } from './DevelopersModal.styled';
import Iconsvg from '../Icon/Icon';
import { useModal } from '/src/contexts/ModalHook';
import SwiperComponent from './SwiperComponent';

const DevelopersModal = () => {
  const { isModalOpen, closeModal } = useModal();

  return (
    <DevelopersModalStyled
      onRequestClose={() => closeModal('team_modal')}
      isOpen={isModalOpen.team_modal}
      onClose={() => closeModal('team_modal')}
      shouldCloseOnOverlayClick={true}
      style={{
        overlay: {
          zIndex: '200',
        },
      }}
      bodyOpenClassName="modal-open"
    >
      <div className="bg-container">
        <div className="content-container">
          <div className="dev-modal-up">
            <span>Команда</span>
            <button
              className="сloseBtn"
              type="button"
              onClick={() => closeModal('team_modal')}
            >
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
          <SwiperComponent />
          <div className="nav-control">
            <button type="button" className="prev-btn">
              <Iconsvg
                width="17"
                height="13"
                iconName="icon-arrow-back"
                styles="icon-arrow"
              />
            </button>
            <button type="button" className="next-btn">
              <Iconsvg
                width="17"
                height="13"
                iconName="icon-arrow-next"
                styles="icon-arrow"
              />
            </button>
          </div>

          <ModalDown>
            <span>&copy; ГО &laquo;МІСТО ХАБ&raquo;</span>
            <span className="after-el">Всі права захищені</span>
            <div>
              <span>Розроблено студентами</span>
              <Iconsvg
                width="59"
                height="18"
                iconName="icon-logo-goit"
                styles="icon-logo-goit"
              />
            </div>
          </ModalDown>
        </div>
      </div>
    </DevelopersModalStyled>
  );
};

export default DevelopersModal;
