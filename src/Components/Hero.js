import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { profile, yearsOfExperience } from '../data';
import { tiltHandlers } from '../hooks';

const S = ({ c, children }) => <span className={`tok-${c}`}>{children}</span>;

function CodeCard() {
  const years = yearsOfExperience();
  const lines = [
    <><S c="kw">let</S> <S c="var">prashant</S> <S c="op">=</S> {'{'}</>,
    <>  <S c="key">role</S>: <S c="str">"{profile.shortRole}"</S>,</>,
    <>  <S c="key">currently</S>: <S c="str">"@{profile.company}"</S>,</>,
    <>  <S c="key">experience</S>: <S c="str">"{years}+ years"</S>,</>,
    <>  <S c="key">stack</S>: [<S c="str">"React"</S>, <S c="str">"Next"</S>, <S c="str">"Node"</S>, <S c="str">"JS"</S>],</>,
    <>  <S c="key">owns</S>: <S c="str">"web development"</S>,</>,
    <>  <S c="key">offStage</S>: <S c="str">"writing, theatre & quizzing"</S>,</>,
    <>  <S c="fn">hire</S>: () <S c="op">=&gt;</S> <S c="str">"let's talk"</S>,</>,
    <>{'};'}</>,
  ];

  return (
    <div className="code-card" {...tiltHandlers(6)}>
      <div className="code-card-glow" />
      <div className="code-card-bar">
        <span className="dot dot-r" />
        <span className="dot dot-y" />
        <span className="dot dot-g" />
        <span className="code-card-file">prashant.js</span>
      </div>
      <pre className="code-card-body">
        {lines.map((line, i) => (
          <div className="code-line" key={i} style={{ animationDelay: `${0.5 + i * 0.12}s` }}>
            <span className="code-ln">{i + 1}</span>
            <code>{line}</code>
          </div>
        ))}
        <div className="code-line" style={{ animationDelay: `${0.5 + lines.length * 0.12}s` }}>
          <span className="code-ln">{lines.length + 1}</span>
          <code><span className="caret" /></code>
        </div>
      </pre>
    </div>
  );
}

function Hero() {
  const sequence = profile.roles.flatMap((r) => [r, 1800]);

  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <a href="#contact" className="pill reveal">
            <span className="pulse" />
            Open to interesting conversations
          </a>

          <h1 className="hero-title reveal">
            <span className="hero-hi">Hi, I'm</span>
            <span className="gradient-text">{profile.name}</span>
          </h1>

          <p className="hero-role reveal">
            <span className="hero-role-prefix">&gt;</span>
            <TypeAnimation
              sequence={sequence}
              wrapper="span"
              speed={45}
              deletionSpeed={65}
              repeat={Infinity}
              cursor
            />
          </p>

          <p className="hero-summary reveal">{profile.summary}</p>

          <div className="hero-ctas reveal">
            <a href="#work" className="btn btn-primary">
              See my work <span aria-hidden="true">↓</span>
            </a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              Resume <span aria-hidden="true">↗</span>
            </a>
            <div className="hero-socials">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-btn">
                <LinkedInIcon />
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-btn">
                <GitHubIcon />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="icon-btn">
                <MailIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-visual reveal">
          <CodeCard />
        </div>
      </div>

      <a href="#stats" className="scroll-cue" aria-label="Scroll down">
        <span />
      </a>
    </section>
  );
}

export const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);

export const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.82-.26.82-.57v-2c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .3" />
  </svg>
);

export const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

export default Hero;
