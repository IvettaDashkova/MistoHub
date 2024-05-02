import { MaskaStyled } from '/src/components/JoinModal/JoinModal.styled';

const Maska = () => {
  return (
    <MaskaStyled>
      <picture>
        <source
          className="joinImg"
          srcSet="/src/assets/hero/maska.png 1x, /src/assets/hero/maska@2x.png 2x"
          type="image/png"
        />
        <source
          className="joinImg"
          srcSet="/src/assets/hero/maska.webp 1x, /src/assets/hero/maska@2x.webp 2x"
          type="image/webp"
        />
        <img className="joinImg" src="/src/assets/hero/maska.png" alt="Maska" />
      </picture>
    </MaskaStyled>
  );
};

export default Maska;
