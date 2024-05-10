import { useState, useEffect } from 'react';
import { StyledScrollButton } from './ScrollToTopButton.styled';
import { animateScroll as scroll } from 'react-scroll';
import Iconsvg from '../Icon/Icon';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > 250) {
      setIsVisible(1);
    } else {
      setIsVisible(0);
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
    <StyledScrollButton
      style={{ opacity: isVisible }}
      type="button"
      title="Вгору"
      onClick={scrollToTop}
    >
      <Iconsvg iconName="topscroll" />
    </StyledScrollButton>
  );
};

export default ScrollToTopButton;
