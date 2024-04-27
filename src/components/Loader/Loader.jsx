import React from 'react';
import { LoaderContainer, Text, SvgHouse, SvgWave } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderContainer>
      <SvgHouse width="31" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30.276 19.025H.024V9.022L15.151 0l15.125 9.022v10.003z" fill="#F77D07" />
      </SvgHouse>
      <Text>Місто Хаб</Text>
      <SvgWave width="30" height="15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36.115 14.107c-4.434 0-6.857-1.63-8.624-2.819-1.296-.872-1.83-1.23-3.414-1.23s-2.122.361-3.414 1.23c-1.768 1.19-4.19 2.819-8.625 2.819-4.434 0-6.857-1.63-8.624-2.821-1.295-.872-1.83-1.231-3.414-1.231V.844c4.434 0 6.857 1.63 8.624 2.821 1.296.872 1.83 1.231 3.414 1.231s2.122-.362 3.414-1.23c1.768-1.19 4.19-2.82 8.625-2.82 4.434 0 6.857 1.63 8.624 2.822 1.295.872 1.83 1.23 3.414 1.23v9.212-.003z" fill="#F77D07" />
      </SvgWave>
    </LoaderContainer>
  );
};

export default Loader;