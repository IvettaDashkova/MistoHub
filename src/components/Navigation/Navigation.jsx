import Iconsvg from '../Icon/Icon';
import { StyledNavList, StyledItem } from './Navigation.styled';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import links from '../../components/Navigation/links.json';

const Navigation = ({ activeSection, onClose }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);

  const scrollToSection = (sectionId) => {
    onClose();
    if (sectionId !== 'main') {
      const sectionElement = document.getElementById(sectionId);
      window.scrollTo({
        top: sectionElement.offsetTop - 120,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const handleMouseEnter = (id) => {
    setHoveredIndex(id);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <nav>
        <StyledNavList>
          <StyledItem
            key="main"
            onMouseEnter={() => handleMouseEnter('main')}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to={'/'}
              onClick={() => scrollToSection('main')}
              className={activeSection === 'main' ? 'active' : 'link'}
              ref={sectionRef}
            >
              Головна
            </Link>
            {hoveredIndex === 'main' && (
              <button type="button" onClick={() => scrollToSection('main')}>
                <Iconsvg iconName="hoverarrow" />
              </button>
            )}
          </StyledItem>
          {links.map((link) => (
            <StyledItem
              key={link.id}
              onMouseEnter={() => handleMouseEnter(link.id)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={`#${link.id}`}
                onClick={() => scrollToSection(link.id)}
                className={activeSection === link.id ? 'active' : 'link'}
                ref={sectionRef}
              >
                {link.value}
              </Link>
              {hoveredIndex === link.id && (
                <button type="button" onClick={() => scrollToSection(link.id)}>
                  <Iconsvg iconName="hoverarrow" />
                </button>
              )}
            </StyledItem>
          ))}
        </StyledNavList>
      </nav>
    </>
  );
};

export default Navigation;
