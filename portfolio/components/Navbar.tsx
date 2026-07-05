'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home',     href: '/',         mobileHref: '/'         },
    { name: 'About',    href: '/about',    mobileHref: '/#about'   },
    { name: 'Resume',   href: '/resume',   mobileHref: '/resume'   },
    { name: 'Projects', href: '/projects', mobileHref: '/#projects' },
    { name: 'Contact',  href: '/contact',  mobileHref: '/#contact' },
  ];

  return (
    <nav className="navbar-pill fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl rounded-full">
      <div className="flex justify-between items-center px-6 py-3 mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-heading font-black tracking-tight flex items-center gap-2"
          style={{ color: 'var(--color-charcoal)' }}
        >
          <span
            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-black"
            style={{ background: 'var(--color-terracotta)' }}
          >
            S
          </span>
          SAWAN
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-bold rounded-full transition-all duration-300"
              style={{
                color: pathname === link.href
                  ? 'white'
                  : 'var(--color-warm-muted)',
                background: pathname === link.href
                  ? 'var(--color-terracotta)'
                  : 'transparent',
                boxShadow: pathname === link.href
                  ? '0 4px 12px rgba(193,68,14,0.3)'
                  : 'none',
              }}
              onMouseEnter={(e) => {
                if (pathname !== link.href) {
                  (e.target as HTMLElement).style.color = 'var(--color-terracotta)';
                  (e.target as HTMLElement).style.background = 'var(--color-terracotta-pale)';
                }
              }}
              onMouseLeave={(e) => {
                if (pathname !== link.href) {
                  (e.target as HTMLElement).style.color = 'var(--color-warm-muted)';
                  (e.target as HTMLElement).style.background = 'transparent';
                }
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="btn-primary hidden sm:block px-5 py-2 text-xs font-bold tracking-wide"
          >
            Let's Talk ✦
          </Link>

          {/* Mobile toggle */}
          <button
            className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5 rounded-full transition-all"
            style={{ background: 'var(--color-terracotta-pale)' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-4 h-0.5 transition-all duration-300"
              style={{
                background: 'var(--color-terracotta)',
                transform: isMenuOpen ? 'rotate(45deg) translate(2px, 2px)' : 'none',
              }}
            />
            <span
              className="block w-4 h-0.5 transition-all duration-300"
              style={{
                background: 'var(--color-terracotta)',
                opacity: isMenuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-4 h-0.5 transition-all duration-300"
              style={{
                background: 'var(--color-terracotta)',
                transform: isMenuOpen ? 'rotate(-45deg) translate(2px, -2px)' : 'none',
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 mt-3 rounded-3xl p-6 flex flex-col space-y-2"
          style={{
            background: 'rgba(253,250,245,0.97)',
            backdropFilter: 'blur(20px)',
            border: '1.5px solid rgba(193,68,14,0.1)',
            boxShadow: '0 20px 60px rgba(44,36,22,0.15)',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-bold px-5 py-3 rounded-2xl transition-all"
              style={{
                color: pathname === link.href ? 'white' : 'var(--color-warm-muted)',
                background: pathname === link.href
                  ? 'var(--color-terracotta)'
                  : 'transparent',
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="btn-primary px-5 py-4 text-center text-sm font-bold tracking-wide mt-2"
          >
            Let's Talk ✦
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
