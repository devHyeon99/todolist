import React, { useState } from 'react';

interface InputProps {
  className?: string;
  type: string;
  label: string;
  id: string;
}

const Input = ({ className = '', label, type, id }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    setHasValue(e.target.value !== '');
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(e.target.value !== '');
  };

  return (
    <div className={`relative z-0 ${className}`}>
      <input
        type={type}
        id={id}
        className="block py-2.5 px-0 w-[15.125rem] text-sm bg-transparent rounded-none border-b-[0.06rem] text-gray_300 border-gray_400 dark:focus:border-white focus:outline-none focus:border-blue focus:text-blue dark:focus:text-white"
        placeholder=" "
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <label
        htmlFor={id}
        className={`absolute text-sm duration-300 transform top-3 -z-10 origin-[0] ${
          isFocused || hasValue ? '-translate-y-6 scale-75' : 'translate-y-0 scale-100'
        } ${isFocused ? 'text-blue dark:text-white' : 'text-gray_300'}`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
