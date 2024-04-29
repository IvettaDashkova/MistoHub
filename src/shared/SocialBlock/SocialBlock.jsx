import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import InstagramIcon from '/src/assets/icons/header/InstagramIcon';
import FacebookIcon from '/src/assets/icons/header/FacebookIcon';
import { SocialWrapper } from './SocialBlock.styled';

function SocialBlock({ transitionClass }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <SocialWrapper>
      <Link
        className="instagram-link"
        to="https://www.instagram.com/mistohub"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="go and view the Mistohub Instagram account"
      >
        <InstagramIcon transitionClass={transitionClass} mobile={isMobile} />
      </Link>
      <Link
        className="facebook-link"
        to="https://www.facebook.com/mistohub/?locale=uk_UA"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="go to the Mistohub Facebook page"
      >
        <FacebookIcon transitionClass={transitionClass} mobile={isMobile} />
      </Link>
    </SocialWrapper>
  );
}

export default SocialBlock;
