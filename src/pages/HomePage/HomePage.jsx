import Modal from 'react-modal';
import { ZibraniKoshti } from '../../components/ZibraniKoshti/ZibraniKoshti';


Modal.setAppElement('#root');

const HomePage = () => {


  return (
    <>
      <main>
        <ZibraniKoshti />
      </main>
    </>
  );
};

export default HomePage;
