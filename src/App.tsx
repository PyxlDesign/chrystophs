import { Twitch, Youtube, Twitter, Instagram, Calendar, Trophy, Zap, Target } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Highlights from './components/Highlights';
import Stats from './components/Stats';
import Social from './components/Social';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Hero />
      <About />
      <Stats />
      <Schedule />
      <Highlights />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
