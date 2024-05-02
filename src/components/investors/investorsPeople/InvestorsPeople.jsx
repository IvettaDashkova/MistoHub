import { useEffect, useState } from 'react';
import { fetchPeople } from '../../../services/API';
import ModalInvestors from '../modalInvestors/ModalInvestors';
import { ListWrapper } from './InvestorsPeople.styled';
import { nanoid } from 'nanoid';

const InvestorsPeople = () => {
  const [peopleData, setPeopleData] = useState(null);
  const [selectedInvestor, setSelectedInvestor] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedInvestor(null);
    setIsOpen(false);
  };

  const groupedPeople = peopleData.reduce((acc, person, index) => {
    const groupIndex = Math.floor(index / 25);
    acc[groupIndex] = [...(acc[groupIndex] || []), person];
    return acc;
  }, []);

  return (
    <ListWrapper>
      {groupedPeople.map((group, groupIndex) => (
        <div
          key={groupIndex}
          className={`group-${groupIndex} ${groupIndex % 2 === 0 ? 'odd-group' : 'even-group'}`}
        >
          <ul>
            {group.map((investor) => (
              <li key={nanoid()}>
                <img
                  src={formImgURL(investor.imageURL)}
                  alt={`Investor ${investor.id}`}
                  onClick={() => openModal(investor)}
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
      {selectedInvestor && (
        <ModalInvestors
          data={selectedInvestor}
          onClose={closeModal}
          isOpen={isOpen}
        />
      )}
    </ListWrapper>
  );
};

export default InvestorsPeople;
