import React, { useState } from 'react';
import { WORKFLOW_STEPS } from '../data/portfolioData';
import { CheckCircle2, ChevronRight, Layers, ArrowRight, Lightbulb, Search, BookOpen, Hammer, Play, AlertCircle, MessageSquare, RefreshCw } from 'lucide-react';

const STEP_ICONS = [
  Search,
  BookOpen,
  Lightbulb,
  Hammer,
  Play,
  AlertCircle,
  MessageSquare,
  RefreshCw,
];

export const HowIWork: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const realExamples = [
    {
      project: 'PathoShield AI (AMR Genomics)',
      problem: 'Antimicrobial resistance & XDR typhoid in Sindh taking 48-72h for physical cultures.',
      learn: 'Studied bacterial DNA metrics, GC ratios, and resistance marker nucleotide signatures.',
      build: 'Gradio web app + Random Forest classifier on synthetic data + exact string matcher.',
      test: 'Ran 15 real NCBI bacterial sequences to check marker matches and GC calculations.',
      flaw: 'Synthetic training data and exact matching cannot replace real clinical genomic alignment.',
      feedback: 'Contacted Dr. Ge Gao (Peking University); advised deep foundations in statistics & ML.',
    },
    {
      project: 'StudyPilot (Curriculum AI)',
      problem: 'Generic AI dumps direct homework answers rather than cultivating genuine mastery.',
      learn: 'Investigated AKU-EB & Cambridge syllabus trees and cognitive scaffolding hierarchies.',
      build: 'Engineered a multi-tier Socratic Hint Ladder + board adaptation module.',
      test: 'Evaluated hint progression against Grade 9-10 Physics & Biology concepts.',
      flaw: 'Vector search alone misses strict syllabus learning objective constraints.',
      feedback: 'Iterating on classroom test cases with teachers and student peers before any school trials.',
    },
  ];

  return (
    <section id="workflow" className="py-16 md:py-20 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-wider text-stone-600 font-semibold mb-2 flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-stone-600" />
            Methodology & Discipline
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 font-serif">
            How I Work
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
            I do not build random widgets looking for a purpose. Every project follows an iterative 8-step cycle from identifying the friction to testing, finding flaws, and getting critique.
          </p>
        </div>

        {/* 8-Step Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {WORKFLOW_STEPS.map((item, idx) => {
            const Icon = STEP_ICONS[idx];
            const isSelected = activeStepIndex === idx;

            return (
              <div
                key={item.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`cursor-pointer p-4 rounded-lg border transition-all text-left ${
                  isSelected
                    ? 'bg-stone-900 text-stone-100 border-stone-900 shadow-sm'
                    : 'bg-white text-stone-800 border-stone-200 hover:border-stone-400 hover:bg-stone-50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-mono font-semibold px-2 py-0.5 rounded ${
                      isSelected
                        ? 'bg-stone-800 text-stone-300'
                        : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    STEP {item.step}
                  </span>
                  <Icon
                    className={`w-4 h-4 ${
                      isSelected ? 'text-stone-300' : 'text-stone-500'
                    }`}
                  />
                </div>
                <h3 className="font-semibold text-sm tracking-tight">{item.title}</h3>
                <p
                  className={`mt-1.5 text-xs leading-relaxed ${
                    isSelected ? 'text-stone-300' : 'text-stone-600'
                  }`}
                >
                  {item.desc}
                </p>
                <div
                  className={`mt-3 pt-2.5 border-t text-[11px] font-mono leading-normal ${
                    isSelected
                      ? 'border-stone-800 text-stone-400'
                      : 'border-stone-100 text-stone-500'
                  }`}
                >
                  <span className="font-semibold text-stone-600 block mb-0.5">Applied in practice:</span>
                  {item.example}
                </div>
              </div>
            );
          })}
        </div>

        {/* Real Example Walkthrough Comparison Box */}
        <div className="mt-8 p-5 sm:p-6 rounded-lg bg-stone-100/80 border border-stone-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-stone-200">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-stone-600 font-semibold">
                Case Application Matrix
              </div>
              <div className="text-sm font-semibold text-stone-900">
                How the 8-step methodology mapped to real projects
              </div>
            </div>
            <div className="text-xs text-stone-500 font-mono">
              Not a theoretical list — actual development steps
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {realExamples.map((ex) => (
              <div key={ex.project} className="bg-white p-4 rounded-md border border-stone-200 text-xs space-y-2">
                <div className="font-semibold text-stone-900 text-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-900" />
                  {ex.project}
                </div>
                <div className="grid grid-cols-1 gap-1.5 text-stone-600">
                  <div>
                    <strong className="text-stone-800 font-mono text-[11px]">Problem:</strong> {ex.problem}
                  </div>
                  <div>
                    <strong className="text-stone-800 font-mono text-[11px]">Learn:</strong> {ex.learn}
                  </div>
                  <div>
                    <strong className="text-stone-800 font-mono text-[11px]">Build:</strong> {ex.build}
                  </div>
                  <div>
                    <strong className="text-stone-800 font-mono text-[11px]">Test & Flaw:</strong> {ex.test} {ex.flaw}
                  </div>
                  <div>
                    <strong className="text-stone-800 font-mono text-[11px]">Feedback & Next:</strong> {ex.feedback}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
