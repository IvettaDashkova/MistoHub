import Modal from 'react-modal';
import { ZibraniKoshti } from '../../components/ZibraniKoshti/ZibraniKoshti';
import HeroSection from '/src/components/HeroSection/HeroSection';
import JoinModal from '/src/components/JoinModal/JoinModal';
import Container from '../../shared/Container/Container';
import Icon from '../../components/Icon/Icon';

Modal.setAppElement('#root');

const HomePage = () => {
  return (
    <>
      {/* <Container>
        <Icon width="40" height="30" iconName="Vector" styles="vector-svg" />

        <h1>Home Page</h1>
        {goalData && (
          <>
            <p>{goalData.raised}</p> <p>{goalData.goal}</p>
          </>
        )}
        {companiesData && <img src={formImgURL(companiesData[0].logoURL)} />}
        {peopleData && <img src={formImgURL(peopleData[0].imageURL)} />}
        <VirtualTour />
        <ZibraniKoshti />
      </Container> */}
      <main>
        <HeroSection />
        <ZibraniKoshti />
      </main>
      <JoinModal />
    </>
  );
};

export default HomePage;
