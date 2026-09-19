import React from 'react';
import { NOW_ITEMS } from '../data/portfolioData';
import { Clock, Radio, Compass, ArrowRight } from 'lucide-react';

export const NowSection: React.FC = () => {
  return (
    <section id="now" className="py-16 md:py-20 border-b border-stone-200 bg-stone-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-wider text-stone-600 font-semibold mb-2 flex items-center gap-2">
            <Radio className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
            Current Focus & Living Snapshot
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 font-serif">
            What I Am Doing Now
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
            These are not static achievements or past laurels. This is where my time, study, and computational experiments are currently invested.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {NOW_ITEMS.map((item, idx) => (
            <div
              key={item.title}
              className="p-5 rounded-lg bg-white border border-stone-200 shadow-2xs hover:border-stone-400 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                  <span className="text-stone-400">DIRECTION 0{idx + 1}</span>
                  <span className="px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 font-semibold border border-stone-200">
                    {item.status}
                  </span>
                </div>
                <h3 className="font-semibold text-stone-900 text-sm sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-md bg-stone-100 border border-stone-200 text-xs font-mono text-stone-600 flex items-center justify-between">
          <span>Active horizon: Academic coursework + StudyPilot iterative development</span>
          <span className="text-stone-500">Updated September 2026</span>
        </div>
      </div>
    </section>
  );
};
