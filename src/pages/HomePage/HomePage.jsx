import Modal from 'react-modal';

import { ZibraniKoshti } from '/src/components/ZibraniKoshti/ZibraniKoshti';
import { About } from '/src/components/About/About';

Modal.setAppElement('#root');

const HomePage = () => {
  return (
    <>
      <main>
        <About />
        <ZibraniKoshti />
      </main>
    </>
  );
};

export default HomePage;
