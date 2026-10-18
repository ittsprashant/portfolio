import { useEffect, useState } from 'react';

// Adds `is-visible` to every `.reveal` element as it scrolls into view.
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add('is-visible');
            io.unobserve(el);
            // Drop the stagger delay once revealed so hover effects stay snappy.
            setTimeout(() => { el.style.transitionDelay = ''; }, 1200);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// Returns the id of the section currently in the middle of the viewport.
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [ids]);
  return active;
}

export function useCopy(timeout = 1600) {
  const [copied, setCopied] = useState(false);
  const copy = (text) => {
    const done = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), timeout);
    };
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(done, () => {});
    } else {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      done();
    }
  };
  return [copied, copy];
}

// Mouse-follow tilt + spotlight for cards.
export function tiltHandlers(strength = 8) {
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return {
    onPointerMove: (e) => {
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty('--cx', `${x}px`);
      el.style.setProperty('--cy', `${y}px`);
      if (reduce || !strength || e.pointerType !== 'mouse') return;
      const rx = ((y / rect.height) - 0.5) * -strength;
      const ry = ((x / rect.width) - 0.5) * strength;
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    },
    onPointerLeave: (e) => {
      e.currentTarget.style.transform = '';
    },
  };
}
