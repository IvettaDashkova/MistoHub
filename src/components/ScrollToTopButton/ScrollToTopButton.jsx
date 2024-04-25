import { useState, useEffect } from 'react';
import { StyledScrollButton } from './ScrollToTopButton.styled';
import { animateScroll as scroll } from 'react-scroll';
import ScrollArrow from '../../assets/scroll-icon/ScrollArrow';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
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
    <StyledScrollButton
      visible={isVisible ? 1 : 0}
      onClick={scrollToTop}
      title="Вгору"
    >
      <ScrollArrow />
    </StyledScrollButton>
  );
};

export default ScrollToTopButton;
