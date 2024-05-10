import { CustomModal, ModalCompanyWrapper } from './ModalCompanies.styled';
import Iconsvg from '../../Icon/Icon';
import defaultImage from 'src/assets/investors/default-img.png';

const ModalCompanies = ({ isOpen, data, onClose }) => {
  const { name, logoURL, link, question, answer } = data;

  if (!isOpen) return null;

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
                src={logoURL || defaultImage}
                alt={name}
                loading="lazy"
              />
              {link && (
                <div className="svgWrapper">
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <Iconsvg iconName="icon-instagram" styles="instaIcon" />
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
                <Iconsvg
                  iconName="close"
                  styles="close-icon"
                  width={12}
                  height={12}
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

export default ModalCompanies;
