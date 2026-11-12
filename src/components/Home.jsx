import videoHome from "../assets/Video-home.mp4";
import BotaoReutilizavel from "./layout/BotaoReutilizavel";

export default function Home() {
  return (
    <section
      id="section-home"
      className="relative w-full min-h-dvh bg-black text-white flex items-center overflow-hidden"
      aria-label="Início - Ana Beatriz Tatuagem Autoral"
    >
      <div
        className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover object-[75%_center] md:object-top-right opacity-80 md:opacity-90"
        >
          <source src={videoHome} type="video/mp4" />
          Seu navegador não suporta vídeos em HTML5.
        </video>

        <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-black/30 md:to-transparent" />
      </div>

      <div className="relative z-10 max-w-260 w-full mx-auto px-6 lg:px-0 pt-28 pb-10 flex flex-col justify-between min-h-dvh">
        <div className="my-auto">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <span
              className="w-8 h-px bg-pink inline-block"
              aria-hidden="true"
            ></span>
            <p className="text-pink text-xs uppercase tracking-wider font-urbanist">
              Tatuagem autoral · Florianópolis, SC
            </p>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-[96px] font-italiana leading-none mb-4 text-white">
            Ana Beatriz
          </h1>

          <p className="font-urbanist text-xl sm:text-2xl md:text-3xl font-light mb-6">
            Sua história <span className="text-pink font-normal">na pele.</span>
          </p>

          <p className="font-urbanist text-gray-primary text-base md:text-lg max-w-120 leading-relaxed mb-8 md:mb-10">
            Tatuagem é a essência de uma pessoa passada para a pele. Arte que
            marca momentos, traduz sentimentos e conta a sua história.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <BotaoReutilizavel
              href="https://wa.me/554891896670?text=Olá,%20gostaria%20de%20agendar%20um%20horário!"
              children="Quero tatuar"
              ariaLabel="Entrar em contato via WhatsApp"
              isExternal={true}
              variante="pink"
              icone={
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 duration-300 group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              }
            />

            <BotaoReutilizavel
              href="#section-galeria"
              children="Conheça meu trabalho"
              ariaLabel="Ir para a galeria de fotos"
              isExternal={false}
              variante="outline"
            />
          </div>
        </div>

        <a
          href="#section-sobre"
          className="inline-flex items-center gap-2 text-gray-secondary font-urbanist text-[11px] uppercase tracking-[0.25em] hover:text-pink transition-colors duration-300 self-start"
          aria-label="Ir para a seção sobre a tatuadora"
        >
          <svg
            aria-hidden="true"
            className="w-3.5 h-3.5 text-pink"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
          <span>Um pouco do meu universo</span>
        </a>
      </div>
    </section>
  );
}
