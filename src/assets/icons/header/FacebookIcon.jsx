import { FacebookStyled } from './FaccebookIcon.styled';

const FacebookIcon = ({ transitionClass, mobile }) => {
  return (
    <FacebookStyled
      className={transitionClass}
      width={mobile ? '36' : '40'}
      height={mobile ? '36' : '40'}
      viewBox={mobile ? '0 0 36 36' : '0 0 40 40'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Facebook</title>
      <rect
        width={mobile ? '36' : '40'}
        height={mobile ? '36' : '40'}
        rx={mobile ? '18' : '20'}
        fill="url(#paint0_linear_411_5448)"
      />
      {mobile ? (
        <path
          className="emblem-path"
          d="M19.9946 11.5299C20.1459 11.5299 20.2973 11.5299 20.6 11.5299V13.8002C20.4486 13.8002 20.1459 13.8002 19.8432 13.8002C19.5405 13.8002 19.2378 13.8002 19.0865 13.9516C18.9351 14.1029 18.9351 14.2543 18.9351 14.6074C18.9351 14.9101 18.9351 15.1119 18.9351 15.4146H20.6V17.3317H18.9351V25.6561H16.3622V17.2813H15V15.3642H16.3622V14.7083C16.3622 13.5984 16.5135 12.7912 16.8162 12.4381C17.2703 11.7822 18.1784 11.4795 19.5405 11.4795C19.6737 11.4795 19.8432 11.5299 19.9946 11.5299Z"
        />
      ) : (
        <path
          className="emblem-path"
          d="M22.4932 11.9127C22.6824 11.9127 22.8716 11.9127 23.25 11.9127V14.7505C23.0608 14.7505 22.6824 14.7505 22.3041 14.7505C21.9257 14.7505 21.5473 14.7505 21.3581 14.9397C21.1689 15.1289 21.1689 15.3181 21.1689 15.7595C21.1689 16.1379 21.1689 16.3901 21.1689 16.7685H23.25V19.1649H21.1689V29.5703H17.9527V19.1019H16.25V16.7055H17.9527V15.8856C17.9527 14.4983 18.1419 13.4892 18.5203 13.0478C19.0878 12.228 20.223 11.8496 21.9257 11.8496C22.0921 11.8496 22.304 11.9127 22.4932 11.9127Z"
        />
      )}
      <defs>
        <linearGradient
          id="paint0_linear_411_5448"
          x1="20"
          y1="0"
          x2="20"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop className="grad-color1" />
          <stop className="grad-color2" offset="1" />
        </linearGradient>
      </defs>
    </FacebookStyled>
  );
};

export default FacebookIcon;
