import InvestorsBlock from '../../components/investors/InvestorsBlock';
import Modal from 'react-modal';
import Header from '/src/components/Header/Header';
import AboutProject from '../../components/About/AboutProject';
import { ZibraniKoshti } from '../../components/ZibraniKoshti/ZibraniKoshti';

Modal.setAppElement('#root');

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <AboutProject />
        <ZibraniKoshti />
        <InvestorsBlock />
      </main>
    </>
  );
};

export default HomePage;