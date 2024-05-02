import styled from 'styled-components';

export const ListWrapper = styled.div`
  div {
    position: relative;
    overflow: hidden;
    margin: auto;
  }

  @keyframes moveToLeft {
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

  @keyframes moveToRight {
    0% {
      transform: translateX(-100%);
    }
    25% {
      transform: translateX(-75%);
    }
    50% {
      transform: translateX(-50%);
    }
    75% {
      transform: translateX(-25%);
    }
    100% {
      transform: translateX(0);
    }
  }

  .even-group ul {
    display: flex;
    gap: 13px;
    margin-bottom: 16px;
    animation: moveToRight 10s linear infinite;
  }

  .odd-group ul {
    display: flex;
    gap: 13px;
    margin-bottom: 16px;
    animation: moveToLeft 10s linear infinite;
  }

  .group-0.odd-group::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    border-radius: 10px;
    width: 80px;
    height: 62px;
    opacity: 0.3;
    background: lightgray;
    z-index: 2;
  }

  .group-0.odd-group::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    border-radius: 10px;
    width: 80px;
    height: 62px;
    opacity: 0.3;
    background: lightgray;
  }

  .group-3.even-group::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    border-radius: 10px;
    width: 80px;
    height: 62px;
    opacity: 0.3;
    background: lightgray;
    z-index: 2;
  }

  .group-3.even-group::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    border-radius: 10px;
    width: 80px;
    height: 62px;
    opacity: 0.3;
    background: lightgray;
  }

  ul:hover {
    animation-play-state: paused;
  }

  li {
    cursor: pointer;
    flex-shrink: 0;
    flex-grow: 0;
  }

  img {
    width: 80px;
    height: 62px;
    border-radius: 10px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439.9px) {
    .even-group ul {
      display: flex;
      gap: 30px;
      margin-bottom: 30px;
      animation: moveToRight 10s linear infinite;
    }

    .odd-group ul {
      display: flex;
      gap: 30px;
      margin-bottom: 30px;
      animation: moveToLeft 10s linear infinite;
    }

    .group-0.odd-group::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      border-radius: 10px;
      width: 180px;
      height: 140px;
      opacity: 0.3;
      background: lightgray;
      z-index: 2;
    }

    .group-0.odd-group::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      border-radius: 10px;
      width: 180px;
      height: 140px;
      opacity: 0.3;
      background: lightgray;
    }

    .group-1.even-group::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      border-radius: 10px;
      width: 180px;
      height: 140px;
      opacity: 0.3;
      background: lightgray;
      z-index: 2;
    }

    .group-2.odd-group::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      border-radius: 10px;
      width: 180px;
      height: 140px;
      opacity: 0.3;
      background: lightgray;
    }

    .group-3.even-group::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      border-radius: 10px;
      width: 180px;
      height: 140px;
      opacity: 0.3;
      background: lightgray;
      z-index: 2;
    }

    .group-3.even-group::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      border-radius: 10px;
      width: 180px;
      height: 140px;
      opacity: 0.3;
      background: lightgray;
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

  @media screen and (min-width: 1440px) {
    .even-group ul {
      display: flex;
      gap: 32px;
      margin-bottom: 32px;
      animation: moveToRight 10s linear infinite;
    }

    .odd-group ul {
      display: flex;
      gap: 32px;
      margin-bottom: 32px;
      animation: moveToLeft 10s linear infinite;
    }

    .odd-group::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      border-radius: 10px;
      width: 180px;
      height: 140px;
      opacity: 0.3;
      background: lightgray;
      z-index: 2;
    }

    .odd-group::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      border-radius: 10px;
      width: 180px;
      height: 140px;
      opacity: 0.3;
      background: lightgray;
    }

    .even-group::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      border-radius: 10px;
      width: 180px;
      height: 140px;
      opacity: 0.3;
      background: lightgray;
      z-index: 2;
    }

    .even-group::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      border-radius: 10px;
      width: 180px;
      height: 140px;
      opacity: 0.3;
      background: lightgray;
      z-index: 2;
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
