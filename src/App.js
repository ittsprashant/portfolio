import React, { useCallback, useEffect, useState } from 'react';
import Background from './Components/Background';
import Nav, { SECTION_IDS } from './Components/Nav';
import Hero from './Components/Hero';
import { Stats, Experience, Skills, Projects, Beyond, Contact, Footer } from './Components/Sections';
import CommandPalette from './Components/CommandPalette';
import { useActiveSection, useCopy, useReveal } from './hooks';
import { profile } from './data';

function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [copied, copy] = useCopy();
  const active = useActiveSection(SECTION_IDS);
  useReveal();

  const copyEmail = useCallback(() => copy(profile.email), [copy]);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <Background />
      <Nav active={active} onOpenPalette={() => setPaletteOpen(true)} />
      <main>
        <Hero />
        <Stats />
        <Experience />
        <Skills />
        <Projects />
        <Beyond />
        <Contact copied={copied} onCopyEmail={copyEmail} />
      </main>
      <Footer />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} onCopyEmail={copyEmail} />
      <div className={`toast ${copied ? 'toast-show' : ''}`} role="status">
        Email copied to clipboard ✓
      </div>
    </>
  );
}

export default App;
