const CheckedFalse = ({ className = '' }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`text-gray_200 dark:text-gray_300 ${className}`}
  >
    <circle className="stroke-current" cx="10" cy="10" r="9" strokeWidth="2" />
  </svg>
);

export default CheckedFalse;
