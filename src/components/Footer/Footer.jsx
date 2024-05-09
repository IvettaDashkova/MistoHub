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
          <iframe
            className="map-wrapper"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2586.710898082731!2d34.5648984!3d49.5843421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d825941b73909d%3A0xc6c99d30efb9fc4a!2z0JzQhtCh0KLQntCl0JDQkQ!5e0!3m2!1sru!2sua!4v1715196007146!5m2!1sua!2sua"
            loading="lazy"
          ></iframe>
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
