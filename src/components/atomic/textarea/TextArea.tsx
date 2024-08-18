import React, { useState } from 'react';

interface TextAreaProps {
  className?: string;
  label: string;
  id: string;
  rows?: number;
}

const TextArea = ({ className = '', label, id, rows = 4 }: TextAreaProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false);
    setHasValue(e.target.value !== '');
  };
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHasValue(e.target.value !== '');
  };

  return (
    <div className={`relative z-0 ${className}`}>
      <textarea
        id={id}
        rows={rows}
        className="block py-2.5 px-0 w-[15.125rem] text-sm bg-transparent rounded-none border-b-[0.06rem] text-gray_300 border-gray_400 dark:focus:border-white focus:outline-none focus:border-blue focus:text-blue dark:focus:text-white resize-none"
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

export default TextArea;
