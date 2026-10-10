import React, { useEffect, useState } from 'react';

const LINKS = [
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'beyond', label: 'Beyond' },
  { id: 'contact', label: 'Contact' },
];

export const SECTION_IDS = ['top', ...LINKS.map((l) => l.id)];

function Nav({ active, onOpenPalette }) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 24);
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform);

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''} ${menuOpen ? 'nav-open' : ''}`}>
      <div className="nav-progress" style={{ transform: `scaleX(${progress})` }} />
      <div className="nav-inner">
        <a href="#top" className="nav-logo" aria-label="Back to top">
          <span className="nav-logo-mark">PA</span>
          <span className="nav-logo-text">prashant<span className="text-accent">.dev</span></span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? 'is-active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="kbd-btn" onClick={onOpenPalette} aria-label="Open command palette">
            <span>Search</span>
            <kbd>{isMac ? '⌘' : 'Ctrl'}</kbd>
            <kbd>K</kbd>
          </button>
          <a href="#contact" className="btn btn-primary btn-sm">Hire me</a>
          <button
            className="nav-burger"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Nav;
