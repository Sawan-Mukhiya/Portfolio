'use client';

import { useState, useEffect, useCallback } from 'react';

import content from '../../content/portfolio.json';

type Project = {
  order: number;
  title: string;
  description: string;
  longDescription: string[];
  highlights: string[];
  image: string;
  tags: string[];
  tagStyles: string[];
  badge: string;
  badgeBg: string;
  link: string;
  linkText?: string;
  linkIcon?: string;
  accentColor: string;
  category: string;
  techDetails: { label: string; value: string }[];
};

export default function Projects() {
  const projects: Project[] = content.projects as Project[];
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('All');

  const filters = ['All', 'AI/ML', 'Web Scraping', 'Others'];

  const filteredProjects = projects.filter(project => {
    if (filter === 'All') return true;
    if (filter === 'AI/ML') {
      return project.badge === 'AI / ML' || project.badge === 'Data Science';
    }
    if (filter === 'Web Scraping') {
      return project.category.includes('Web Scraping') || project.badge === 'Automation' || project.badge === 'Data Engineering';
    }
    if (filter === 'Others') {
      const isAIML = project.badge === 'AI / ML' || project.badge === 'Data Science';
      const isScraping = project.category.includes('Web Scraping') || project.badge === 'Automation' || project.badge === 'Data Engineering';
      return !isAIML && !isScraping;
    }
    return true;
  }).sort((a, b) => a.order - b.order);

  const closeModal = useCallback(() => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  }, []);

  const openModal = useCallback((project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [closeModal]);

  // Re-trigger reveal animation when filter changes
  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.project-card');
      elements.forEach(el => el.classList.add('in-view'));
    }, 50);
    return () => clearTimeout(timer);
  }, [filter]);

  return (
    <>
      <main className="flex-grow pt-32 pb-24 px-6 max-w-7xl mx-auto w-full">
        {/* Header */}
        <section className="mb-12 text-center reveal">
          <span
            className="inline-block text-xs font-black tracking-[0.25em] uppercase mb-5 px-4 py-2 rounded-full"
            style={{ color: 'var(--color-terracotta)', background: 'var(--color-terracotta-pale)' }}
          >
            ✦ Portfolio
          </span>
          <h1
            className="text-5xl md:text-7xl font-black tracking-tight mb-6"
            style={{ color: 'var(--color-charcoal)', fontFamily: 'var(--font-display)' }}
          >
            My{' '}
            <span className="underline-squiggle" style={{ color: 'var(--color-terracotta)' }}>
              Projects
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-[1.1rem] font-medium leading-relaxed" style={{ color: 'var(--color-text-soft)', fontFamily: 'var(--font-body)' }}>
            Various open-source projects spanning AI/ML, fintech, web scraping, and game development —
            click any card to explore the full details.
          </p>
        </section>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 reveal delay-100">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                filter === f 
                  ? 'bg-[var(--color-terracotta)] text-white shadow-lg scale-105' 
                  : 'bg-[var(--color-cream)] text-[var(--color-charcoal)] border-2 border-[var(--color-terracotta-pale)] hover:border-[var(--color-terracotta)] hover:text-[var(--color-terracotta)]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredProjects.map((project, index) => (
            <article
              key={project.title}
              className="card-warm overflow-hidden flex flex-col group reveal project-card"
              style={{ animationDelay: `${index * 50}ms`, cursor: 'pointer' }}
              onClick={() => openModal(project)}
              role="button"
              tabIndex={0}
              aria-label={`View details for ${project.title}`}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(project); } }}
            >
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={project.image}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to top, ${project.accentColor}22 0%, transparent 60%)` }}
                />
                {project.badge && (
                  <div className="absolute top-3 left-3">
                    <span
                      className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full text-white shadow-sm"
                      style={{ background: project.badgeBg }}
                    >
                      {project.badge}
                    </span>
                  </div>
                )}
                {/* Click hint overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(44, 36, 22, 0.45)' }}
                >
                  <span className="flex items-center gap-2 text-white font-bold text-sm px-4 py-2 rounded-full" style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.25)' }}>
                    <span className="material-symbols-outlined text-base">open_in_full</span>
                    View Details
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-grow flex-col">
                <h3
                  className="text-xl font-black mb-3"
                  style={{ color: 'var(--color-charcoal)', fontFamily: 'var(--font-display)' }}
                >
                  {project.title}
                </h3>
                <p className="text-[1.05rem] font-medium mb-5 leading-relaxed flex-grow" style={{ color: 'var(--color-text-soft)', fontFamily: 'var(--font-body)' }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className={project.tagStyles[tIndex]}>{tag}</span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid rgba(193,68,14,0.08)' }}>
                  <span
                    className="flex items-center gap-1.5 text-[0.95rem] font-bold"
                    style={{ color: project.accentColor, fontFamily: 'var(--font-body)' }}
                  >
                    <span className="material-symbols-outlined text-base">info</span>
                    Click for details
                  </span>
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
                    style={{ background: 'var(--color-warm-beige)' }}
                  >
                    <span className="material-symbols-outlined text-sm" style={{ color: 'var(--color-text-muted)' }}>arrow_outward</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center reveal delay-400">
          <p className="text-sm mb-4" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
            All projects are open source and available on GitHub
          </p>
          <a
            href="https://github.com/Sawan-Mukhiya"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-8 py-3 text-sm"
          >
            <span className="material-symbols-outlined text-base">open_in_new</span>
            View All on GitHub
          </a>
        </div>
      </main>

      {/* ── PROJECT DETAIL MODAL ── */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Project details: ${selectedProject.title}`}
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
          style={{
            background: 'rgba(44, 36, 22, 0.72)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            animation: 'fadeInModal 0.22s ease-out',
          }}
        >
          {/* Modal Panel */}
          <div
            className="relative w-full flex flex-col"
            style={{
              maxWidth: '680px',
              maxHeight: '88vh',
              background: 'var(--color-cream)',
              borderRadius: 'var(--radius-xl)',
              boxShadow: '0 32px 80px rgba(44,36,22,0.38), 0 0 0 1.5px rgba(193,68,14,0.12)',
              animation: 'slideUpModal 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)',
              overflow: 'hidden',
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              aria-label="Close project details"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{
                background: 'var(--color-warm-beige)',
                color: 'var(--color-charcoal)',
                border: '1.5px solid rgba(193,68,14,0.12)',
                boxShadow: '0 2px 8px rgba(44,36,22,0.1)',
              }}
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>

            {/* Scrollable Content Area */}
            <div className="overflow-y-auto flex-1" style={{ scrollbarWidth: 'thin', scrollbarColor: 'var(--color-terracotta-pale) transparent' }}>

              {/* Hero Image */}
              <div className="relative w-full" style={{ height: '240px', flexShrink: 0 }}>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to top, var(--color-cream) 0%, transparent 55%)` }}
                />
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full text-white shadow"
                    style={{ background: selectedProject.badgeBg }}
                  >
                    {selectedProject.badge}
                  </span>
                </div>
              </div>

              {/* Text Content — position relative + z-index so it paints above the image div */}
              <div className="px-7 pb-8" style={{ marginTop: '-28px', position: 'relative', zIndex: 2 }}>

                {/* Title & Category — pr-14 reserves space for the absolute close button */}
                <div className="mb-5 pr-14">
                  <h2
                    className="text-2xl md:text-3xl font-black mb-1.5 leading-tight"
                    style={{ color: 'var(--color-charcoal)', fontFamily: 'var(--font-display)', wordBreak: 'break-word' }}
                  >
                    {selectedProject.title}
                  </h2>
                  <p
                    className="text-xs font-bold uppercase tracking-[0.18em]"
                    style={{ color: selectedProject.accentColor, fontFamily: 'var(--font-body)' }}
                  >
                    {selectedProject.category}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {selectedProject.tags.map((tag, tIndex) => (
                    <span key={tIndex} className={selectedProject.tagStyles[tIndex]}>{tag}</span>
                  ))}
                </div>

                {/* Divider */}
                <div style={{ height: '1.5px', background: 'rgba(193,68,14,0.09)', marginBottom: '1.5rem', borderRadius: '99px' }} />

                {/* Description */}
                <div className="mb-6">
                  <h3
                    className="text-sm font-black uppercase tracking-[0.15em] mb-3"
                    style={{ color: 'var(--color-terracotta)', fontFamily: 'var(--font-body)' }}
                  >
                    About this project
                  </h3>
                  {selectedProject.longDescription.map((para, i) => (
                    <p
                      key={i}
                      className="text-[0.97rem] font-medium leading-relaxed mb-3"
                      style={{ color: 'var(--color-text-soft)', fontFamily: 'var(--font-body)' }}
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h3
                    className="text-sm font-black uppercase tracking-[0.15em] mb-3"
                    style={{ color: 'var(--color-terracotta)', fontFamily: 'var(--font-body)' }}
                  >
                    Key Highlights
                  </h3>
                  <ul className="flex flex-col gap-2.5">
                    {selectedProject.highlights.map((hl, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[0.95rem] font-medium leading-snug"
                        style={{ color: 'var(--color-text-soft)', fontFamily: 'var(--font-body)' }}
                      >
                        <span
                          className="material-symbols-outlined text-sm mt-0.5 shrink-0"
                          style={{ color: selectedProject.accentColor }}
                        >
                          check_circle
                        </span>
                        {hl}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Details Grid */}
                <div className="mb-7">
                  <h3
                    className="text-sm font-black uppercase tracking-[0.15em] mb-3"
                    style={{ color: 'var(--color-terracotta)', fontFamily: 'var(--font-body)' }}
                  >
                    Tech Stack &amp; Details
                  </h3>
                  <div className="grid grid-cols-2 gap-2.5">
                    {selectedProject.techDetails.map((detail, i) => (
                      <div
                        key={i}
                        className="rounded-xl px-4 py-3"
                        style={{
                          background: 'var(--color-warm-beige)',
                          border: '1.5px solid rgba(193,68,14,0.07)',
                        }}
                      >
                        <p
                          className="text-[0.68rem] font-black uppercase tracking-[0.15em] mb-0.5"
                          style={{ color: 'var(--color-warm-muted)', fontFamily: 'var(--font-body)' }}
                        >
                          {detail.label}
                        </p>
                        <p
                          className="text-[0.9rem] font-bold leading-snug"
                          style={{ color: 'var(--color-charcoal)', fontFamily: 'var(--font-body)' }}
                        >
                          {detail.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 w-full justify-center py-3.5 text-sm font-bold"
                  style={{ borderRadius: 'var(--radius-lg)' }}
                >
                  <span className="material-symbols-outlined text-base">code</span>
                  {selectedProject.linkText || "GitHub"}
                  <span className="material-symbols-outlined text-base">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal animation keyframes injected via style tag */}
      <style>{`
        @keyframes fadeInModal {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideUpModal {
          from { opacity: 0; transform: translateY(40px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
      `}</style>
    </>
  );
}
