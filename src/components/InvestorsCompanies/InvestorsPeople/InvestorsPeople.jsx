import { useEffect, useMemo, useState } from 'react';
import { fetchPeople } from '../../../services/API';
import ModalInvestors from '../ModalInvestors/ModalInvestors';
import { ListWrapper } from './InvestorsPeople.styled';
import { nanoid } from 'nanoid';
import { useMediaQuery } from 'react-responsive';
import { confirmTriggerZone } from '../../../helpers/confirmTriggerZone';

const InvestorsPeople = () => {
  const [peopleData, setPeopleData] = useState(null);
  const [selectedInvestor, setSelectedInvestor] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ maxWidth: 1440 });

  const defaultImage = 'src/assets/investors/default-img.jpg';

  function formImgURL(img) {
    if (!img || !img.asset) {
      return defaultImage;
    }
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
        if (!peopleResponse) return;
        const newGroups = [];
        for (let i = 0; i < peopleResponse.length; i += 25) {
          newGroups.push(peopleResponse.slice(i, i + 25));
        }
        setPeopleData(newGroups);
      } catch (error) {
        console.error('Error fetching people data:', error);
      }
    };
    fetchData();
  }, []);

  const checkPosition = useMemo(() => {
    return (containerIndex) => {
      const container = document.getElementById(`container-${containerIndex}`);
      const elements = container.getElementsByClassName('item-list');

      for (const element of elements) {
        const rectEl = element.getBoundingClientRect();
        const rectContainer = container.getBoundingClientRect();

        const isDisabledEl = confirmTriggerZone(
          containerIndex,
          rectEl,
          rectContainer,
          isMobile,
          isTablet
        );

        if (isDisabledEl) {
          element.classList.add('on-blur');
          element.disabled = true;
        } else {
          element.classList.remove('on-blur');
          element.disabled = false;
        }
      }
    };
  }, [isMobile, isTablet]);

  useEffect(() => {
    if (!peopleData) return;
    const intervalId = setInterval(() => {
      peopleData.forEach((_, index) => {
        checkPosition(index);
      });
    }, 10);
    return () => clearInterval(intervalId);
  }, [peopleData, checkPosition]);

  const openModal = (investor) => {
    setSelectedInvestor(investor);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedInvestor(null);
    setIsOpen(false);
  };

  return (
    <ListWrapper>
      {peopleData?.map((group, index) => (
        <div
          id={`container-${index}`}
          key={nanoid()}
          className={`group-${index} ${index % 2 === 0 ? 'odd-group' : 'even-group'}`}
        >
          <ul>
            {group.map((investor) => (
              <li key={nanoid()}>
                <button
                  className="item-list"
                  type="button"
                  onClick={() => openModal(investor)}
                >
                  <img
                    src={formImgURL(investor.imageURL)}
                    alt={`Investor ${investor.id}`}
                    loading="lazy"
                  />
                </button>
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
