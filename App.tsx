import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate initial loading for a smoother entrance
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen bg-studio-black text-white transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <div id="about">
          {/* About is visually integrated into Hero and Contact sections in this minimal design, 
              but adding an anchor here allows nav links to work if we expand later or just scroll to contact.
              We'll direct "About" to the Contact section start for now which has company info. */}
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;