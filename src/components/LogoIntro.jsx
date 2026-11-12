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
      className={`fixed inset-0 z-50 h-screen w-screen bg-black flex items-center justify-center overflow-hidden transition-opacity duration-600 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center px-4 w-full">
        {/* Aumentamos a largura máxima e a altura do SVG para celulares */}
        <svg
          className="w-full max-w-[90vw] sm:max-w-md md:max-w-xl h-40 sm:h-48 md:h-56 overflow-visible"
          viewBox="0 0 650 150"
          preserveAspectRatio="xMidYMid meet"
        >
          <text
            x="50%"
            y="55%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="font-script text-6xl sm:text-7xl md:text-8xl logo-text"
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