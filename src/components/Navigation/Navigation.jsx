import Iconsvg from '../Icon/Icon';
import {
  HoverContainer,
  StyledNavLink,
  StyledNavList,
} from './Navigation.styled';
import { useState } from 'react';

const Navigation = ({ links, onClose }) => {
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
                <StyledNavLink href={`#${link.id}`} onClick={onClose}>
                  {link.value}
                </StyledNavLink>
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
