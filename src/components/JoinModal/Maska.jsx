import { MaskaStyled } from './JoinModal.styled.jsx';

const Maska = () => {
  return (
    <MaskaStyled>
      <picture>
        <source
          className="joinImg"
          srcSet="/src/assets/hero/hero1@2x.png 2x"
          type="image/png"
        />
        <source
          className="joinImg"
          srcSet="/src/assets/hero/hero1.webp 1x,  /src/assets/hero/hero1.@2x.webp 2x"
          type="image/webp"
        />
        <img
          className="joinImg"
          src="/src/assets/hero/hero1.png"
          alt="Kitchen 1"
        />
      </picture>
    </MaskaStyled>
  );
};

export default Maska;
