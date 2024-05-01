import { useState, useEffect, useRef } from 'react';
import { ProgressBar, Accumulated } from './ZibraniKoshti.styled';
import ProgressBarAmount from './ProgressBarAmount';

const FundraisingProgressBar = ({ totalAmount, targetAmount }) => {
  const percentage = Math.min((totalAmount / targetAmount) * 100, 100);
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

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <ProgressBar ref={sectionRef}>
      <div>
        <Accumulated progress={isVisible ? percentage : 0}>
          <ProgressBarAmount
            totalAmount={isVisible ? totalAmount : 0}
          ></ProgressBarAmount>
        </Accumulated>
      </div>
    </ProgressBar>
  );
};

export default FundraisingProgressBar;
