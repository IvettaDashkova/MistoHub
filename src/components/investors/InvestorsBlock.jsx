import { useEffect, useState } from 'react';
import { fetchCompanies, fetchPeople } from '../../services/API';
import InvestorsPeople from './investorsPeople/InvestorsPeople';
import InvestorsCompanies from './investorsCompanies/InvestorsCompanies';
import ModalInvestors from './modalInvestors/ModalInvestors';
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
    <>
      <TextWrapper>
        <InfoText>Імпакт-інвестори МІСТОХАБ</InfoText>
        <MainHeading>З нами вже</MainHeading>
        <SecondHeading>{people.length} людини</SecondHeading>
      </TextWrapper>
      <div>
        <InvestorsPeople />

        <TextWrapper>
          <SecondHeading>{companies.length} компаній</SecondHeading>
        </TextWrapper>
        <InvestorsCompanies />
      </div>
      {selectedItem && (
        <ModalInvestors data={selectedItem} onClose={closeModal} />
      )}
    </>
  );
};

export default InvestorsBlock;
