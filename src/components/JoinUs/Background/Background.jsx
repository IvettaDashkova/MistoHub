import Iconsvg from '../../Icon/Icon';
import {
  BackgroundContainer,
  PersonCircleImage,
  PersonTriangleImage,
  CafeImage,
  CafeOvalImage,
  CafeSquareImage,
  PersonStarImage,
} from './Background.styled';

const Background = () => {
  return (
    <BackgroundContainer>
      <Iconsvg iconName="join-us-bg" styles={'mainVector'} />
      <PersonCircleImage src="/src/assets/JoinUs/images/person-circle.png" />
      <PersonTriangleImage src="/src/assets/JoinUs/images/person-triangle.png" />
      <PersonStarImage src="/src/assets/JoinUs/images/person-star.png" />
      <CafeImage src="/src/assets/JoinUs/images/cafe.png" />
      <CafeOvalImage src="/src/assets/JoinUs/images/cafe-oval.png" />
      <CafeSquareImage src="/src/assets/JoinUs/images/cafe-square.png" />
    </BackgroundContainer>
  );
};

export default Background;
