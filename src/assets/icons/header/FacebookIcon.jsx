const FacebookIcon = ({ colorLight, colorDark }) => {
  
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 31 32"
    >
      <title>Facebook</title>
      <path
        className="mask-gradient"
        fill={colorLight}
        d="M15.61 0.39c8.621 0 15.61 6.989 15.61 15.61s-6.989 15.61-15.61 15.61c-8.621 0-15.61-6.989-15.61-15.61s6.989-15.61 15.61-15.61z"
      ></path>
      <path
        className="logo"
        fill={colorDark}
        d="M17.556 9.688c0.148 0 0.295 0 0.591 0v2.215c-0.148 0-0.443 0-0.738 0s-0.591 0-0.738 0.148-0.148 0.295-0.148 0.64c0 0.295 0 0.492 0 0.787h1.624v1.87h-1.624v8.121h-2.51v-8.171h-1.329v-1.87h1.329v-0.64c0-1.083 0.148-1.87 0.443-2.215 0.443-0.64 1.329-0.935 2.658-0.935 0.13 0 0.295 0.049 0.443 0.049z"
      ></path>
    </svg>
  );
};

export default FacebookIcon;
