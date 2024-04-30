import Iconsvg from '../Icon/Icon';
import { HoverContainer, StyledNavList } from './Navigation.styled';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ links, onClose, activeSection }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
                  to={`/#${link.id}`}
                  onClick={onClose}
                  // className="link"
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
