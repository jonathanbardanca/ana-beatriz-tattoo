import CarrosselReutilizavel from "./layout/CarrosselReutilizavel";

import art1 from "../assets/imagens-disponiveis/art1.jpeg";
import art2 from "../assets/imagens-disponiveis/art2.jpeg";
import art3 from "../assets/imagens-disponiveis/art3.jpeg";
import art4 from "../assets/imagens-disponiveis/art4.jpeg";
import art5 from "../assets/imagens-disponiveis/art5.jpeg";
import art6 from "../assets/imagens-disponiveis/art6.jpeg";
import art7 from "../assets/imagens-disponiveis/art7.jpeg";
import art8 from "../assets/imagens-disponiveis/art8.jpeg";
import art9 from "../assets/imagens-disponiveis/art9.jpeg";
import art10 from "../assets/imagens-disponiveis/art10.jpeg";
import art11 from "../assets/imagens-disponiveis/art11.jpeg";
import art12 from "../assets/imagens-disponiveis/art12.jpeg";
import art13 from "../assets/imagens-disponiveis/art13.jpeg";
import art14 from "../assets/imagens-disponiveis/art14.jpeg";

const ImagensDisponiveis = [
  { jpeg: art1, alt: "Arte disponível 1" },
  { jpeg: art2, alt: "Arte disponível 2" },
  { jpeg: art3, alt: "Arte disponível 3" },
  { jpeg: art4, alt: "Arte disponível 4" },
  { jpeg: art5, alt: "Arte disponível 5" },
  { jpeg: art6, alt: "Arte disponível 6" },
  { jpeg: art7, alt: "Arte disponível 7" },
  { jpeg: art8, alt: "Arte disponível 8" },
  { jpeg: art9, alt: "Arte disponível 9" },
  { jpeg: art10, alt: "Arte disponível 10" },
  { jpeg: art11, alt: "Arte disponível 11" },
  { jpeg: art12, alt: "Arte disponível 12" },
  { jpeg: art13, alt: "Arte disponível 13" },
  { jpeg: art14, alt: "Arte disponível 14" },
];

export default function Disponiveis() {
  return (
    <section
      id="section-galeria"
      className="w-full bg-black-80 py-20 md:py-32 text-white overflow-hidden"
      aria-label="Galeria de tatuagens"
    >
      <div className="max-w-260 w-full mx-auto px-6 md:px-0 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-pink inline-block"></span>
          <p className="text-pink text-xs uppercase tracking-wider font-urbanist">
            Ideias à espera de uma história
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-4xl md:text-[40px] font-urbanist text-white mb-3">
            Da arte à sua
            <span className="text-pink"> pele.</span>
          </h2>
        </div>

        <CarrosselReutilizavel itens={ImagensDisponiveis} />

        <p className="font-urbanist text-gray-primary text-sm md:text-base">
          Desenhos disponíveis
        </p>
      </div>
    </section>
  );
}
