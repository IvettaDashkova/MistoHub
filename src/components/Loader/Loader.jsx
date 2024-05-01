import { LoaderContainer, Text } from './Loader.styled';
import Iconsvg from '../Icon/Icon';


const Loader = () => {
    return (
    <LoaderContainer>
      <Iconsvg  width="38" height="35" iconName="house" styles="house-svg"/>
      <Text>Місто Хаб</Text>
      <Iconsvg width="40" height="35" iconName="wave" styles="wave-svg"/>
    </LoaderContainer>
  );
};
export default Loader;