import { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import TourModal from './TourModal';
import { images } from './ImageImportsVisualization';
import {
  ContainerVisual,
  TitleContainer,
  CardsContainer,
  Card,
  CardTitle,
  ButtonTour,
  Arrow,
  LeftArrow,
  RightArrow,
} from './Visualization.styled';
import Iconsvg from '../Icon/Icon';

const Visualization = () => {
  // визначення ширини екрану
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  // Стан для поточної картки та відкритого туру
  const [currentCard, setCurrentCard] = useState(0);
  const [isTourOpen, setIsTourOpen] = useState([false, false]);
  //  ref для фотосфери
  const photoSphereRef = useRef();
  //  встановлення  зображення в залежності від ширини екрану
  const setImageSrc = (cardIndex) => {
    if (isDesktop) {
      return images[cardIndex].src.desktop;
    } else if (isTablet) {
      return images[cardIndex].src.tablet;
    } else if (isMobile) {
      return images[cardIndex].src.mobile;
    }
  };
  //  встановлення ретина зображення  в залежності від ширини екрану
  const setImageSrcSet = (cardIndex) => {
    if (isDesktop) {
      return images[cardIndex].srcSet.desktop;
    } else if (isTablet) {
      return images[cardIndex].srcSet.tablet;
    } else if (isMobile) {
      return images[cardIndex].srcSet.mobile;
    }
  };
  //  оновлення поточної картки при зміні розміру вікна
  useEffect(() => {
    const handleResize = () => {
      setCurrentCard(currentCard);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentCard]);
  //  перехід до наступної картки
  const nextCard = () => {
    if (
      !isTourOpen.some((open) => open) &&
      currentCard < images.length - (isDesktop ? 2 : 1)
    ) {
      setCurrentCard(currentCard + 1);
    }
  };
  //  перехід до попередньої картки
  const prevCard = () => {
    if (!isTourOpen.some((open) => open) && currentCard > 0) {
      setCurrentCard(currentCard - 1);
    }
  };
  // відкриття та закриття туру
  const toggleTour = (index) => {
    setIsTourOpen(isTourOpen.map((open, i) => (i === index ? !open : false)));
  };
  // розмір іконки в залежності від ширини екрану
  const isDesktopOrLarger = useMediaQuery({ minWidth: 1440 });
  const isTabletOrLarger = useMediaQuery({ minWidth: 768 });
  const iconSize = isDesktopOrLarger ? '30' : isTabletOrLarger ? '30' : '22';

  return (
    <ContainerVisual>
      <TitleContainer>Як виглядатиме простір?</TitleContainer>
      <CardsContainer>
        {images
          .slice(currentCard, currentCard + (isDesktop ? 2 : 1))
          .map((image, index) => (
            <Card
              key={index}
              style={{
                backgroundImage: `url('${setImageSrc((currentCard + index) % images.length)}')`,
                backgroundSize: 'cover',
              }}
            >
              <img
                src={setImageSrc((currentCard + index) % images.length)} // звичайна картинка
                srcSet={setImageSrcSet((currentCard + index) % images.length)} // ретина
                alt={image.title}
                style={{ display: 'none' }}
              />
              {!isTourOpen[index] ? (
                <div>
                  <CardTitle>{image.title}</CardTitle>
                  <ButtonTour onClick={() => toggleTour(index)}>
                    Віртуальний тур
                  </ButtonTour>
                </div>
              ) : (
                <TourModal
                  ref={photoSphereRef}
                  image={image.tourImage}
                  onClose={() => toggleTour(index)}
                />
              )}
            </Card>
          ))}
      </CardsContainer>
      <Arrow>
        <LeftArrow
          type="button"
          className={`${currentCard > 0 ? 'enabled' : ''}`}
          onClick={prevCard}
        >
          <Iconsvg width={iconSize} height={iconSize} iconName="icon-arrow-left" />
        </LeftArrow>
        <RightArrow
          type="button"
          className={`${currentCard < images.length - (isDesktop ? 2 : 1) ? 'enabled' : ''}`}
          onClick={nextCard}
        >
          <Iconsvg
            width={iconSize}
            height={iconSize}
            iconName="icon-arrow-right"
          />
        </RightArrow>
      </Arrow>
    </ContainerVisual>
  );
};

export default Visualization;
