'use client';

export default function Projects() {
  const projects = [
    {
      title: "SnipTxt: OCR Platform",
      description: "A web OCR system built with CNN + BiLSTM + CTC for text recognition. Features modular REST APIs and a Django backend integrated with a MySQL database for storing extracted text.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAR15ic-HBInin8W1wb8jc1D4XqSWjFrG8gFeRxnNaxpPGnFuEgOkA_dX6Z57PUUSpw6ARITNODClt-pIQ5-oE5qnVAGjsw5_e6mDp8D7oOSdwCKTsaQgx0LukMV1ul10HQnqZReQKA5V-xqtPJ5s4tUnTUBQTCF9zoDllKytbj7tug9-b-GwfWHFt6ivSJ2HfHbC1WMRHbQ4WeMm75XQVeC8W0kvriCZ45Hh4rn8Njtd0epfk8uLPsqX9mK-rpMj3C_ChCIzeyM070",
      tags: ["PyTorch", "Django REST", "React.js", "MySQL"],
      tagStyles: ["tag-terracotta", "tag-terracotta", "tag-sage", "tag-rose"],
      badge: "AI / ML",
      badgeBg: 'var(--color-terracotta)',
      link: "https://github.com/Sawan-Mukhiya/SnipTxt-An-OCR-Platform-using-CRNN-with-CTC.git",
      linkText: "View on GitHub",
      linkIcon: "open_in_new",
      accentColor: 'var(--color-terracotta)',
    },
    {
      title: "NEPSE Stock Journal",
      description: "A stock journal with tax/fee calculations and portfolio analytics for the Nepal Stock Exchange (NEPSE). Backend APIs handle financial reporting and data aggregation for investor insights.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYfGt61HvYpgYQI6FRFQdl2x89njQ8fe2n_X706RYr_x1mjLBbl0ee5RRnxxMyPPQhrBBSWX5h9puHjXRNfegdyH77uzZ5rAbe4gCu0jbcNWIVOLYq3Dbc0kFYVmOwpHXpN0EAudjym4LB4RCvjQg3C_jiego0VO9vJzmlbqdMmzRhQigXDB64ExKUXRbqd3H1rYlkKZ7U42gLYeZyK0C5RGTHkEurIGGIHClwh5RTTRH9J2RO0b3z7yheNZDzGrwT6BOCAahQ3BWr",
      tags: ["Django REST", "React.js", "MySQL"],
      tagStyles: ["tag-terracotta", "tag-sage", "tag-rose"],
      badge: "Full Stack",
      badgeBg: 'var(--color-sage)',
      link: "https://github.com/Sawan-Mukhiya/NEPSE_Stock_journal_and_Taxes.git",
      linkText: "View on GitHub",
      linkIcon: "open_in_new",
      accentColor: 'var(--color-sage)',
    },
    {
      title: "ExEC: Expression Tool",
      description: "A web app for evaluating and converting mathematical expressions. Uses MySQL to store and query expression data and conversion results, with a clean PHP backend.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnwAMP2RxDxY_a6eChssw14XumJvDDlHrvx3-PVWg9cuo-Z6N1FJqHS63kTKXRoY-pkA9GORJ7NnKu2Iw57hJYPibPkudbcY-a0ac1Tw1JCSoQGt5zbrUG_ECKYtGXD8UvuWXGj7zzu0SfenjoUdn9LrTcfCA5EW0fcs_LAXSu_Xi6iia9c02Y-ZNsLVA8HWFR8d1Z9RRZ44pfj2EIukXXxlNTCLJDbGtdpn899goSZI6rvQ7JqmG1MJ-GlgWVEJ_xIkv7O3IVCHZw",
      tags: ["PHP", "MySQL"],
      tagStyles: ["tag-terracotta", "tag-rose"],
      badge: "Web App",
      badgeBg: '#a0524a',
      link: "https://github.com/Sawan-Mukhiya/ExEC-Expression_Evaluation_And_Conversion_Tool.git",
      linkText: "View on GitHub",
      linkIcon: "open_in_new",
      accentColor: '#a0524a',
    },
    {
      title: "Chess Arena",
      description: "An offline chess game built in Java with full undo, save/load, and draw features. MySQL is used to persist game states, moves, and user sessions across play sessions.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5DFqQwce56sehifs7v_kWAb7dD2pTYBHJ3N2XT3_Pkxck4v7oOqm_zGp66PoK5rtoQGjnXgycLZnMS-WtjBRbgTrBW3ZrZky1tT_n6376YdCf3od9Q4O_ArExpSu7k1R5TocRneDntG6vPULmT9dOdyfmVfYC2aycmROWFieEnPdCwA0-0t0mtFpdbIVILgvbwxWOrMioeyb1R4hBeMhnxqqlTyI-uGsqrUqtMXWLrrOJqDsXP-EskKCQRKtwjw33fspTdQD2qCSM",
      tags: ["Java", "MySQL"],
      tagStyles: ["tag-sage", "tag-rose"],
      badge: "Game Dev",
      badgeBg: 'var(--color-dusty-rose)',
      link: "https://github.com/Sawan-Mukhiya/Chess-Arena-An-Offline-Chess-Game.git",
      linkText: "View on GitHub",
      linkIcon: "open_in_new",
      accentColor: 'var(--color-sage)',
    },
    {
      title: "Web-Scraping Pipeline",
      description: "Automated scraper using Playwright to extract daily entertainment articles and media. Features robust error handling, automated navigation, and extraction into structured JSON.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeB2I6yx0B25CPnH_LZnbCU3KR8dFloWUc4fxZDaYoBq9bNH4zHqnFyBNTwJWcvDyqOgUWVfU8D_Z9fViMYwYN5MIKqq_B6tUwRz0UWyuR2m2pyOp8o_nN_jBi_v-oSUP2RBdF7lGaYNNNrWygJe-YyqVjx0JCB-04sPvB_JpQA1QDGSbVizz_skwIZ3DEd0OXmfF44DFTPgtIHjqyWe2NjnvNXKNtcqFCZ561-68zqR9tPcAqoAeDZ5FwGCH2DFY4VeQG4EEGslWK",
      tags: ["Python", "Playwright", "UV"],
      tagStyles: ["tag-terracotta", "tag-sage", "tag-rose"],
      badge: "Automation",
      badgeBg: '#a0524a',
      link: "https://github.com/Sawan-Mukhiya/Web-Scraping.git",
      linkText: "View on GitHub",
      linkIcon: "open_in_new",
      accentColor: '#a0524a',
    },
    {
      title: "Productivity Prediction",
      description: "Garment employee productivity prediction model. Performed extensive EDA and built regression models using XGBoost, achieving high predictive accuracy (R² ≈ 0.94).",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrB1DJMHWAwy0rfxVYE7qNBHYkm32cO3kDK1kL1R_MHXYnYSmnuklD0Jdg9hiQNzLno_OdyfmVfYC2aycmROWFieEnPdCwA0-0t0mtFpdbIVILgvbwxWOrMioeyb1R4hBeMhnxqqlTyI-uGsqrUqtMXWLrrOJqDsXP-EskKCQRKtwjw33fspTdQD2qCSM",
      tags: ["Pandas", "Scikit-learn", "XGBoost"],
      tagStyles: ["tag-terracotta", "tag-sage", "tag-rose"],
      badge: "Data Science",
      badgeBg: 'var(--color-terracotta)',
      link: "https://github.com/Sawan-Mukhiya/Garment-Employee-Productivity-Prediction.git",
      linkText: "View on GitHub",
      linkIcon: "open_in_new",
      accentColor: 'var(--color-terracotta)',
    },
    {
      title: "Hands On Machine Learning",
      description: "Implementation of various machine learning algorithms and concepts using Python and Scikit-learn, emphasizing supervised learning, evaluation metrics, and practical applications.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAR15ic-HBInin8W1wb8jc1D4XqSWjFrG8gFeRxnNaxpPGnFuEgOkA_dX6Z57PUUSpw6ARITNODClt-pIQ5-oE5qnVAGjsw5_e6mDp8D7oOSdwCKTsaQgx0LukMV1ul10HQnqZReQKA5V-xqtPJ5s4tUnTUBQTCF9zoDllKytbj7tug9-b-GwfWHFt6ivSJ2HfHbC1WMRHbQ4WeMm75XQVeC8W0kvriCZ45Hh4rn8Njtd0epfk8uLPsqX9mK-rpMj3C_ChCIzeyM070",
      tags: ["Scikit-learn", "Python", "ML"],
      tagStyles: ["tag-sage", "tag-terracotta", "tag-rose"],
      badge: "AI / ML",
      badgeBg: 'var(--color-sage)',
      link: "#",
      linkText: "View on GitHub",
      linkIcon: "open_in_new",
      accentColor: 'var(--color-sage)',
    },
  ];

  return (
    <main className="flex-grow pt-32 pb-24 px-6 max-w-7xl mx-auto w-full">
      {/* Header */}
      <section className="mb-20 text-center reveal">
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
          Seven open-source projects spanning AI/ML, fintech, web scraping, and game development —
          each with a live GitHub repository you can explore.
        </p>
      </section>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {projects.map((project, index) => (
          <article
            key={index}
            className="card-warm overflow-hidden flex flex-col group reveal"
            style={{ animationDelay: `${index * 100}ms` }}
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
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[0.95rem] font-bold transition-all hover:opacity-75"
                  style={{ color: project.accentColor, fontFamily: 'var(--font-body)' }}
                >
                  {project.linkText}
                  <span className="material-symbols-outlined text-base">{project.linkIcon}</span>
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
                  style={{ background: 'var(--color-warm-beige)' }}
                >
                  <span className="material-symbols-outlined text-sm" style={{ color: 'var(--color-text-muted)' }}>code</span>
                </a>
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
  );
}
