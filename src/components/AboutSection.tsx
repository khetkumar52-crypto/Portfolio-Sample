import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { User, Github, ExternalLink, Mail, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-stone-200 bg-stone-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Narrative */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-stone-600 font-semibold mb-2 flex items-center gap-2">
                <User className="w-3.5 h-3.5 text-stone-700" />
                Background & Human Perspective
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 font-serif">
                About Me
              </h2>
            </div>

            <div className="prose prose-stone text-sm sm:text-base text-stone-700 leading-relaxed space-y-4 max-w-none">
              <p>
                I like problems that force me to learn something new.
              </p>
              <p>
                I started with programming from scratch in June 2026, building command-line games and student calculators to understand how logic and control structures actually behave. Once I had that base, I wanted to use software to explore problems outside of programming itself.
              </p>
              <p>
                That progression led to <strong>PathoShield AI</strong>, where I investigated computational screening for antimicrobial resistance and bacterial DNA sequences after learning about the XDR typhoid emergency in Sindh. It also led to <strong>StudyPilot</strong>, where I am developing an architecture for curriculum-aware Socratic tutoring for Grade 9–10 sciences so that AI guides student reasoning instead of handing out answers.
              </p>
              <p className="font-medium text-stone-900">
                I do not want to be limited by a single field or a single tool. If a problem is worth solving, I will sit down, learn what I need to understand it, and try to build something practical.
              </p>
            </div>

            {/* Quick Principles */}
            <div className="pt-4 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-600 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-800" />
                <span>Problem-first, not tool-first</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-800" />
                <span>Honest distinction: prototypes vs clinical validation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-800" />
                <span>Learn by building and testing on real inputs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-800" />
                <span>Seek expert feedback early and openly</span>
              </div>
            </div>
          </div>

          {/* Right Summary Card */}
          <div className="lg:col-span-4 p-6 rounded-xl bg-white border border-stone-300 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-2">
                Fast Facts & Profiles
              </div>
              <div className="space-y-3 text-xs text-stone-700">
                <div>
                  <span className="font-mono text-stone-500 block">Name:</span>
                  <span className="font-semibold text-stone-900 text-sm">Khet Kumar</span>
                </div>
                <div>
                  <span className="font-mono text-stone-500 block">Academic Status:</span>
                  <span className="text-stone-800">Grade 9 Student (1st Position in Grade 8)</span>
                </div>
                <div>
                  <span className="font-mono text-stone-500 block">Location:</span>
                  <span className="text-stone-800">Pakistan</span>
                </div>
                <div>
                  <span className="font-mono text-stone-500 block">Core Projects:</span>
                  <span className="text-stone-800">StudyPilot (Edu AI), PathoShield (Genomics POC)</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200 space-y-2">
                <div className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                  Verified Repositories & Spaces
                </div>
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded bg-stone-50 hover:bg-stone-100 border border-stone-200 text-xs font-mono text-stone-800 transition-colors"
                >
                  <span className="flex items-center gap-1.5">
                    <Github className="w-3.5 h-3.5" />
                    github.com/khetkumar52-crypto
                  </span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>

                <a
                  href={PERSONAL_INFO.pathoShieldLive}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded bg-stone-50 hover:bg-stone-100 border border-stone-200 text-xs font-mono text-stone-800 transition-colors"
                >
                  <span>PathoShield on Hugging Face</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200 text-[11px] font-mono text-stone-500">
              Work speaks first. No exaggerated metrics or promotional claims.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
