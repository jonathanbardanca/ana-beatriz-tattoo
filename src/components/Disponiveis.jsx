import CarrosselDisponiveis from "./CarrosselDisponiveis";

export default function Disponiveis() {
  return (
    <section id="section-galeria" className="w-full bg-black py-20 md:py-32 text-white overflow-hidden" aria-label="Galeria de tatuagens">
  
      <div className="max-w-260 w-full mx-auto px-6 md:px-0 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-pink inline-block"></span>
          <p className="text-pink text-xs uppercase tracking-wider font-urbanist">
            Ideias à espera de uma história
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-4xl md:text-[40px] font-urbanist text-white mb-3">
            Da arte à sua pele. 
            <span className="text-pink"> pele.</span>
          </h2>
      </div>

      <CarrosselDisponiveis />

      <p className="font-urbanist text-gray-primary text-sm md:text-base">
        Desenhos disponíveis
      </p>
      </div>
    </section>
  );
}