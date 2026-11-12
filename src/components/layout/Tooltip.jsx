import { useState } from 'react';

export default function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  function handleMouseMove(event) {
    const top = event.clientY + 20;
    const left = event.clientX + 240 > window.innerWidth 
      ? event.clientX - 190 
      : event.clientX + 20;

    setPosition({ top, left });
  }

  return (
    // Agora o wrapper é sempre visível para a foto aparecer no celular normalmente
    <div
      className="relative block w-full h-full"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
    >
      {children}

      {/* O 'hidden md:block' fica APENAS aqui no balão! No celular ele nunca aparece. */}
      {visible && (
        <div
          className="hidden md:block fixed z-50 bg-black/90 border border-pink/40 text-white px-4 py-2 rounded-md text-xs uppercase tracking-widest font-urbanist pointer-events-none shadow-xl backdrop-blur-sm"
          style={{ top: `${position.top}px`, left: `${position.left}px` }}
        >
          {text}
        </div>
      )}
    </div>
  );
}