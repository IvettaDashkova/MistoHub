import Modal from 'react-modal';
import Header from '/src/components/Header/Header';
import { ZibraniKoshti } from '../../components/ZibraniKoshti/ZibraniKoshti';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import TestSections from '../../components/ScrollToTopButton/TestSections';
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
        console.log(sectionTop, sectionHeight, sectionId);

        // Проверяем, находится ли верхняя часть секции в видимой области окна
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    // Добавляем прослушивание события прокрутки при монтировании компонента
    window.addEventListener('scroll', handleScroll);

    // Убираем прослушивание события при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // [] указывает, что useEffect вызывается только один раз после монтирования компонента

  return (
    <>
      <Header />
      <BurgerMenu activeSection={activeSection} />
      <main>
        <ZibraniKoshti />
        <ScrollToTopButton />
        <TestSections />
      </main>
    </>
  );
};

export default HomePage;
