import { useModal } from '../../contexts/ModalHook';
import { getWordForCount } from '../../helpers/semantic';

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

const JoinUs = ({people=[], companies=[]}) => {
  const { openModal } = useModal();


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
            <StatsListItem>{116 - people} {getWordForCount(116 - people, 'i')}</StatsListItem>
            <StatsListItem>{17 - companies} {getWordForCount(17 - companies, 'k')}</StatsListItem>
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
