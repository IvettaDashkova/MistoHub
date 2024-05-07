import Navigation from '../Navigation/Navigation';
import {
  BottomContainer,
  BtnClose,
  BtnContainer,
  BtnGoIt,
  BtnSupport,
  FlexContainer,
  ImgContainer,
  SocLincContainer,
  StyledMenu,
  StyledText,
  TopContainer,
} from './BurgerMenu.styled';
import Iconsvg from '../Icon/Icon';
import { Link } from 'react-router-dom';
import { useModal } from '../../contexts/ModalHook';

const BurgerMenu = ({ activeSection, isMenuOpen, handleMenuClose }) => {
  const customStyles = {
    top: '0',
    left: '0',
    overlay: { zIndex: '100' },
  };

  const { openModal } = useModal();

  return (
    <StyledMenu
      style={customStyles}
      isOpen={isMenuOpen}
      onRequestClose={handleMenuClose}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={false}
    >
      <TopContainer>
        <StyledText>Меню</StyledText>
        <BtnContainer>
          <BtnSupport type="button" onClick={() => openModal('join_modal')}>
            Підтримати проєкт
          </BtnSupport>
          <StyledText>
            <span>Закрити</span>
          </StyledText>
          <BtnClose type="button" onClick={handleMenuClose}>
            <Iconsvg iconName="close" width="14" height="15" />
          </BtnClose>
        </BtnContainer>
      </TopContainer>

      <FlexContainer>
        <Navigation onClose={handleMenuClose} activeSection={activeSection} />
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
          <StyledText>Poзроблено студентами</StyledText>
          <BtnGoIt type="button" onClick={() => openModal('team_modal')}>
            <Iconsvg iconName="logoGoIT" width="100" height="30" />
          </BtnGoIt>
        </BottomContainer>

        <SocLincContainer>
          <Link
            to="https://www.instagram.com/mistohub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Iconsvg iconName="instagram-menu" width="36" height="36" />
          </Link>
          <Link
            to="https://www.facebook.com/mistohub/?locale=uk_UA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Iconsvg iconName="facebook-menu" width="36" height="36" />
          </Link>
        </SocLincContainer>
      </div>
    </StyledMenu>
  );
};

export default BurgerMenu;
