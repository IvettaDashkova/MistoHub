import { MaskaStyled } from '/src/components/JoinModal/JoinModal.styled';

import maska_png1 from '/src/assets/join/maska.png';
import maska_png2 from '/src/assets/join/maska@2x.png';
import maska_webp1 from '/src/assets/join/maska.webp';
import maska_webp2 from '/src/assets/join/maska@2x.webp';

const Maska = () => {
  return (
    <MaskaStyled>
      <picture>
        <source
          className="joinImg"
          srcSet={`${maska_webp1} 1x, ${maska_webp2} 2x`} //
          type="image/png"
        />
        <source
          className="joinImg"
          srcSet={`${maska_png1} 1x, ${maska_png2} 2x`}
          type="image/webp"
        />
        <img className="joinImg" src={maska_png1} alt="Maska" />
      </picture>
    </MaskaStyled>
  );
};

export default Maska;
