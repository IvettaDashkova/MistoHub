import { useState, useEffect } from 'react';
import { Cards } from './Cards';
import FundraisingProgressBar from './FundraisingProgressBar';
import { ContainerWrapper, TitleContainer } from './ZibraniKoshti.styled';
import { fetchGoal } from '../../services/API';
import { useMediaQuery } from 'react-responsive';
import { NeedToDoCards } from './NeedToDoCards';
import { MadeCards } from './MadeCards';

export const ZibraniKoshti = () => {
  const [goalData, setGoalData] = useState(null);
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const goalResponse = await fetchGoal();
        setGoalData(goalResponse);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  if (!goalData) {
    return null;
  }

  const { goal, raised } = goalData;

  return (
    <ContainerWrapper isDesktop={isDesktop}>
      {!isDesktop ? (
        <>
          <TitleContainer>
            <h2>До відкриття залишилось </h2>
            <p>{`$ ${goal - raised}`}</p>
          </TitleContainer>
          <FundraisingProgressBar totalAmount={raised} targetAmount={goal} />
          <Cards />
          <button onClick={() => console.log('Click')} type="button">
            Підтримати проєкт
          </button>
        </>
      ) : (
        <>
          <ul>
            <MadeCards />
          </ul>
          <div>
            <TitleContainer>
              <h2>До відкриття залишилось </h2>
              <p>
                {`$ ${goal - raised}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
              </p>
            </TitleContainer>
            <FundraisingProgressBar totalAmount={raised} targetAmount={goal} />

            <button onClick={() => console.log('Click')} type="button">
              Підтримати проєкт
            </button>
          </div>
          <ul>
            <NeedToDoCards />
          </ul>
        </>
      )}
    </ContainerWrapper>
  );
};
