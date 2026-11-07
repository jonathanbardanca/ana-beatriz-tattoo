import Carrossel from "./Carrossel";

export default function Galeria() {
  return (
    <section id="section-galeria" className="w-full bg-black py-20 md:py-32 text-white overflow-hidden" aria-label="Galeria de tatuagens">
  
      <div className="max-w-260 w-full mx-auto px-6 md:px-0 flex flex-col">
        <div className="mb-6">
          <h2 className="text-4xl md:text-[40px] font-urbanist text-white mb-3">
            Traços que ficam.
            <span className="text-pink"> ficam.</span>
          </h2>
      </div>

      <Carrossel />

      <p className="font-urbanist text-gray-primary text-sm md:text-base">
        Uma seleção de histórias que já viraram arte.
      </p>
      </div>
    </section>
  );
}
