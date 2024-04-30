import Modal from 'react-modal';
import { About } from '../../components/About/About';
import Header from '/src/components/Header/Header';
import { ZibraniKoshti } from '../../components/ZibraniKoshti/ZibraniKoshti';

Modal.setAppElement('#root');

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <ZibraniKoshti />
      </main>
    </>
  );
};

export default HomePage;