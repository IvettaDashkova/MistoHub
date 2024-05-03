import Modal from 'react-modal';

import Header from '/src/components/Header/Header';
import AboutProject from '../../components/About/AboutProject';
import { ZibraniKoshti } from '../../components/ZibraniKoshti/ZibraniKoshti';
import HeroSection from '/src/components/HeroSection/HeroSection';
import CoFounders from '../../components/CoFounders/CoFounders';
import ModalsManager from '/src/shared/Modals/ModalsManager';

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
      <ModalsManager />
    </>
  );
};

export default HomePage;
