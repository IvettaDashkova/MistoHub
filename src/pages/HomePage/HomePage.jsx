import Modal from 'react-modal';
import Header from '/src/components/Header/Header';
import { ZibraniKoshti } from '../../components/ZibraniKoshti/ZibraniKoshti';
import HeroSection from '/src/components/HeroSection/HeroSection';
import JoinModal from '/src/components/JoinModal/JoinModal';

Modal.setAppElement('#root');

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ZibraniKoshti />
      </main>
      <JoinModal />
    </>
  );
};

export default HomePage;
