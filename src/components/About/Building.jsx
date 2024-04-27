import {
  BuildingSection,
  BIconOne,
  BIconTwo,
  BIconThree,
  BIconFour,
} from './Building.styled';
import building from '../../assets/about/building.jpg';
import building2x from '../../assets/about/building@2x.jpg';
import buildingTablet from '../../assets/about/building-tablet.jpg';
import buildingTablet2x from '../../assets/about/building-tablet@2x.jpg';
import buildingMobile from '../../assets/about/building-mobile.jpg';
import buildingMobile2x from '../../assets/about/building-mobile@2x.jpg';

import buildingWebP from '../../assets/about/building.webp';
import building2xWebP from '../../assets/about/building@2x.webp';
import buildingTabletWebP from '../../assets/about/building-tablet.webp';
import buildingTablet2xWebP from '../../assets/about/building-tablet@2x.webp';
import buildingMobileWebP from '../../assets/about/building-mobile.webp';
import buildingMobile2xWebP from '../../assets/about/building-mobile@2x.webp';

import Container from '../../shared/Container/Container.jsx';


export const Building = () => {
  return (
    <BuildingSection id="building">
      <Container>
        <h2 className="building-title">
          Будівля <span className="accent">МІСТОХАБ</span> це історична спадщина
          Полтави
        </h2>
        <p className="building-text">
          В 1909 році на Спаській, 10 розташовувався перший у Полтаві пивоварний
          завод та пивниця «Притулок друзів»
        </p>
        <div className="building-img-container">
          <picture>
            <source
              type="image/webp"
              media="(max-width: 767px)"
              srcSet={`${buildingMobileWebP} 1x, ${buildingMobile2xWebP} 2x`}
              width="343" height="348"
            />
            <source
              media="(max-width: 767px)"
              srcSet={`${buildingMobile} 1x, ${buildingMobile2x} 2x`}
              width="343" height="348"
            />
            <source
              type="image/webp"
              media="(max-width: 1439px)"
              srcSet={`${buildingTabletWebP} 1x, ${buildingTablet2xWebP} 2x`}
              width="704" height="534"
            />
            <source
              media="(max-width: 1439px)"
              srcSet={`${buildingTablet} 1x, ${buildingTablet2x} 2x`}
              width="704" height="534"
              loading="lazy" decoding="async"
            />
            <source
              type="image/webp"
              srcSet={`${buildingWebP} 1x, ${building2xWebP} 2x`}
              width="1200" height="753"
            />
            <img
              className="building-img"
              srcSet={`${building} 1x, ${building2x} 2x`} 
              src={building}
              alt="Будівля МІСТОХАБ"
              width="1200"
              height="753"
            />
          </picture>
          <BIconOne />
          <BIconTwo />
          <BIconThree />
          <BIconFour />
        </div>
      </Container>
    </BuildingSection>
  );
};
