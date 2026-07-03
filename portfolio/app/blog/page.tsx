'use client';

export default function Blog() {
  const posts = [
    {
      title: "The Future of Atomic Design in 2024",
      excerpt: "How modular components are evolving with AI-driven design tokens and why the classic hierarchy of atoms and molecules might be due for a fundamental upgrade...",
      date: "Oct 24, 2023",
      category: "Engineering",
      categoryColor: "bg-primary-container text-on-primary-container",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHOc1oByoggKgCMK_30Pvk8aIxwWEQgLqPIOvvzfRfZFqIQxCUEMi2cRHSww9X5IFJlPD12ZptAzvhA3ww0w7XMlJH2TjesiS1gbo_cp0KPTV_8zJhUiMVRq3YG8Vqul3nzMu8INqxpfpJuHDVD9pSTbzFS2wG87ebUVWAA5do6ZYFIfR4AS8cQaFA56aBxQXy06ecvrRYvFMO7eMpvFXPRWrqVURf_b9p3-DkoFR55tO4tpPRgZ_bHKaCNc5jO_8bq7rTy-Fm9isp"
    },
    {
      title: "Mastering the Glassmorphism Aesthetic",
      excerpt: "Beyond simple blur effects. A deep dive into the physics of light refraction, surface tension, and why color contrast is the secret to premium translucent UI...",
      date: "Sep 12, 2023",
      category: "Design",
      categoryColor: "bg-tertiary-container text-on-tertiary-container",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_LeIU9h-zaGdDG7Rs5Jpi6Z05LR0pGYRYpzQp_MQoj5wwKF63wwi0ELvUTFg5Vlc1pNOWFOWhnkrONfR9q5227Xgh4fcwsVakwJRUgtZwYe91Jm2msGW7tOg_wAnfLP_cKqWn8xPNwpsBb_GApZruOnX4VPvU0xgVbnRM2-MKYkfQ4l7Dx-tPHVaiu1s3kv2IT46fYyTrxToYB-oghCYhAbIykzCLRyjVYsVF1905S0Zg3bpoubx7qNsF_Gw61Dplx_3OwcHo2tdt"
    }
  ];

  const categories = [
    { name: "Engineering", count: "04" },
    { name: "Product Design", count: "12" },
    { name: "Open Source", count: "03" },
    { name: "Personal Journey", count: "08" }
  ];

  return (
    <main className="flex-grow pt-32 pb-20 px-6 max-w-7xl mx-auto w-full relative">
      <header className="mb-16 border-l-4 border-primary-container pl-8">
        <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface mb-4 tracking-tight">
          Insights & <span className="text-primary">Reflections</span>
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed font-normal">
          A friendly space exploring design systems, modern engineering, and the thoughtful future of digital experiences. 
          Documenting the journey with clarity and warmth.
        </p>
      </header>
      
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8 space-y-6">
          {posts.map((post, idx) => (
            <article key={idx} className="pastel-card p-6 md:p-8 group relative overflow-hidden bg-white">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/3 aspect-video md:aspect-square rounded-lg overflow-hidden transition-all duration-500">
                  <img 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    src={post.image}
                  />
                </div>
                <div className="w-full md:w-2/3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`px-3 py-1 ${post.categoryColor} text-[11px] uppercase tracking-widest font-bold rounded-full`}>
                        {post.category}
                      </span>
                      <span className="text-on-surface-variant text-sm flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                        {post.date}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                    <p className="text-on-surface-variant leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                  </div>
                  <a className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all" href="#">
                    Read Article
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
          
          <div className="pastel-card p-12 border-dashed border-2 border-outline-variant flex flex-col items-center justify-center text-center bg-surface-container-low">
            <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
            </div>
            <h3 className="text-xl font-bold text-on-surface mb-2 tracking-tight">Pending Transmission</h3>
            <p className="text-on-surface-variant max-w-sm">
              Drafting thoughts on LLM integration, serverless architecture, and minimal UI. Stay connected for updates.
            </p>
          </div>
        </div>
        
        <aside className="md:col-span-4 space-y-6">
          <div className="pastel-card p-6 bg-white">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">Categories</h4>
            <ul className="space-y-4">
              {categories.map((cat, idx) => (
                <li key={idx}>
                  <a className="flex justify-between items-center group text-on-surface-variant hover:text-on-surface transition-colors" href="#">
                    <span className="font-semibold">{cat.name}</span>
                    <span className="bg-surface-container px-2.5 py-0.5 rounded-full text-[11px] font-bold text-on-surface-variant">{cat.count}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="pastel-card p-6 bg-white">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">Search</h4>
            <div className="relative">
              <input 
                className="w-full bg-surface-container-low border border-outline-variant rounded-full py-2.5 pl-10 pr-4 text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary transition-all" 
                placeholder="Enter keywords..." 
                type="text"
              />
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">search</span>
            </div>
          </div>
          
          <div className="pastel-card p-6 bg-primary-container/20 border-primary-container/30">
            <h4 className="text-lg font-bold text-on-surface mb-3 tracking-tight">Newsletter</h4>
            <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
              Direct delivery of insights and experimental results. Friendly updates, zero noise.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                className="w-full bg-white border border-outline-variant rounded-full py-2.5 px-4 text-sm text-on-surface focus:outline-none focus:border-primary transition-all shadow-sm" 
                placeholder="email@domain.com" 
                type="email"
              />
              <button className="w-full bg-primary text-white font-bold py-3 rounded-full uppercase tracking-widest text-xs hover:bg-surface-tint shadow-sm transition-all active:scale-[0.98]" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </aside>
      </section>
    </main>
  );
}
