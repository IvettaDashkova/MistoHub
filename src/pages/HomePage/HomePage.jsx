import Modal from 'react-modal';
import Header from '/src/components/Header/Header';
import { ZibraniKoshti } from '../../components/ZibraniKoshti/ZibraniKoshti';
import JoinUs from '../../components/JoinUs/JoinUs';

Modal.setAppElement('#root');

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <ZibraniKoshti />
        <JoinUs />
      </main>
    </>
  );
};

export default HomePage;
