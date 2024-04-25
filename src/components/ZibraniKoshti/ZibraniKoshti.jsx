import { Cards } from './Cards';
import FundraisingProgressBar from './FundraisingProgressBar';
import { ContainerWrapper, TitleContainer } from './ZibraniKoshti.styled';

export const ZibraniKoshti = () => {
  return (
    <ContainerWrapper>
      <TitleContainer>
        <h2>До відкриття залишилось </h2>
        <p>$ 60 000</p>
      </TitleContainer>
      <FundraisingProgressBar totalAmount={125000} targetAmount={180000} />
      <Cards />
      <button onClick={() => console.log('Click')} type="button">
        Підтримати проєкт
      </button>
    </ContainerWrapper>
  );
};
