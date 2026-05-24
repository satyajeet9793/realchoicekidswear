import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import SeasonalWears from './components/SeasonalWears';
import About from './components/About';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-transparent selection:bg-accent selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <Collections />
        <SeasonalWears />
        <About />
        <Reviews />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
