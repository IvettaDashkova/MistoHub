import { useState, useEffect } from 'react';

const FundraisingProgressBar = ({ totalAmount, targetAmount }) => {
  const percentage = Math.min((totalAmount / targetAmount) * 100, 100);

  const [progress, setProgress] = useState(percentage);

  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);

  return (
    <div
      style={{
        width: '100%',
        height: '10px',
        backgroundColor: '#f0f0f0',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: '10px',
          backgroundColor: 'green',
        }}
      />
    </div>
  );
};

export default FundraisingProgressBar;
