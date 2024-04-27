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


export const Building = () => {
  return (
    <BuildingSection id="building">
      <div className="container">
      
<span className="icon icon_1 medium"></span>
<span className="icon icon_2 large"></span>
<span className="icon icon_1 small"></span>
<div className='ic position_1'></div>
<div className='ic position_2'></div>

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
              media="(max-width: 767px)"
              srcSet={`${buildingMobile} 1x, ${buildingMobile2x} 2x`}
              width="343" height="348"
            />
            <source
              media="(max-width: 1439px)"
              srcSet={`${buildingTablet} 1x, ${buildingTablet2x} 2x`}
              width="704" height="534"
            />
            <img
              className="building-img"
              src={building}
              srcSet={`${building} 1x, ${building2x} 2x`} 
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
