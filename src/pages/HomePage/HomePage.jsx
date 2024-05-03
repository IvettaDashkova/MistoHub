import Modal from 'react-modal';
import Header from '/src/components/Header/Header';
import AboutProject from '../../components/About/AboutProject';
import { ZibraniKoshti } from '../../components/ZibraniKoshti/ZibraniKoshti';
import HeroSection from '/src/components/HeroSection/HeroSection';
import CoFounders from '../../components/CoFounders/CoFounders';
import ModalsManager from '/src/shared/Modals/ModalsManager';
import { useModal } from '../../contexts/ModalHook';

Modal.setAppElement('#root');

const HomePage = () => {
  const { openModal } = useModal();
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <button
          type="button"
          onClick={() => {
            console.log('Open TEST modal!');
            openModal('test_modal');
          }}
          style={{ backgroundColor: 'greenyellow' }}
        >
          Open TEST MODAL
        </button>
        <AboutProject />
        <ZibraniKoshti />
        <CoFounders />
      </main>
      <ModalsManager />
    </>
  );
};

export default HomePage;
