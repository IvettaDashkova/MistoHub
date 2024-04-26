import styled from 'styled-components';

export const CompanyWrapper = styled.div`
  @media screen and (min-width: 375px) and (max-width: 811.9px) {
    div {
      max-width: 375px;
      background-image: url('../svgModalInvest/Vector-background.svg');
      background-repeat: no-repeat;
      background-position: right center;
    }
    @keyframes moveRightToLeft {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-100%);
      }
    }

    ul {
      display: flex;
      gap: 12px;
      width: max-content;
      animation: moveRightToLeft 7s linear infinite;
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
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023.9px) {
    div {
      max-width: 768px;
    }
    @keyframes moveRightToLeft {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-100%);
      }
    }

    ul {
      display: flex;
      gap: 32px;
      width: max-content;
      animation: moveRightToLeft 15s linear infinite;
    }

    ul:hover {
      animation-play-state: paused;
    }

    li {
      cursor: pointer;
    }

    img {
      width: 180px;
      height: 140px;
      border-radius: 10px;
    }
  }
`;
