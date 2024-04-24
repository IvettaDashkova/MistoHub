const ModalInvestors = ({ data, onClose }) => {
  const {
    firstName,
    secondName,
    type,
    imageURL,
    facebook,
    instagram,
    question,
    answer,
  } = data;

  return (
    <div>
      <div>
        <div>
          <img src={imageURL} alt={`${firstName} ${secondName}`} />
          <div>
            <h3>{`${firstName} ${secondName}`}</h3>
            <p>{type}</p>
          </div>
          <button onClick={onClose}>X</button>
        </div>
        <div>
          <h4>{question}</h4>
          <p>{answer}</p>
          <div>
            {facebook && <a href={facebook}>Facebook</a>}
            {instagram && <a href={instagram}>Instagram</a>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalInvestors;
