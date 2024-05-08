import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Modal from 'react-modal';

import Header from '/src/components/Header/Header';
import AboutProject from '../../components/About/AboutProject';
import { AccumulatedMoney } from '../../components/AccumulatedMoney/AccumulatedMoney';

import InvestorsBlock from '../../components/InvestorsCompanies/InvestorsBlock';
import Visualization from '../../components/Visualization/Visualization';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';
import Footer from '../../components/Footer/Footer';
import HeroSection from '/src/components/HeroSection/HeroSection';
import CoFounders from '../../components/CoFounders/CoFounders';
import JoinUs from '../../components/JoinUs/JoinUs';
import ModalsManager from '/src/shared/Modals/ModalsManager';

Modal.setAppElement('#root');

const HomePage = () => {
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

          if (sectionId !== null) {
            window.history.pushState(null, '', url);
          } else {
            window.history.pushState(null, '', window.location.pathname);
          }
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
      <main>
        <HeroSection />
        <AboutProject />
        <Visualization />
        <AccumulatedMoney />
        <InvestorsBlock />
        <JoinUs />
        <CoFounders />
        <ScrollToTopButton />
      </main>
      <Footer />
      <ModalsManager activeSection={activeSection} />
    </>
  );
};

export default HomePage;
