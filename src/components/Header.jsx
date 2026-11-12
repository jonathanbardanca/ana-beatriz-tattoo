import BotaoReutilizavel from "./layout/BotaoReutilizavel";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-20 w-full bg-black border-b border-white/10">
      <div className="max-w-260 w-full mx-auto px-6 flex items-center justify-between py-4">
        <div className="flex items-center">
          <span className="text-[36px] font-script text-pink">
            Ana Beatriz Tattoo
          </span>
        </div>

        <nav className="items-center">
          <ul className="text-white flex items-center gap-6 relative">
            <li>
              <a
                className="menu-item "
                href="#section-home"
                aria-label="Ir para home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="menu-item"
                href="#section-sobre"
                aria-label="Para ler sobre Ana Beatriz"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                className="menu-item"
                href="#section-estilo"
                aria-label="Para ler sobre o estilo de tatuagem de Ana Beatriz"
              >
                Estilo
              </a>
            </li>
            <li>
              <a
                className="menu-item"
                href="#section-galeria"
                aria-label="Para ir para a galeria de fotos"
              >
                Galeria
              </a>
            </li>
            <li>
              <a
                className="menu-item"
                href="#section-estudio"
                aria-label="Para entrar em contato"
              >
                Estúdio
              </a>
            </li>
          </ul>
        </nav>

        {/* Botão de contato */}
              <BotaoReutilizavel
                href={
                  "https://wa.me/554891896670?text=Olá,%20gostaria%20de%20agendar%20um%20horário!"
                }
                children={"Vamos conversar"}
                ariaLabel={"Entrar em contato via WhatsApp"}
                isExternal={true}
                variante={"outline"}
                icone={
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
                }
              />
      </div>
    </header>
  );
}
