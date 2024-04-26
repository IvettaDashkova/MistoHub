import { useEffect, useState } from 'react';
import { fetchPeople } from '../../../services/API';
import ModalInvestors from '../modalInvestors/ModalInvestors';
import { ListWrapper } from './InvestorsPeople.styled';

const InvestorsPeople = () => {
  const [peopleData, setPeopleData] = useState(null);
  const [selectedInvestor, setSelectedInvestor] = useState(null);

  function formImgURL(img) {
    const imgData = img.asset._ref.split('-');

    return `https://cdn.sanity.io/images/${
      import.meta.env.VITE_ADMIN_PROJECT_ID
    }/${import.meta.env.VITE_ADMIN_DATASET}/${imgData[1]}-${imgData[2]}.${
      imgData[3]
    }`;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const peopleResponse = await fetchPeople();
        setPeopleData(peopleResponse);
      } catch (error) {
        console.error('Error fetching people data:', error);
      }
    };
    fetchData();
  }, []);

  if (!peopleData) return null;

  const openModal = (investor) => {
    setSelectedInvestor(investor);
  };

  const closeModal = () => {
    setSelectedInvestor(null);
  };

  const duplicateInvestors = Array.from(
    { length: 93 },
    (_, index) => peopleData[index % peopleData.length]
  );

  return (
    <ListWrapper>
      <div>
        <ul>
          {duplicateInvestors.map((investor, index) => (
            <li key={index}>
              <img
                src={formImgURL(investor.imageURL)}
                alt={`Investor ${index}`}
                onClick={() => openModal(investor)}
              />
            </li>
          ))}
          {selectedInvestor && (
            <ModalInvestors data={selectedInvestor} onClose={closeModal} />
          )}
        </ul>
      </div>
    </ListWrapper>
  );
};

export default InvestorsPeople;
