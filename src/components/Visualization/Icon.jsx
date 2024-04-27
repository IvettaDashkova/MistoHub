import sprite from '../../assets/icons.svg';
import styled from 'styled-components';

const StyledIcon = styled.svg`
  fill: ${(props) => props.fill};
  stroke: ${(props) => props.stroke};
`;

const Icon = ({ width, height, iconName, fill, stroke }) => {
  return (
    <StyledIcon width={width} height={height} fill={fill} stroke={stroke}>
      <use href={`${sprite}#${iconName}`}></use>
    </StyledIcon>
  );
};

export default Icon;
