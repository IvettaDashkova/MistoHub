import { useEffect, useMemo, useState } from 'react';
import { fetchPeople } from '../../services/API';
import { motion, useAnimation } from 'framer-motion';
import defaultImage from 'src/assets/investors/noname.jpg';
import { Wrapper } from './TestPage.styled';

const TestPage = () => {
  const [people, setPeople] = useState([]);
  const moveToLeft = useAnimation();

  const memoizedFetchData = useMemo(
    () => async () => {
      try {
        const [peopleData] = await Promise.all([fetchPeople()]);
        setPeople(peopleData.slice(0, 25));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    []
  );

  useEffect(() => {
    memoizedFetchData();
  }, [memoizedFetchData]);

  useEffect(() => {
    const animateLoop = async () => {
      await moveToLeft.start({
        x: -3780, // Initial position offscreen to the left
        transition: {
          duration: 133, // Duration of one full loop
          ease: 'linear',
          repeat: Infinity, //the animation infinitely
        },
      });
    };
    animateLoop();
  }, [moveToLeft]);
  return (
    <Wrapper>
      <motion.div
        className="container"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1440px',
          margin: '50px auto',
          height: '200px', // Adjust as needed
          overflow: 'hidden',
          outline: '1px solid grey',
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            gap: '30px',
          }}
          animate={moveToLeft}
        >
          {!!people &&
            people.map((investor, index) => (
              <motion.button
                key={index}
                data-group_id={index}
                className="item-list"
                type="button"
                //   onClick={() => openModal(investor)}
              >
                <motion.img
                  src={investor.imageURL ? investor.imageURL : defaultImage}
                  alt={`Investor ${investor.id}`}
                  loading="lazy"
                  className="image"
                />
              </motion.button>
            ))}
        </motion.div>
      </motion.div>
    </Wrapper>
  );
};

export default TestPage;
