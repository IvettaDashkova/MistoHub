import BackgroundVectors from './BackgroundVectors/BackgroundVectors';
import CoFounder from './CoFounder/CoFounder';
import 'swiper/css';
import {
  List,
  SectionContainer,
  SectionSpan,
  SectionTitle,
} from './CoFounders.styled';
import data from './cofounders.json';

const CoFounders = () => {
  return (
    <SectionContainer>
      <SectionTitle>
        Співзасновники <br />
        <SectionSpan>містохаб</SectionSpan>
      </SectionTitle>

      <List>
        {data.map((person) => (
          <li key={person.id}>
            <CoFounder
              img={person.img}
              instagram={person.instagram}
              facebook={person?.facebook}
              name={person.name}
              description={person.description}
            />
          </li>
        ))}
      </List>

      <BackgroundVectors />
    </SectionContainer>
  );
};

export default CoFounders;
