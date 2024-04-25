import styled from 'styled-components';

export const StyledScrollButton = styled.button`
  position: fixed;
  bottom: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #f77d07;
  border: none;
  outline: none;
  transition: opacity 0.3s ease;
  opacity: ${(props) => (props.visible ? '1' : '0')};

  @media screen and (min-width: 768px) {
    height: 60px;
    width: 60px;
  }

  svg {
    fill: #ffffff;
    stroke: none;
    width: 20px;
    height: 15px;

    @media screen and (min-width: 768px) {
      width: 24px;
      height: 18px;
    }
  }
`;
