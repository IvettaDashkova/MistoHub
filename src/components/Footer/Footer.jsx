import { StyledFooter, FooterContainer, FooterDown } from './Footer.styled';
import Contacts from './Contacts';
import MyGoogleMap from './MyGoogleMap';
import Iconsvg from '../Icon/Icon';
import TeamModal from '../TeamModal/TeamModal';
import { Link } from 'react-router-dom';
import { useModal } from '../../contexts/ModalHook';

export default function Footer() {
  const { openModal } = useModal();

  return (
    <StyledFooter>
      <FooterContainer>
        <div className="footer-up">
          <MyGoogleMap />
          <div>
            <Iconsvg
              width="81"
              height="27"
              iconName="icon-logo"
              styles="icon-logo"
            />
            <p className="address">м.Полтава, вул. Спаська, 10</p>
            <Contacts />
            <button
              className="btn-supp"
              type="button"
              onClick={() =>
                console.log('Modal for supported project is open!')
              }
            >
              <span>Підтримати проект</span>
            </button>
          </div>
        </div>
        <FooterDown>
          <div>
            <p>© ГО «МІСТО ХАБ»</p>
            <p>Всі права захищені</p>
          </div>
          <button className="btn-goit" onClick={openModal}>
            Розроблено студентами{' '}
            <Iconsvg
              width="59"
              height="18"
              iconName="icon-goit-white"
              styles="icon-goit-white"
            />
          </button>
          <div className="social-block">
            <Link
              className="link-inst"
              to={`https://www.instagram.com/mistohub `}
              target="blank"
              rel="noopener noreferrer"
            >
              <Iconsvg
                width="59"
                height="18"
                iconName="icon-instagram"
                styles="icon-instagram"
              />
            </Link>
            <Link
              className="link-fb"
              to={`https://www.facebook.com/mistohub/?locale=uk_UA`}
              target="blank"
              rel="noopener noreferrer"
            >
              <Iconsvg
                width="59"
                height="18"
                iconName="icon-faceb"
                styles="icon-faceb"
              />
            </Link>
          </div>
        </FooterDown>
      </FooterContainer>
      <TeamModal />
    </StyledFooter>
  );
}
