import VectorSVG from '../svgModalInvest/Vector.svg';

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

  const imageRef = imageURL.asset._ref;
  const imageSrc = `https://cdn.sanity.io/images/${imageRef}`;

  return (
    <div>
      <div>
        <div>
          <img src={imageSrc} alt={`${firstName} ${secondName}`} />

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
            {instagram && (
              <a href={instagram} target="_blank">
                Instagram
              </a>
            )}
            <img src={VectorSVG} alt="vector" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalInvestors;
