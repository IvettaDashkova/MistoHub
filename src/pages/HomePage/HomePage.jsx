import Modal from 'react-modal';
import { About } from '../../components/About/About';
import { ZibraniKoshti } from '../../components/ZibraniKoshti/ZibraniKoshti';

Modal.setAppElement('#root');

const HomePage = () => {
  return (
    <>
      <main>
        <About />
        <ZibraniKoshti />
      </main>
    </>
  );
};

export default HomePage;