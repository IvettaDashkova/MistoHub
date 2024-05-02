import { useMediaQuery } from 'react-responsive';

import Icon from '/src/components/Icon/Icon';
import { InfoStyled } from '/src/components/JoinModal/JoinModal.styled';

const Info = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <InfoStyled>
      {!isMobile && <p>&copy; ГО &laquo;МІСТО ХАБ&raquo;</p>}
      <div className="joinProtectionBlock">
        {isMobile && <p>&copy; ГО &laquo;МІСТО ХАБ&raquo;</p>}
        <p className="joinProtection">Всі права захищені</p>
        <button
          type="button"
          title="Розроблено студентами"
          className="developers"
          onClick={() => console.log('Open developers modal')}
        >
          Розроблено студентами
          <Icon iconName="logoGoIT" />
        </button>
      </div>
    </InfoStyled>
  );
};

export default Info;
