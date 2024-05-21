import { useEffect, useState, useMemo } from 'react';
import { fetchCompanies, fetchPeople } from '../../services/API';
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
  const [activeSection, setActiveSection] = useState('main');
  const location = useLocation();

  const [companies, setCompanies] = useState([]);
  const [people, setPeople] = useState([]);

  const memoizedFetchData = useMemo(
    () => async () => {
      try {
        const [companiesData, peopleData] = await Promise.all([
          fetchCompanies(),
          fetchPeople(),
        ]);
        setCompanies(companiesData);
        setPeople(peopleData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    []
  );

  useEffect(() => {
    memoizedFetchData();
  }, [memoizedFetchData]);

  useEffect(() => {
    const { hash } = location;
    if (hash) {
      const sectionId = hash.substring(1);
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        window.scrollTo({
          top: sectionElement.offsetTop - 100,
          behavior: 'smooth',
        });
      }
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = document.querySelectorAll('section');
      sectionElements.forEach((section) => {
        const firstSection = document.getElementById('about');
        const firstSectionTop = firstSection.offsetTop;
        if (window.scrollY < firstSectionTop - 110) {
          setActiveSection('main');
        }
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        if (
          window.scrollY >= sectionTop - 100 &&
          window.scrollY < sectionTop + sectionHeight - 100
        ) {
          setActiveSection(sectionId);
          const url = `/MistoHub/#${sectionId}`;

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
        <InvestorsBlock people={people} companies={companies} />
        <JoinUs people={people} companies={companies} />
        <CoFounders />
        <ScrollToTopButton />
      </main>
      <Footer />
      <ModalsManager activeSection={activeSection} />
    </>
  );
};

export default HomePage;
