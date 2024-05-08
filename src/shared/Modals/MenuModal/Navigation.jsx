import { useState } from 'react';
import { Link } from 'react-router-dom';

import Iconsvg from '../../../components/Icon/Icon';
import { StyledNavList, StyledItem } from './Navigation.styled';
import links from '../../../constants/links_menu.json';

const Navigation = ({ activeSection, closeModal }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const scrollToSection = (sectionId) => {
    closeModal('menu_modal');

    if (sectionId !== 'main') {
      const sectionElement = document.getElementById(sectionId);
      window.scrollTo({
        top: sectionElement.offsetTop - 100,
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
          {links.map((link) => (
            <StyledItem
              key={link.id}
              onMouseEnter={() => handleMouseEnter(link.id)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                onClick={() => scrollToSection(link.id)}
                className={activeSection === link.id ? 'active' : 'link'}
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
