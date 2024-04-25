import { useState, useEffect } from 'react';
import { ProgressBar, Accumulated, AmountGif } from './ZibraniKoshti.styled';

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
          <AmountGif>$125 000</AmountGif>
        </Accumulated>
      </div>
    </ProgressBar>
  );
};

export default FundraisingProgressBar;
