import styled, { keyframes } from 'styled-components';

const animToLeft = keyframes`
  0% {
    transform: translateX(0%)
  }
  100% {
    transform: translateX(-260%)
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
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  div {
    position: relative;
    overflow: hidden;
  }

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    column-gap: 13px;
  }

  .group-0 ul {
    animation: ${animToLeft} 14s linear infinite;
  }

  .group-1 ul {
    animation: ${animToRight} 33s linear infinite;
  }

  .group-2 ul {
    animation: ${animToLeft} 33s linear infinite;
  }

  .group-3 ul {
    animation: ${animToRight} 14s linear infinite;
  }

  .item-list {
    width: 80px;
    height: 62px;
    margin: 0;
    padding: 0;
    border-radius: 10px;
    background-color: transparent;
    border: none;
  }

  .item-list img {
    filter: opacity(0px);
    transition: filter 1s linear;
  }

  .item-list.on-blur img {
    filter: opacity(35%);
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
    display: block;
    width: 80px;
    height: 62px;
    border-radius: 10px;
    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    row-gap: 30px;
    .group-0 ul {
      animation: ${animToLeft} 15s linear infinite;
    }

    .group-1 ul {
      animation: ${animToRight} 35s linear infinite;
    }

    .group-2 ul {
      animation: ${animToLeft} 35s linear infinite;
    }

    .group-3 ul {
      animation: ${animToRight} 15s linear infinite;
    }

    ul {
      column-gap: 30px;
    }

    .item-list {
      width: 180px;
      height: 140px;
    }

    ul:hover {
      animation-play-state: paused;
    }

    img {
      width: 180px;
      height: 140px;
      border-radius: 10px;
    }
  }

  @media screen and (min-width: 1440px) {
    .group-0 ul {
      animation: ${animToLeft} 30s linear infinite;
    }

    .group-1 ul {
      animation: ${animToRight} 80s linear infinite;
    }

    .group-2 ul {
      animation: ${animToLeft} 80s linear infinite;
    }

    .group-3 ul {
      animation: ${animToRight} 30s linear infinite;
    }

    .item-list img {
      filter: opacity(0px);
      transition: filter 1s linear;
    }

    .item-list.on-blur img {
      filter: opacity(35%);
    }

    ul:hover {
      animation-play-state: paused;
    }

    li {
      cursor: pointer;
    }
  }
`;
