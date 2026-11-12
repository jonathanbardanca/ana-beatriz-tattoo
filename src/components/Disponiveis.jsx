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
  { jpeg: art1, alt: "Flash botânico disponível para tatuagem 1", titulo: "Flash Botânico I" },
  { jpeg: art2, alt: "Arte disponível de adaga e flores", titulo: "Adaga & Flores" },
  { jpeg: art3, alt: "Arte disponível de serpente em fine line", titulo: "Serpente Fine Line" },
  { jpeg: art4, alt: "Flash ornamental de borboleta disponível", titulo: "Borboleta Ornamental" },
  { jpeg: art5, alt: "Arte disponível de ramo de lavanda", titulo: "Ramo de Lavanda" },
  { jpeg: art6, alt: "Flash disponível com as fases da lua", titulo: "Fases da Lua" },
  { jpeg: art7, alt: "Composição floral disponível para tatuar", titulo: "Composição Floral" },
  { jpeg: art8, alt: "Arte disponível de corvo em blackwork", titulo: "Corvo Blackwork" },
  { jpeg: art9, alt: "Flash disponível de coração anatômico", titulo: "Coração Anatômico" },
  { jpeg: art10, alt: "Arte disponível de peônia delicada", titulo: "Peônia Delicada" },
  { jpeg: art11, alt: "Flash minimalista de mandala disponível", titulo: "Mandala Minimalista" },
  { jpeg: art12, alt: "Arte disponível de espada medieval", titulo: "Espada Medieval" },
  { jpeg: art13, alt: "Flash de anorinha clássica disponível", titulo: "Andorinha Clássica" },
  { jpeg: art14, alt: "Arte autoral disponível para tatuagem", titulo: "Flash Autoral XIV" },
];

export default function Disponiveis() {
  return (
    <section
      id="section-disponiveis"
      className="w-full bg-black-80 py-20 md:py-32 text-white overflow-hidden"
      aria-label="Flashs e artes disponíveis para tatuagem"
    >
      <div className="max-w-260 w-full mx-auto px-6 lg:px-0 flex flex-col">
        {/* Subtítulo com detalhe rosa */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-pink inline-block" aria-hidden="true"></span>
          <p className="text-pink text-xs uppercase tracking-wider font-urbanist">
            Ideias à espera de uma história
          </p>
        </div>

        {/* Título principal */}
        <div className="mb-6">
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-urbanist text-white">
            Da arte à sua <span className="text-pink">pele.</span>
          </h2>
        </div>

        {/* Carrossel reutilizável */}
        <CarrosselReutilizavel itens={ImagensDisponiveis} />

        {/* Descrição de rodapé mantida na mesma posição original */}
        <p className="font-urbanist text-gray-primary text-sm md:text-base">
          Desenhos disponíveis
        </p>
      </div>
    </section>
  );
}
