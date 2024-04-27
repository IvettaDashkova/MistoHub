import React, { useEffect, useState } from 'react';
import { fetchGoal, fetchCompanies, fetchPeople } from '../../services/API';
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
  const [goal, setGoal] = useState({});
  const [companies, setCompanies] = useState([]);
  const [people, setPeople] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const goalData = await fetchGoal();
      const companiesData = await fetchCompanies();
      const peopleData = await fetchPeople();

      setGoal(goalData);
      setCompanies(companiesData);

      setPeople(peopleData);
    };

    fetchData();
  }, []);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  console.log(companies);
  return (
    <div>
      <TextWrapper>
        <InfoText>Імпакт-інвестори МІСТОХАБ</InfoText>
        <MainHeading>З нами вже</MainHeading>
        <SecondHeading>{people.length} людини</SecondHeading>
      </TextWrapper>
      <div>
        <InvestorsPeople
        // key={person.id}
        // data={person}
        // onClick={() => openModal(person)}
        />

        <TextWrapper>
          <SecondHeading>{companies.length} компаній</SecondHeading>
        </TextWrapper>
        <InvestorsCompanies />
      </div>
      {selectedItem && (
        <ModalInvestors data={selectedItem} onClose={closeModal} />
      )}
    </div>
  );
};

export default InvestorsBlock;
