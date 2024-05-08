import { Link } from 'react-router-dom';

import { ListItem } from './Developer.styled';
import Iconsvg from '../../../components/Icon/Icon';

const Developer = ({ name, role, link, jpg, jpgx2, webp, webpx2 }) => {
  return (
    <ListItem>
      <div className="photo-container">
        <picture>
          <source
            type="image/webp"
            media="(max-width: 767px)"
            srcSet={`${webp} 1x, ${webpx2} 2x`}
            width="120"
            height="120"
          />
          <source
            media="(max-width: 767px)"
            srcSet={`${jpg} 1x, ${jpgx2} 2x`}
            width="120"
            height="120"
          />
          <source
            type="image/webp"
            srcSet={`${webp} 1x, ${webpx2} 2x`}
            width="180"
            height="180"
          />
          <img
            className="photo-img"
            srcSet={`${jpg} 1x, ${jpgx2} 2x`}
            src={jpg}
            alt={`${name}, ${role}`}
            width="180"
            height="180"
            loading="lazy"
          />
        </picture>
        <Link
          className="dev-link"
          to={link}
          target="blank"
          rel="noopener noreferrer"
        >
          <Iconsvg iconName="icon-linkedin" styles="icon-linkedin"></Iconsvg>
        </Link>
      </div>
      <h3 className="dev-name">{name}</h3>
      <p className="dev-role">{role}</p>
    </ListItem>
  );
};

export default Developer;
