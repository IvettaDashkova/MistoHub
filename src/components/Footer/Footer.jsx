import { StyledFooter, FooterContainer, FooterDown } from './Footer.styled';
import Contacts from './Contacts';
import MyGoogleMap from './MyGoogleMap';
import Iconsvg from '../Icon/Icon';
import { useState } from 'react';
import TeamModal from '../TeamModal/TeamModal';

export default function Footer() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
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
          <button className="btn-goit" onClick={openModal}>
            Розроблено студентами{' '}
            <Iconsvg
              width="59"
              height="18"
              iconName="icon-goit-white"
              styles="icon-goit-white"
            />
          </button>
        </FooterDown>
      </FooterContainer>
      <TeamModal modalTeamIsOpen={modalIsOpen} modalTeamOnClose={closeModal} />
    </StyledFooter>
  );
}
