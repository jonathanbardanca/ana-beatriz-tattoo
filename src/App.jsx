import Header from './components/Header';
import Home from './components/Home';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white w-full overflow-x-hidden">
      <Header />
      <main className="w-full">
        <Home />
      </main>
    </div>
  );
}
