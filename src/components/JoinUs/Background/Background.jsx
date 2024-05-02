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
      <picture>
        <source
          srcSet="/src/assets/JoinUs/images/webp/person-circle@2x.webp"
          type="image/webp"
        />
        <source
          srcSet="/src/assets/JoinUs/images/webp/person-circle.webp"
          type="image/webp"
        />
        <source
          srcSet="/src/assets/JoinUs/images/jpg/person-circle@2x.jpg"
          type="image/jpg"
        />
        <source
          srcSet="/src/assets/JoinUs/images/jpg/person-circle@.jpg"
          type="image/jpg"
        />
        <PersonCircleImage src="/src/assets/JoinUs/images/jpg/person-circle.jpg" />
      </picture>
      <picture>
        <source
          srcSet="/src/assets/JoinUs/images/webp/person-triangle@2x.webp"
          type="image/webp"
        />
        <source
          srcSet="/src/assets/JoinUs/images/webp/person-triangle.webp"
          type="image/wep"
        />
        <source
          srcSet="/src/assets/JoinUs/images/jpg/person-triangle@2x.png"
          type="image/png"
        />
        <source
          srcSet="/src/assets/JoinUs/images/jpg/person-triangle.png"
          type="image/png"
        />
        <PersonTriangleImage src="/src/assets/JoinUs/images/jpg/person-triangle.png" />
      </picture>
      <picture>
        <source
          srcSet="/src/assets/JoinUs/images/webp/person-star@2x.webp"
          type="image/webp"
        />
        <source
          srcSet="/src/assets/JoinUs/images/webp/person-star.webp"
          type="image/webp"
        />
        <source
          srcSet="/src/assets/JoinUs/images/jpg/person-star@2x.png"
          type="image/png"
        />
        <source
          srcSet="/src/assets/JoinUs/images/jpg/person-star.png"
          type="image/png"
        />
        <PersonStarImage src="/src/assets/JoinUs/images/jpg/person-star.png" />
      </picture>
      <picture>
        <source
          srcSet="/src/assets/JoinUs/images/webp/cafe@2x.webp"
          type="image/webp"
        />
        <source
          srcSet="/src/assets/JoinUs/images/webp/cafe.webp"
          type="image/webp"
        />
        <source
          srcSet="/src/assets/JoinUs/images/jpg/cafe@2x.jpg"
          type="image/jpg"
        />
        <source
          srcSet="/src/assets/JoinUs/images/jpg/cafe.jpg"
          type="image/jpg"
        />
        <CafeImage src="/src/assets/JoinUs/images/jpg/cafe.jpg" />
      </picture>
      <picture>
        <source
          srcSet="/src/assets/JoinUs/images/webp/cafe-oval@2x.webp"
          type="image/webp"
        />
        <source
          srcSet="/src/assets/JoinUs/images/webp/cafe-oval.webp"
          type="image/webp"
        />
        <source
          srcSet="/src/assets/JoinUs/images/jpg/cafe-oval@2x.png"
          type="image/png"
        />
        <source
          srcSet="/src/assets/JoinUs/images/jpg/cafe-oval.png"
          type="image/png"
        />
        <CafeOvalImage src="/src/assets/JoinUs/images/jpg/cafe-oval.png" />
      </picture>
      <picture>
        <source
          srcSet="/src/assets/JoinUs/images/webp/cafe-square@2x.webp"
          type="image/webp"
        />
        <source
          srcSet="/src/assets/JoinUs/images/webp/cafe-square.webp"
          type="image/webp"
        />
        <source
          srcSet="/src/assets/JoinUs/images/jpg/cafe-square@2x.png"
          type="image/png"
        />
        <source
          srcSet="/src/assets/JoinUs/images/jpg/cafe-square.png"
          type="image/png"
        />
        <CafeSquareImage src="/src/assets/JoinUs/images/jpg/cafe-square.png" />
      </picture>
    </BackgroundContainer>
  );
};

export default Background;
