import Modal from 'react-modal';
import Header from '/src/components/Header/Header';
import AboutProject from '../../components/About/AboutProject';
import { ZibraniKoshti } from '../../components/ZibraniKoshti/ZibraniKoshti';
import Footer from '../../components/Footer/Footer';
import DevelopersModal from '../../components/DevelopersModal/DevelopersModal';

Modal.setAppElement('#root');

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <AboutProject />
        <ZibraniKoshti />
      </main>
      <Footer />
      <DevelopersModal />
    </>
  );
};

export default HomePage;