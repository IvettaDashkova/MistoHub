import Modal from 'react-modal';
import Header from '/src/components/Header/Header';
import { ZibraniKoshti } from '../../components/ZibraniKoshti/ZibraniKoshti';
import Visualization from '../../components/Visualization/Visualization';

Modal.setAppElement('#root');

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Visualization />
        <ZibraniKoshti />
      </main>
    </>
  );
};

export default HomePage;
