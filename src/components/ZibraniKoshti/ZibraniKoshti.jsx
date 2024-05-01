import { useState, useEffect, useRef } from 'react';
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
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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

  return (
    <ContainerWrapper
      ref={sectionRef}
      isDesktop={isDesktop}
      goAnimation={isVisible}
    >
      {goalData && (
        <>
          {!isDesktop ? (
            <>
              <TitleContainer>
                <h2>До відкриття залишилось </h2>
                <p>{`$ ${goalData.goal - goalData.raised}`}</p>
              </TitleContainer>
              <FundraisingProgressBar
                totalAmount={goalData.raised}
                targetAmount={goalData.goal}
              />
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
                    {`$ ${goalData.goal - goalData.raised}`.replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      ' '
                    )}
                  </p>
                </TitleContainer>
                <FundraisingProgressBar
                  totalAmount={goalData.raised}
                  targetAmount={goalData.goal}
                />

                <button onClick={() => console.log('Click')} type="button">
                  Підтримати проєкт
                </button>
              </div>
              <ul>
                <NeedToDoCards />
              </ul>
            </>
          )}
        </>
      )}
    </ContainerWrapper>
  );
};
