import styled, { css, keyframes } from 'styled-components';

const generateKeyframes = ({ start, end }) => keyframes`
  0% {
    transform: translateX(${start});
  }
  100% {
    transform: translateX(${end}px);
  }
`;

export const CompanyWrapper = styled.div`
  margin-bottom: 60px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    margin-bottom: 120px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 150px;
  }
`;

export const CompaniesList = styled.ul`
  ${(props) => {
    if (!props.$anim) return;
    const animate = generateKeyframes(props.$anim);
    return css`
      animation: ${animate} ${props.$anim.time}s linear infinite;
    `;
  }}

  display: flex;
  column-gap: 12px;

  &:active {
    animation-play-state: paused;
  }

  li {
    cursor: pointer;
  }

  img {
    width: 80px;
    height: 62px;
    border-radius: 10px;
    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    column-gap: 32px;

    img {
      width: 180px;
      height: 140px;
    }
  }

  @media screen and (min-width: 1440px) {
    &:hover {
      animation-play-state: paused;
    }
  }
`;
