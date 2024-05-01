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

import Background from './Background/Background';

const JoinUs = () => {
  return (
    <JoinUsSection>
      <JoinUsContainer>
        <Title>Приєднуйся до спільноти людей, які змінюють Полтаву!</Title>
        <Description>
          Саме імпакт-інвестори будуть вливати на розподіл коштів серед проєктів
          містян
        </Description>
        <StatsContainer>
          <StatsTitle>До відкриття МІСТОХАБ залишилось:</StatsTitle>
          <StatsList>
            <StatsListItem>19 імпакт-інвесторів</StatsListItem>
            <StatsListItem>6 компаній</StatsListItem>
          </StatsList>
        </StatsContainer>
        <JoinButton>Приєднатися</JoinButton>
        <AlreadyJoined>
          <span>+ 90 людей</span>
          вже приєдналися
        </AlreadyJoined>
        <Background />
      </JoinUsContainer>
    </JoinUsSection>
  );
};

export default JoinUs;
