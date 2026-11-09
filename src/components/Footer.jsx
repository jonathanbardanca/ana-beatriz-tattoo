import ornamento from "../assets/ornamento-canto2.png";

export default function Footer() {
  return (
    <footer
      id="contato"
      className="w-full bg-black-80 text-white relative overflow-hidden"
    >
      <div className="relative w-full bg-black-80 py-20 md:py-12 px-6 overflow-hidden">
        
        {/* Ornamento Superior Esquerdo*/}
        <div className="absolute top-4 left-4 md:top-8 md:left-8 w-28 md:w-36 h-28 md:h-36 pointer-events-none opacity-80 rotate-90">
          <img
            src={ornamento}
            alt="Ornamento visual de canto"
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>

        {/* Ornamento Inferior Direito\*/}
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-28 md:w-36 h-28 md:h-36 pointer-events-none opacity-80 rotate-270">
          <img
            src={ornamento}
            alt="Ornamento visual de canto"
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>

        {/* Conteúdo Central */}
        <div className="max-w-200 mx-auto text-center flex flex-col items-center relative z-10">
          <div className="flex items-center gap-3 text-gray-primary text-xs md:text-sm tracking-widest uppercase mb-6 font-urbanist">
            <span className="w-8 md:w-12 h-px bg-gray-primary/50"></span>
            <span>Vamos criar algo seu?</span>
            <span className="w-8 md:w-12 h-px bg-gray-primary/50"></span>
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
            <a
              href="https://wa.me/5548999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-pink text-black font-urbanist font-medium px-8 py-4 rounded-sm hover:opacity-90 transition-all duration-300 shadow-lg group"
            >
              <span>Vamos conversar</span>
              <svg
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
            </a>

            {/* Botão Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent border border-zinc-700 text-white font-urbanist font-medium px-8 py-4 rounded-sm hover:border-pink hover:text-pink transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Barra Inferior de Copyright */}
      <div className="w-full bg-black py-8 border-t border-zinc-900/50">
        <div className="max-w-260 w-full mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-primary font-urbanist">
          <div className="font-script text-pink text-2xl tracking-wide">
            Ana Beatriz tattoo
          </div>

          <div className="flex items-center gap-6 ml-14">
            <span>© 2026 Ana Beatriz. Todos os direitos reservados.</span>
          </div>

          <div className="text-center md:text-right text-zinc-500">
            desenvolvido por Jonathan Bardança
          </div>
        </div>
      </div>
    </footer>
  );
}
