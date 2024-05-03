import { LoaderContainer, Text } from './Loader.styled';
import Iconsvg from '../Icon/Icon';

const Loader = () => {
  return (
    <LoaderContainer>
      <Iconsvg  width="30%" height="16%" iconName="house" styles="house-svg"/>
      <Text>Місто Хаб</Text>
      <Iconsvg width="30%" height="20%" iconName="wave"  styles="wave-svg"/>
    </LoaderContainer>
  );
};
export default Loader;
