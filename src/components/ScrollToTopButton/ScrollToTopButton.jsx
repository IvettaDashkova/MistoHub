import { useState, useEffect } from 'react';
import { StyledScrollButton } from './ScrollToTopButton.styled';
import { animateScroll as scroll } from 'react-scroll';
import Iconsvg from '../Icon/Icon';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 250) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuart',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledScrollButton visible={isVisible ? 1 : 0} onClick={scrollToTop}>
      <Iconsvg iconName="topscroll" />
    </StyledScrollButton>
  );
};

export default ScrollToTopButton;
