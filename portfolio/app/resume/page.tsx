export default function Resume() {
  const technicalExpertise = [
    {
      category: "Languages",
      skills: ["Python", "SQL", "Java", "JavaScript", "PHP", "C"],
      tagStyle: "tag-terracotta",
    },
    {
      category: "Data Analysis & ML",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "PyTorch"],
      tagStyle: "tag-sage",
    },
    {
      category: "Web Scraping & Automation",
      skills: ["Playwright", "Scrapy", "BeautifulSoup", "Requests"],
      tagStyle: "tag-rose",
    },
    {
      category: "Frameworks & Backend",
      skills: ["Django REST", "FastAPI", "React.js", "Celery", "WebSockets"],
      tagStyle: "tag-terracotta",
    },
    {
      category: "Databases & Tools",
      skills: ["MySQL", "SQLite", "MongoDB", "Git", "Docker", "Postman"],
      tagStyle: "tag-sage",
    },
    {
      category: "Other",
      skills: ["Agentic AI", "NLP", "Computer Vision", "Agile", "QA"],
      tagStyle: "tag-rose",
    },
  ];

  const experience = [
    {
      role: "BCA Student & Independent Developer",
      company: "National College of Computer Studies",
      period: "2022 — Present",
      isActive: true,
      description: [
        "Pursuing Bachelor in Computer Application with a focus on AI, data science, and software engineering.",
        "Built 7 independent projects spanning OCR, fintech, web scraping, ML models, and game development.",
        "Developed automated web-scraping pipelines to extract and normalize data into structured JSON/CSV schemas.",
        "Continuously applying ML/AI concepts through PyTorch and Scikit-learn, with emphasis on computer vision and NLP.",
      ],
    },
  ];

  const keyProjects = [
    {
      title: "SnipTxt: OCR Platform",
      description: "Web OCR system using CNN + BiLSTM + CTC for text recognition with Django REST and React.js.",
      tags: ["PyTorch", "Django", "React"],
      tagStyle: "tag-terracotta",
      cardClass: "card-terracotta",
      link: "https://github.com/Sawan-Mukhiya/SnipTxt-An-OCR-Platform-using-CRNN-with-CTC.git",
    },
    {
      title: "NEPSE Stock Journal",
      description: "Stock journal with tax calculations, portfolio analytics, and financial reporting for Nepal's stock exchange.",
      tags: ["Django", "React", "MySQL"],
      tagStyle: "tag-sage",
      cardClass: "card-sage",
      link: "https://github.com/Sawan-Mukhiya/NEPSE_Stock_journal_and_Taxes.git",
    },
    {
      title: "Web-Scraping Pipeline",
      description: "Automated scraper using Playwright to extract daily entertainment articles and media into structured JSON.",
      tags: ["Python", "Playwright", "UV"],
      tagStyle: "tag-rose",
      cardClass: "card-rose",
      link: "https://github.com/Sawan-Mukhiya/Web-Scraping.git",
    },
    {
      title: "Productivity Prediction",
      description: "Performed EDA and built regression models (XGBoost) for garment worker data, achieving R² ≈ 0.94.",
      tags: ["Pandas", "Scikit-learn"],
      tagStyle: "tag-terracotta",
      cardClass: "card-terracotta",
      link: "https://github.com/Sawan-Mukhiya/Garment-Employee-Productivity-Prediction.git",
    },
  ];

  return (
    <main className="flex-grow pt-32 pb-24 px-6 max-w-5xl mx-auto w-full">

      {/* Header */}
      <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8 reveal">
        <div>
          <span
            className="inline-block text-xs font-black tracking-[0.25em] uppercase mb-4 px-4 py-2 rounded-full"
            style={{ color: 'var(--color-terracotta)', background: 'var(--color-terracotta-pale)' }}
          >
            ✦ My journey
          </span>
          <h1
            className="text-5xl md:text-6xl font-black tracking-tight mb-3"
            style={{ color: 'var(--color-charcoal)', fontFamily: 'var(--font-display)' }}
          >
            Résumé
          </h1>
          <p className="text-lg max-w-lg" style={{ color: 'var(--color-text-soft)', fontFamily: 'var(--font-body)' }}>
            Data-driven developer skilled in Python, SQL, and ML — building intelligent tools from Kathmandu.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 px-6 py-3 text-sm"
          >
            <span className="material-symbols-outlined text-base">visibility</span>
            View Resume
          </a>
          <a
            href="/assets/resume.pdf"
            download="Sawan_Mukhiya_Resume.pdf"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm"
          >
            <span className="material-symbols-outlined text-base">download</span>
            Download Resume
          </a>
        </div>
      </div>

      {/* Career Goals */}
      <section className="mb-14 reveal delay-100">
        <div
          className="p-8 rounded-3xl relative overflow-hidden"
          style={{
            background: 'var(--color-terracotta-pale)',
            borderLeft: '4px solid var(--color-terracotta)',
          }}
        >
          <div
            className="absolute top-4 right-4 w-16 h-16 rounded-full opacity-20 animate-spin-slow"
            style={{ border: '2px dashed var(--color-terracotta)' }}
          />
          <h2
            className="text-xl font-black mb-3 flex items-center gap-2"
            style={{ color: 'var(--color-charcoal)', fontFamily: 'var(--font-display)' }}
          >
            <span className="material-symbols-outlined" style={{ color: 'var(--color-terracotta)', fontVariationSettings: "'FILL' 1" }}>
              target
            </span>
            Career Goals
          </h2>
          <p className="leading-relaxed italic text-base" style={{ color: 'var(--color-text-soft)', fontFamily: 'var(--font-body)' }}>
            &ldquo;My goal is to become an AI/ML engineer who builds data-driven systems that make a real difference.
            I am motivated to integrate data from multiple sources, apply machine learning concepts, and create
            actionable insights — contributing to collaborative teams and real-world problems that matter.&rdquo;
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* Left: Skills */}
        <div className="lg:col-span-1 space-y-10 reveal delay-200">
          <section>
            <h3
              className="text-xs font-black mb-6 flex items-center gap-2 pl-4 uppercase tracking-widest"
              style={{
                color: 'var(--color-terracotta)',
                borderLeft: '3px solid var(--color-terracotta)',
                fontFamily: 'var(--font-body)',
              }}
            >
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalExpertise.map((item, idx) => (
                <div key={idx}>
                  <p
                    className="text-[10px] font-black uppercase tracking-[0.15em] mb-2.5"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {item.category}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`${item.tagStyle} animate-sway`}
                        style={{ animationDelay: `${(sIdx % 4) * -0.5}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3
              className="text-xs font-black mb-6 flex items-center gap-2 pl-4 uppercase tracking-widest"
              style={{
                color: 'var(--color-sage)',
                borderLeft: '3px solid var(--color-sage)',
                fontFamily: 'var(--font-body)',
              }}
            >
              Languages
            </h3>
            <div className="space-y-2">
              {[
                { lang: 'Nepali', level: 'Native', tagStyle: 'tag-terracotta' },
                { lang: 'English', level: 'Proficient', tagStyle: 'tag-sage' },
                { lang: 'Hindi', level: 'Fluent', tagStyle: 'tag-rose' },
              ].map(({ lang, level, tagStyle }) => (
                <div
                  key={lang}
                  className="card-warm flex justify-between items-center p-4"
                >
                  <span className="font-bold text-sm" style={{ color: 'var(--color-charcoal)' }}>{lang}</span>
                  <span className={tagStyle}>{level}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right: Experience & Projects */}
        <div className="lg:col-span-2 space-y-12 reveal delay-300">
          <section>
            <h3
              className="text-xs font-black mb-8 flex items-center gap-2 pl-4 uppercase tracking-widest"
              style={{
                color: 'var(--color-terracotta)',
                borderLeft: '3px solid var(--color-terracotta)',
                fontFamily: 'var(--font-body)',
              }}
            >
              Experience
            </h3>

            <div className="relative pl-8 space-y-8" style={{ borderLeft: '2px solid rgba(193,68,14,0.2)' }}>
              {experience.map((item, idx) => (
                <div key={idx} className="relative">
                  <div
                    className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4"
                    style={{
                      background: 'var(--color-terracotta)',
                      borderColor: 'var(--color-warm-beige)',
                      boxShadow: '0 0 0 3px rgba(193,68,14,0.2)',
                    }}
                  />
                  <div className="card-warm p-6 hover:-translate-y-1 transition-all">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-3 gap-2">
                      <h4
                        className="text-lg font-black"
                        style={{ color: 'var(--color-charcoal)', fontFamily: 'var(--font-display)' }}
                      >
                        {item.role}
                      </h4>
                      <span
                        className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full flex-shrink-0"
                        style={{
                          background: 'var(--color-terracotta-pale)',
                          color: 'var(--color-terracotta)',
                        }}
                      >
                        {item.period}
                      </span>
                    </div>
                    <p
                      className="font-bold text-sm mb-4"
                      style={{ color: 'var(--color-terracotta)' }}
                    >
                      {item.company}
                    </p>
                    <ul className="space-y-2.5">
                      {item.description.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex gap-3 text-sm leading-relaxed"
                          style={{ color: 'var(--color-text-soft)', fontFamily: 'var(--font-body)' }}
                        >
                          <span style={{ color: 'var(--color-dusty-rose)', flexShrink: 0 }}>◆</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Projects */}
          <section>
            <h3
              className="text-xs font-black mb-6 flex items-center gap-2 pl-4 uppercase tracking-widest"
              style={{
                color: '#a0524a',
                borderLeft: '3px solid var(--color-dusty-rose)',
                fontFamily: 'var(--font-body)',
              }}
            >
              Key Projects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {keyProjects.map((project, idx) => (
                <a
                  key={idx}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${project.cardClass} p-6 flex flex-col hover:-translate-y-1 transition-all`}
                >
                  <h4
                    className="text-base font-black mb-2"
                    style={{ color: 'var(--color-charcoal)', fontFamily: 'var(--font-display)' }}
                  >
                    {project.title}
                  </h4>
                  <p
                    className="text-sm leading-relaxed mb-5 flex-grow"
                    style={{ color: 'var(--color-text-soft)', fontFamily: 'var(--font-body)' }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className={project.tagStyle}>{tag}</span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Education */}
      <section className="mt-20 reveal delay-400">
        <h3
          className="text-xs font-black mb-8 flex items-center gap-2 pl-4 uppercase tracking-widest"
          style={{
            color: 'var(--color-warm-muted)',
            borderLeft: '3px solid var(--color-dusty-rose)',
            fontFamily: 'var(--font-body)',
          }}
        >
          Education
        </h3>
        <div className="space-y-4">
          <div className="card-warm p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h4 className="text-xl font-black mb-1" style={{ color: 'var(--color-charcoal)', fontFamily: 'var(--font-display)' }}>
                Bachelor in Computer Application (BCA)
              </h4>
              <p className="font-bold text-sm" style={{ color: 'var(--color-terracotta)' }}>
                National College of Computer Studies, Paknajol, Kathmandu
              </p>
            </div>
            <div className="flex-shrink-0 text-right">
              <p className="font-bold text-sm mb-1" style={{ color: 'var(--color-charcoal)' }}>2022 – Present</p>
              <span className="tag-sage">In Progress</span>
            </div>
          </div>

          <div className="card-warm p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h4 className="text-xl font-black mb-1" style={{ color: 'var(--color-charcoal)', fontFamily: 'var(--font-display)' }}>
                +2 in Management (Computer Science)
              </h4>
              <p className="font-bold text-sm" style={{ color: 'var(--color-warm-brown)' }}>
                Bijeswori Secondary School, Bijeswori, Kathmandu
              </p>
            </div>
            <div className="flex-shrink-0 text-right">
              <p className="font-bold text-sm mb-1" style={{ color: 'var(--color-charcoal)' }}>2020 – 2022</p>
              <span className="tag-rose">Completed</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
