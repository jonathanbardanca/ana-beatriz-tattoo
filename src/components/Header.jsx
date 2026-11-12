import { useState, useEffect, useRef } from "react";
import BotaoReutilizavel from "./layout/BotaoReutilizavel";

export default function Header() {
  const [activeSection, setActiveSection] = useState("section-home");
  const [menuAberto, setMenuAberto] = useState(false);
  const clickBlocked = useRef(false);
  const timeoutRef = useRef(null);

  const secoes = [
    "section-home",
    "section-sobre",
    "section-estilo",
    "section-galeria",
    "section-estudio",
  ];

  // Função que ativa o item, bloqueia o observer e gerencia o tempo da rolagem
  const handleMenuClick = (sectionId) => {
    setActiveSection(sectionId);
    clickBlocked.current = true;
    setMenuAberto(false); // Fecha o menu mobile ao clicar em um item

    // Cancela o timer anterior caso o usuário clique em outro item rapidamente
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Libera o observer após 800ms (tempo médio do scroll suave)
    timeoutRef.current = setTimeout(() => {
      clickBlocked.current = false;
    }, 800);
  };

  useEffect(() => {
    // Função chamada quando uma seção entra na viewport
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        // Só atualiza pelo scroll se o bloqueio de clique estiver desligado
        if (entry.isIntersecting && !clickBlocked.current) {
          setActiveSection(entry.target.id);
        }
      });
    };

    // Configuração do observer: aciona quando a seção estiver no centro da tela
    const observerOptions = {
      root: null,
      // Margem que cria uma "linha invisível de leitura" no meio da tela
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Mapeia e observa os elementos das seções no DOM
    secoes.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Limpa o observer e o timer ao desmontar o componente
    return () => {
      observer.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const itensMenu = [
    { id: "section-home", nome: "Home", label: "Ir para home" },
    { id: "section-sobre", nome: "Sobre", label: "Sobre a tatuadora" },
    { id: "section-estilo", nome: "Estilo", label: "Para ler sobre o estilo de tatuagem de Ana Beatriz" },
    { id: "section-galeria", nome: "Galeria", label: "Para ir para a galeria de fotos" },
    { id: "section-estudio", nome: "Estúdio", label: "Conhecer o estúdio" },
  ];

  return (
    <header className="fixed top-0 left-0 z-40 w-full bg-black border-b border-white/10">
      <div className="max-w-260 w-full mx-auto px-6 flex items-center justify-between py-4">
        
        {/* Logo */}
        <a
          href="#section-home"
          onClick={() => handleMenuClick("section-home")}
          className="flex items-center gap-2 leading-none mr-auto relative z-50"
        >
          <span className="text-[28px] sm:text-[36px] font-script text-pink leading-none flex items-center">
            Ana Beatriz Tattoo
          </span>
        </a>

        {/* Navegação Desktop (visível apenas em telas médias/grandes) */}
        <nav className="hidden md:flex items-center mr-6" aria-label="Navegação principal">
          <ul className="flex items-center gap-6 relative group">
            {itensMenu.map((item) => (
              <li key={item.id} className="flex items-center">
                <a
                  onClick={() => handleMenuClick(item.id)}
                  className={`menu-item inline-flex items-center leading-none py-2 ${
                    activeSection === item.id ? "active" : ""
                  }`}
                  aria-label={item.label}
                  href={`#${item.id}`}
                >
                  {item.nome}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botão de contato (Visível em desktop / Oculto em telas muito pequenas se faltar espaço, ou adaptado) */}
        <div className="hidden sm:block mr-4 md:mr-0">
          <BotaoReutilizavel
            href="https://wa.me/554891896670?text=Olá,%20gostaria%20de%20agendar%20um%20horário!"
            children="Vamos conversar"
            ariaLabel="Entrar em contato via WhatsApp"
            isExternal={true}
            variante="outline"
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

        {/* Botão Hambúrguer (Visível apenas em mobile/tablet < md) */}
        <button
          type="button"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-expanded={menuAberto}
          aria-controls="menu-mobile"
          aria-label={menuAberto ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          className="md:hidden relative z-50 p-2 text-white hover:text-pink transition-colors focus:outline-none ml-2"
        >
          <div className="w-6 h-5 flex flex-col justify-between items-end">
            <span
              className={`h-0.5 bg-current transition-all duration-300 ${
                menuAberto ? "w-6 rotate-45 translate-y-2 text-pink" : "w-6"
              }`}
            />
            <span
              className={`h-0.5 bg-current transition-all duration-300 ${
                menuAberto ? "opacity-0" : "w-4"
              }`}
            />
            <span
              className={`h-0.5 bg-current transition-all duration-300 ${
                menuAberto ? "w-6 -rotate-45 -translate-y-2 text-pink" : "w-5"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Menu Mobile Overlay (Aparece em tela cheia com transição suave ao abrir) */}
      <div
        id="menu-mobile"
        className={`md:hidden fixed inset-0 h-screen bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-300 z-40 ${
          menuAberto
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 text-center" aria-label="Navegação mobile">
          {itensMenu.map((item) => (
            <a
              key={item.id}
              onClick={() => handleMenuClick(item.id)}
              className={`font-italiana text-3xl tracking-wide transition-colors ${
                activeSection === item.id ? "text-pink" : "text-white hover:text-pink"
              }`}
              href={`#${item.id}`}
            >
              {item.nome}
            </a>
          ))}

          {/* Botão de contato dentro do menu mobile para facilitar conversão */}
          <div className="mt-6 sm:hidden">
            <BotaoReutilizavel
              href="https://wa.me/554891896670?text=Olá,%20gostaria%20de%20agendar%20um%20horário!"
              children="Vamos conversar"
              ariaLabel="Entrar em contato via WhatsApp"
              isExternal={true}
              variante="pink"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
