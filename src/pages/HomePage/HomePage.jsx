import Modal from 'react-modal';
import Header from '/src/components/Header/Header';
import { ZibraniKoshti } from '../../components/ZibraniKoshti/ZibraniKoshti';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import TestSections from '../../components/ScrollToTopButton/TestSections';

Modal.setAppElement('#root');

const HomePage = () => {
  return (
    <>
      <Header />
      <BurgerMenu />
      <main>
        <ZibraniKoshti />
        <ScrollToTopButton />
        <TestSections />
      </main>
    </>
  );
};

export default HomePage;
