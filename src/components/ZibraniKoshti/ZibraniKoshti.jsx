import { Cards } from './Cards';
import FundraisingProgressBar from './FundraisingProgressBar';
import {
  ContainerWrapper,
  MainTitle,
  Price,
  TitleContainer,
} from './ZibraniKoshti.styled';

export const ZibraniKoshti = () => {
  return (
    <ContainerWrapper>
      <TitleContainer>
        <MainTitle>До відкриття залишилось </MainTitle>
        <Price>$ 60 000</Price>
      </TitleContainer>
      <FundraisingProgressBar totalAmount={125000} targetAmount={180000} />
      <Cards />
      <button type="button">Підтримати проєкт</button>
    </ContainerWrapper>
  );
};
