import styled from 'styled-components';

export const PersonName = styled.h3`
  font-weight: 600;
  font-size: 18px;
  line-height: 122%;
  letter-spacing: -0.02em;
  color: #0b0b0b;
  text-align: center;
`;

export const PersonDescription = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 133%;
  letter-spacing: -0.02em;
  text-align: center;
  color: rgba(11, 11, 11, 0.5);
`;

export const PersonImageContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

export const PersonImage = styled.img`
  border-radius: 50%;
  background: black;
  width: 100px;
  height: 100px;
`;
