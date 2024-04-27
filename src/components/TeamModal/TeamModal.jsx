import Modal from 'react-modal';
Modal.setAppElement('#root');

const TeamModal = ({ modalTeamIsOpen, modalTeamOnClose }) => {
  return (
    <Modal isOpen={modalTeamIsOpen} onRequestClose={modalTeamOnClose}>
      <div>Це модалка! вау!!</div>
    </Modal>
  );
};

export default TeamModal;
