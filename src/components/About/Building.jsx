import { BuildingSection, BuildingText, BuildingTitle, Mistohub, BuildingImg, BIconOne, BIconTwo, BIconThree, BIconFour } from './Building.styled';
import building from '../../assets/about/building.jpg';
import building2x from '../../assets/about/building@2x.jpg';

const Building = () => {
  return (
    <BuildingSection>
        <BuildingTitle>
        Будівля <Mistohub>МІСТОХАБ</Mistohub> це історична спадщина Полтави
        </BuildingTitle>
        <BuildingText>
        В 1909 році на Спаській, 10 розташовувався перший у Полтаві пивоварний завод та пивниця «Притулок друзів»
        </BuildingText>
        <BuildingImg srcSet={`${building} 1x, ${building2x} 2x`} src={building} alt="Будівля МІСТОХАБ" width="1200" height="753" />
        <BIconOne />
        <BIconTwo />
        <BIconThree />
        <BIconFour />
    </BuildingSection>
  )
}

export default Building