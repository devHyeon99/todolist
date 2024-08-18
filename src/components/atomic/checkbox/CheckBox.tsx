import { useState } from 'react';
import { ArchivedFalse, ArchivedTrue, CheckedFalse, CheckedTrue } from '../..';

interface CheckboxProps {
  type?: string;
  isChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox = ({ type = 'checkbox', isChecked = false, onChange }: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked);

  const handleChange = () => {
    setChecked(!checked);
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <label className="inline-flex items-center w-5 h-5 cursor-pointer">
      <input type="checkbox" checked={checked} onChange={handleChange} className="hidden" />
      {type === 'checkbox' ? (
        checked ? (
          <CheckedTrue />
        ) : (
          <CheckedFalse />
        )
      ) : checked ? (
        <ArchivedTrue />
      ) : (
        <ArchivedFalse />
      )}
    </label>
  );
};

export default Checkbox;
