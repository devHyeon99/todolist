const CheckedTrue = ({ backgroundColor = '#0760FB', checkColor = 'white', ...props }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="20" height="20" rx="10" fill={backgroundColor} />
    <path
      d="M5 11.5217L8.33333 15L15 5"
      stroke={checkColor}
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CheckedTrue;
