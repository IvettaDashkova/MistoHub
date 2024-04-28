import styled from 'styled-components';

export const CompanyWrapper = styled.div`
  @media screen and (min-width: 375px) and (max-width: 811.9px) {
    div {
      max-width: 375px;
      margin-bottom: 60px;
    }
    @keyframes moveRightToLeft {
      0% {
        transform: translateX(0);
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

    div {
      position: relative;
      display: flex;
      overflow: hidden;
    }

    img {
      width: 80px;
      height: 62px;
      border-radius: 10px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023.9px) {
    div {
      max-width: 768px;
      margin-bottom: 120px;
    }

    @keyframes moveRightToLeft {
      0% {
        transform: translateX(0);
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
      gap: 32px;
      width: 100vw;
      animation: moveRightToLeft 5s linear infinite;
    }

    ul:hover {
      animation-play-state: paused;
    }

    li {
      cursor: pointer;
    }

    div {
      display: flex;
      overflow: hidden;
    }

    img {
      width: 180px;
      height: 140px;
      border-radius: 10px;
    }
  }

  @media screen and (min-width: 1024px) {
    div {
      max-width: 1024px;
      margin-bottom: 150px;
    }

    @keyframes moveRightToLeft {
      0% {
        transform: translateX(0);
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
      gap: 32px;
      width: 100vw;
      animation: moveRightToLeft 5s linear infinite;
    }

    ul:hover {
      animation-play-state: paused;
    }

    li {
      cursor: pointer;
    }

    div {
      // position: relative;
      display: flex;
      overflow: hidden;
    }

    img {
      width: 180px;
      height: 140px;
      border-radius: 10px;
    }
  }
`;
