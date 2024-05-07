import MyGoogleMap from './MyGoogleMap';
import { useModal } from '../../contexts/ModalHook';

import Contacts from './Contacts';
import Iconsvg from '../Icon/Icon';
import SocialBlock from '../../shared/SocialBlock/SocialBlock';
import { StyledFooter, FooterContainer, FooterDown } from './Footer.styled';

export default function Footer() {
  const { openModal } = useModal();

  return (
    <StyledFooter id="footer">
      <FooterContainer>
        <div className="footer-up">
          <MyGoogleMap />
          <div>
            <Iconsvg
              width="81"
              height="27"
              iconName="main-logo"
              styles="icon-logo"
            />
            <p className="address-mistohub">м.Полтава, вул. Спаська, 10</p>
            <Contacts />
            <button
              className="btn-supp"
              type="button"
              onClick={() => openModal('join_modal')}
            >
              <span>Підтримати проєкт</span>
            </button>
          </div>
        </div>
        <FooterDown>
          <div>
            <p>&copy; ГО &laquo;МІСТО ХАБ&raquo;</p>
            <p>Всі права захищені</p>
          </div>
          <button
            type="button"
            className="btn-goit"
            onClick={() => openModal('team_modal')}
          >
            Розроблено студентами{' '}
            <Iconsvg
              width="59"
              height="18"
              iconName="icon-goit-white"
              styles="icon-goit-white"
            />
          </button>
          <SocialBlock sectionName="footer" />
        </FooterDown>
      </FooterContainer>
    </StyledFooter>
  );
}
