import { Container } from './HomePage.styled';
import VirtualTour from '../../components/VirtualTour/VirtualTour';
import HeroSection from '../../components/HeroSection/HeroSection';
import JoinModal from '../../components/JoinModal/JoinModal';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Container>
        <VirtualTour />
      </Container>
      <JoinModal />
    </>
  );
};

export default HomePage;
