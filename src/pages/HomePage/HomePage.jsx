
import Modal from 'react-modal';
import Header from '/src/components/Header/Header';
import AboutProject from '../../components/About/AboutProject';
import { ZibraniKoshti } from '../../components/ZibraniKoshti/ZibraniKoshti';
import CoFounders from '../../components/CoFounders/CoFounders';

Modal.setAppElement('#root');

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <AboutProject />
        <ZibraniKoshti />
        <CoFounders />
      </main>
    </>
  );
};

export default HomePage;