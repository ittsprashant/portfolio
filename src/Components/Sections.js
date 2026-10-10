import React, { useEffect, useRef, useState } from 'react';
import { stats, experience, skillGroups, projects, beyond, profile } from '../data';
import { tiltHandlers } from '../hooks';
import TextSphere from './TextSphere';
import { LinkedInIcon, GitHubIcon, MailIcon } from './Hero';

function SectionHeader({ index, eyebrow, title, children }) {
  return (
    <div className="section-header reveal">
      <p className="eyebrow">
        <span className="eyebrow-index">{index}</span>
        <span className="eyebrow-line" />
        {eyebrow}
      </p>
      <h2 className="section-title">{title}</h2>
      {children && <p className="section-lede">{children}</p>}
    </div>
  );
}

function CountUp({ value }) {
  const ref = useRef(null);
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : '';
  const [n, setN] = useState(target === null ? value : 0);

  useEffect(() => {
    if (target === null) return undefined;
    const el = ref.current;
    let raf;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const duration = 1200;
      const tick = (t) => {
        const p = Math.min((t - start) / duration, 1);
        setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target]);

  return <span ref={ref}>{target === null ? value : `${n}${suffix}`}</span>;
}

export function Stats() {
  return (
    <section id="stats" className="stats-section">
      <div className="container stats-grid">
        {stats.map((s, i) => (
          <div className="stat reveal" key={s.label} style={{ transitionDelay: `${i * 80}ms` }}>
            <div className="stat-value gradient-text"><CountUp value={s.value()} /></div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  const listRef = useRef(null);

  useEffect(() => {
    const el = listRef.current;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh * 0.6 - rect.top) / rect.height;
      el.style.setProperty('--fill', Math.max(0, Math.min(1, p)).toString());
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section id="work" className="section">
      <div className="container">
        <SectionHeader index="01" eyebrow="Experience" title={<>Where I've been <span className="gradient-text">shipping</span></>}>
          From payments and banking to EdTech and retail AI, I've worked on products where reliability and speed mean real money and real people. Before that, I started out on a factory floor.
        </SectionHeader>

        <ol className="timeline" ref={listRef}>
          {experience.map((job, i) => {
            const startsEarlier = job.compact && !experience[i - 1]?.compact;
            return (
              <li className={`timeline-item reveal ${job.compact ? 'is-compact' : ''}`} key={job.company}>
                {startsEarlier && <p className="timeline-divider">Before software</p>}
                <span className="timeline-dot" />
                <div className="card job-card" {...tiltHandlers(3)}>
                  <div className="card-spotlight" />
                  <div className="job-head">
                    <h3 className="job-company">
                      {job.url ? (
                        <a href={job.url} target="_blank" rel="noopener noreferrer">
                          {job.company} <span className="arrow">↗</span>
                        </a>
                      ) : job.company}
                    </h3>
                    <span className="job-location">{job.location}</span>
                  </div>

                  {job.roles.map((role) => (
                    <div className="job-role" key={role.title}>
                      <div className="job-role-head">
                        <h4>{role.title}</h4>
                        <span className="job-period">{role.period}</span>
                      </div>
                      {(role.groups || [{ points: role.points }]).map((group, gi) => (
                        <div className="job-group" key={group.label || gi}>
                          {group.label && <p className="job-group-label">{group.label}</p>}
                          {group.points.length > 0 && (
                            <ul className="job-points">
                              {group.points.map((pt) => (
                                typeof pt === 'string'
                                  ? <li key={pt}>{pt}</li>
                                  : <li key={pt.k}><strong>{pt.k}.</strong> {pt.v}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}

                  {job.tags.length > 0 && (
                    <div className="chips">
                      {job.tags.map((t) => <span className="chip" key={t}>{t}</span>)}
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export function Skills() {
  const marquee = skillGroups.flatMap((g) => g.items);
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader index="02" eyebrow="Toolbox" title={<>The <span className="gradient-text">stack</span> I reach for</>}>
          Grab the sphere and spin it.
        </SectionHeader>

        <div className="skills-grid">
          <div className="card sphere-card reveal">
            <TextSphere />
          </div>
          <div className="skill-groups">
            {skillGroups.map((g, i) => (
              <div className="card skill-group reveal" key={g.title} style={{ transitionDelay: `${i * 90}ms` }} {...tiltHandlers(4)}>
                <div className="card-spotlight" />
                <h3>{g.title}</h3>
                <div className="chips">
                  {g.items.map((s) => <span className="chip chip-lg" key={s}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((s, i) => (
            <span key={i}>{s}<em>✦</em></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader index="03" eyebrow="Side quests" title={<>Things I've <span className="gradient-text">built</span> for fun & good</>}>
          Weekend builds, pro bono work and freelance sites.
        </SectionHeader>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <article
              className={`card project-card accent-${p.accent} reveal`}
              key={p.name}
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
              {...tiltHandlers(7)}
            >
              <div className="card-spotlight" />
              <div className="project-top">
                <span className="project-index">{String(i + 1).padStart(2, '0')}</span>
                <span className="project-orb" />
              </div>
              <h3>{p.name}</h3>
              <p>{p.blurb}</p>
              <div className="chips">
                {p.tags.map((t) => <span className="chip" key={t}>{t}</span>)}
              </div>
              {p.links.length > 0 && (
                <div className="project-links">
                  {p.links.map((l) => (
                    <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">
                      {l.label} <span className="arrow">↗</span>
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Beyond() {
  const { education, hardware, awards, certifications, languages } = beyond;
  return (
    <section id="beyond" className="section">
      <div className="container">
        <SectionHeader index="04" eyebrow="Beyond code" title={<>A little more <span className="gradient-text">about me</span></>}>
          An instrumentation engineer turned frontend developer, with a past on stage and in quiz halls.
        </SectionHeader>

        <div className="bento">
          <div className="card bento-edu reveal" {...tiltHandlers(4)}>
            <div className="card-spotlight" />
            <span className="bento-label">Education</span>
            {education.map((ed) => (
              <div className="edu-item" key={ed.school}>
                <h3>{ed.degree}</h3>
                <p>{ed.school}</p>
                <div className="bento-meta">
                  <span className="chip">{ed.period}</span>
                  <span className="chip">{ed.note}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="card bento-awards reveal" {...tiltHandlers(3)}>
            <div className="card-spotlight" />
            <span className="bento-label">Honours & awards</span>
            <ul className="award-list">
              {awards.map((a) => (
                <li key={a.title}>
                  <div>
                    <strong>{a.title}</strong>
                    <span>{a.where}</span>
                  </div>
                  <span className="award-place">{a.place}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card bento-hw reveal" {...tiltHandlers(4)}>
            <div className="card-spotlight" />
            <span className="bento-label">Hardware hacking</span>
            {hardware.map((h) => (
              <div className="hw-item" key={h.title}>
                <div className="hw-head">
                  <h3>{h.title}</h3>
                  <span className="chip">{h.when}</span>
                </div>
                <p>{h.text}</p>
              </div>
            ))}
          </div>

          <div className="card bento-certs reveal" {...tiltHandlers(4)}>
            <div className="card-spotlight" />
            <span className="bento-label">Certifications</span>
            <ul className="cert-list">
              {certifications.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>

          <div className="card bento-lang reveal" {...tiltHandlers(4)}>
            <div className="card-spotlight" />
            <span className="bento-label">Speaks</span>
            <div className="lang-row">
              {languages.map((l) => <span className="lang" key={l}>{l}</span>)}
            </div>
            <span className="bento-label bento-label-gap">Based in</span>
            <p className="bento-big">{profile.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact({ copied, onCopyEmail }) {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-card reveal">
          <div className="contact-glow" />
          <p className="eyebrow eyebrow-center">
            <span className="eyebrow-index">05</span>
            <span className="eyebrow-line" />
            What's next?
          </p>
          <h2 className="contact-title">
            Let's build something <span className="gradient-text">remarkable</span>.
          </h2>
          <p className="contact-lede">
            Have a role, a project or just want to talk React? My inbox is always open.
          </p>

          <div className="contact-actions">
            <a href={`mailto:${profile.email}`} className="btn btn-primary btn-lg">
              Say hello <span aria-hidden="true">→</span>
            </a>
            <button className="btn btn-ghost btn-lg" onClick={onCopyEmail}>
              {copied ? '✓ Copied!' : profile.email}
            </button>
          </div>

          <div className="contact-meta">
            <a href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}>{profile.phone}</a>
            <span className="sep">·</span>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer">Résumé ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React and too much coffee.</p>
        <div className="footer-links">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-btn"><LinkedInIcon /></a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-btn"><GitHubIcon /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="icon-btn"><MailIcon /></a>
        </div>
      </div>
    </footer>
  );
}
