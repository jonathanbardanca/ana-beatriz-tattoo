import { useRef } from "react";

// Imports de todas as 17 fotos (AVIF e JPG) da pasta imagens-galeria
import galeria1Avif from "../assets/imagens-galeria/galeria1.avif";
import galeria1Jpg from "../assets/imagens-galeria/galeria1.jpg";
import galeria2Avif from "../assets/imagens-galeria/galeria2.avif";
import galeria2Jpg from "../assets/imagens-galeria/galeria2.jpg";
import galeria3Avif from "../assets/imagens-galeria/galeria3.avif";
import galeria3Jpg from "../assets/imagens-galeria/galeria3.jpg";
import galeria4Avif from "../assets/imagens-galeria/galeria4.avif";
import galeria4Jpg from "../assets/imagens-galeria/galeria4.jpg";
import galeria5Avif from "../assets/imagens-galeria/galeria5.avif";
import galeria5Jpg from "../assets/imagens-galeria/galeria5.jpg";
import galeria6Avif from "../assets/imagens-galeria/galeria6.avif";
import galeria6Jpg from "../assets/imagens-galeria/galeria6.jpg";
import galeria7Avif from "../assets/imagens-galeria/galeria7.avif";
import galeria7Jpg from "../assets/imagens-galeria/galeria7.jpg";
import galeria8Avif from "../assets/imagens-galeria/galeria8.avif";
import galeria8Jpg from "../assets/imagens-galeria/galeria8.jpg";
import galeria9Avif from "../assets/imagens-galeria/galeria9.avif";
import galeria9Jpg from "../assets/imagens-galeria/galeria9.jpg";
import galeria10Avif from "../assets/imagens-galeria/galeria10.avif";
import galeria10Jpg from "../assets/imagens-galeria/galeria10.jpg";
import galeria11Avif from "../assets/imagens-galeria/galeria11.avif";
import galeria11Jpg from "../assets/imagens-galeria/galeria11.jpg";
import galeria12Avif from "../assets/imagens-galeria/galeria12.avif";
import galeria12Jpg from "../assets/imagens-galeria/galeria12.jpg";
import galeria13Avif from "../assets/imagens-galeria/galeria13.avif";
import galeria13Jpg from "../assets/imagens-galeria/galeria13.jpg";
import galeria14Avif from "../assets/imagens-galeria/galeria14.avif";
import galeria14Jpg from "../assets/imagens-galeria/galeria14.jpg";
import galeria15Avif from "../assets/imagens-galeria/galeria15.avif";
import galeria15Jpg from "../assets/imagens-galeria/galeria15.jpg";
import galeria16Avif from "../assets/imagens-galeria/galeria16.avif";
import galeria16Jpg from "../assets/imagens-galeria/galeria16.jpg";
import galeria17Avif from "../assets/imagens-galeria/galeria17.avif";
import galeria17Jpg from "../assets/imagens-galeria/galeria17.jpg";

const IMAGENS = [
  { jpg: galeria1Jpg, avif: galeria1Avif, alt: "Tatuagem blackwork 1" },
  { jpg: galeria2Jpg, avif: galeria2Avif, alt: "Tatuagem blackwork 2" },
  { jpg: galeria3Jpg, avif: galeria3Avif, alt: "Tatuagem blackwork 3" },
  { jpg: galeria4Jpg, avif: galeria4Avif, alt: "Tatuagem blackwork 4" },
  { jpg: galeria5Jpg, avif: galeria5Avif, alt: "Tatuagem blackwork 5" },
  { jpg: galeria6Jpg, avif: galeria6Avif, alt: "Tatuagem blackwork 6" },
  { jpg: galeria7Jpg, avif: galeria7Avif, alt: "Tatuagem blackwork 7" },
  { jpg: galeria8Jpg, avif: galeria8Avif, alt: "Tatuagem blackwork 8" },
  { jpg: galeria9Jpg, avif: galeria9Avif, alt: "Tatuagem blackwork 9" },
  { jpg: galeria10Jpg, avif: galeria10Avif, alt: "Tatuagem blackwork 10" },
  { jpg: galeria11Jpg, avif: galeria11Avif, alt: "Tatuagem blackwork 11" },
  { jpg: galeria12Jpg, avif: galeria12Avif, alt: "Tatuagem blackwork 12" },
  { jpg: galeria13Jpg, avif: galeria13Avif, alt: "Tatuagem blackwork 13" },
  { jpg: galeria14Jpg, avif: galeria14Avif, alt: "Tatuagem blackwork 14" },
  { jpg: galeria15Jpg, avif: galeria15Avif, alt: "Tatuagem blackwork 15" },
  { jpg: galeria16Jpg, avif: galeria16Avif, alt: "Tatuagem blackwork 16" },
  { jpg: galeria17Jpg, avif: galeria17Avif, alt: "Tatuagem blackwork 17" },
];

export default function CarrosselGaleria() {
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
      {/* Seta Esquerda (Posicionada para fora da grid de 1040px, flutuando à esquerda) */}
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

      {/* Container flex com scroll suave travado exatamente nos 1040px */}
      <div
        ref={scrollRef}
        className="flex gap-2 md:gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {IMAGENS.map((img, i) => (
          <div
            key={i}
            className="snap-start shrink-0 w-65 sm:w-61.25 md:w-61.25 h-95 md:h-105 overflow-hidden rounded-sm bg-zinc-900"
          >
            <picture className="w-full h-full block">
              <source srcSet={img.avif} type="image/avif" />
              <img
                src={img.jpg}
                alt={img.alt}
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </picture>
          </div>
        ))}
      </div>

      {/* Seta Direita (Posicionada para fora da grid de 1040px, flutuando à direita) */}
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
