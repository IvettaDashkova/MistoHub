import styled from 'styled-components';

export const CompanyWrapper = styled.div`
  div {
    margin-bottom: 60px;
    position: relative;
    display: flex;
    overflow: hidden;
  }
  @keyframes moveRightToLeft {
    0% {
      transform: translateX(0%);
    }
    25% {
      transform: translateX(-25%);
    }
    50% {
      transform: translateX(-50%);
    }
    75% {
      transform: translateX(-75%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  ul {
    display: flex;
    gap: 12px;
    width: 100vw;
    animation: moveRightToLeft 10s linear infinite;
  }

  ul:hover {
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
    div {
      margin-bottom: 120px;
    }

    ul {
      display: flex;
      gap: 32px;
      width: 100vw;
      animation: moveRightToLeft 10s linear infinite;
    }

    img {
      width: 180px;
      height: 140px;
    }
  }

  @media screen and (min-width: 1440px) {
    div {
      margin-bottom: 150px;
    }
  }
`;
