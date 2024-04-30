import Modal from 'react-modal';
import Header from '/src/components/Header/Header';
import { ZibraniKoshti } from '../../components/ZibraniKoshti/ZibraniKoshti';
import Footer from '../../components/Footer/Footer';

Modal.setAppElement('#root');

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <ZibraniKoshti />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
