import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, ExternalLink, ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="py-12 bg-white border-t border-stone-200 text-stone-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-stone-200">
          <div>
            <div className="flex items-center gap-2 font-semibold text-stone-900 text-base">
              <span>{PERSONAL_INFO.name}</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-stone-100 border border-stone-200 text-stone-600">
                Problem-First Builder
              </span>
            </div>
            <p className="text-xs text-stone-500 mt-1 max-w-md">
              A personal engineering and research portfolio documenting real projects, prototypes, testing flaws, and academic records without exaggeration.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-stone-700 hover:text-stone-950 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-stone-400" />
            </a>

            <a
              href={PERSONAL_INFO.pathoShieldLive}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-stone-700 hover:text-stone-950 transition-colors"
            >
              <span>PathoShield Demo</span>
              <ExternalLink className="w-3 h-3 text-stone-400" />
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-stone-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Integrity Verified: No invented metrics, awards, or affiliations.</span>
          </div>
          <div>
            © {new Date().getFullYear()} Khet Kumar • Problem → Learn → Build → Test → Improve
          </div>
        </div>
      </div>
    </footer>
  );
};
