import CarrosselReutilizavel from "./layout/CarrosselReutilizavel";

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

const ImagensGaleria = [
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
];

export default function Galeria() {
  return (
    <section
      id="section-galeria"
      className="w-full bg-black py-20 md:py-32 text-white overflow-hidden"
      aria-label="Galeria de tatuagens"
    >
      <div className="max-w-260 w-full mx-auto px-6 md:px-0 flex flex-col">
        <div className="mb-6">
          <h2 className="text-4xl md:text-[40px] font-urbanist text-white mb-3">
            Traços que
            <span className="text-pink"> ficam.</span>
          </h2>
        </div>

        <CarrosselReutilizavel itens={ImagensGaleria} />

        <p className="font-urbanist text-gray-primary text-sm md:text-base">
          Uma seleção de histórias que já viraram arte.
        </p>
      </div>
    </section>
  );
}
