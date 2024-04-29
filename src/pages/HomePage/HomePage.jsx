import Modal from 'react-modal';
import { Building } from '../../components/About/Building';
import { ZibraniKoshti } from '../../components/ZibraniKoshti/ZibraniKoshti';

Modal.setAppElement('#root');

const HomePage = () => {
  return (
    <>
      <main>
        <Building />
        <ZibraniKoshti />
      </main>
    </>
  );
};

export default HomePage;
