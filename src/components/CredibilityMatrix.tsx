import React from 'react';
import { ShieldAlert, Check, X, Info } from 'lucide-react';

export const CredibilityMatrix: React.FC = () => {
  const credibilityRows = [
    {
      term: 'BUILT',
      meaning: 'Software architecture was designed, coded, and executes without crashing.',
      pathoshield: true,
      studypilot: true,
      pythonFoundations: true,
      note: 'Code exists and runs locally or in container.',
    },
    {
      term: 'TESTED',
      meaning: 'Evaluated against concrete test inputs, prompt chains, or benchmark datasets.',
      pathoshield: true,
      studypilot: true,
      pythonFoundations: true,
      note: 'PathoShield on 15 NCBI sequences; StudyPilot on sample syllabus topics.',
    },
    {
      term: 'DEPLOYED',
      meaning: 'Hosted online in a public or accessible environment for outside access.',
      pathoshield: true,
      studypilot: false,
      pythonFoundations: false,
      note: 'PathoShield live on Hugging Face Spaces; StudyPilot is private dev; Python apps run in terminal.',
    },
    {
      term: 'EXPERT FEEDBACK',
      meaning: 'Independently shared with domain professors or researchers for technical critique.',
      pathoshield: true,
      studypilot: false,
      pythonFoundations: false,
      note: 'Feedback received from Dr. Ge Gao (Peking University) regarding PathoShield.',
    },
    {
      term: 'VALIDATED',
      meaning: 'Clinically proven in hospital labs OR proven at scale across formal school adoptions.',
      pathoshield: false,
      studypilot: false,
      pythonFoundations: false,
      note: 'Neither project is clinically validated nor adopted across schools. We do not claim what does not exist.',
    },
  ];

  return (
    <section id="credibility" className="py-12 md:py-16 border-b border-stone-200 bg-stone-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-xl bg-white border border-stone-300 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-stone-600 uppercase tracking-wider mb-1">
                <ShieldAlert className="w-4 h-4 text-stone-700" />
                The Credibility Framework
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
                Distinguishing Prototypes from Validated Systems
              </h3>
              <p className="mt-1 text-sm text-stone-600 max-w-2xl">
                In technical portfolios, "built" is too often confused with "validated". I keep a strict accounting of what is working versus what is unproven.
              </p>
            </div>
            <div className="text-xs font-mono bg-stone-100 p-3 rounded border border-stone-200 text-stone-700 max-w-xs">
              <span className="font-bold text-stone-900 block mb-1">Core Principle:</span>
              Never claim clinic readiness, institutional adoption, or research endorsement where it does not exist.
            </div>
          </div>

          {/* Table of Credibility */}
          <div className="overflow-x-auto mt-6">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-stone-200 text-stone-600 font-mono text-[11px] uppercase tracking-wider">
                  <th className="py-3 px-3 font-semibold">Stage / Milestone</th>
                  <th className="py-3 px-3 font-semibold">Definition</th>
                  <th className="py-3 px-3 text-center font-semibold">PathoShield AI</th>
                  <th className="py-3 px-3 text-center font-semibold">StudyPilot</th>
                  <th className="py-3 px-3 text-center font-semibold">Python Basics</th>
                  <th className="py-3 px-3 font-semibold hidden md:table-cell">Current Verification Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-150">
                {credibilityRows.map((row) => (
                  <tr key={row.term} className="hover:bg-stone-50/80 transition-colors">
                    <td className="py-3.5 px-3 font-mono font-bold text-stone-900">
                      {row.term}
                    </td>
                    <td className="py-3.5 px-3 text-stone-600 max-w-xs">
                      {row.meaning}
                    </td>
                    <td className="py-3.5 px-3 text-center">
                      {row.pathoshield ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-800">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-stone-150 text-stone-400">
                          <X className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-3 text-center">
                      {row.studypilot ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-800">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-stone-150 text-stone-400">
                          <X className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-3 text-center">
                      {row.pythonFoundations ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-800">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-stone-150 text-stone-400">
                          <X className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-3 text-xs text-stone-500 font-mono hidden md:table-cell">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
