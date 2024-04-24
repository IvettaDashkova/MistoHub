import { useEffect, useState } from 'react';
import { fetchPeople } from '../../../../services/API';

const InvestorsPeople = () => {
  const [peopleData, setPeopleData] = useState(null);

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

  const imgUrl = peopleData[0].logoURL;

  return (
    <div>
      {Array(93)
        .fill()
        .map((_, index) => (
          <img
            key={index}
            src={formImgURL(peopleData[0].imageURL)}
            alt={`Image ${index}`}
          />
        ))}
    </div>
  );
};

export default InvestorsPeople;
