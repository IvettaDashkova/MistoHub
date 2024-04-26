import ReactModal from 'react-modal';
import { ModalCompanyWrapper } from './ModalCompanies.styled';

const ModalCompanies = ({ isOpen, data, onClose }) => {
  const { name, logoURL, link, question, answer } = data;
  console.log(isOpen);
  if (!isOpen) return null;

  const customStyles = {
    div: {
      margin: '0',
      padding: '0',
      borderRadius: '10px',
      background: '#FFF',
      boxShadow:
        '4px 17px 102.1px 0px rgba(0, 0, 0, 0.19), 0px 25px 30.4px 0px rgba(0, 0, 0, 0.09)',
    },
    overlay: {
      position: 'fixed',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      width: '343px',
      height: 'fit-content',
      margin: 'auto',
      padding: '10px',
    },
    closeButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      cursor: 'pointer',
      padding: '0',
    },
  };

  function formImgURL(img) {
    const imgData = img.asset._ref.split('-');
    return `https://cdn.sanity.io/images/${imgData[1]}-${imgData[2]}.${imgData[3]}`;
  }

  return (
    <ReactModal
      style={customStyles}
      onRequestClose={onClose}
      isOpen={isOpen}
      onClose={onClose}
      shouldCloseOnOverlayClick={true}
      contentLabel="Image Modal"
    >
      <ModalCompanyWrapper>
        <button className="closeButton" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M19.8332 8.1665L8.1665 19.8332M8.1665 8.1665L19.8332 19.8332"
              stroke="#0B0B0B"
              strokeOpacity="0.5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="contentWrapper">
          <img src={formImgURL(logoURL)} alt={name} />
          {link && (
            <div className="svgWrapper">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  padding="0"
                >
                  <path
                    d="M12.5638 4.70564C12.557 4.23561 12.4699 3.7693 12.3032 3.3297C12.0115 2.57901 11.4176 1.98542 10.6657 1.69484C10.2309 1.53154 9.77129 1.44399 9.30608 1.43405C8.70777 1.40735 8.51807 1.3999 6.99928 1.3999C5.48049 1.3999 5.28582 1.3999 4.69186 1.43405C4.22727 1.44399 3.76765 1.53154 3.33291 1.69484C2.58098 1.98542 1.9864 2.57901 1.69533 3.3297C1.53175 3.76371 1.44344 4.22257 1.43473 4.68639C1.40799 5.28433 1.3999 5.4737 1.3999 6.98997C1.3999 8.50624 1.3999 8.69996 1.43473 9.29355C1.44406 9.75799 1.53175 10.2162 1.69533 10.6515C1.98702 11.4015 2.58098 11.9951 3.33353 12.2857C3.76641 12.4546 4.22602 12.5502 4.69248 12.5651C5.29142 12.5918 5.48111 12.5999 6.9999 12.5999C8.51869 12.5999 8.71336 12.5999 9.30732 12.5651C9.77192 12.5558 10.2315 12.4683 10.6669 12.305C11.4188 12.0138 12.0128 11.4202 12.3045 10.6701C12.4681 10.2355 12.5557 9.77724 12.5651 9.31218C12.5918 8.71486 12.5999 8.52548 12.5999 7.0086C12.5987 5.49233 12.5987 5.29985 12.5638 4.70564ZM6.99555 9.85734C5.4071 9.85734 4.12029 8.57267 4.12029 6.98686C4.12029 5.40106 5.4071 4.11639 6.99555 4.11639C8.58276 4.11639 9.87081 5.40106 9.87081 6.98686C9.87081 8.57267 8.58276 9.85734 6.99555 9.85734ZM9.98524 4.67956C9.61394 4.67956 9.31479 4.38028 9.31479 4.01021C9.31479 3.64015 9.61394 3.34087 9.98524 3.34087C10.3553 3.34087 10.6551 3.64015 10.6551 4.01021C10.6551 4.38028 10.3553 4.67956 9.98524 4.67956Z"
                    fill="white"
                  />
                  <path
                    d="M6.99638 8.73934C7.96384 8.73934 8.74813 7.95505 8.74813 6.98759C8.74813 6.02013 7.96384 5.23584 6.99638 5.23584C6.02891 5.23584 5.24463 6.02013 5.24463 6.98759C5.24463 7.95505 6.02891 8.73934 6.99638 8.73934Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          )}
          <h2 className="companyName">{name}</h2>
          <p className="text">компанія</p>
          <p className="textQuestion">{question}</p>
          <p className="textAnswer">{answer}</p>
        </div>
      </ModalCompanyWrapper>
    </ReactModal>
  );
};

export default ModalCompanies;
