import { ProgressBar, Accumulated } from './AccumulatedMoney.styled';
import ProgressBarAmount from './ProgressBarAmount';

const FundraisingProgressBar = ({ totalAmount, targetAmount, goAnimation }) => {
  const percentage = Math.min((totalAmount / targetAmount) * 100, 100);
console.log(goAnimation)
  return (
    <ProgressBar>
      <div>
        <Accumulated progress={goAnimation ? percentage : 0}>
          <ProgressBarAmount
            totalAmount={goAnimation ? totalAmount : 0}
          ></ProgressBarAmount>
        </Accumulated>
      </div>
    </ProgressBar>
  );
};

export default FundraisingProgressBar;
