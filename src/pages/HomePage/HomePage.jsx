import Modal from 'react-modal';
import Header from '/src/components/Header/Header';
import AboutProject from '../../components/About/AboutProject';
import { ZibraniKoshti } from '../../components/ZibraniKoshti/ZibraniKoshti';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
// import TestSections from '../../components/ScrollToTopButton/TestSections';
import { useEffect } from 'react';
import { useState } from 'react';

Modal.setAppElement('#root');

const HomePage = () => {
  const [activeSection, setActiveSection] = useState(null);

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

  return (
    <>
      <Header />
      <BurgerMenu activeSection={activeSection} />
      <main>
        <AboutProject />
        <ZibraniKoshti />
        <ScrollToTopButton />
        {/* <TestSections /> */}
      </main>
    </>
  );
};

export default HomePage;
