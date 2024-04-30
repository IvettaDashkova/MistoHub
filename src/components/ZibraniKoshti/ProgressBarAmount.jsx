import { useState, useEffect } from 'react';
import { AmountGif } from './ZibraniKoshti.styled';

const ProgressBarAmount = ({ totalAmount }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const animationDuration = 3000;
    const intervalDuration = 30;
    const steps = totalAmount / (animationDuration / intervalDuration);

    let currentAmount = 0;
    const interval = setInterval(() => {
      currentAmount += steps;
      if (currentAmount >= totalAmount) {
        currentAmount = totalAmount;
        clearInterval(interval);
      }
      setProgress(currentAmount);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [totalAmount]);

  return (
    <AmountGif progress={progress}>
      ${progress.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
    </AmountGif>
  );
};

export default ProgressBarAmount;
