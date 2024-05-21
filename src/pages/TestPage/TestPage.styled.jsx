import styled from 'styled-components';

export const Wrapper = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    position: relative;
    overflow: hidden;
    max-width: 375px;
    width: 100%;
    @media screen and (min-width: 768px) {
      max-width: 768px;
    }
    @media screen and (min-width: 1440px) {
      max-width: 1440px;
    }
  }

  .odd-group,
  .even-group {
    position: absolute;
  }

  .list {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    column-gap: 13px;
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

  .list:hover {
    animation-play-state: paused;
  }

  .item {
    cursor: pointer;
    flex-shrink: 0;
    flex-grow: 0;
  }

  .image {
    display: block;
    width: 80px;
    height: 62px;
    border-radius: 10px;
    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    .container {
      row-gap: 30px;
    }

    .list {
      column-gap: 30px;
    }

    .item-list {
      width: 180px;
      height: 140px;
    }

    .image {
      width: 180px;
      height: 140px;
      border-radius: 10px;
    }
  }

  @media screen and (min-width: 1440px) {
    .container {
      height: 950px;
    }
    .group-1 {
      top: 170px;
      left: -3780px;
    }

    .group-2 {
      top: 340px;
      left: 0px;
    }

    .group-3 {
      top: 510px;
      left: -3780px;
    }
    .group-4 {
      top: 680px;
      left: 0px;
    }

    .item-list .image {
      filter: opacity(0px);
      transition: filter 1s linear;
    }

    .item-list.on-blur .image {
      filter: opacity(35%);
    }

    .list:hover {
      animation-play-state: paused;
    }

    .item {
      cursor: pointer;
    }
  }
`;
