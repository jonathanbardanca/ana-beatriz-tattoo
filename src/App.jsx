import Header from './components/Header';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Estilo from './components/Estilo';
import Galeria from './components/Galeria';
import Disponiveis from './components/Disponiveis';
import Footer from './components/Footer';
import Estudio from './components/Estudio';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white w-full overflow-x-hidden">
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
  );
}
