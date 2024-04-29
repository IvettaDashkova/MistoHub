import Modal from 'react-modal';
import { HowItWork } from '../../components/About/HowItWork';
import { ZibraniKoshti } from '../../components/ZibraniKoshti/ZibraniKoshti';

Modal.setAppElement('#root');

const HomePage = () => {
  return (
    <>
      <main>
        <HowItWork />
        <ZibraniKoshti />
      </main>
    </>
  );
};

export default HomePage;
