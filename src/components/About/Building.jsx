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

export const Building = () => {
  return (
    <BuildingSection id="building">
      <div className="container">
        <h2 className="building-title">
          Будівля <span className="accent">МІСТОХАБ</span> це історична спадщина
          Полтави
        </h2>
        <p className="building-text">
          В 1909 році на Спаській, 10 розташовувався перший у Полтаві пивоварний
          завод та пивниця «Притулок друзів»
        </p>
        <div className="building-img-container">
          {/* <img
            className="building-img"
            srcSet={`${building} 1x, ${building2x} 2x`}
            src={building}
            alt="Будівля МІСТОХАБ"
            width="1200"
            height="753"
          /> */}
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={`${buildingTablet} 1x, ${buildingTablet2x} 2x`}
              width="343" height="348"
            />
            <source
              media="(min-width: 768px and max-width: 1439px)"
              srcSet={`${buildingTablet} 1x, ${buildingTablet2x} 2x`}
              width="704" height="534"
            />
            <source 
              media="(min-width: 1440px)" 
              srcSet={`${building} 1x, ${building2x} 2x`} 
              width="1200" height="753"
            />
            <img
              className="building-img"
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
      </div>
    </BuildingSection>
  );
};
