export default function BotaoReutilizavel({
  href,
  children,
  icone,
  variante,
  ariaLabel,
  isExternal = false,
  ...props
}) {
  const classesBase =
    "flex items-center justify-center gap-3 font-urbanist text-xs tracking-widest font-semibold px-8 py-4 transition-colors duration-300 w-full sm:w-auto uppercase";

  const estilosVariante = {
    pink: "bg-pink text-black font-semibold hover:bg-white shadow-lg",
    outline: "bg-transparent text-white border border-white/30 tracking-widest hover:border-pink hover:text-pink",
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
      {children}
      {icone && <span className="shrink-0">{icone}</span>}
    </a>
  );
}
