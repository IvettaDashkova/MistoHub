import Modal from 'react-modal';
Modal.setAppElement('#root');

const TeamModal = ({ modalTeamIsOpen, modalTeamOnClose }) => {
  return (
    <Modal isOpen={modalTeamIsOpen} onRequestClose={modalTeamOnClose}></Modal>
  );
};

export default TeamModal;
