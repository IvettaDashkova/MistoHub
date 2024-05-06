import { BackgroundContainer } from './Background.styled';
import { images } from '../../../constants/JoinUsBackground';
// import personCircleJpg from '/src/assets/JoinUs/images/jpg/person-circle.jpg';
// import personCircleRetinaJpg from '/src/assets/JoinUs/images/jpg/person-circle@2x.jpg';
// import personTriangleJpg from '/src/assets/JoinUs/images/jpg/person-triangle.png';
// import personTriangleRetinaJpg from '/src/assets/JoinUs/images/jpg/person-triangle@2x.png';
// import personStarJpg from '/src/assets/JoinUs/images/jpg/person-star.png';
// import personStarRetinaJpg from '/src/assets/JoinUs/images/jpg/person-star@2x.png';
// import cafeJpg from '/src/assets/JoinUs/images/jpg/cafe.jpg';
// import cafeRetinaJpg from '/src/assets/JoinUs/images/jpg/cafe@2x.jpg';
// import cafeOvalJpg from '/src/assets/JoinUs/images/jpg/cafe-oval.png';
// import cafeOvalRetinaJpg from '/src/assets/JoinUs/images/jpg/cafe-oval@2x.png';
// import cafeSquareJpg from '/src/assets/JoinUs/images/jpg/cafe-square.png';
// import cafeSquareRetinaJpg from '/src/assets/JoinUs/images/jpg/cafe-square@2x.png';

// import personCircleWebP from '/src/assets/JoinUs/images/webp/person-circle.webp';
// import personCircleRetinaWebP from '/src/assets/JoinUs/images/webp/person-circle@2x.webp';
// import personTriangleWebP from '/src/assets/JoinUs/images/webp/person-triangle.webp';
// import personTriangleRetinaWebP from '/src/assets/JoinUs/images/webp/person-triangle@2x.webp';
// import personStarWebP from '/src/assets/JoinUs/images/webp/person-star.webp';
// import personStarRetinaWebP from '/src/assets/JoinUs/images/webp/person-star@2x.webp';
// import cafeWebP from '/src/assets/JoinUs/images/webp/cafe.webp';
// import cafeRetinaWebP from '/src/assets/JoinUs/images/webp/cafe@2x.webp';
// import cafeOvalWebP from '/src/assets/JoinUs/images/webp/cafe-oval.webp';
// import cafeOvalRetinaWebP from '/src/assets/JoinUs/images/webp/cafe-oval@2x.webp';
// import cafeSquareWebP from '/src/assets/JoinUs/images/webp/cafe-square.webp';
// import cafeSquareRetinaWebP from '/src/assets/JoinUs/images/webp/cafe-square@2x.webp';

const Background = () => {
  return (
    <BackgroundContainer>
      {images.map((image, idx) => (
        <picture key={idx}>
          <source
            srcSet={image.webpRetina}
            type="image/webp"
            media="(min-resolution: 192dpi)"
          />
          <source srcSet={image.webp} type="image/webp" />
          <source
            srcSet={image.jpgRetina}
            type="image/jpg"
            media="(min-resolution: 192dpi)"
          />
          <source srcSet={image.jpg} type="image/jpg" />
          <image.className src={image.jpg} />
        </picture>
      ))}
      {/* <picture>
        <source
          srcSet={personCircleRetinaWebP}
          type="image/webp"
          media="(min-resolution: 192dpi)"
        />
        <source srcSet={personCircleWebP} type="image/webp" />
        <source
          srcSet={personCircleRetinaJpg}
          type="image/jpg"
          media="(min-resolution: 192dpi)"
        />
        <source srcSet={personCircleJpg} type="image/jpg" />
        <PersonCircleImage src={personCircleJpg} />
      </picture>
      <picture>
        <source
          srcSet={personTriangleRetinaWebP}
          type="image/webp"
          media="(min-resolution: 192dpi)"
        />
        <source srcSet={personTriangleWebP} type="image/webp" />
        <source
          srcSet={personTriangleRetinaJpg}
          type="image/jpg"
          media="(min-resolution: 192dpi)"
        />
        <source srcSet={personTriangleJpg} type="image/jpg" />
        <PersonTriangleImage src={personTriangleJpg} />
      </picture>
      <picture>
        <source
          srcSet={personStarRetinaWebP}
          type="image/webp"
          media="(min-resolution: 192dpi)"
        />
        <source srcSet={personStarWebP} type="image/webp" />
        <source
          srcSet={personStarRetinaJpg}
          type="image/jpg"
          media="(min-resolution: 192dpi)"
        />
        <source srcSet={personStarJpg} type="image/jpg" />
        <PersonStarImage src={personStarJpg} />
      </picture>
      <picture>
        <source
          srcSet={cafeRetinaWebP}
          type="image/webp"
          media="(min-resolution: 192dpi)"
        />
        <source srcSet={cafeWebP} type="image/webp" />
        <source
          srcSet={cafeRetinaJpg}
          type="image/jpg"
          media="(min-resolution: 192dpi)"
        />
        <source srcSet={cafeJpg} type="image/jpg" />
        <CafeImage src={cafeJpg} />
      </picture>
      <picture>
        <source
          srcSet={cafeOvalRetinaWebP}
          type="image/webp"
          media="(min-resolution: 192dpi)"
        />
        <source srcSet={cafeOvalWebP} type="image/webp" />
        <source
          srcSet={cafeOvalRetinaJpg}
          type="image/jpg"
          media="(min-resolution: 192dpi)"
        />
        <source srcSet={cafeOvalJpg} type="image/jpg" />
        <CafeOvalImage src={cafeOvalJpg} />
      </picture>
      <picture>
        <source
          srcSet={cafeSquareRetinaWebP}
          type="image/webp"
          media="(min-resolution: 192dpi)"
        />
        <source srcSet={cafeSquareWebP} type="image/webp" />
        <source
          srcSet={cafeSquareRetinaJpg}
          type="image/jpg"
          media="(min-resolution: 192dpi)"
        />
        <source srcSet={cafeSquareJpg} type="image/jpg" />
        <CafeSquareImage src={cafeSquareJpg} />
      </picture> */}
    </BackgroundContainer>
  );
};

export default Background;
