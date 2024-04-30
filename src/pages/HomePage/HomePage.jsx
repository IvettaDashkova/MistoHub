import Modal from 'react-modal';
import Header from '/src/components/Header/Header';
import { ZibraniKoshti } from '../../components/ZibraniKoshti/ZibraniKoshti';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';

Modal.setAppElement('#root');

const HomePage = () => {
  return (
    <>
      <Header />
      <BurgerMenu />
      <main>
        <ZibraniKoshti />
        <ScrollToTopButton />
      </main>
    </>
  );
};

export default HomePage;
