import Modal from 'react-modal';
import Header from '/src/components/Header/Header';
import AboutProject from '../../components/About/AboutProject';
import { ZibraniKoshti } from '../../components/ZibraniKoshti/ZibraniKoshti';
import HeroSection from '/src/components/HeroSection/HeroSection';
import JoinModal from '/src/components/JoinModal/JoinModal';
import CoFounders from '../../components/CoFounders/CoFounders';

Modal.setAppElement('#root');

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutProject />
        <ZibraniKoshti />
        <CoFounders />
      </main>
      <JoinModal />
    </>
  );
};

export default HomePage;
