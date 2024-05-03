import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

import { InfoStyled } from '/src/components/JoinModal/JoinModal.styled';
import Icon from '/src/components/Icon/Icon';

const Info = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isModalDeveloperOpen, setIsModalDeveloperOpen] = useState(false);

  const openDeveloperModal = () => {
    setIsModalDeveloperOpen(true);
  };

  const closeDevelopersModal = () => {
    setIsModalDeveloperOpen(false);
  };

  return (
    <InfoStyled>
      <div className="joinProtectionBlock">
        <p>&copy; ГО &laquo;МІСТО ХАБ&raquo;</p>
        {isMobile && <p className="joinProtection">Всі права захищені</p>}
        {!isMobile && (
          <div className="joinProtectionBig">
            <p className="joinProtection">Всі права захищені</p>
            <button
              type="button"
              title="Розроблено студентами"
              className="developers"
              onClick={openDeveloperModal}
            >
              Розроблено студентами
              <Icon iconName="logoGoIT" />
            </button>
          </div>
        )}
      </div>
      {isMobile && (
        <button
          type="button"
          title="Розроблено студентами"
          className="developers"
          onClick={openDeveloperModal}
        >
          Розроблено студентами
          <Icon iconName="logoGoIT" />
        </button>
      )}

      {isModalDeveloperOpen && (
        <button onClick={closeDevelopersModal} style={{ color: 'red' }}>
          Modal Developer is open
        </button>
      )}
    </InfoStyled>
  );
};

export default Info;
