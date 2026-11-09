import { useRef } from "react";

export default function CarrosselReutilizavel({ itens }) {
  const scrollRef = useRef(null);

  const rolar = (direcao) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollBy({
        left: direcao === "left" ? -clientWidth / 2 : clientWidth / 2,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full max-w-260 mx-auto px-6 md:px-0">
      {/*Seta Esquerda*/}
      <button
        onClick={() => rolar("left")}
        className="absolute -left-12 md:-left-16 top-1/2 -translate-y-1/2 z-20 p-4 text-white hover:text-white/80 cursor-pointer transition-colors duration-300"
        aria-label="Rolar carrossel para a esquerda"
      >
        <svg
          className="w-10 h-10 md:w-12 md:h-12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      {/* Container com as fotos*/}
      <div
        ref={scrollRef}
        className="flex gap-2 md:gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {itens.map((img, i) => (
          <div
            key={i}
            className="snap-start shrink-0 w-65 sm:w-61.25 md:w-61.25 h-95 md:h-105 overflow-hidden bg-zinc-900"
          >
            <picture className="w-full h-full block">
              {img.avif && <source srcSet={img.avif} type="image/avif" />}
              <img
                src={img.jpg}
                alt={img.alt || "Trabalho de tatuagem"}
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </picture>
          </div>
        ))}
      </div>

      {/* Seta Direita*/}
      <button
        onClick={() => rolar("right")}
        className="absolute -right-12 md:-right-16 top-1/2 -translate-y-1/2 z-20 p-4 text-white hover:text-white/80 cursor-pointer transition-colors duration-300"
        aria-label="Rolar carrossel para a direita"
      >
        <svg
          className="w-10 h-10 md:w-12 md:h-12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}