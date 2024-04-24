import React, { useEffect, useState } from 'react';
import { fetchGoal, fetchCompanies, fetchPeople } from '../../../services/API';
import InvestorsPeople from './investorsPeople/InvestorsPeople';
import InvestorsCompanies from './investorsCompanies/InvestorsCompanies';
import ModalInvestors from './modalInvestors/ModalInvestors';

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

  return (
    <div>
      <p>Імпакт-інвестори МІСТОХАБ</p>
      <h2>З нами вже</h2>
      <p>{goal.investorsCount} людини</p>
      <div>
        {people.map((person) => (
          <InvestorsPeople
            key={person.id}
            data={person}
            onClick={() => openModal(person)}
          />
        ))}
        <p>{goal.length} компаній</p>
        {companies.map((company) => (
          <InvestorsCompanies
            key={company.id}
            data={company}
            onClick={() => openModal(company)}
          />
        ))}
      </div>
      {selectedItem && (
        <ModalInvestors data={selectedItem} onClose={closeModal} />
      )}
    </div>
  );
};

export default InvestorsBlock;
