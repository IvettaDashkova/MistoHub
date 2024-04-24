import { Link } from 'react-router-dom';

import InstagramIcon from '../../assets/icons/header/InstagramIcon';
import FacebookIcon from '../../assets/icons/header/FacebookIcon';
import { SocialWrapper } from './SocialBlock.styled';

function SocialBlock({ colorLight, colorDark }) {
  return (
    <SocialWrapper>
      <Link
        className="instagram-link"
        to="https://www.instagram.com/mistohub"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="go and view the Mistohub Instagram account"
      >
        <InstagramIcon colorLight={colorLight} colorDark={colorDark} />
      </Link>
      <Link
        className="facebook-link"
        to="https://www.facebook.com/mistohub/?locale=uk_UA"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="go to the Mistohub Facebook page"
      >
        <FacebookIcon colorLight={colorLight} colorDark={colorDark} />
      </Link>
    </SocialWrapper>
  );
}

export default SocialBlock;
