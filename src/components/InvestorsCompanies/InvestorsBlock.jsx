import React, { Suspense, useState } from 'react';
// import InvestorsPeople from './InvestorsPeople/InvestorsPeople';
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

const InvestorsPeople = React.lazy(
  () => import('./InvestorsPeople/InvestorsPeople')
);

const InvestorsBlock = ({ people, companies }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const closeModal = () => {
    setSelectedItem(null);
  };
  return (
    <section id="investors">
      <TextWrapper>
        <InfoText>Імпакт-інвестори МІСТОХАБ</InfoText>
        <MainHeading>З нами вже</MainHeading>
        {people?.length > 0 && (
          <SecondHeading>
            {people.length} {getWordForCount(people.length, 'p')}
          </SecondHeading>
        )}
      </TextWrapper>
      <PeopleContainer>
        <Suspense fallback={<div style={{ color: 'black' }}>LOADING...</div>}>
          {people && <InvestorsPeople people={people} />}
        </Suspense>

        <TextWrapper>
          {companies?.length > 0 && (
            <SecondHeading>
              {companies.length} {getWordForCount(companies.length, 'k')}
            </SecondHeading>
          )}
        </TextWrapper>
        {companies && <InvestorsCompanies companies={companies} />}
      </PeopleContainer>
      {selectedItem && (
        <ModalInvestors data={selectedItem} onClose={closeModal} />
      )}
    </section>
  );
};

export default InvestorsBlock;
