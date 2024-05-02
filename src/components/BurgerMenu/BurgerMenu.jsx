import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
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
import { useModal } from '../../contexts/ModalHook';
import links from '../BurgerMenu/links.json';

const BurgerMenu = ({ activeSection }) => {
  const { isModalOpen, closeModal } = useModal();

  const customStyles = {
    top: '0',
    left: '0',
    overlay: { zIndex: '2' },
    bodyOpenClassName: 'modal-open',
  };

  StyledMenu.setAppElement('#root');

  return (
    <StyledMenu
      style={customStyles}
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={false}
    >
      <TopContainer>
        <StyledText>Меню</StyledText>
        <BtnContainer>
          <BtnSupport>Підтримати проєкт</BtnSupport>
          <StyledText>
            <span>Закрити</span>
          </StyledText>
          <BtnClose onClick={closeModal}>
            <Iconsvg iconName="close" width="14" height="15" />
          </BtnClose>
        </BtnContainer>
      </TopContainer>

      <FlexContainer>
        <Navigation
          links={links}
          onClose={closeModal}
          activeSection={activeSection}
        />
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
          <BtnGoIt>
            <Iconsvg iconName="go-it" width="100" height="30" />
          </BtnGoIt>
        </BottomContainer>

        <SocLincContainer>
          <Link
            to="https://www.instagram.com/mistohub"
            target="_blank"
            rel="noreferrer"
          >
            <Iconsvg iconName="instagram-menu" width="36" height="36" />
          </Link>
          <Link
            to="https://www.facebook.com/mistohub/?locale=uk_UA"
            target="_blank"
            rel="noreferrer"
          >
            <Iconsvg iconName="facebook-menu" width="36" height="36" />
          </Link>
        </SocLincContainer>
      </div>
    </StyledMenu>
  );
};

export default BurgerMenu;
