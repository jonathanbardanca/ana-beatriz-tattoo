export default function BotaoReutilizavel({
  href,
  children,
  icone,
  variante,
  ariaLabel,
  isExternal = false,
  posicaoIcone = "fim",
  ...props
}) {
  const classesBase =
    "flex items-center justify-center gap-3 font-urbanist text-xs leading-none tracking-widest font-semibold px-8 py-4 transition-colors duration-300 w-full sm:w-auto uppercase disabled:pointer-events-none disabled:opacity-50";

  const estilosVariante = {
    pink: "bg-pink text-black font-semibold hover:bg-white shadow-lg group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white",
    outline: "bg-transparent text-white border border-white/30 tracking-widest hover:border-pink group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-pink",
    discreto: "bg-transparent text-gray-secondary text-[11px] uppercase tracking-[0.25em] hover:text-pink py-2"
  };

  const propsExternas = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <a
      href={href}
      {...propsExternas}
      className={`${classesBase} ${estilosVariante[variante]}`}
      aria-label={ariaLabel}
      {...props}
    >
      {icone && posicaoIcone === "inicio" && <span className="shrink-0">{icone}</span>}
      <span>{children}</span>
      {icone && posicaoIcone === "fim" && <span className="shrink-0">{icone}</span>}
    </a>
  );
}
