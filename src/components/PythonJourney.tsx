import React from 'react';
import { PYTHON_FOUNDATION_PROJECTS } from '../data/portfolioData';
import { Terminal, Github, ArrowUpRight, Code, Calendar, CheckCircle } from 'lucide-react';

export const PythonJourney: React.FC = () => {
  const timelineMilestones = [
    {
      title: 'Python From Scratch',
      date: 'June 2026',
      desc: 'Committed to learning programming from first principles instead of relying solely on generated code. Studied syntax, loops, functions, and debugging.',
    },
    {
      title: 'First Command-Line Logic Programs',
      date: 'June–July 2026',
      desc: 'Built independent projects: Number Guessing Game and ATM Simulator to master state variables, conditionals, and user input validation.',
    },
    {
      title: 'Data & Record Management',
      date: 'July–August 2026',
      desc: 'Engineered Student Result Management System and Python Grade Calculator to structure multi-record data and weighted calculations.',
    },
    {
      title: 'Transition to Larger Systems',
      date: 'Late 2026',
      desc: 'Moved beyond CLI exercises to computational biology (PathoShield) and curriculum AI architecture (StudyPilot), using AI as a developer accelerator.',
    },
  ];

  return (
    <section id="python-journey" className="py-16 md:py-20 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-wider text-stone-600 font-semibold mb-2 flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-stone-600" />
            Foundations & Roots
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 font-serif">
            The Python Journey
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
            I began learning Python from scratch in June 2026. I deliberately wanted to learn programming as an actual skill rather than simply letting AI write everything.
          </p>
        </div>

        {/* Timeline Horizontal Progression */}
        <div className="mt-10 p-5 rounded-lg bg-stone-100/70 border border-stone-200">
          <div className="text-xs font-mono uppercase tracking-wider text-stone-600 font-semibold mb-4">
            Developmental Trajectory
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {timelineMilestones.map((m, idx) => (
              <div key={m.title} className="p-3.5 bg-white rounded border border-stone-200 text-xs">
                <div className="flex items-center justify-between text-[11px] font-mono text-stone-500 mb-1">
                  <span>PHASE 0{idx + 1}</span>
                  <span className="font-semibold text-stone-700">{m.date}</span>
                </div>
                <div className="font-semibold text-stone-900 text-sm">{m.title}</div>
                <div className="text-stone-600 mt-1.5 leading-relaxed">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Foundation Projects Grid */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-stone-900 font-serif">
              Early Independent Python Projects
            </h3>
            <span className="text-xs font-mono text-stone-500">
              Open source on GitHub
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PYTHON_FOUNDATION_PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className="p-4 rounded-lg bg-white border border-stone-200 hover:border-stone-400 transition-all flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 font-mono mb-2">
                    <span>{proj.date}</span>
                    <Code className="w-3.5 h-3.5 text-stone-400" />
                  </div>
                  <h4 className="font-semibold text-stone-900 text-sm tracking-tight">
                    {proj.title}
                  </h4>
                  <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="mt-3 pt-2 border-t border-stone-100 text-[11px] font-mono text-stone-500">
                    <span className="text-stone-700 font-semibold block mb-0.5">Focus:</span>
                    {proj.conceptLearned}
                  </div>
                </div>

                <a
                  href={proj.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded bg-stone-100 hover:bg-stone-200 border border-stone-300 text-xs font-mono text-stone-800 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-500" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 bg-stone-50 rounded border border-stone-200 text-xs text-stone-500 font-mono">
            <strong>Honest Assessment:</strong> These are foundational beginner projects. They are not advanced commercial software. Their purpose is documenting where the journey started and verifying hands-on command of syntax.
          </div>
        </div>
      </div>
    </section>
  );
};
