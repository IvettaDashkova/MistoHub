import styled, { keyframes } from 'styled-components';

const animToLeft = keyframes`
  0% {
    transform: translateX(0)
  }
  100% {
    transform: translateX(-100%)
  }
  `;

const animToRight = keyframes`
  0% {
    transform: translateX(-100%)
  }
  100% {
    transform: translateX(0)
  }
  `;

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

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .item-list {
    width: 80px;
    height: 62px;
    margin: 0;
    border-radius: 10px;
    background-color: transparent;
    border: none;
  }

  .item-list img,
  .item-list img,
  .item-list img,
  .item-list img {
    filter: blur(0px);
    transition: filter 700ms linear;
  }

  .item-list.on-blur img,
  .item-list.on-blur img,
  .item-list.on-blur img,
  .item-list.on-blur img {
    filter: opacity(40%);
  }
  .group-0 ul {
    animation: ${animToLeft} 40s linear infinite;
  }

  .group-2 ul {
    animation: ${animToLeft} 80s linear infinite;
  }
  .group-1 ul {
    animation: ${animToRight} 80s linear infinite;
  }

  .group-3 ul {
    animation: ${animToRight} 40s linear infinite;
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
    object-fit: cover;
  }

  @media screen and (min-width: 768px) and (max-width: 1439.9px) {
    .even-group ul {
      gap: 30px;
      margin-bottom: 30px;
      animation: moveToRight 140s linear infinite;
    }

    .odd-group ul {
      gap: 30px;
      margin-bottom: 30px;
      animation: moveToLeft 140s linear infinite;
    }

    .item-list {
      width: 180px;
      height: 140px;
    }

    .group-0 ul {
      animation: ${animToLeft} 10s linear infinite;
    }

    .group-2 ul {
      animation: ${animToLeft} 30s linear infinite;
    }
    .group-1 ul {
      animation: ${animToRight} 30s linear infinite;
    }

    .group-3 ul {
      animation: ${animToRight} 10s linear infinite;
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
      gap: 32px;
      margin-bottom: 32px;
      animation: moveToRight 10s linear infinite;
    }

    .odd-group ul {
      gap: 32px;
      margin-bottom: 32px;
      animation: moveToLeft 10s linear infinite;
    }

    ul:hover {
      animation-play-state: paused;
    }

    .item-list {
      width: 180px;
      height: 140px;
    }

    .group-0 ul {
      animation: ${animToLeft} 30s linear infinite;
    }

    .group-2 ul {
      animation: ${animToLeft} 80s linear infinite;
    }
    .group-1 ul {
      animation: ${animToRight} 80s linear infinite;
    }

    .group-3 ul {
      animation: ${animToRight} 30s linear infinite;
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
