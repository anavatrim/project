import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Combos from './components/Combos';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Combos />
      <Testimonials />
      <Portfolio />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;