import { useState } from 'react';
import InvestorsPeople from './InvestorsPeople/InvestorsPeople';
import InvestorsCompanies from './InvestorsCompanies/InvestorsCompanies';
import ModalInvestors from './ModalInvestors/ModalInvestors';
import { getWordForCount } from '../../helpers/semantic';

import {
  InfoText,
  MainHeading,
  PeopleContainer,
  SecondHeading,
  TextWrapper,
} from './InvestorsBlock.styled';

const InvestorsBlock = ({people, companies}) => {

  const [selectedItem, setSelectedItem] = useState(null);

  const closeModal = () => {
    setSelectedItem(null);
  };
  return (
    <section id="investors">
      <TextWrapper>
        <InfoText>Імпакт-інвестори МІСТОХАБ</InfoText>
        <MainHeading>З нами вже</MainHeading>
        <SecondHeading>{people?.length} {getWordForCount(people.length, 'p')}</SecondHeading>
      </TextWrapper>
      <PeopleContainer>
       {people &&  <InvestorsPeople people={people} />}

        <TextWrapper>
          <SecondHeading>{companies?.length} {getWordForCount(companies.length, 'k')}</SecondHeading>
        </TextWrapper>
      {companies &&   <InvestorsCompanies companies={companies} />}
      </PeopleContainer>
      {selectedItem && (
        <ModalInvestors data={selectedItem} onClose={closeModal} />
      )}
    </section>
  );
};

export default InvestorsBlock;
