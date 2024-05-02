import { CustomModal, ModalCompanyWrapper } from './ModalCompanies.styled';
import sprite from '../../../assets/investors/sprite.svg';

const ModalCompanies = ({ isOpen, data, onClose }) => {
  const { name, logoURL, link, question, answer } = data;
  if (!isOpen) return null;

  function formImgURL(img) {
    const imgData = img.asset._ref.split('-');

    return `https://cdn.sanity.io/images/${
      import.meta.env.VITE_ADMIN_PROJECT_ID
    }/${import.meta.env.VITE_ADMIN_DATASET}/${imgData[1]}-${imgData[2]}.${
      imgData[3]
    }`;
  }

  return (
    <CustomModal
      onRequestClose={onClose}
      isOpen={isOpen}
      style={{ overlay: { zIndex: '2' } }}
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
                src={formImgURL(logoURL)}
                alt={name}
                loading="lazy"
              />
              {link && (
                <div className="svgWrapper">
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <svg className="instaIcon">
                      <use xlinkHref={`${sprite}#icon-instagram`}></use>
                    </svg>
                  </a>
                </div>
              )}
            </div>
            <div className="main-heading-wrapper">
              <h2 className="companyName">{name}</h2>
              <p className="text">компанія</p>
            </div>
            <div className="closeWrapper">
              <button className="closeWord" onClick={onClose}>
                Закрити
              </button>
              <button className="closeButton" onClick={onClose}>
                <svg className="close-icon" width="28" height="28">
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

export default ModalCompanies;
