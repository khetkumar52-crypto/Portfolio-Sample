import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, ExternalLink, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'How I Work', href: '#workflow' },
    { label: 'StudyPilot', href: '#studypilot' },
    { label: 'PathoShield AI', href: '#pathoshield' },
    { label: 'Python Roots', href: '#python-journey' },
    { label: 'Academics & Records', href: '#achievements' },
    { label: 'Now', href: '#now' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header
      id="site-header"
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-stone-50/90 backdrop-blur-md border-b border-stone-200/80 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Name and identity */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-md bg-stone-900 text-stone-100 flex items-center justify-center font-mono text-sm font-semibold tracking-wider group-hover:bg-stone-800 transition-colors">
            KK
          </div>
          <div>
            <div className="font-semibold text-stone-900 text-sm tracking-tight flex items-center gap-2">
              {PERSONAL_INFO.name}
              <span className="hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded-full bg-stone-100 border border-stone-200 text-stone-600">
                Grade 9 • Problem-First Builder
              </span>
            </div>
            <div className="text-[11px] text-stone-500 font-normal">
              Software • AI • Practical Systems
            </div>
          </div>
        </a>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-2.5 py-1.5 text-xs font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-150/60 rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-github-link"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-md transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-stone-400" />
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-button"
            className="lg:hidden p-2 rounded-md text-stone-600 hover:text-stone-900 hover:bg-stone-200 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-stone-200 bg-stone-50 px-4 pt-2 pb-4 space-y-1 shadow-md">
          <div className="px-3 py-1.5 mb-2 text-xs font-mono text-stone-500 bg-stone-100 rounded border border-stone-200 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-stone-600" />
            Problem-First Builder • Verified Data
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-150 rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-stone-200 flex items-center justify-between">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-stone-800"
            >
              <Github className="w-4 h-4" />
              github.com/khetkumar52-crypto
            </a>
            <span className="text-[11px] font-mono text-stone-500">Grade 9</span>
          </div>
        </div>
      )}
    </header>
  );
};
