import { useMediaQuery } from 'react-responsive';
import { useModal } from '/src/contexts/ModalHook';

import { InfoStyled } from '/src/shared/Modals/JoinModal/JoinModal.styled';
import Icon from '/src/components/Icon/Icon';

const Info = () => {
  const { openModal } = useModal();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
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
                onClick={() => openModal('team_modal')}
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
            onClick={() => openModal('team_modal')}
          >
            Розроблено студентами
            <Icon iconName="logoGoIT" />
          </button>
        )}
      </InfoStyled>
    </>
  );
};

export default Info;
