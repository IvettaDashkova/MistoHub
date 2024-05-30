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
  AlreadyJoined
} from './JoinUs.styled';

const JoinUs = ({people=[], companies=[]}) => {
  const { openModal } = useModal();

  return (
    <JoinUsSection id="how">
      <JoinUsContainer>
        <Title>Приєднуйся до спільноти людей, які змінюють Полтаву!</Title>
        <Description>
          Саме імпакт-інвестори будуть впливати на розподіл коштів серед проєктів
          містян
        </Description>
        <StatsContainer>
          <StatsTitle>До відкриття МІСТОХАБ залишилось:</StatsTitle>
          <StatsList>
            <StatsListItem>{116 - people.length} {getWordForCount(116 - people.length, 'i')}</StatsListItem>
            <StatsListItem>{17 - companies.length} {getWordForCount(17 - companies.length, 'k')}</StatsListItem>
          </StatsList>
        </StatsContainer>
        <JoinButton type="button" onClick={() => openModal('join_modal')}>
          Приєднатися
        </JoinButton>
        <AlreadyJoined>
          <p>{people?.length > 100 &&  <span>100+ людей</span>}</p>
          <p>{companies?.length > 10 &&  <span>10+ компаній</span>}</p>
          вже приєдналися
        </AlreadyJoined>
        <Background />
      </JoinUsContainer>
    </JoinUsSection>
  );
};

export default JoinUs;
