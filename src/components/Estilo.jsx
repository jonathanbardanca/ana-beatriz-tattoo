import fotoEstilo3jpg from "../assets/estilo3.jpg";
import fotoEstilo3avif from "../assets/estilo3.avif";
import fotoEstilo2jpg from "../assets/estilo2.jpg";
import fotoEstilo2avif from "../assets/estilo2.avif";
import fotoEstilo1jpg from "../assets/estilo1.jpg";

export default function Estilo() {
  return (
    <section
      id="section-estilo"
      className="w-full bg-black py-20 md:py-32"
      aria-label="Estilo de tatuagem de Ana Beatriz"
    >
      <div className="max-w-260 w-full mx-auto px-6 md:px-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
          {/* Lado Esquerdo: Conteúdo e Tipografia */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-pink inline-block"></span>
              <p className="text-pink text-xs uppercase tracking-wider font-urbanist">
                Meu estilo · Blackwork
              </p>
            </div>

            <div className="flex flex-col mb-8">
              <h2 className="text-4xl md:text-[40px] font-urbanist text-white leading-tight">
                O preto como expressão. <br />
                <span className="text-pink">O detalhe como assinatura.</span>
              </h2>
            </div>

            <p className="font-urbanist text-gray-primary text-base md:text-lg leading-relaxed mb-5">
              Meu universo é o Blackwork: a tinta preta ganha diferentes
              intensidades entre linhas, sombras e texturas. Traços finos e
              áreas marcantes se encontram para dar personalidade a cada
              desenho.
            </p>

            <p className="font-urbanist text-gray-primary text-base md:text-lg leading-relaxed mb-10">
              Em 2022, encontrei na tatuagem uma nova forma de criar. Me
              apaixonei pela possibilidade de transformar uma ideia em algo que
              acompanha uma pessoa para sempre.
            </p>

            <p className="uppercase font-urbanist text-xs tracking-[0.2em] text-gray-primary">
              Traço — Textura — Contraste
            </p>
          </div>

          {/* Lado Direito: Mosaico de Fotos com Efeito de Zoom */}
          <div className="w-full md:w-1/2 relative h-130">
            {/* Foto 1 - Superior Esquerda */}
            <div className="absolute bottom-0 left-[26%] w-[48%] h-85 overflow-hidden z-10">
              <picture className="w-full h-full block">
                <source srcSet={fotoEstilo3avif} type="image/avif" />
                <img
                  src={fotoEstilo3jpg}
                  alt="Tatuagem blackwork 1"
                  className="w-full h-full object-cover object-left transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </picture>
            </div>

            {/* Foto 2 - Superior Direita */}
            <div className="absolute top-0 right-0 w-[44%] h-85 overflow-hidden">
              <picture className="w-full h-full block">
                <img
                  src={fotoEstilo1jpg}
                  alt="Tatuagem blackwork 3"
                  className="w-full h-full object-cover object-left transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </picture>
            </div>

            {/* Foto 3 - Inferior Central Sobreposta (Sem borda preta) */}
            <div className="absolute top-0 left-0 w-[44%] h-85 overflow-hidden">
              <picture className="w-full h-full block">
                <source srcSet={fotoEstilo2avif} type="image/avif" />
                <img
                  src={fotoEstilo2jpg}
                  alt="Tatuagem blackwork 2"
                  className="w-full h-full object-cover object-left transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
