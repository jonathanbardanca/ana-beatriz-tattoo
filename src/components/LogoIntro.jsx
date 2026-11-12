import { useEffect, useState } from 'react';

export default function LogoIntro({ onFinish }) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(onFinish, 600);
    }, 2800);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-600 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center px-4">
        {/* SVG com o nome completo ajustado no viewBox*/}
        <svg
          className="w-full max-w-md md:max-w-xl h-32 md:h-44 overflow-visible"
          viewBox="0 0 650 150"
        >
          <text
            x="50%"
            y="55%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="font-script text-5xl sm:text-6xl md:text-7xl logo-text"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            Ana Beatriz tattoo
          </text>
        </svg>
      </div>
    </div>
  );
}