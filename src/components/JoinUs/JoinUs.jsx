import { useEffect, useState } from 'react';
import { useModal } from '../../contexts/ModalHook';

import Background from './Background/Background';
import {
  JoinUsSection,
  JoinUsContainer,
  Description,
  StatsContainer,
  StatsList,
  StatsTitle,
  Title,
  StatsListItem,
  JoinButton,
  AlreadyJoined,
} from './JoinUs.styled';
import { fetchCompanies, fetchPeople } from '../../services/API';

const JoinUs = () => {
  const [companies, setCompanies] = useState(0);
  const [people, setPeople] = useState(0);
  const { openModal } = useModal();

  useEffect(() => {
    const fetchData = async () => {
      const people = await fetchPeople();
      const companies = await fetchCompanies();
      setCompanies(companies.length);
      setPeople(people.length);
    };
    fetchData();
  }, []);

  return (
    <JoinUsSection id="how">
      <JoinUsContainer>
        <Title>Приєднуйся до спільноти людей, які змінюють Полтаву!</Title>
        <Description>
          Саме імпакт-інвестори будуть вливати на розподіл коштів серед проєктів
          містян
        </Description>
        <StatsContainer>
          <StatsTitle>До відкриття МІСТОХАБ залишилось:</StatsTitle>
          <StatsList>
            <StatsListItem>{116 - people} імпакт-інвесторів</StatsListItem>
            <StatsListItem>{17 - companies} компаній</StatsListItem>
          </StatsList>
        </StatsContainer>
        <JoinButton type="button" onClick={() => openModal('join_modal')}>
          Приєднатися
        </JoinButton>
        <AlreadyJoined>
          <span>+{Math.round(people / 10) * 10} людей</span>
          вже приєдналися
        </AlreadyJoined>
        <Background />
      </JoinUsContainer>
    </JoinUsSection>
  );
};

export default JoinUs;
