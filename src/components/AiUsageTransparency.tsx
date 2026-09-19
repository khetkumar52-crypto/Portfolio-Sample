import React from 'react';
import { Bot, UserCheck, ShieldCheck, Check, Sparkles } from 'lucide-react';

export const AiUsageTransparency: React.FC = () => {
  return (
    <section id="ai-transparency" className="py-14 border-b border-stone-200 bg-stone-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-xl bg-white border border-stone-300 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-600 font-semibold mb-2">
            <ShieldCheck className="w-4 h-4 text-stone-700" />
            Integrity Statement
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
            Transparency on AI Usage & Authorship
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-stone-600 max-w-3xl leading-relaxed">
            I believe builders should be completely transparent about how tools are used. My development process is not identical across projects, and I do not claim to have written every line of every system from scratch.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left: Foundation vs Systems */}
            <div className="p-4 rounded-lg bg-stone-50 border border-stone-200 space-y-3">
              <div className="font-semibold text-stone-900 text-sm font-serif">
                Two Distinct Modes of Work
              </div>
              <div className="space-y-2 text-xs text-stone-700">
                <div className="p-2.5 bg-white rounded border border-stone-200">
                  <strong className="text-stone-900 block font-mono text-[11px] mb-1">
                    1. Foundational Python Projects:
                  </strong>
                  Wrote, debugged, and learned line-by-line myself. The intent was to master language syntax, control structures, and error handling without using AI as a crutch.
                </div>
                <div className="p-2.5 bg-white rounded border border-stone-200">
                  <strong className="text-stone-900 block font-mono text-[11px] mb-1">
                    2. Systems Projects (PathoShield & StudyPilot):
                  </strong>
                  Used AI extensively as a technical development assistant and accelerator to draft components, inspect libraries, and navigate unfamiliar APIs.
                </div>
              </div>
            </div>

            {/* Right: What I personally did */}
            <div className="p-4 rounded-lg bg-stone-50 border border-stone-200 space-y-2">
              <div className="font-semibold text-stone-900 text-sm font-serif">
                What I Personally Directed & Contributed
              </div>
              <p className="text-xs text-stone-600">
                AI does not choose what matters or validate whether something works. Across all systems, I personally:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 text-xs text-stone-800">
                {[
                  'Identified real-world problems',
                  'Researched biological & syllabus standards',
                  'Defined architecture requirements',
                  'Directed development iterations',
                  'Tested systems against real inputs',
                  'Identified edge-case failures',
                  'Deployed live Hugging Face spaces',
                  'Sought researcher & teacher feedback',
                  'Acknowledged prototype limitations',
                  'Iterated based on real critique',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 font-mono text-[11px]">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
