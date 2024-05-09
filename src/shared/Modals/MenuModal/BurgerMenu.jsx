import MediaQuery from 'react-responsive';
import Navigation from './Navigation';
import Iconsvg from '../../../components/Icon/Icon';
import SocialBlock from '../../../shared/SocialBlock/SocialBlock';
import {
  BottomContainer,
  BtnContainer,
  BtnGoIt,
  BtnSupport,
  FlexContainer,
  ImgContainer,
  StyledMenu,
  StyledText,
  TopContainer,
} from './BurgerMenu.styled';

const BurgerMenu = ({ controlsMenuModal }) => {
  const { activeSection, isModalOpen, openModal, closeModal } =
    controlsMenuModal;

  const customStyles = {
    top: '0',
    left: '0',
    overlay: { zIndex: '100' },
  };

  return (
    <StyledMenu
      style={customStyles}
      isOpen={isModalOpen.menu_modal}
      onRequestClose={() => closeModal('menu_modal')}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={false}
    >
      <TopContainer>
        <StyledText>Меню</StyledText>
        <BtnContainer>
          <BtnSupport type="button" onClick={() => openModal('join_modal')}>
            Підтримати проєкт
          </BtnSupport>
          <button
            type="button"
            title="Закрити вікно"
            onClick={() => closeModal('menu_modal')}
            className="close-button"
          >
            <span>Закрити</span>
            <Iconsvg iconName="close" width="14" height="14" />
          </button>
        </BtnContainer>
      </TopContainer>

      <FlexContainer>
        <Navigation closeModal={closeModal} activeSection={activeSection} />
        <ImgContainer>
          <Iconsvg iconName="misto-hub-logo" width="357" height="121" />
        </ImgContainer>
      </FlexContainer>
      <div>
        <BottomContainer>
          <span>
            <StyledText>© ГО «МІСТО ХАБ»</StyledText>
          </span>
          <StyledText>Всі права захищені</StyledText>
          <StyledText>|</StyledText>
          <BtnGoIt type="button" onClick={() => openModal('team_modal')}>
            <span>Poзроблено студентами</span>
            <Iconsvg iconName="logoGoIT" width="100" height="30" />
          </BtnGoIt>
        </BottomContainer>

        <MediaQuery maxWidth={767}>
          <SocialBlock sectionName="menu" />
        </MediaQuery>
      </div>
    </StyledMenu>
  );
};

export default BurgerMenu;
