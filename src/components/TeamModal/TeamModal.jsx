import Modal from 'react-modal';
import { TeamModalStyled } from './TeamModal.styled';
import Iconsvg from '../Icon/Icon';
import data from './develops.json';
Modal.setAppElement('#root');

const TeamModal = ({ modalTeamIsOpen, modalTeamOnClose }) => {
  return (
    <TeamModalStyled isOpen={modalTeamIsOpen} onRequestClose={modalTeamOnClose}>
      <p>Команда</p>
      <button className="сloseBtn" type="button" onClick={modalTeamOnClose}>
        <span className="сloseText">Закрити</span>
        <Iconsvg
          width="12"
          height="12"
          iconName="icon-close-icon"
          styles="icon-close-icon"
        />
      </button>
      <h2>
        <span>Команда</span>, що створила сайт
      </h2>
      <ul>
        {data.map((person) => (
          <li key={person.id}>
            <Developer
              name={person.name}
              role={person.role}
              link={person.link}
              jpg={person.jpg}
              jpgx2={person.jpgx2}
              webp={person.webp}
              webpx2={person.webpx2}
            />
          </li>
        ))}
      </ul>
    </TeamModalStyled>
  );
};

export default TeamModal;
