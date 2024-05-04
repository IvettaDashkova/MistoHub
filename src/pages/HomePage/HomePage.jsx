import Modal from 'react-modal';

import Header from '/src/components/Header/Header';
import AboutProject from '../../components/About/AboutProject';
import { ZibraniKoshti } from '../../components/ZibraniKoshti/ZibraniKoshti';
import Visualization from '../../components/Visualization/Visualization';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
// import TestSections from '../../components/ScrollToTopButton/TestSections';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import DevelopersModal from '../../components/DevelopersModal/DevelopersModal';
import HeroSection from '/src/components/HeroSection/HeroSection';
import CoFounders from '../../components/CoFounders/CoFounders';
import ModalsManager from '/src/shared/Modals/ModalsManager';

Modal.setAppElement('#root');

const HomePage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;
    if (hash) {
      const sectionId = hash.substring(1);
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        window.scrollTo({
          top: sectionElement.offsetTop - 120,
          behavior: 'smooth',
        });
      }
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = document.querySelectorAll('section');

      sectionElements.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        if (
          window.scrollY >= sectionTop - 120 &&
          window.scrollY < sectionTop + sectionHeight - 120
        ) {
          setActiveSection(sectionId);
          const url = `#${sectionId}`;
          window.history.pushState(null, '', url);
          //pushState змінює url при скролі
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  return (
    <>
      <Header handleMenuOpen={handleMenuOpen} />
      <BurgerMenu
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        handleMenuClose={handleMenuClose}
      />
      <main>
        <HeroSection />
        <AboutProject />
        <Visualization />
        <ZibraniKoshti />
        <ScrollToTopButton />
        <CoFounders />
      </main>
      <Footer />
      <DevelopersModal />
      <ModalsManager />
    </>
  );
};

export default HomePage;
