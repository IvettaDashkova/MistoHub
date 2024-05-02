import Iconsvg from '../Icon/Icon';
import { StyledNavList, StyledItem } from './Navigation.styled';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ links, activeSection, onClose, onScroll }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const sectionRef = useRef(null);

  const sectionScroll = (sectionId) => {
    onClose();
    onScroll(sectionId);
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
                to={`/MistoHub#${link.id}`}
                onClick={() => sectionScroll(link.id)}
                className={activeSection === link.id ? 'active' : 'link'}
                ref={sectionRef}
              >
                {link.value}
              </Link>
              {hoveredIndex === link.id && (
                <button type="button" onClick={() => sectionScroll(link.id)}>
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
