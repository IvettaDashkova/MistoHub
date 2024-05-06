import BackgroundVectors from './BackgroundVectors/BackgroundVectors';
import CoFounder from './CoFounder/CoFounder';
import 'swiper/css';
import {
  List,
  SectionContainer,
  SectionSpan,
  SectionTitle,
  CoFoundersContainer,
} from './CoFounders.styled';
import data from '../../constants/cofoundersData';

const CoFounders = () => {
  return (
    <SectionContainer id="founders">
      <CoFoundersContainer>
        <SectionTitle>
          Співзасновники <br />
          <SectionSpan>містохаб</SectionSpan>
        </SectionTitle>

        <List>
          {data.map((person) => (
            <li key={person.id}>
              <CoFounder person={person} />
            </li>
          ))}
        </List>

        <BackgroundVectors />
      </CoFoundersContainer>
    </SectionContainer>
  );
};

export default CoFounders;
