import { MadeCards } from './MadeCards';
import { NeedToDoCards } from './NeedToDoCards';
import { CardsList } from './ZibraniKoshti.styled';

export const Cards = () => {
  return (
    <CardsList>
      <NeedToDoCards />
      <MadeCards />
    </CardsList>
  );
};
