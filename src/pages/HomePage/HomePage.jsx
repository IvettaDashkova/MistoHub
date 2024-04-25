import { useState, useEffect } from 'react';
import { Container } from './HomePage.styled';
import VirtualTour from '../../components/VirtualTour/VirtualTour';
import { fetchGoal, fetchCompanies, fetchPeople } from '../../services/API';
import Icon from 'src/components/Icon/Icon';

const HomePage = () => {
  const [goalData, setGoalData] = useState(null);
  const [companiesData, setCompaniesData] = useState(null);
  const [peopleData, setPeopleData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const goalResponse = await fetchGoal();
        const companiesResponse = await fetchCompanies();
        const peopleResponse = await fetchPeople();

        setGoalData(goalResponse);
        setCompaniesData(companiesResponse);
        setPeopleData(peopleResponse);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  function formImgURL(img) {
    const imgData = img.asset._ref.split('-');

    return `https://cdn.sanity.io/images/${
      import.meta.env.VITE_ADMIN_PROJECT_ID
    }/${import.meta.env.VITE_ADMIN_DATASET}/${imgData[1]}-${imgData[2]}.${
      imgData[3]
    }`;
  }
  console.log('done');
  return (
    <Container>
      <Icon width="40" height="30" iconName="Vector" styles="vector-svg" />

      <h1>Home Page</h1>
      {goalData && (
        <>
          <p>{goalData.raised}</p> <p>{goalData.goal}</p>
        </>
      )}
      {companiesData && <img src={formImgURL(companiesData[0].logoURL)} />}
      {peopleData && <img src={formImgURL(peopleData[0].imageURL)} />}
      <VirtualTour />
    </Container>
  );
};

export default HomePage;
