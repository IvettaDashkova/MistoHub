import { useMediaQuery } from 'react-responsive';

import Icon from '../Icon/Icon.jsx';

import { InfoStyled } from './JoinModal.styled.jsx';

const Info = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <InfoStyled>
      {!isMobile && <p>&copy; ГО &laquo;МІСТО ХАБ&raquo;</p>}
      <div className="joinProtectionBlock">
        {isMobile && <p>&copy; ГО &laquo;МІСТО ХАБ&raquo;</p>}
        <p className="joinProtection">Всі права захищені</p>
        <p className="developers">
          Розроблено студентами
          <Icon iconName="logoGoIT" />
        </p>
      </div>
    </InfoStyled>
  );
};

export default Info;
