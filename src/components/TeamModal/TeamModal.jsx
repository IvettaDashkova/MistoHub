import Modal from 'react-modal';
import { TeamModalStyled } from './TeamModal.styled';
import Iconsvg from '../Icon/Icon';
import { useModal } from '/src/contexts/ModalHook';
import data from './develops.json';

const TeamModal = () => {
  const { isModalOpen, closeModal } = useModal();
  return (
    <TeamModalStyled isOpen={isModalOpen} onRequestClose={closeModal}>
      <p>Команда</p>
      <button className="сloseBtn" type="button" onClick={closeModal}>
        <span className="сloseText">Закрити</span>
        <Iconsvg
          width="12"
          height="12"
          iconName="icon-close"
          styles="icon-close"
        />
      </button>
      <h2>
        <span>Команда</span>, що створила сайт
      </h2>
      <ul>
        {/* {data.map((person) => (
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
        ))} */}
      </ul>
    </TeamModalStyled>
  );
};

export default TeamModal;
