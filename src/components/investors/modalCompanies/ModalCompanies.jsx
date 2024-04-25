const ModalCompanies = ({ isOpen, data, onClose }) => {
  const { name, logoURL, link, question, answer } = data;
  console.log(isOpen);
  if (!isOpen) return null;

  return (
    <div>
      <div>
        <img src={logoURL} alt={name} />
        <h2>{name}</h2>
        <p>{question}</p>
        <p>{answer}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        )}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ModalCompanies;
