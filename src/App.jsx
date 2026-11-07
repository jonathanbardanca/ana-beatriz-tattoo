import Header from './components/Header';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Estilo from './components/Estilo';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white w-full overflow-x-hidden">
      <Header />
      <main className="w-full">
        <Home />
        <Sobre />
        <Estilo />
      </main>
    </div>
  );
}
