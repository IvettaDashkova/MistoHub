import styled, { keyframes } from 'styled-components';

export const spinner = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Text = styled.div`
  text-align: center;
  color: #fff;
  -webkit-text-stroke: 0.5px #0B0B0B;
  font-size: 14px;
  animation: ${spinner} 2s linear infinite;
`;

export const SvgHouse = styled.svg`
  margin: 0px;
`;

export const SvgWave = styled.svg`
  margin: 0;
`;
