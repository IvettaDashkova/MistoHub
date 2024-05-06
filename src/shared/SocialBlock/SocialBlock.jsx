import { Link } from 'react-router-dom';

import { SocialWrapper } from './SocialBlock.styled';
import Icon from '../../components/Icon/Icon';

function SocialBlock({ darkStyle }) {
  return (
    <SocialWrapper>
      <Link
        className={`${darkStyle} link-instagram`}
        to="https://www.instagram.com/mistohub"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="go and view the Mistohub Instagram account"
      >
        <Icon
          width="20"
          height="20"
          iconName="icon-instagram"
          styles={darkStyle}
        />
      </Link>
      <Link
        className={`${darkStyle} link-facebook`}
        to="https://www.facebook.com/mistohub/?locale=uk_UA"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="go to the Mistohub Facebook page"
      >
        <Icon width="20" height="20" iconName="icon-faceb" styles={darkStyle} />
      </Link>
    </SocialWrapper>
  );
}

export default SocialBlock;
