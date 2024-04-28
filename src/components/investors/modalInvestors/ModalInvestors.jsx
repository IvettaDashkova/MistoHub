import {
  CustomModal,
  ModalCompanyWrapper,
} from '../modalCompanies/ModalCompanies.styled';
import sprite from '../../../assets/investors/sprite.svg';
const ModalInvestors = ({ data, onClose, isOpen }) => {
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
    <CustomModal
      onRequestClose={onClose}
      isOpen={isOpen}
      onClose={onClose}
      shouldCloseOnOverlayClick={true}
      contentLabel="Image Modal"
    >
      <ModalCompanyWrapper>
        <div className="contentWrapper">
          <div className="top-wrapper">
            <div className="title-wrapper">
              <img
                className="main-image"
                src={imageSrc}
                alt={`${firstName} ${secondName}`}
              />
              {facebook ? (
                <div className="svgWrapper">
                  <a href={facebook} target="_blank">
                    <svg className="instaIcon">
                      <use xlinkHref={`${sprite}#icon-icon`}></use>
                    </svg>
                  </a>
                </div>
              ) : (
                instagram && (
                  <div className="svgWrapper">
                    <a href={instagram} target="_blank">
                      <svg className="instaIcon">
                        <use xlinkHref={`${sprite}#icon-instagram`}></use>
                      </svg>
                    </a>
                  </div>
                )
              )}
            </div>
            <div className="main-heading-wrapper">
              <h2 className="companyName">{`${firstName} ${secondName}`}</h2>
              <p className="text">{type}</p>
            </div>
            <div className="closeWrapper">
              <button className="closeWord" onClick={onClose}>
                Закрити
              </button>
              <button className="closeButton" onClick={onClose}>
                <svg width="28" height="28">
                  <use xlinkHref={`${sprite}#icon-x`}></use>
                </svg>
              </button>
            </div>
          </div>
          <p className="textQuestion">{question}</p>
          <p className="textAnswer">{answer}</p>
        </div>
      </ModalCompanyWrapper>
    </CustomModal>
  );
};

export default ModalInvestors;