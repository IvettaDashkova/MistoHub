import InvestorsBlock from '../../components/investors/InvestorsBlock';
import Modal from 'react-modal';
import { ZibraniKoshti } from '../../components/ZibraniKoshti/ZibraniKoshti';

Modal.setAppElement('#root');

const HomePage = () => {
  return (
    <>
      <main>
        <ZibraniKoshti />
        <InvestorsBlock />
      </main>
    </>
  );
};

export default HomePage;
