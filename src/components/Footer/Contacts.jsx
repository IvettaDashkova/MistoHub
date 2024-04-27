import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Contacts = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const handleTelClick = (e) => {
    if (isMobile) {
      e.preventDefault();
      window.location = 'tel:+380960000000';
    }
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location = `mailto:mistohub@gmail.com`;
  };

  return (
    <ul>
      <li>
        <span>Телефон: </span>
        <Link
          to={isMobile ? 'tel:+380680745765' : 'https://t.me/MISTOHUB_admin'}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleTelClick}
        >
          +38 (068) 074-57-65
        </Link>
      </li>
      <li>
        <span>Email:</span>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleEmailClick}
        >
          mistohub@gmail.com
        </Link>
      </li>
    </ul>
  );
};

export default Contacts;
