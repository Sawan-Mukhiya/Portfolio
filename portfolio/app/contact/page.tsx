'use client';

import { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <main className="flex-grow pt-32 pb-24 relative px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span
            className="inline-block text-xs font-black tracking-[0.25em] uppercase mb-5 px-4 py-2 rounded-full"
            style={{ color: 'var(--color-terracotta)', background: 'var(--color-terracotta-pale)' }}
          >
            ✦ Get in touch
          </span>
          <h1
            className="text-5xl md:text-6xl font-black tracking-tight mb-4"
            style={{ color: 'var(--color-charcoal)', fontFamily: 'var(--font-display)' }}
          >
            Let&apos;s{' '}
            <span className="underline-squiggle" style={{ color: 'var(--color-terracotta)' }}>
              Collaborate
            </span>
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--color-text-soft)', fontFamily: 'var(--font-body)' }}>
            Have a project in mind or just want to chat? Reach out and I&apos;ll get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-5 reveal delay-100">
            {/* Email */}
            <div className="card-warm p-5 group cursor-pointer hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                  style={{ background: 'var(--color-terracotta)' }}
                >
                  <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest mb-0.5" style={{ color: 'var(--color-text-muted)' }}>Email</p>
                  <p className="font-bold text-sm" style={{ color: 'var(--color-charcoal)' }}>sawanmukhiy@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="card-warm p-5">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                  style={{ background: 'var(--color-sage)' }}
                >
                  <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>share</span>
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>
                  Find me on
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { name: 'GitHub', href: 'https://github.com/Sawan-Mukhiya', color: 'var(--color-sage)', icon: 'open_in_new' },
                  { name: 'LinkedIn', href: 'https://linkedin.com/in/sawan-mukhiya', color: 'var(--color-terracotta)', icon: 'open_in_new' },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center text-sm font-bold py-2 px-3 rounded-xl transition-all hover:scale-[1.02]"
                    style={{
                      color: s.color,
                      background: 'var(--color-warm-beige)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {s.name}
                    <span className="material-symbols-outlined text-xs">{s.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Location */}
            <div
              className="relative overflow-hidden rounded-3xl h-44"
              style={{ boxShadow: '0 8px 30px rgba(193,68,14,0.12)' }}
            >
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVom6NbdpbBpAk9ifW2zpVWUcgx_xCvSsbE9imqB2LKY-EGRolUh_JC3shNaJyX-MKCW-69-BbTNSnRpknLd4kKqgSQUmJvb4jmKu-PP7cEBkW8Id4nk74Z-IzuWtHsTSfl2slab7qBpG4oOUTKC3zeO1BiF_IzCPW86epMjTtziu45qDOuJ1bhjgi37mRl2_8t4rYjlOSU8G1IC_wBTME9_EcLAL0_SG902r0To6VCPS3MgJQkBkpTAL6FNijFhXwgI6deRLOaYVO"
                alt="Kathmandu, Nepal"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(44,36,22,0.7) 0%, transparent 50%)' }}
              />
              <div className="absolute bottom-4 left-4">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Location</p>
                <p className="text-lg font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>
                  Kathmandu, Nepal
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8 reveal delay-200">
            <div className="card-warm p-8 md:p-10">
              <h2 className="text-xl font-black mb-6" style={{ color: 'var(--color-charcoal)', fontFamily: 'var(--font-display)' }}>
                Send a message
              </h2>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      className="text-[10px] font-black uppercase tracking-widest"
                      htmlFor="name"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      Full Name
                    </label>
                    <input
                      className="input-warm w-full px-4 py-3 text-sm"
                      id="name"
                      placeholder="John Doe"
                      required
                      type="text"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      className="text-[10px] font-black uppercase tracking-widest"
                      htmlFor="email"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      Email Address
                    </label>
                    <input
                      className="input-warm w-full px-4 py-3 text-sm"
                      id="email"
                      placeholder="john@example.com"
                      required
                      type="email"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    className="text-[10px] font-black uppercase tracking-widest"
                    htmlFor="subject"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    Subject
                  </label>
                  <input
                    className="input-warm w-full px-4 py-3 text-sm"
                    id="subject"
                    placeholder="How can I help you?"
                    type="text"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    className="text-[10px] font-black uppercase tracking-widest"
                    htmlFor="message"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    Message
                  </label>
                  <textarea
                    className="input-warm w-full px-4 py-3 text-sm resize-none"
                    id="message"
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                  />
                </div>

                <button
                  className={`w-full py-4 rounded-2xl font-black text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitted
                      ? 'text-white'
                      : 'btn-primary'
                  }`}
                  style={isSubmitted ? { background: 'var(--color-sage)', color: 'white' } : {}}
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-symbols-outlined animate-spin">progress_activity</span>
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <span className="material-symbols-outlined">done_all</span>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="material-symbols-outlined">send</span>
                    </>
                  )}
                </button>
              </form>

              <p className="text-center text-xs mt-5" style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>
                Or email me directly at{' '}
                <a href="mailto:sawanmukhiy@gmail.com" className="font-bold" style={{ color: 'var(--color-terracotta)' }}>sawanmukhiy@gmail.com</a>
              </p>

              {isSubmitted && (
                <div
                  className="mt-5 p-4 rounded-2xl text-center animate-bounce-in"
                  style={{ background: 'var(--color-sage-pale)', border: '1.5px solid rgba(122,158,126,0.3)' }}
                >
                  <p className="font-black text-sm" style={{ color: 'var(--color-sage)' }}>
                    🌿 Message received! I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
