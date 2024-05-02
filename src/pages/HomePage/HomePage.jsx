import Modal from 'react-modal';
import Header from '/src/components/Header/Header';
import AboutProject from '../../components/About/AboutProject';
import { ZibraniKoshti } from '../../components/ZibraniKoshti/ZibraniKoshti';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import TestSections from '../../components/ScrollToTopButton/TestSections';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

Modal.setAppElement('#root');

const HomePage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { hash } = location;
    if (hash) {
      // Удаление символа '#' из начала строки, чтобы получить идентификатор секции
      const sectionId = hash.substring(1);
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        // Прокрутить к секции, если элемент найден
        window.scrollTo({
          top: sectionElement.offsetTop - 120,
          behavior: 'smooth',
        });
      }
    }
  }, [location]);

  // Функция для навигации с прокруткой к секции
  const scrollToSection = (sectionId) => {
    navigate(`/MistoHub#${sectionId}`);
  };

  useEffect(() => {
    // Функция для определения, какая секция отображается на экране при прокрутке
    const handleScroll = () => {
      const sectionElements = document.querySelectorAll('section');

      sectionElements.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        // Проверяем, находится ли верхняя часть секции в видимой области окна
        if (
          window.scrollY >= sectionTop - 120 &&
          window.scrollY < sectionTop + sectionHeight - 120
        ) {
          setActiveSection(sectionId);
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
        onScroll={scrollToSection}
        isMenuOpen={isMenuOpen}
        handleMenuClose={handleMenuClose}
      />
      <main>
        <AboutProject />
        <ZibraniKoshti />
        <ScrollToTopButton />
        <TestSections />
      </main>
    </>
  );
};

export default HomePage;
