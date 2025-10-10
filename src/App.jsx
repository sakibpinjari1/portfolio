import React from 'react';
import Background from './components/Background';
import Header from './components/Header';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import Cursor from './components/Cursor';

function App() {
  return (
    <div className="relative min-h-screen">
      <Cursor />
      <ScrollProgress />
      <Background />
      <Header />
      <ThemeToggle />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;