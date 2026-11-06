export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-20 w-full bg-black border-b border-white/10">
      <div className="max-w-260 w-full mx-auto px-4 flex items-center justify-between py-4">
  
        <div>
          <span className="text-[36px] font-script text-pink">
            Ana Beatriz Tattoo
          </span>
        </div>

        <nav className="items-center">
          <ul className="text-white flex items-center gap-8 relative">
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
                href="#rodape"
                aria-label="Para entrar em contato"
              >
                Estúdio
              </a>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}
