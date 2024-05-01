import { MadeCards } from './MadeCards';
import { NeedToDoCards } from './NeedToDoCards';
import { useMediaQuery } from 'react-responsive';
import { CardsList } from './ZibraniKoshti.styled';

import { useState, useEffect, useRef } from 'react';

export const Cards = () => {
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  const sectionRef = useRef(null);

  return (
    <CardsList ref={sectionRef}>
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
