import Icon from '../Icon/Icon.jsx';

import { InfoStyled } from './JoinModal.styled.jsx';
import useWindowWidth from '/src/contexts/WindowWidth';

const Info = () => {
  const windowWidth = useWindowWidth();
  return (
    <InfoStyled>
      {windowWidth >= 768 ? <p>&copy; ГО &laquo;МІСТО ХАБ&raquo;</p> : null}
      <div className="joinProtectionBlock">
        {windowWidth < 768 ? <p>&copy; ГО &laquo;МІСТО ХАБ&raquo;</p> : null}
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
