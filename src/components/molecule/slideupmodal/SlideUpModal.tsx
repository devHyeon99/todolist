import React, { useState, useEffect, useRef } from 'react';

interface SlideUpModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const SlideUpModal = ({ isOpen, children }: SlideUpModalProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
    } else {
      setIsAnimating(false);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setIsVisible(false), 300);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end justify-center transition-opacity duration-300 `}
    >
      <div className="absolute inset-0 backdrop-blur-[2px]"></div>

      <div
        className={`bg-white dark:bg-black shadow-shadow_02 dark:shadow-none relative rounded-t-2xl w-full max-w-md p-[1.88rem] transform transition-transform duration-300 ease-out ${
          isAnimating ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default SlideUpModal;
