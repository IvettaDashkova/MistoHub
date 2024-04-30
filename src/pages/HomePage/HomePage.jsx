import Modal from 'react-modal';
import Header from '/src/components/Header/Header';
import { ZibraniKoshti } from '../../components/ZibraniKoshti/ZibraniKoshti';


Modal.setAppElement('#root');

const HomePage = () => {


  return (
    <>
      <Header />
      <main>
        <ZibraniKoshti />
      </main>
    </>
  );
};

export default HomePage;
