import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      className="w-full py-16"
      style={{
        background: 'var(--color-charcoal)',
        color: 'rgba(255,255,255,0.7)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-black"
                style={{ background: 'var(--color-terracotta)' }}
              >
                S
              </span>
              <span className="text-xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>
                SAWAN MUKHIYA
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              AI/ML Engineer & Fullstack Developer crafting intelligent systems with heart.
              Based in{' '}
              <span style={{ color: 'var(--color-dusty-rose)' }}>Kathmandu, Nepal</span>.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-4" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Navigation
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'About', href: '/about' },
                  { name: 'Projects', href: '/projects' },
                  { name: 'Resume', href: '/resume' },
                  { name: 'Contact', href: '/contact' },
                ].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-4" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Connect
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { name: 'GitHub', href: 'https://github.com/Sawan-Mukhiya' },
                  { name: 'LinkedIn', href: 'https://linkedin.com/in/sawan-mukhiya' },
                ].map(({ name, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium flex items-center gap-1.5 group transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                  >
                    {name}
                    <span className="material-symbols-outlined text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      arrow_outward
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.25)' }}>
            © {new Date().getFullYear()} Sawan Mukhiya. Built with{' '}
            <span style={{ color: 'var(--color-dusty-rose)' }}>♥</span> and code.
          </p>
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: 'var(--color-sage)' }}
            />
            <span className="text-[11px] font-bold" style={{ color: 'var(--color-sage)' }}>
              Available for opportunities
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
