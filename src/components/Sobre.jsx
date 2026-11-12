import fotoSobreAvif from "../assets/sobre.avif";
import fotoSobreJpg from "../assets/sobre.jpg";
import ornamento from "../assets/ornamento-canto1.png";

export default function Sobre() {
  return (
    <section
      id="section-sobre"
      className="w-full bg-black py-20 md:py-32 text-white"
      aria-label="Sobre Ana Beatriz"
    >
      <div className="max-w-260 w-full mx-auto px-6 md:px-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
          {/* foto da tatuadora */}
          <div className="relative inline-block w-full md:w-1/2">
            <div className="w-full relative overflow-hidden">
              <picture className="w-full h-auto block">
                <source srcSet={fotoSobreAvif} type="image/avif" />
                <img
                  src={fotoSobreJpg}
                  alt="Tatuadora Ana Beatriz em seu estúdio"
                  className="w-full h-137.5 object-cover object-left transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </picture>
            </div>

            <img
              src={ornamento}
              alt=""
              className="absolute bottom-[-24px] left-[-24px] w-36 h-auto z-20 pointer-events-none text-pink rotate-180"
            />
          </div>

          {/* Coluna da Direita: Textos */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-pink inline-block"></span>
              <p className="text-pink text-xs uppercase tracking-wider font-urbanist">
                A artista por trás do traço
              </p>
            </div>

            <h2 className="text-4xl md:text-7xl font-script mb-7 text-white">
              Olá, sou a Ana.
            </h2>

            <p className="font-urbanist text-gray-primary text-base md:text-lg leading-relaxed mb-5">
              Sou de Florianópolis, onde moro e tatuo. Filha de artista, cresci
              cercada de inspiração e desenho desde muito nova. A arte sempre
              foi meu jeito de ver e sentir o mundo.
            </p>

            <p className="font-urbanist text-gray-primary text-base md:text-lg leading-relaxed mb-8">
              Em 2022, encontrei na tatuagem uma nova forma de criar. Me
              apaixonei pela possibilidade de transformar uma ideia em algo que
              acompanha uma pessoa para sempre.
            </p>

            <div className="flex items-start gap-4 mb-8 border-l-2 border-pink pl-4 py-1">
              <p className="font-urbanist text-xl md:text-2xl text-white italic">
                <q>Que tal eu fazer parte da sua história também?</q>
              </p>
            </div>

            <a
              href="https://www.instagram.com/anabtrix_tattoo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link para o Instagram da tatuadora"
              className="
                group relative inline-flex items-center gap-3 px-5 py-3 
                font-urbanist text-sm uppercase tracking-[0.25em] text-gray-primary 
                hover:text-pink transition-colors duration-300
                
                before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0.5 before:h-full 
                before:bg-pink before:origin-top before:transition-all before:duration-300
                hover:before:h-0
                
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
                after:bg-pink after:origin-left after:transition-all after:duration-300 after:delay-100
                hover:after:w-full
              "
            >
              <span>Mais do meu universo</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-colors duration-300 group-hover:stroke-pink"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
