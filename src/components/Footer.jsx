import ornamento from "../assets/ornamento-canto2.png";
import BotaoReutilizavel from "./layout/BotaoReutilizavel";

export default function Footer() {
  return (
    <footer
      id="contato"
      className="w-full bg-black-80 text-white relative overflow-hidden"
      aria-label="Seção de contato e rodapé"
    >
      <div className="relative w-full bg-black-80 py-20 md:py-12 px-6 overflow-hidden">
        {/* Ornamento Superior Esquerdo */}
        <div className="absolute top-4 left-4 md:top-8 md:left-8 w-28 md:w-36 h-28 md:h-36 pointer-events-none opacity-80 rotate-90" aria-hidden="true">
          <img
            src={ornamento}
            alt=""
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>

        {/* Ornamento Inferior Direito */}
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-28 md:w-36 h-28 md:h-36 pointer-events-none opacity-80 rotate-270" aria-hidden="true">
          <img
            src={ornamento}
            alt=""
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>

        {/* Conteúdo Central */}
        <div className="max-w-200 mx-auto text-center flex flex-col items-center relative z-10">
          <div className="flex items-center gap-3 text-gray-primary text-xs md:text-sm tracking-widest uppercase mb-6 font-urbanist">
            <span className="w-8 md:w-12 h-px bg-gray-primary/50" aria-hidden="true"></span>
            <span>Vamos criar algo seu?</span>
            <span className="w-8 md:w-12 h-px bg-gray-primary/50" aria-hidden="true"></span>
          </div>

          <h2 className="font-italiana text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-tight mb-6">
            Qual história você <br />
            quer contar <span className="text-pink italic">hoje?</span>
          </h2>

          <p className="font-urbanist text-gray-primary text-sm md:text-base max-w-md mb-10">
            Me conta a sua ideia. O próximo traço pode ser o seu.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            {/* Botão WhatsApp */}
            <BotaoReutilizavel
              href="https://wa.me/554891896670?text=Olá,%20gostaria%20de%20agendar%20um%20horário!"
              children="Vamos conversar"
              ariaLabel="Entrar em contato via WhatsApp para agendamento"
              isExternal={true}
              variante="pink"
              icone={
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              }
            />

            {/* Botão Instagram */}
            <BotaoReutilizavel
              href="https://www.instagram.com/anabtrix_tattoo/"
              children="Instagram"
              ariaLabel="Abrir o perfil do Instagram da tatuadora"
              isExternal={true}
              variante="outline"
              posicaoIcone="inicio"
              icone={
                <svg
                  aria-hidden="true"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              }
            />
          </div>
        </div>
      </div>

      {/* Barra Inferior de Copyright */}
      <div className="w-full bg-black py-8 border-t border-zinc-900/50">
        <div className="max-w-260 w-full mx-auto px-6 lg:px-0 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-primary font-urbanist">
          <div className="font-script text-pink text-2xl tracking-wide">
            Ana Beatriz tattoo
          </div>

          <div className="flex items-center gap-6">
            <span>© 2026 Ana Beatriz. Todos os direitos reservados.</span>
          </div>

          <div className="text-center md:text-right text-zinc-500">
            Desenvolvido por Jonathan Bardança
          </div>
        </div>
      </div>
    </footer>
  );
}
