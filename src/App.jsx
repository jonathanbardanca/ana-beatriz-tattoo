import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Estilo from './components/Estilo';
import Galeria from './components/Galeria';
import Disponiveis from './components/Disponiveis';
import Footer from './components/Footer';
import Estudio from './components/Estudio';
import LogoIntro from './components/LogoIntro';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

return (
    <>
      {/* Exibe a animação da logo enquanto showIntro for true */}
      {showIntro && <LogoIntro onFinish={() => setShowIntro(false)} />}

      {/* Conteúdo principal do site */}
      <div className={`min-h-screen bg-black text-white w-full overflow-x-hidden transition-opacity duration-700 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <main className="w-full">
          <Home />
          <Sobre />
          <Estilo />
          <Galeria />
          <Disponiveis />
          <Estudio />
          <Footer />
        </main>
      </div>
    </>
  );
}
