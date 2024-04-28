import Iconsvg from '../Icon/Icon';
import {
  HoverContainer,
  StyledNavLink,
  StyledNavList,
} from './Navigation.styled';
import { useState } from 'react';

const Navigation = ({ links, onClose }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <nav>
        <StyledNavList>
          {links.map((link, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <HoverContainer>
                <StyledNavLink href={link.href} onClick={onClose}>
                  {link.value}
                </StyledNavLink>
                {hoveredIndex === index && (
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
