import { MadeCards } from './MadeCards';
import { NeedToDoCards } from './NeedToDoCards';
import { useMediaQuery } from 'react-responsive';
import { CardsList } from './ZibraniKoshti.styled';

export const Cards = () => {
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  return (
    <CardsList>
      {isDesktop ? (
        <>
          <ul>
            <NeedToDoCards />
          </ul>
          <ul>
            <MadeCards />
          </ul>
        </>
      ) : (
        <>
          <NeedToDoCards />
          <MadeCards />
        </>
      )}
    </CardsList>
  );
};
