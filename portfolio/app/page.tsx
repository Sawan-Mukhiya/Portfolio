import Link from 'next/link';
import content from '../content/portfolio.json';
import FloatingBadge from '../components/FloatingBadge';

export default function Home() {
  return (
    <main className="relative flex-grow flex flex-col overflow-hidden min-h-screen hero-bg">

      {/* ── Morphing blobs ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute animate-blob animate-float"
          style={{
            width: '520px', height: '520px',
            top: '-80px', left: '-120px',
            background: 'radial-gradient(circle, rgba(232,165,152,0.35) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute animate-blob animate-float-b"
          style={{
            width: '440px', height: '440px',
            bottom: '-60px', right: '-80px',
            background: 'radial-gradient(circle, rgba(122,158,126,0.28) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute animate-blob"
          style={{
            width: '300px', height: '300px',
            top: '40%', left: '55%',
            background: 'radial-gradient(circle, rgba(193,68,14,0.1) 0%, transparent 70%)',
            animationDelay: '3s',
          }}
        />
      </div>

      {/* ── Hero Content ── */}
      <div className="container mx-auto px-6 relative z-10 flex-grow flex items-center justify-center pt-28 pb-16">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Left: Text */}
            <div className="flex-1 text-center lg:text-left">

              {/* Status chip */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-8 animate-fade-up"
                style={{
                  background: 'var(--color-sage-pale)',
                  color: 'var(--color-sage)',
                  border: '1px solid rgba(122,158,126,0.25)',
                }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--color-sage)' }} />
                {content.home.statusChip}
              </div>

              <h1
                className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-6 animate-fade-up delay-100"
                style={{ color: 'var(--color-charcoal)' }}
              >
                Hi, I&apos;m{' '}
                <span className="underline-squiggle" style={{ color: 'var(--color-terracotta)' }}>
                  Sawan
                </span>
                <span className="inline-block animate-wave ml-3">👋</span>
              </h1>

              <p
                className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 animate-fade-up delay-200"
                style={{ color: 'var(--color-text-soft)', fontFamily: 'var(--font-body)' }}
                dangerouslySetInnerHTML={{ __html: content.home.heroDescription }}
              />

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-300">
                <Link
                  href="/projects"
                  className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-base"
                >
                  <span className="material-symbols-outlined text-lg">rocket_launch</span>
                  Explore Work
                </Link>
                <Link
                  href="/contact"
                  className="btn-outline inline-flex items-center gap-2 px-8 py-4 text-base"
                >
                  Say Hello
                  <span className="material-symbols-outlined text-lg">waving_hand</span>
                </Link>
              </div>

              {/* Stat strip */}
              <div className="flex items-center gap-8 mt-12 justify-center lg:justify-start animate-fade-up delay-400">
                {content.home.stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div
                      className="text-2xl font-black"
                      style={{ color: 'var(--color-terracotta)', fontFamily: 'var(--font-display)' }}
                    >
                      {s.val}
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Floating card stack */}
            <div className="flex-shrink-0 relative w-80 h-80 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] lg:w-[450px] lg:h-[450px] animate-fade-scale delay-200 mx-auto lg:mx-0">
              <div
                className="absolute inset-0 rounded-3xl rotate-6 animate-float"
                style={{ background: 'var(--color-dusty-rose-pale)', border: '1.5px solid rgba(232,165,152,0.4)' }}
              />
              <div
                className="absolute inset-0 rounded-3xl -rotate-3 animate-float-b"
                style={{ background: 'var(--color-sage-pale)', border: '1.5px solid rgba(122,158,126,0.3)' }}
              />
              <div
                className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
                style={{ boxShadow: '0 20px 60px rgba(193,68,14,0.2)' }}
              >
                <img
                  src="https://drive.google.com/thumbnail?id=1qjH1tYyEMP72wznKru0finO3JDbgeedf&sz=s1000"
                  alt="Image of Sawan Mukhiya"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(193,68,14,0.15) 0%, transparent 60%)' }} />
              </div>

              {/* Dynamic Radial Badges */}
              {[
                { text: "Agentic AI", color: "terracotta" },
                { text: "React/Next", color: "sage" },
                { text: "FastAPI", color: "terracotta" },
                { text: "Web Scraping", color: "sage" },
                { text: "Python", color: "terracotta" },
                { text: "AI/ML", color: "sage" },
                { text: "Flutter", color: "terracotta" },
                { text: "SQL", color: "sage" },
                { text: "Django", color: "terracotta" }
              ].map((badge, i, arr) => {
                const angle = (i * 360) / arr.length;
                return (
                  <div
                    key={badge.text}
                    className="absolute inset-0 pointer-events-none z-10"
                    style={{ transform: `rotate(${angle}deg)` }}
                  >
                    <div 
                      // top position dictates radial distance. Positive tucks inward, negative pushes outward.
                      className="absolute left-1/2 top-[32px] sm:top-[24px] md:-top-[16px] lg:-top-[32px] pointer-events-auto"
                      style={{ 
                        transform: `translate(-50%, -50%) rotate(-${angle}deg)`,
                      }}
                    >
                      <FloatingBadge 
                        text={badge.text} 
                        color={badge.color as "terracotta" | "sage"} 
                        delay={`${i * 0.2}s`} 
                      />
                    </div>
                  </div>
                );
              })}

              <div
                className="absolute -top-6 -left-6 w-12 h-12 rounded-full border-2 border-dashed animate-spin-slow"
                style={{ borderColor: 'rgba(122,158,126,0.5)' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Wavy divider ── */}
      <div className="relative z-10 w-full overflow-hidden leading-none" style={{ marginTop: '-1px' }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '60px' }}>
          <path
            d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
            style={{ fill: 'var(--color-cream)' }}
          />
        </svg>
      </div>

      {/* ── Featured Section ── */}
      <section className="relative z-10 py-24 section-cream">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16 reveal">
            <span
              className="inline-block text-xs font-black tracking-[0.25em] uppercase mb-4 px-4 py-2 rounded-full"
              style={{ color: 'var(--color-terracotta)', background: 'var(--color-terracotta-pale)' }}
            >
              ✦ What I Do
            </span>
            <h2
              className="text-4xl md:text-5xl font-black tracking-tight"
              style={{ color: 'var(--color-charcoal)' }}
            >
              {content.home.featuredSectionHeading}<br />
              <span style={{ color: 'var(--color-terracotta)' }}>{content.home.featuredSectionSubheading}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.home.featureCards.map((item) => (
              <div
                key={item.title}
                className={`${item.cardClass} p-8 reveal ${item.delay} transition-all duration-300 hover:-translate-y-2`}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 text-white"
                  style={{ background: item.iconBg }}
                >
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {item.icon}
                  </span>
                </div>
                <h3
                  className="text-xl font-black mb-3"
                  style={{ color: 'var(--color-charcoal)', fontFamily: 'var(--font-display)' }}
                >
                  {item.title}
                </h3>
                <p className="text-base font-medium leading-relaxed" style={{ color: 'var(--color-text-soft)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA strip */}
          <div
            className="mt-16 p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 reveal delay-400"
            style={{
              background: 'var(--color-terracotta)',
              boxShadow: '0 20px 60px rgba(193,68,14,0.25)',
            }}
          >
            <div>
              <p className="text-xs font-black tracking-[0.2em] uppercase text-white/60 mb-2">{content.home.ctaLocation}</p>
              <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                {content.home.ctaHeading}<br />{content.home.ctaSubheading}
              </h3>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 bg-white font-bold px-8 py-4 rounded-full text-sm tracking-wide transition-all hover:scale-105 hover:shadow-xl"
              style={{ color: 'var(--color-terracotta)' }}
            >
              Start a Conversation →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── MOBILE-ONLY SINGLE SCROLL SECTIONS ─────────────────────── */}
      {/* These are only visible on small screens. Desktop users navigate to full pages. */}

      {/* About Snippet */}
      <section id="about" className="lg:hidden py-20 px-6" style={{ background: 'var(--color-warm-beige)' }}>
        <div className="max-w-xl mx-auto">
          <span
            className="inline-block text-xs font-black tracking-[0.25em] uppercase mb-4 px-4 py-2 rounded-full"
            style={{ color: 'var(--color-terracotta)', background: 'var(--color-terracotta-pale)' }}
          >
            ✦ About me
          </span>
          <h2 className="text-3xl font-black tracking-tight mb-4 reveal" style={{ color: 'var(--color-charcoal)' }}>
            {content.home.mobileAbout.heading}
          </h2>
          <p className="text-base font-medium leading-relaxed mb-6 reveal delay-100" style={{ color: 'var(--color-text-soft)', fontFamily: 'var(--font-body)' }}>
            {content.home.mobileAbout.body}
          </p>
          <div className="grid grid-cols-2 gap-3 mb-6 reveal delay-200">
            {[
              { icon: 'analytics', label: 'Data & ML' },
              { icon: 'document_scanner', label: 'OCR / CV' },
              { icon: 'data_exploration', label: 'Scraping' },
              { icon: 'code', label: 'Full Stack' },
            ].map((item) => (
              <div key={item.label} className="card-warm flex items-center gap-3 p-4">
                <span className="material-symbols-outlined text-base" style={{ color: 'var(--color-terracotta)', fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                <span className="text-sm font-bold" style={{ color: 'var(--color-charcoal)' }}>{item.label}</span>
              </div>
            ))}
          </div>
          <Link href="/about" className="btn-outline inline-flex items-center gap-2 px-6 py-3 text-sm reveal delay-300">
            Read full story →
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="lg:hidden py-20 px-6 section-cream">
        <div className="max-w-xl mx-auto">
          <span
            className="inline-block text-xs font-black tracking-[0.25em] uppercase mb-4 px-4 py-2 rounded-full"
            style={{ color: 'var(--color-terracotta)', background: 'var(--color-terracotta-pale)' }}
          >
            ✦ Projects
          </span>
          <h2 className="text-3xl font-black tracking-tight mb-8 reveal" style={{ color: 'var(--color-charcoal)' }}>
            Featured Work
          </h2>
          <div className="space-y-4">
            {content.home.mobileFeaturedProjects.map((p, i) => (
              <a
                key={i}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${p.cardClass} p-5 block reveal`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base font-black" style={{ color: 'var(--color-charcoal)' }}>{p.title}</h3>
                  <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full text-white flex-shrink-0"
                    style={{ background: 'var(--color-terracotta)' }}>{p.badge}</span>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text-soft)' }}>{p.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {p.tags.map((t) => <span key={t} className="tag-terracotta">{t}</span>)}
                </div>
              </a>
            ))}
          </div>
          <div className="mt-6 text-center reveal delay-300">
            <Link href="/projects" className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm">
              View all projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Contact CTA */}
      <section id="contact" className="lg:hidden py-20 px-6" style={{ background: 'var(--color-warm-beige)' }}>
        <div className="max-w-xl mx-auto text-center">
          <span
            className="inline-block text-xs font-black tracking-[0.25em] uppercase mb-4 px-4 py-2 rounded-full"
            style={{ color: 'var(--color-terracotta)', background: 'var(--color-terracotta-pale)' }}
          >
            ✦ Get in touch
          </span>
          <h2 className="text-3xl font-black tracking-tight mb-4 reveal" style={{ color: 'var(--color-charcoal)' }}>
            {content.home.mobileContact.heading}
          </h2>
          <p className="text-base font-medium leading-relaxed mb-8 reveal delay-100" style={{ color: 'var(--color-text-soft)', fontFamily: 'var(--font-body)' }}>
            {content.home.mobileContact.body}
          </p>
          <div className="flex flex-col gap-3 reveal delay-200">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-base"
            >
              <span className="material-symbols-outlined text-lg">waving_hand</span>
              Send a Message
            </Link>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${content.meta.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center justify-center gap-2 px-8 py-4 text-base"
            >
              <span className="material-symbols-outlined text-lg">mail</span>
              {content.meta.email}
            </a>
            <a
              href="https://github.com/Sawan-Mukhiya"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center justify-center gap-2 px-8 py-4 text-base"
            >
              <span className="material-symbols-outlined text-lg">open_in_new</span>
              GitHub Profile
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
