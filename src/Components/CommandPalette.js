import React, { useEffect, useMemo, useRef, useState } from 'react';
import { profile } from '../data';

function CommandPalette({ open, onClose, onCopyEmail }) {
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState(0);
  const inputRef = useRef(null);

  const commands = useMemo(() => {
    const go = (id) => () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    const open = (url) => () => window.open(url, '_blank', 'noopener,noreferrer');
    return [
      { group: 'Navigate', label: 'Home', icon: '⌂', run: go('top') },
      { group: 'Navigate', label: 'Work experience', icon: '◆', run: go('work') },
      { group: 'Navigate', label: 'Skills', icon: '✦', run: go('skills') },
      { group: 'Navigate', label: 'Projects', icon: '▲', run: go('projects') },
      { group: 'Navigate', label: 'Beyond code', icon: '●', run: go('beyond') },
      { group: 'Navigate', label: 'Contact', icon: '✉', run: go('contact') },
      { group: 'Actions', label: 'Copy email address', icon: '⧉', run: onCopyEmail },
      { group: 'Actions', label: 'Send an email', icon: '✉', run: () => { window.location.href = `mailto:${profile.email}`; } },
      { group: 'Actions', label: 'Open resume', icon: '↗', run: open(profile.resume) },
      { group: 'Links', label: 'LinkedIn', icon: 'in', run: open(profile.linkedin) },
      { group: 'Links', label: 'GitHub', icon: '{}', run: open(profile.github) },
    ];
  }, [onCopyEmail]);

  const filtered = commands.filter((c) =>
    `${c.group} ${c.label}`.toLowerCase().includes(query.trim().toLowerCase())
  );

  useEffect(() => {
    if (open) {
      setQuery('');
      setIndex(0);
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [open]);

  useEffect(() => setIndex(0), [query]);

  if (!open) return null;

  const run = (cmd) => {
    onClose();
    cmd.run();
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setIndex((i) => (i + 1) % Math.max(filtered.length, 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setIndex((i) => (i - 1 + filtered.length) % Math.max(filtered.length, 1));
    } else if (e.key === 'Enter' && filtered[index]) {
      run(filtered[index]);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  let lastGroup = null;

  return (
    <div className="palette-backdrop" onMouseDown={onClose}>
      <div
        className="palette"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="palette-search">
          <span aria-hidden="true">⌕</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Type a command or search…"
            aria-label="Search commands"
          />
          <kbd>esc</kbd>
        </div>
        <ul className="palette-list" role="listbox">
          {filtered.length === 0 && <li className="palette-empty">No results for “{query}”</li>}
          {filtered.map((cmd, i) => {
            const header = cmd.group !== lastGroup ? cmd.group : null;
            lastGroup = cmd.group;
            return (
              <React.Fragment key={cmd.label}>
                {header && <li className="palette-group">{header}</li>}
                <li
                  role="option"
                  aria-selected={i === index}
                  className={`palette-item ${i === index ? 'is-selected' : ''}`}
                  onMouseEnter={() => setIndex(i)}
                  onClick={() => run(cmd)}
                >
                  <span className="palette-icon">{cmd.icon}</span>
                  {cmd.label}
                  {i === index && <span className="palette-enter">↵</span>}
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CommandPalette;
