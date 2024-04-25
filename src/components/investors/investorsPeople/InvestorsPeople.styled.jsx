import styled from 'styled-components';

export const ListWrapper = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 13px;
    row-gap: 16px;
    overflow: hidden;
  }

  @keyframes moveLeft {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
    }
  }

  @keyframes moveRight {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }

  ul:nth-child(even) {
    animation: moveRight 40s linear infinite forwards;
  }

  ul:nth-child(odd) {
    animation: moveLeft 40s linear infinite forwards;
  }

  li {
    cursor: pointer;
    overflow: hidden;
    height: auto;
    width: calc((100% - 299px) / 24);
    flex-shrink: 0;
    flex-grow: 0;
  }

  img {
    width: 80px;
    height: 62px;
    border-radius: 10px;
  }
`;
