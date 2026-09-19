import React from 'react';
import { Target, ArrowRight, Compass } from 'lucide-react';

export const FutureDirection: React.FC = () => {
  const steps = [
    { title: 'BUILD', desc: 'Move from concepts to concrete running software' },
    { title: 'DEPLOY', desc: 'Place prototypes into live test environments' },
    { title: 'TEST', desc: 'Subject systems to real inputs and messy data' },
    { title: 'GET FEEDBACK', desc: 'Ask domain experts and users what failed' },
    { title: 'MEASURE', desc: 'Quantify errors instead of guessing success' },
    { title: 'IMPROVE', desc: 'Refactor architecture based on measured reality' },
  ];

  return (
    <section id="future" className="py-16 md:py-20 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-mono uppercase tracking-wider text-stone-600 font-semibold mb-2 flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-stone-700" />
            Realistic Trajectory
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 font-serif">
            Taking on Harder Problems
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
            The goal is not to accumulate a long list of trivial toy apps or claim to transform the world overnight. The goal is to steadily build the discipline required to solve difficult, real-world problems.
          </p>
        </div>

        <div className="mt-8 p-6 sm:p-8 rounded-xl bg-stone-900 text-stone-100 shadow-xs">
          <div className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold mb-4">
            The Engineering Discipline Cycle
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {steps.map((step, idx) => (
              <div
                key={step.title}
                className="p-3 rounded bg-stone-800/90 border border-stone-700/80 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] font-mono text-emerald-400 font-semibold mb-1">
                    0{idx + 1}
                  </div>
                  <div className="font-mono font-bold text-sm tracking-wide text-stone-100">
                    {step.title}
                  </div>
                </div>
                <div className="text-[11px] text-stone-400 mt-2 leading-tight">
                  {step.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-stone-800 text-xs font-mono text-stone-400 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span>Progress = Ambition of problem + Rigor of feedback loops.</span>
            <span className="text-stone-300">Continuous technical iteration</span>
          </div>
        </div>
      </div>
    </section>
  );
};
