import Navigation from '../Navigation/Navigation';
import Modal from 'react-modal';
import {
  BottomContainer,
  BtnClose,
  BtnContainer,
  BtnGoIt,
  BtnSupport,
  FlexContainer,
  ImgContainer,
  SocLincContainer,
  StyledText,
  TopContainer,
} from './BurgerMenu.styled';
import Iconsvg from '../Icon/Icon';

const BurgerMenu = ({ onClose, isOpen, links }) => {
  const customStyles = {
    content: {
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      backgroundColor: '#ffffff',
      padding: '20px 16px',
    },
  };

  Modal.setAppElement('#root');

  return (
    <Modal
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={false}
    >
      <TopContainer>
        <StyledText>Меню</StyledText>
        <BtnContainer>
          <BtnSupport>Підтримати проєкт</BtnSupport>
          <BtnClose onClick={onClose}>
            <Iconsvg iconName="close" width="14" height="15" />
          </BtnClose>
        </BtnContainer>
      </TopContainer>

      <FlexContainer>
        <Navigation links={links} onClose={onClose} />
        <ImgContainer>
          <Iconsvg iconName="mistohub" />
        </ImgContainer>
      </FlexContainer>

      <BottomContainer>
        <StyledText>ГО МІСТО ХАБ</StyledText>
        <StyledText>Всі права захищені</StyledText>
        <StyledText>|</StyledText>
        <StyledText>Poзроблено студентами</StyledText>
        <BtnGoIt>
          <Iconsvg iconName="goit" width="100" height="30" />
        </BtnGoIt>
      </BottomContainer>
      <SocLincContainer>
        <a href="" target="_blank">
          <Iconsvg iconName="instagram" width="36" height="36" />
        </a>
        <a href="" target="_blank">
          <Iconsvg iconName="facebook" width="36" height="36" />
        </a>
      </SocLincContainer>
    </Modal>
  );
};

export default BurgerMenu;
