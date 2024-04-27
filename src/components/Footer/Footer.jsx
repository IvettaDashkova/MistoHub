import { StyledFooter, FooterContainer, FooterDown } from './Footer.styled';
import Contacts from './Contacts';
import MyGoogleMap from './MyGoogleMap';
import Icon from '../Icon/Icon';

export default function Footer() {
  return (
    <StyledFooter>
      <FooterContainer>
        <div className="footer-up">
          <MyGoogleMap />
          <div>
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
          <button
            className="btn-goit"
            onClick={() => console.log('Modal for team project is open!')}
          >
            Розроблено студентами{' '}
            <Icon
              width="59"
              height="18"
              iconName="icon-goit-white"
              styles="icon-goit-white"
            />
          </button>
        </FooterDown>
      </FooterContainer>
    </StyledFooter>
  );
}
