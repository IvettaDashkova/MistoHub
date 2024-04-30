import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Contacts = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <ul>
      <li>
        <span>Телефон: </span>
        <Link
          to={isMobile ? `tel:+380680745765` : `https://t.me/MISTOHUB_admin`}
          target="blank"
          rel="noopener noreferrer"
        >
          +38 (068) 074-57-65
        </Link>
      </li>
      <li>
        <span>Email:</span>
        <Link
          to={`mailto:mistohub@gmail.com`}
          target="blank"
          rel="noopener noreferrer"
        >
          mistohub@gmail.com
        </Link>
      </li>
    </ul>
  );
};

export default Contacts;
