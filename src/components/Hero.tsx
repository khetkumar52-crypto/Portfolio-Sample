import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight, Github, Code2, Dna, GraduationCap, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-stone-200/70">
      {/* Subtle technical background grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e7e5e4_1px,transparent_1px),linear-gradient(to_bottom,#e7e5e4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-100 border border-stone-200 text-stone-700 text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Problem-First Builder</span>
            <span className="text-stone-300">•</span>
            <span className="text-stone-500">Grade 9 • Pakistan</span>
          </div>

          {/* Name & Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-950 font-serif leading-[1.15]">
            {PERSONAL_INFO.name}
          </h1>

          <p className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-stone-800">
            {PERSONAL_INFO.headline}
          </p>

          <p className="mt-5 text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
            I use programming, AI, software, and whatever tools are necessary to turn difficult problems into working experiments and practical systems.
          </p>

          {/* Core Philosophy Callout */}
          <div id="philosophy" className="mt-8 p-5 rounded-lg bg-white border border-stone-200/90 shadow-xs">
            <div className="text-[11px] font-mono uppercase tracking-wider text-stone-600 font-semibold mb-2">
              The Core Philosophy
            </div>
            <blockquote className="text-stone-800 text-sm sm:text-base font-medium italic border-l-2 border-stone-800 pl-3 my-1">
              “{PERSONAL_INFO.philosophy}”
            </blockquote>
            <p className="mt-2 text-xs text-stone-500">
              A biology project does not mean I am only a computational biology student. An education project does not mean I am only an education-tech builder. The subject changes — the problem-solving discipline stays.
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#studypilot"
              id="hero-explore-btn"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors shadow-xs"
            >
              <span>Explore my work</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-github-btn"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-stone-800 bg-white hover:bg-stone-100 border border-stone-300 rounded-md transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-stone-500" />
            </a>

            <a
              href="#about"
              id="hero-journey-btn"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors"
            >
              About / Journey
            </a>
          </div>
        </div>

        {/* Trajectory Loop Card */}
        <div className="mt-14 pt-8 border-t border-stone-200">
          <div className="text-xs font-mono uppercase tracking-wider text-stone-600 font-semibold mb-3">
            The Trajectory Loop
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
            {[
              { step: 'PROBLEM', desc: 'Identify real bottlenecks', icon: Terminal },
              { step: 'LEARN', desc: 'Acquire required domain & tech', icon: Code2 },
              { step: 'BUILD', desc: 'Create runnable prototypes', icon: Dna },
              { step: 'TEST', desc: 'Run real inputs & find flaws', icon: GraduationCap },
              { step: 'IMPROVE', desc: 'Seek expert critique & refine', icon: ArrowUpRight },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="p-3.5 rounded-md bg-stone-100/70 border border-stone-200 hover:bg-white hover:border-stone-300 transition-all"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-stone-600 mb-1.5">
                    <span>0{idx + 1}</span>
                    <Icon className="w-3.5 h-3.5 text-stone-500" />
                  </div>
                  <div className="text-sm font-bold text-stone-900 tracking-wide font-mono">
                    {item.step}
                  </div>
                  <div className="text-[11px] text-stone-500 mt-0.5 leading-snug">
                    {item.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
