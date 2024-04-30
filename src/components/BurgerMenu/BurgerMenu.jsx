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
import { useModal } from '../../contexts/ModalHook';
import { links } from '../Navigation/links';

const BurgerMenu = () => {
  const { isModalOpen, closeModal } = useModal();

  const customStyles = {
    content: {
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
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
        <Navigation links={links} onClose={closeModal} />
        <ImgContainer>
          <Iconsvg iconName="mistohub" />
        </ImgContainer>
      </FlexContainer>
      <div>
        <BottomContainer>
          <span>
            <StyledText>ГО МІСТО ХАБ</StyledText>
          </span>
          <StyledText>Всі права захищені</StyledText>
          <StyledText>|</StyledText>
          <StyledText>Poзроблено студентами</StyledText>
          <BtnGoIt>
            <Iconsvg iconName="goit" width="100" height="30" />
          </BtnGoIt>
        </BottomContainer>

        <SocLincContainer>
          <a
            href=" https://www.instagram.com/mistohub "
            target="_blank"
            rel="noreferrer"
          >
            <Iconsvg iconName="instagram" width="36" height="36" />
          </a>
          <a
            href="https://www.facebook.com/mistohub/?locale=uk_UA"
            target="_blank"
            rel="noreferrer"
          >
            <Iconsvg iconName="facebook" width="36" height="36" />
          </a>
        </SocLincContainer>
      </div>
    </StyledMenu>
  );
};

export default BurgerMenu;