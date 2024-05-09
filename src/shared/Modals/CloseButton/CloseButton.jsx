import Iconsvg from '../../../components/Icon/Icon';
import { StyledButton } from './CloseButton.styled';

const CloseButton = ({ onClose, styles }) => {
  return (
    <StyledButton
      type="button"
      title="Закрити вікно"
      onClick={onClose}
      className={styles}
    >
      <span>Закрити</span>
      <Iconsvg iconName="close" width="14" height="14" />
    </StyledButton>
  );
};

export default CloseButton;
