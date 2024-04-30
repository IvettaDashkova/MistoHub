import { useState, useEffect } from 'react';
import { ProgressBar, Accumulated } from './ZibraniKoshti.styled';
import ProgressBarAmount from './ProgressBarAmount';

const FundraisingProgressBar = ({ totalAmount, targetAmount }) => {
  const percentage = Math.min((totalAmount / targetAmount) * 100, 100);

  const [progress, setProgress] = useState(percentage);

  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);

  return (
    <ProgressBar>
      <div>
        <Accumulated progress={percentage}>
          <ProgressBarAmount totalAmount={125000}></ProgressBarAmount>
        </Accumulated>
      </div>
    </ProgressBar>
  );
};

export default FundraisingProgressBar;
