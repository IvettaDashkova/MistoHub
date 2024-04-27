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
import data from './cofounders.json';

const CoFounders = () => {
  return (
    <SectionContainer>
      <CoFoundersContainer>
        <SectionTitle>
          Співзасновники <br />
          <SectionSpan>містохаб</SectionSpan>
        </SectionTitle>

        <List>
          {data.map((person) => (
            <li key={person.id}>
              <CoFounder
                jpg={person.jpg}
                webp={person.webp}
                instagram={person.instagram}
                facebook={person?.facebook}
                name={person.name}
                description={person.description}
              />
            </li>
          ))}
        </List>

        <BackgroundVectors />
      </CoFoundersContainer>
    </SectionContainer>
  );
};

export default CoFounders;
