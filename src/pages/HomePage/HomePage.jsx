import Modal from 'react-modal';
import { ZibraniKoshti } from '../../components/ZibraniKoshti/ZibraniKoshti';
import Footer from '../../components/Footer/Footer';

Modal.setAppElement('#root');

const HomePage = () => {
  return (
    <>
      <main>
        <ZibraniKoshti />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
