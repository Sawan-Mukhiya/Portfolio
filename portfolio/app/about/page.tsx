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
            Aspiring AI Engineer · BCA Student · Based in Kathmandu, Nepal
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
                    Bachelor in Computer Application (BCA)
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--color-charcoal)' }}>
                    National College of Computer Studies
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>
                    Paknajol, Kathmandu · 2022 – Present
                  </p>
                </div>
                <div className="pt-3" style={{ borderTop: '1px solid rgba(193,68,14,0.1)' }}>
                  <p className="font-bold text-sm" style={{ color: 'var(--color-warm-brown)' }}>
                    +2 in Management (Computer Science)
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--color-charcoal)' }}>
                    Bijeswori Secondary School
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>
                    Bijeswori, Kathmandu · 2020 – 2022
                  </p>
                </div>
                <div className="pt-3" style={{ borderTop: '1px solid rgba(193,68,14,0.1)' }}>
                  <p className="text-xs italic leading-relaxed" style={{ color: 'var(--color-text-soft)' }}>
                    &ldquo;Constant learning is the only way to navigate the evolving digital landscape.&rdquo;
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
                <p>
                  I am <strong style={{ color: 'var(--color-charcoal)' }}>Sawan Mukhiya</strong>, a data-driven developer
                  from Kathmandu with strong <strong style={{ color: 'var(--color-terracotta)' }}>Python and SQL</strong> skills.
                  My experience spans across analyzing datasets, building predictive ML models, and developing robust automated 
                  data extraction pipelines. I enjoy working at the intersection of data and intelligence — where clean 
                  pipelines meet real-world impact.
                </p>
                <p>
                  Currently pursuing my <strong style={{ color: 'var(--color-sage)' }}>Bachelor in Computer Application</strong> at
                  National College of Computer Studies, I spend my time applying machine learning
                  concepts through PyTorch and Scikit-learn. I also build automated web scrapers with Playwright, explore 
                  agentic AI workflows, and construct full-stack applications with Django REST and React.
                </p>
                <p>
                  Whether it&apos;s my OCR platform <strong style={{ color: 'var(--color-charcoal)' }}>SnipTxt</strong>, 
                  predicting garment employee productivity with XGBoost, or structuring messy web data into clean JSON schemas, 
                  my goal remains the same: writing code that makes complex problems feel effortless.
                </p>
              </div>
            </div>

            {/* Interest cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 reveal delay-300">
              {[
                {
                  icon: 'analytics',
                  title: 'Data Analysis & ML',
                  desc: 'Using Pandas, NumPy, and Scikit-learn to uncover patterns and build predictive models like XGBoost.',
                  card: 'card-terracotta',
                  iconBg: 'var(--color-terracotta)',
                },
                {
                  icon: 'document_scanner',
                  title: 'OCR & AI Apps',
                  desc: 'Built a production-grade OCR system using CNN + BiLSTM + CTC with Django REST and React frontend.',
                  card: 'card-rose',
                  iconBg: '#a0524a',
                },
                {
                  icon: 'data_exploration',
                  title: 'Scraping & Pipelines',
                  desc: 'Developing robust web scrapers with Playwright to extract, normalize, and pipeline data into JSON/CSV schemas.',
                  card: 'card-sage',
                  iconBg: 'var(--color-sage)',
                },
                {
                  icon: 'code',
                  title: 'Full Stack & APIs',
                  desc: 'Building end-to-end apps, financial tech, and robust APIs with Django REST Framework and React.js.',
                  card: 'card-terracotta',
                  iconBg: 'var(--color-terracotta-light)',
                },
              ].map((item) => (
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
                &ldquo;Building intelligent systems that{' '}
                <span style={{ color: 'var(--color-dusty-rose)' }}>make data speak</span> — from raw numbers to real decisions.&rdquo;
              </blockquote>
              <p className="mt-6 text-sm leading-relaxed max-w-lg mx-auto text-white/70" style={{ fontFamily: 'var(--font-body)' }}>
                I believe the best AI isn&apos;t the most complex — it&apos;s the most useful.
                Every project I build is a step toward software that genuinely helps people understand
                and act on information around them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
