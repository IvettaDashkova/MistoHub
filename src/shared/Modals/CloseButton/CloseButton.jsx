import Iconsvg from '../../../components/Icon/Icon';
import { StyledButton } from './CloseButton.styled';

const CloseButton = ({ onClose }) => {
  return (
    <StyledButton type="button" title="Закрити вікно" onClick={onClose}>
      <span>Закрити</span>
      <Iconsvg iconName="close-component-btn" width="28" height="28" />
    </StyledButton>
  );
};

export default CloseButton;
