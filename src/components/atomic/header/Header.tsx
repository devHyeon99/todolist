import { useState, useEffect } from 'react';

interface LogoProps {
  showDate?: boolean;
}

const Logo = ({ showDate = false }: LogoProps) => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const logoSrc = isDarkMode ? 'WhiteLogo.svg' : 'Logo.svg';

  return (
    <header className="flex flex-col items-center flex-nowrap">
      <img src={logoSrc} alt="오늘" />
      <h1 className="mt-[2.75rem] text-2xl font-bold">우리, 오늘 뭐할까?</h1>
      {showDate && (
        <h2 className="mt-2 text-xs font-semibold text-gray_400">
          {new Date().toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
          })}
        </h2>
      )}
    </header>
  );
};

export default Logo;
