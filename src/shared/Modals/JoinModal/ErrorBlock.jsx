import { ErrorStyledBlock } from '/src/shared/Modals/JoinModal/JoinModal.styled';
import Icon from '/src/components/Icon/Icon';

const ErrorBlock = () => {
  return (
    <ErrorStyledBlock>
      <h2 className="joinTitle">
        На жаль, зараз сервіс <br />
        <span className="joinTitleAccent ">не відповідає &#58;&#40;</span>
      </h2>
      <p className="joinText">
        Будь ласка, скористайтеся поштою або зателефонуйте{' '}
        <Icon iconName="heart" />
      </p>
      <ul className="joinContacts">
        <li>
          <p>Телефон:</p>
          <a className="joinItemContact" href="tel:+380680745765">
            +38 (068) 074-57-65
          </a>
        </li>
        <li>
          <p>Email:</p>
          <a className="joinItemContact" href="mailto:mistohub@gmail.com">
            mistohub@gmail.com
          </a>
        </li>
      </ul>
    </ErrorStyledBlock>
  );
};

export default ErrorBlock;
