import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { HeaderContainer, StyledHeader } from './Header.styled';
import SocialBlock from '/src/shared/SocialBlock/SocialBlock';
import Icon from '/src/components/Icon/Icon';

function Header({ handleMenuOpen }) {
  const [transitionClass, setTransitionClass] = useState('');

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY !== 0) {
        setTransitionClass('short-header');
      } else {
        setTransitionClass('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledHeader>
      <HeaderContainer className={transitionClass}>
        <Icon
          width={isMobile ? '99' : '118'}
          height={isMobile ? '34' : '40'}
          iconName="main-logo"
          styles={`${transitionClass} main-logo`}
        />
        {isMobile ? (
          <>
            <button type="button" onClick={handleMenuOpen}>
              <Icon
                width="44"
                height="38"
                iconName="burger-menu"
                styles={`${transitionClass} burger-menu-icon`}
              />
            </button>
          </>
        ) : (
          <div className="menu-wrapper">
            <SocialBlock transitionClass={transitionClass} />
            <button
              type="button"
              className="btn-clouds"
              onClick={() =>
                console.log('Modal for supported project is open!')
              }
            >
              <Icon
                width="180"
                height="85"
                iconName="cloud"
                styles={`${transitionClass} cloud-icon`}
              />
              <span>Підтримати проект</span>
            </button>
            <button type="button" onClick={handleMenuOpen}>
              <Icon
                width="54"
                height="47"
                iconName="burger-menu"
                styles={`${transitionClass} burger-menu-icon`}
              />
            </button>
          </div>
        )}
      </HeaderContainer>
    </StyledHeader>
  );
}

export default Header;
