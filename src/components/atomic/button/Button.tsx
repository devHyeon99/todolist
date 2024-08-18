import { Plus } from 'lucide-react';

interface ButtonProps {
  type?: 'button' | 'submit';
  color?: 'Primary' | 'Secondary' | 'Disabled'; // color을 구체적인 문자열 리터럴로 제한
  size: string;
  Label: string;
  isShowIcon?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button = ({
  type = 'button',
  color = 'Primary',
  Label,
  size,
  isShowIcon = false,
  className = '',
  onClick,
}: ButtonProps) => {
  let isColor = '';

  switch (color) {
    case 'Primary':
      isColor = 'bg-blue text-lightblue';
      break;
    case 'Secondary':
      isColor = 'bg-lightblue text-blue';
      break;
    case 'Disabled':
      isColor = 'bg-gray_400 text-gray_500';
      break;
    default:
      isColor = 'bg-color-blue text-lightblue';
      break;
  }

  return (
    <button
      className={`${isColor} ${size} ${className} flex flex-row flex-nowrap items-center justify-center gap-[0.5rem] rounded-xl font-bold`}
      type={type}
      disabled={color === 'Disabled'}
      onClick={onClick}
    >
      {isShowIcon && <Plus size={20} />}
      {Label}
    </button>
  );
};

export default Button;
