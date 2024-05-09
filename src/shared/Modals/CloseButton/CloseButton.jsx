import Iconsvg from '../../../components/Icon/Icon';
import { StyledButton } from './CloseButton.styled';

const CloseButton = () => {
  return (
    <StyledButton>
      <span>Закрити</span>
      <Iconsvg iconName="close" width="14" height="14" />
    </StyledButton>
  );
};

export default CloseButton;
