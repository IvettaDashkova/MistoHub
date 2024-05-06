import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useModal } from '../../contexts/ModalHook';

import { HeaderContainer, StyledHeader } from './Header.styled';
import SocialBlock from '/src/shared/SocialBlock/SocialBlock';
import Icon from '/src/components/Icon/Icon';

function Header({ handleMenuOpen }) {
  const [darkStyle, setDarkStyle] = useState('');
  const { openModal } = useModal();

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    const footerEl = document.getElementById('footer');
    const headerEl = document.querySelector('header');

    const handleScroll = () => {
      if (window.scrollY !== 0 && footerEl.offsetTop - 150 >= window.scrollY) {
        headerEl.classList.value.includes('hidden') &&
          headerEl.classList.remove('hidden');
        setDarkStyle('dark-header');
      } else if (window.scrollY === 0) {
        setDarkStyle('');
      } else {
        headerEl.classList.add('hidden');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledHeader>
      <HeaderContainer>
        <Icon
          width={isMobile ? '99' : '118'}
          height={isMobile ? '34' : '40'}
          iconName="main-logo"
          styles={`${darkStyle} main-logo`}
        />
        {isMobile ? (
          <>
            <button type="button" onClick={handleMenuOpen}>
              <Icon
                width="44"
                height="38"
                iconName="burger-menu"
                styles={`${darkStyle} burger-menu-icon`}
              />
            </button>
          </>
        ) : (
          <div className="menu-wrapper">
            <SocialBlock darkStyle={darkStyle} />
            <button
              type="button"
              className="btn-clouds"
              onClick={() => openModal('join_modal')}
            >
              <Icon
                width="180"
                height="85"
                iconName="cloud"
                styles={`${darkStyle} cloud-icon`}
              />
              <span>Підтримати проект</span>
            </button>
            <button type="button" onClick={handleMenuOpen}>
              <Icon
                width="54"
                height="47"
                iconName="burger-menu"
                styles={`${darkStyle} burger-menu-icon`}
              />
            </button>
          </div>
        )}
      </HeaderContainer>
    </StyledHeader>
  );
}

export default Header;
