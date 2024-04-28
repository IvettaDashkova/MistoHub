import styled from 'styled-components';

export const StyledText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: rgba(11, 11, 11, 0.5);
`;

export const BtnClose = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  svg {
    stroke-width: 2px;
    stroke: rgba(11, 11, 11, 0.5);
  }
`;

export const BtnSupport = styled.button`
  width: 129px;
  height: 61px;
  font-weight: 600;
  border: none;
  padding: 0;
  outline: none;
  font-size: 10px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #fff;
  background-repeat: no-repeat;
  background-color: orange;

  &:hover {
    border: none;
    outline: none;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 0;
`;

export const ImgContainer = styled.div`
  width: 1053px;
  height: 563px;
  background-image: url('/src/assets/menu-img/vector.png');
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  padding: 0;
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
  }

  img {
    width: auto;
    margin-left: -208px;
  }

  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('/src/assets/menu-img/vector-x2.png');
  }
`;

export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  padding: 0;
`;

export const BottomContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  padding: 0;
`;

export const BtnGoIt = styled.button`
  border: none;
  outline: none;
  padding: 0;
  background-color: transparent;

  &:hover {
    border: none;
    outline: none;
  }
`;

export const SocLincContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  gap: 8px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
