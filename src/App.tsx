import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Highlights from './components/Highlights';
import Stats from './components/Stats';
import Social from './components/Social';
import Footer from './components/Footer';
import DataDemo from './components/DataDemo';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <DataProvider>
      <div className="min-h-screen bg-black text-gray-100">
        <Hero />
        <About />
        <Stats />
        <Schedule />
        <Highlights />
        <Social />
        <Footer />
        <DataDemo />
      </div>
    </DataProvider>
  );
}

export default App;
