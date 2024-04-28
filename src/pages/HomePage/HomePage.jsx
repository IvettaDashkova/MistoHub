import Modal from 'react-modal';
import { ZibraniKoshti } from '../../components/ZibraniKoshti/ZibraniKoshti';
import Visualization from '../../components/Visualization/Visualization';

Modal.setAppElement('#root');

const HomePage = () => {
  return (
    <>
      <main>
        <Visualization />
        <ZibraniKoshti />
      </main>
    </>
  );
};

export default HomePage;
