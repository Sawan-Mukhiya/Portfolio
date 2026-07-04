import content from '../../content/portfolio.json';

export default function About() {
  return (
    <main className="flex-grow pt-32 pb-24 relative" style={{ background: 'var(--color-warm-beige)' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Page header */}
        <div className="text-center mb-16 reveal">
          <span
            className="inline-block text-xs font-black tracking-[0.25em] uppercase mb-4 px-4 py-2 rounded-full"
            style={{ color: 'var(--color-terracotta)', background: 'var(--color-terracotta-pale)' }}
          >
            ✦ Get to know me
          </span>
          <h1
            className="text-5xl md:text-6xl font-black tracking-tight mb-4"
            style={{ color: 'var(--color-charcoal)', fontFamily: 'var(--font-display)' }}
          >
            Turning{' '}
            <span style={{ color: 'var(--color-terracotta)' }} className="underline-squiggle">
              Data
            </span>{' '}
            into Intelligence.
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--color-text-soft)', fontFamily: 'var(--font-body)' }}>
            {content.about.pageSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-6 reveal delay-100">
            {/* Headshot */}
            <div
              className="overflow-hidden aspect-[4/5] relative rounded-3xl shadow-2xl"
              style={{ boxShadow: '0 20px 60px rgba(193,68,14,0.18)' }}
            >
              <img
                alt="Image of Sawan Mukhiya"
                className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                src="about_me_pic.jpg"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(193,68,14,0.25) 0%, transparent 50%)' }}
              />
              <div
                className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-black text-white"
                style={{ background: 'var(--color-terracotta)' }}
              >
                Aspiring AI Engineer
              </div>
            </div>

            {/* Education card */}
            <div className="card-warm p-6">
              <h3
                className="font-black text-base flex items-center gap-2 mb-4"
                style={{ color: 'var(--color-charcoal)', fontFamily: 'var(--font-display)' }}
              >
                <span className="material-symbols-outlined text-xl" style={{ color: 'var(--color-terracotta)' }}>school</span>
                Education
              </h3>
              <div className="space-y-4" style={{ fontFamily: 'var(--font-body)' }}>
                <div>
                  <p className="font-bold text-sm" style={{ color: 'var(--color-terracotta)' }}>
                    {content.about.education[0].degree}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--color-charcoal)' }}>
                    {content.about.education[0].institution}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>
                    {content.about.education[0].location} · {content.about.education[0].period}
                  </p>
                </div>
                <div className="pt-3" style={{ borderTop: '1px solid rgba(193,68,14,0.1)' }}>
                  <p className="font-bold text-sm" style={{ color: 'var(--color-warm-brown)' }}>
                    {content.about.education[1].degree}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--color-charcoal)' }}>
                    {content.about.education[1].institution}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>
                    {content.about.education[1].location} · {content.about.education[1].period}
                  </p>
                </div>
                <div className="pt-3" style={{ borderTop: '1px solid rgba(193,68,14,0.1)' }}>
                  <p className="text-xs italic leading-relaxed" style={{ color: 'var(--color-text-soft)' }}>
                    &ldquo;{content.about.educationQuote}&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Contact quick info */}
            <div className="card-warm p-6">
              <h3
                className="font-black text-base flex items-center gap-2 mb-4"
                style={{ color: 'var(--color-charcoal)', fontFamily: 'var(--font-display)' }}
              >
                <span className="material-symbols-outlined text-xl" style={{ color: 'var(--color-sage)' }}>contact_page</span>
                Quick Info
              </h3>
              <div className="space-y-2 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                <p style={{ color: 'var(--color-text-soft)' }}>
                  📍 Chagal, Kathmandu, Nepal
                </p>
                <p style={{ color: 'var(--color-text-soft)' }}>
                  📧 sawanmukhiy@gmail.com
                </p>
                <p style={{ color: 'var(--color-text-soft)' }}>
                  📞 +977-9808283220
                </p>
                <a
                  href="https://github.com/Sawan-Mukhiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-bold text-sm"
                  style={{ color: 'var(--color-terracotta)' }}
                >
                  <span className="material-symbols-outlined text-base">open_in_new</span>
                  github.com/Sawan-Mukhiya
                </a>
                <a
                  href="https://linkedin.com/in/sawan-mukhiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-bold text-sm"
                  style={{ color: 'var(--color-terracotta)' }}
                >
                  <span className="material-symbols-outlined text-base">open_in_new</span>
                  linkedin.com/in/sawan-mukhiya
                </a>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-8 flex flex-col gap-8">

            {/* Bio */}
            <div className="card-warm p-8 lg:p-10 reveal delay-200">
              <div
                className="space-y-5 leading-relaxed text-base"
                style={{ color: 'var(--color-text-soft)', fontFamily: 'var(--font-body)' }}
              >
                {content.about.bio.map((paragraph, idx) => (
                  <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
              </div>
            </div>

            {/* Interest cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 reveal delay-300">
              {content.about.interestCards.map((item) => (
                <div
                  key={item.title}
                  className={`${item.card} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-white"
                    style={{ background: item.iconBg }}
                  >
                    <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {item.icon}
                    </span>
                  </div>
                  <h4
                    className="font-black text-base mb-2"
                    style={{ color: 'var(--color-charcoal)', fontFamily: 'var(--font-display)' }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-soft)', fontFamily: 'var(--font-body)' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Philosophy */}
            <div
              className="p-10 rounded-3xl text-center reveal delay-400"
              style={{
                background: 'var(--color-terracotta)',
                boxShadow: '0 20px 50px rgba(193,68,14,0.2)',
              }}
            >
              <p className="text-xs font-black tracking-[0.25em] uppercase text-white/60 mb-4">Mission</p>
              <blockquote
                className="text-2xl lg:text-3xl font-black text-white leading-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                &ldquo;{content.about.philosophyQuote}&rdquo;
              </blockquote>
              <p className="mt-6 text-sm leading-relaxed max-w-lg mx-auto text-white/70" style={{ fontFamily: 'var(--font-body)' }}>
                {content.about.philosophyBody}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
