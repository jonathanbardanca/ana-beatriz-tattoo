import CarrosselReutilizavel from "./CarrosselReutilizavel";

import art1 from "../assets/imagens-disponiveis/art1.png";
import art2 from "../assets/imagens-disponiveis/art2.png";
import art3 from "../assets/imagens-disponiveis/art3.png";
import art4 from "../assets/imagens-disponiveis/art4.png";
import art5 from "../assets/imagens-disponiveis/art5.png";

const ImagensDisponiveis = [
  { jpg: art1, alt: "Arte disponível 1" },
  { jpg: art2, alt: "Arte disponível 2" },
  { jpg: art3, alt: "Arte disponível 3" },
  { jpg: art4, alt: "Arte disponível 4" },
  { jpg: art5, alt: "Arte disponível 5" },
];

export default function Disponiveis() {
  return (
    <section id="section-galeria" className="w-full bg-black-80 py-20 md:py-32 text-white overflow-hidden" aria-label="Galeria de tatuagens">
  
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

      <CarrosselReutilizavel itens={ImagensDisponiveis}/>

      <p className="font-urbanist text-gray-primary text-sm md:text-base">
        Desenhos disponíveis
      </p>
      </div>
    </section>
  );
}