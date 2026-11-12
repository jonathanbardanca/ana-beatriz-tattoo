import estudioJpg from "../assets/estudio.jpg";

export default function Estudio() {
  return (
    <section
      id="section-estudio"
      className="w-full bg-black py-20 md:py-32 text-white relative overflow-hidden"
      aria-label="O estúdio de tatuagem de Ana Beatriz"
    >
      {/* Container principal de 1040px e centralizado */}
      <div className="max-w-260 w-full mx-auto px-6 lg:px-0 flex flex-col">
        {/* Cabeçalho da Seção */}
        <div className="mb-10 md:mb-14">
          <div className="flex items-center gap-3 text-gray-primary text-xs md:text-sm tracking-widest uppercase mb-3 font-urbanist">
            <span className="w-4 h-px bg-pink" aria-hidden="true"></span>
            <span className="text-pink">O ESPAÇO DE CRIAÇÃO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-urbanist text-white font-normal">
            Onde a ideia ganha
            <span className="text-pink"> vida.</span>
          </h2>
        </div>

        {/* Grid Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Lado Esquerdo */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Card 1 */}
            <div className="p-6 rounded-sm bg-zinc-950/40 border border-zinc-900/80 hover:border-pink/40 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-0.5 h-4 bg-pink" aria-hidden="true"></div>
                <h3 className="font-urbanist text-lg font-medium text-white group-hover:text-pink transition-colors">
                  Ótimo atendimento
                </h3>
              </div>
              <p className="font-urbanist text-sm text-gray-primary leading-relaxed pl-3">
                Do primeiro contato ao acabamento, tudo no seu tempo.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-sm bg-zinc-950/40 border border-zinc-900/80 hover:border-pink/40 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-0.5 h-4 bg-pink" aria-hidden="true"></div>
                <h3 className="font-urbanist text-lg font-medium text-white group-hover:text-pink transition-colors">
                  Biossegurança
                </h3>
              </div>
              <p className="font-urbanist text-sm text-gray-primary leading-relaxed pl-3">
                Materiais descartáveis e assepsia rigorosa em cada sessão.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-sm bg-zinc-950/40 border border-zinc-900/80 hover:border-pink/40 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-0.5 h-4 bg-pink" aria-hidden="true"></div>
                <h3 className="font-urbanist text-lg font-medium text-white group-hover:text-pink transition-colors">
                  Estúdio aconchegante
                </h3>
              </div>
              <p className="font-urbanist text-sm text-gray-primary leading-relaxed pl-3">
                Ambiente confortável, acolhedor e climatizado para sua melhor
                experiência.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-sm bg-zinc-950/40 border border-zinc-900/80 hover:border-pink/40 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-0.5 h-4 bg-pink" aria-hidden="true"></div>
                <h3 className="font-urbanist text-lg font-medium text-white group-hover:text-pink transition-colors">
                  Artes incríveis
                </h3>
              </div>
              <p className="font-urbanist text-sm text-gray-primary leading-relaxed pl-3">
                Desenhos autorais criados especialmente para você.
              </p>
            </div>
          </div>

          {/* Lado Direito: Foto do Estúdio */}
          <div className="lg:col-span-5 relative">
            <div className="w-full h-80 sm:h-96 md:h-110 overflow-hidden relative rounded-sm">
              <picture className="w-full h-full block">
                <img
                  src={estudioJpg}
                  alt="Estúdio de tatuagem aconchegante e iluminado em Florianópolis"
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </picture>
            </div>

            {/* Localização abaixo da foto */}
            <div className="mt-4 flex items-center justify-end gap-1.5">
              <svg
                aria-hidden="true"
                className="w-4 h-4 text-pink shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <span className="font-urbanist text-xs text-gray-primary tracking-wide uppercase">
                Florianópolis, Santa Catarina
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
