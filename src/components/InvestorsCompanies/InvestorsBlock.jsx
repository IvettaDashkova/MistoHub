import { useEffect, useState } from 'react';
import { fetchCompanies, fetchPeople } from '../../services/API';
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

const InvestorsBlock = () => {
  const [companies, setCompanies] = useState([]);
  const [people, setPeople] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const companiesData = await fetchCompanies();
      const peopleData = await fetchPeople();
      setCompanies(companiesData);
      setPeople(peopleData);
    };

    fetchData();
  }, []);

  const closeModal = () => {
    setSelectedItem(null);
  };
  return (
    <section id="investors">
      <TextWrapper>
        <InfoText>Імпакт-інвестори МІСТОХАБ</InfoText>
        <MainHeading>З нами вже</MainHeading>
        <SecondHeading>{people.length} {getWordForCount(people.length, 'p')}</SecondHeading>
      </TextWrapper>
      <PeopleContainer>
        <InvestorsPeople />

        <TextWrapper>
          <SecondHeading>{companies.length} {getWordForCount(companies.length, 'k')}</SecondHeading>
        </TextWrapper>
        <InvestorsCompanies />
      </PeopleContainer>
      {selectedItem && (
        <ModalInvestors data={selectedItem} onClose={closeModal} />
      )}
    </section>
  );
};

export default InvestorsBlock;
