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
  height: 50vh;

    .house-svg{
    margin-right: 5px;
    fill: #F77D07;
  }

  .wave-svg{
    margin-left: 1px;
    fill: #F77D07;
  }
  
`;

export const Text = styled.div`
  text-align: center;
  color: #fff;
  margin:0;
  margin-top: -20px;
  margin-right: 10px;
  -webkit-text-stroke: 0.5px #0B0B0B;
  font-size: 10px;
  animation: ${spinner} 2s linear infinite;
`;

