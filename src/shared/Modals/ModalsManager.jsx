import Modal from 'react-modal';
import { useModal } from '/src/contexts/ModalHook';

import JoinModal from '/src/shared/Modals/JoinModal/JoinModal';

const ModalsManager = () => {
  const { isModalOpen, closeModal } = useModal();

  return (
    <>
      <JoinModal />
      <Modal
        isOpen={isModalOpen.test_modal}
        onRequestClose={() => closeModal('test_modal')}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        <h2>Hello</h2>
        <button onClick={() => closeModal('test_modal')}>close</button>
        <div>I am a TEST modal</div>
      </Modal>
      <Modal
        isOpen={isModalOpen.team_modal}
        onRequestClose={() => closeModal('team_modal')}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            width: '100%',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
          overlay: { zIndex: '101' },
        }}
      >
        <h2>Hello</h2>
        <button onClick={() => closeModal('team_modal')}>close</button>
        <div>I am a TEAM modal</div>
      </Modal>
    </>
  );
};

export default ModalsManager;
