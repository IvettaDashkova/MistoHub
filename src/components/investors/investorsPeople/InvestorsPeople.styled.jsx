import styled from 'styled-components';

export const ListWrapper = styled.div`
  @media screen and (min-width: 375px) and (max-width: 811.9px) {
    div {
      max-width: 375px;
      position: relative;
      overflow: hidden;
    }

    @keyframes moveToLeft {
      0% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(-50%);
      }
      100% {
        transform: translateX(-100%);
      }
    }

    ul {
      display: flex;
      gap: 13px;
      row-gap: 16px;
      // animation: moveToLeft 10s linear infinite;
    }

    .group:nth-child(even) {
      animation: moveToLeft reverse 10s linear infinite;
    }

    // .group:nth-child(odd) {
    //   animation: moveLeft 10s linear infinite;
    // }

    li {
      cursor: pointer;
      flex-shrink: 0;
      flex-grow: 0;
      // opacity: 0.3;
    }

    // .group:before {
    //   left: 0;
    //   opacity: 0.3;
    // }

    // .group:after {
    //   right: 0;
    //   opacity: 0.3;
    // }

    img {
      width: 80px;
      height: 62px;
      border-radius: 10px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023.9px) {
    div {
      max-width: 768px;
      position: relative;
      overflow: hidden;
    }

    ul {
      display: flex;
      gap: 13px;
      row-gap: 16px;
      // animation: moveToLeft 10s linear infinite;
    }
  }

  @media screen and (min-width: 1024px) {
    div {
      max-width: 1024px;
      position: relative;
      overflow: hidden;
    }

    ul {
      display: flex;
      gap: 13px;
      row-gap: 16px;
    }
  }
`;
