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
      <div
        style={{
          width: '100%',
          height: '10px',
          backgroundColor: '#7E7E7E',
          borderRadius: '100px',
          position: 'relative',
        }}
      >
        <Accumulated
          style={{
            width: `${progress}%`,
            height: '10px',
            backgroundColor: '#FFFFFF',
            
          }}
        >
          <AmountGif>$125 000</AmountGif>
        </Accumulated>
      </div>
    </ProgressBar>
  );
};

export default FundraisingProgressBar;
