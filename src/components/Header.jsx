import { useState, useEffect, useRef } from "react";
import BotaoReutilizavel from "./layout/BotaoReutilizavel";

export default function Header() {
  const [activeSection, setActiveSection] = useState("section-home");
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

  return (
    <header className="fixed top-0 left-0 z-20 w-full bg-black border-b border-white/10">
      <div className="max-w-260 w-full mx-auto px-6 flex items-center justify-between py-4">
        
        <a
          href="#section-home"
          onClick={() => handleMenuClick("section-home")}
          className="flex items-center gap-2 leading-none mr-auto"
        >
          <span className="text-[36px] font-script text-pink leading-none flex items-center">
            Ana Beatriz Tattoo
          </span>
        </a>

        <nav className="flex items-center mr-6">
          {/* Classe 'group' para controlar o hover no CSS */}
          <ul className="flex items-center gap-6 relative group">
            <li className="flex items-center">
              <a
                onClick={() => handleMenuClick("section-home")}
                className={`menu-item inline-flex items-center leading-none py-2 ${activeSection === "section-home" ? "active" : ""}`}
                aria-label="Ir para home"
                href="#section-home"
              >
                Home
              </a>
            </li>
            <li className="flex items-center">
              <a
                onClick={() => handleMenuClick("section-sobre")}
                className={`menu-item inline-flex items-center leading-none py-2 ${activeSection === "section-sobre" ? "active" : ""}`}
                href="#section-sobre"
              >
                Sobre
              </a>
            </li>
            <li className="flex items-center">
              <a
                onClick={() => handleMenuClick("section-estilo")}
                className={`menu-item inline-flex items-center leading-none py-2 ${activeSection === "section-estilo" ? "active" : ""}`}
                aria-label="Para ler sobre o estilo de tatuagem de Ana Beatriz"
                href="#section-estilo"
              >
                Estilo
              </a>
            </li>
            <li className="flex items-center">
              <a
                onClick={() => handleMenuClick("section-galeria")}
                className={`menu-item inline-flex items-center leading-none py-2 ${activeSection === "section-galeria" ? "active" : ""}`}
                aria-label="Para ir para a galeria de fotos"
                href="#section-galeria"
              >
                Galeria
              </a>
            </li>
            <li className="flex items-center">
              <a
                onClick={() => handleMenuClick("section-estudio")}
                className={`menu-item inline-flex items-center leading-none py-2 ${activeSection === "section-estudio" ? "active" : ""}`}
                aria-label="Para entrar em contato"
                href="#section-estudio"
              >
                Estúdio
              </a>
            </li>
          </ul>
        </nav>

        {/* Botão de contato */}
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
    </header>
  );
}
