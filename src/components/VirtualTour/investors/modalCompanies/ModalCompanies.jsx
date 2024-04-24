import Modal from 'react-modal';

const ModalCompanies = ({ isOpen, data, onRequestClose }) => {
  const { name, logoURL, link } = data;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modal-overlay"
    >
      <img src={logoURL} alt={name} />
      {/* <h2>{name}</h2>
      <p>{question}</p>
      <p>{answer}</p> */}
      {link && (
        <a href={link} target="_blank">
          Instagram
        </a>
      )}
      <button className="close-btn" onClick={onRequestClose}>
        Close
      </button>
    </Modal>
  );
};

export default ModalCompanies;
