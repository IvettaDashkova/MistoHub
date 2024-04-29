import sprite from '../../assets/icons.svg';

const Icon = ({ width, height, iconName }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#${iconName}`}></use>
    </svg>
  );
};

export default Icon;
