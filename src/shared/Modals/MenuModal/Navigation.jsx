
import { Link } from 'react-router-dom';
import Iconsvg from '../../../components/Icon/Icon';
import { StyledNavList, StyledItem } from './Navigation.styled';
import links from '../../../constants/links_menu.json';

const Navigation = ({ activeSection, closeModal }) => {

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

  return (
    <>
      <nav>
        <StyledNavList>
          {links.map((link) => (
            <StyledItem
              key={link.id}
            >
              <Link
                onClick={() => scrollToSection(link.id)}
                className={activeSection === link.id ? 'active' : 'link'}
              >
                {link.value} <Iconsvg iconName="hoverarrow" />
              </Link>
            </StyledItem>
          ))}
        </StyledNavList>
      </nav>
    </>
  );
};

export default Navigation;
