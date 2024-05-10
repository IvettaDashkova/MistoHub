import {
  CustomModal,
  ModalCompanyWrapper,
} from '../ModalCompanies/ModalCompanies.styled';
import Iconsvg from '../../Icon/Icon';
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

  const defaultImage = 'src/assets/investors/default-img.jpg';
  function formImgURL(img) {
    if (!img) return defaultImage;
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
                src={formImgURL(imageURL)}
                alt={`${firstName} ${secondName}`}
                loading="lazy"
              />
              <div className="svgWrapper">
                <a
                  href={facebook ? facebook : instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {facebook ? (
                    <Iconsvg
                      width="28"
                      height="28"
                      iconName="icon-faceb"
                      styles="instaIcon"
                    />
                  ) : (
                    <Iconsvg
                      width="28"
                      height="28"
                      iconName="icon-instagram"
                      styles="instaIcon"
                    />
                  )}
                </a>
              </div>
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
                <Iconsvg
                  width="12"
                  height="12"
                  iconName="close"
                  styles="close-icon"
                />
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
