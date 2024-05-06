import { useEffect, useState } from 'react';
import { fetchCompanies, fetchPeople } from '../../services/API';
import InvestorsPeople from './InvestorsPeople/InvestorsPeople';
import InvestorsCompanies from './InvestorsCompanies/InvestorsCompanies';
import ModalInvestors from './ModalInvestors/ModalInvestors';
import {
  InfoText,
  MainHeading,
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
        <SecondHeading>{people.length} людини</SecondHeading>
      </TextWrapper>
      <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto' }}>
        <InvestorsPeople />

        <TextWrapper>
          <SecondHeading>{companies.length} компаній</SecondHeading>
        </TextWrapper>
        <InvestorsCompanies />
      </div>
      {selectedItem && (
        <ModalInvestors data={selectedItem} onClose={closeModal} />
      )}
    </section>
  );
};

export default InvestorsBlock;
