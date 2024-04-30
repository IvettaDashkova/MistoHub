import Iconsvg from '../Icon/Icon';
import { HoverContainer, StyledNavList } from './Navigation.styled';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ links, activeSection, onClose }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 120,
        behavior: 'smooth',
      });
    }
    onClose();
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
            <li
              key={link.id}
              onMouseEnter={() => handleMouseEnter(link.id)}
              onMouseLeave={handleMouseLeave}
            >
              <HoverContainer>
                <Link
                  to={`#${link.id}`}
                  onClick={() => {
                    handleScrollToSection(link.id);
                  }}
                  className={activeSection === link.id ? 'active' : 'link'}
                >
                  {link.value}
                </Link>
                {hoveredIndex === link.id && (
                  <Iconsvg iconName="hoverarrow" width="40" height="40" />
                )}
              </HoverContainer>
            </li>
          ))}
        </StyledNavList>
      </nav>
    </>
  );
};

export default Navigation;
