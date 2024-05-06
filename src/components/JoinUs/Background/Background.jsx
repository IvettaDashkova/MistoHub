import { BackgroundContainer } from './Background.styled';
import { images } from '../../../constants/JoinUsBackground';

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
