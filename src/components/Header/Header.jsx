import { useEffect, useState } from 'react';

import { BurgerMenu, HeaderContainer, StyledHeader } from './Header.styled';

import MainLogoIcon from '../../assets/icons/header/MainLogoIcon';
import SocialBlock from '../../shared/SocialBlock/SocialBlock';
import CloudsIcon from '../../assets/icons/header/clouds.svg';

function Header() {
  const [containerPadding, setContainerPadding] = useState(120);
  const [lightColor, setLightColor] = useState(255);
  const [darkColor, setDarkColor] = useState(11);

  const lightColorRGBA = `rgba(${lightColor}, ${lightColor}, ${lightColor}, 1)`;
  const darkColorRGBA = `rgba(${darkColor}, ${darkColor}, ${darkColor}, 1)`;

  useEffect(() => {
    const handleScroll = () => {
      const positionScreen = Math.round(window.scrollY);
      const newPadding = Math.min(120 + positionScreen, 283);
      const newLightColor = Math.max(11, 255 - positionScreen * 2);
      const newDarkColor = Math.min(11 + positionScreen * 2, 255);

      setContainerPadding(newPadding);
      setLightColor(newLightColor);
      setDarkColor(newDarkColor);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledHeader>
      <HeaderContainer $padding={`${containerPadding}px`}>
        <MainLogoIcon colorLight={lightColorRGBA}></MainLogoIcon>
        <div className="menu-wrapper">
          <SocialBlock colorLight={lightColorRGBA} colorDark={darkColorRGBA} />
          <button
            type="button"
            className="btn-clouds"
            onClick={() => console.log('Modal for supported project is open!')}
          >
            <CloudsIcon className="clouds" />
            <span>Підтримати проект</span>
          </button>
          <button type="button" onClick={() => console.log('Menu open!')}>
            <BurgerMenu color={lightColorRGBA}></BurgerMenu>
          </button>
        </div>
      </HeaderContainer>
    </StyledHeader>
  );
}

export default Header;
