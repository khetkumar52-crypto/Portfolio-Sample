import React, { useState } from 'react';
import { PATHOSHIELD_STUDY, GE_GAO_FEEDBACK, RESEARCH_OUTREACH_INSTITUTIONS } from '../data/portfolioData';
import {
  Dna,
  ExternalLink,
  CheckCircle2,
  AlertOctagon,
  FileText,
  Mail,
  Building2,
  Globe,
  ArrowUpRight,
  ShieldCheck,
  Binary,
  Percent,
  Play,
  RotateCcw,
} from 'lucide-react';

export const PathoShieldCaseStudy: React.FC = () => {
  // Sample test sequence (similar to verified test cases from 15 NCBI sequences)
  const sampleSequence =
    'ATGCGAATTCAGGCGATCGGTACTGGTCCGGGCCTGCAGCGTACGATCGTGCAATGCGGCTGAGCGTACGATCCG';

  const [inputSequence, setInputSequence] = useState(sampleSequence);
  const [analyzed, setAnalyzed] = useState(true);

  // Compute live sequence metrics
  const cleanSeq = inputSequence.toUpperCase().replace(/[^ATGC]/g, '');
  const baseCount = cleanSeq.length;
  const gcCount = (cleanSeq.match(/[GC]/g) || []).length;
  const gcPercent = baseCount > 0 ? ((gcCount / baseCount) * 100).toFixed(1) : '0.0';

  // Simulated marker matching (exact string matching as in prototype)
  const markers = [
    { id: 'MKR-AMR-01', pattern: 'GCCTGCAG', label: 'Marker A (Beta-lactamase motif signature)' },
    { id: 'MKR-AMR-02', pattern: 'CGTACGAT', label: 'Marker B (Quinolone resistance-associated motif)' },
  ];

  const matchedMarkers = markers.filter((m) => cleanSeq.includes(m.pattern));
  const estimatedRisk = matchedMarkers.length >= 2 ? 84 : matchedMarkers.length === 1 ? 58 : 19;

  return (
    <section id="pathoshield" className="py-16 md:py-24 border-b border-stone-200 bg-stone-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Case Study Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-200">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-50 border border-emerald-200 text-emerald-900 font-semibold inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                Deployed Prototype • Live on Hugging Face
              </span>
              <span className="text-xs font-mono text-stone-500">
                Computational Biology / AMR
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 font-serif">
              {PATHOSHIELD_STUDY.title}
            </h2>
            <p className="mt-1 text-base text-stone-600 max-w-3xl">
              {PATHOSHIELD_STUDY.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PATHOSHIELD_STUDY.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors shadow-xs"
            >
              <span>Launch Live Hugging Face Space</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 1. THE PROBLEM & REGIONAL MOTIVATION */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 space-y-5">
            <div className="p-5 rounded-lg bg-white border border-stone-200">
              <div className="text-xs font-mono uppercase tracking-wider text-stone-600 font-semibold mb-2">
                Regional Motivation
              </div>
              <h3 className="font-semibold text-stone-900 text-base leading-snug">
                {PATHOSHIELD_STUDY.problem.title}
              </h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                {PATHOSHIELD_STUDY.problem.description}
              </p>
              <p className="mt-3 text-xs text-stone-500 border-t border-stone-150 pt-2.5">
                {PATHOSHIELD_STUDY.problem.context}
              </p>
            </div>

            <div className="p-5 rounded-lg bg-stone-100 border border-stone-200">
              <div className="text-xs font-mono uppercase tracking-wider text-stone-600 font-semibold mb-2">
                What the Prototype Executes
              </div>
              <ul className="space-y-2 text-xs text-stone-700">
                {PATHOSHIELD_STUDY.whatIBuilt.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-stone-700 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2. INTERACTIVE SEQUENCE INSPECTION SIMULATION */}
          <div className="lg:col-span-6 p-6 rounded-xl bg-stone-900 text-stone-100 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                <div className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold flex items-center gap-2">
                  <Binary className="w-4 h-4 text-emerald-400" />
                  Sequence Analysis Engine (Prototype Simulation)
                </div>
                <span className="text-[11px] font-mono text-emerald-400">
                  Gradio Pipeline Logic
                </span>
              </div>

              <div className="mt-4">
                <label className="text-xs font-mono text-stone-400 block mb-1">
                  Bacterial DNA Nucleotide Sequence Input (FASTA):
                </label>
                <textarea
                  value={inputSequence}
                  onChange={(e) => setInputSequence(e.target.value)}
                  rows={3}
                  className="w-full bg-stone-950 border border-stone-800 rounded p-2.5 font-mono text-xs text-emerald-300 focus:outline-hidden focus:border-emerald-500 break-all resize-none"
                  placeholder="Enter ATGC sequence..."
                />
              </div>

              {/* Live Metric Cards */}
              <div className="grid grid-cols-3 gap-2 mt-3">
                <div className="p-2.5 rounded bg-stone-800/80 border border-stone-700">
                  <div className="text-[10px] font-mono text-stone-400">Base-Pair Count</div>
                  <div className="text-lg font-mono font-bold text-stone-100">{baseCount} bp</div>
                </div>
                <div className="p-2.5 rounded bg-stone-800/80 border border-stone-700">
                  <div className="text-[10px] font-mono text-stone-400">GC Content</div>
                  <div className="text-lg font-mono font-bold text-emerald-400">{gcPercent}%</div>
                </div>
                <div className="p-2.5 rounded bg-stone-800/80 border border-stone-700">
                  <div className="text-[10px] font-mono text-stone-400">Predicted Risk</div>
                  <div className={`text-lg font-mono font-bold ${estimatedRisk > 50 ? 'text-amber-400' : 'text-stone-300'}`}>
                    ~{estimatedRisk}%
                  </div>
                </div>
              </div>

              {/* Detected Markers */}
              <div className="mt-3 p-3 rounded bg-stone-950 border border-stone-800 text-xs">
                <div className="text-[11px] font-mono text-stone-400 mb-1.5 flex items-center justify-between">
                  <span>Exact Resistance Markers Detected:</span>
                  <span className="text-emerald-400 font-bold">{matchedMarkers.length} found</span>
                </div>
                {matchedMarkers.length > 0 ? (
                  <div className="space-y-1">
                    {matchedMarkers.map((m) => (
                      <div key={m.id} className="text-[11px] font-mono text-stone-300 flex items-center justify-between">
                        <span className="text-emerald-400 font-bold">{m.pattern}</span>
                        <span className="text-stone-400">{m.label}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-[11px] font-mono text-stone-500">
                    No target motif signatures detected in this fragment.
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-xs font-mono">
              <button
                onClick={() => setInputSequence(sampleSequence)}
                className="text-stone-400 hover:text-stone-200 inline-flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" /> Reset Sample Sequence
              </button>
              <a
                href={PATHOSHIELD_STUDY.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline inline-flex items-center gap-1"
              >
                Open Full Gradio App ↗
              </a>
            </div>
          </div>
        </div>

        {/* 3. PROTOTYPE LIMITATIONS (Explicit Scientific Honesty) */}
        <div className="mt-12 p-6 sm:p-7 rounded-xl bg-amber-50/60 border border-amber-300">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-900 font-bold mb-3">
            <AlertOctagon className="w-4 h-4 text-amber-800" />
            Prototype Limitations — Transparent Scientific Boundaries
          </div>
          <p className="text-xs sm:text-sm text-amber-950 leading-relaxed max-w-3xl mb-4">
            Understanding the distinction between a working computer science prototype and a clinically validated diagnostic system is fundamental to scientific integrity. PathoShield is a computational demonstration:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {PATHOSHIELD_STUDY.limitations.map((lim, idx) => (
              <div
                key={idx}
                className="p-3 bg-white/80 rounded border border-amber-200 text-xs text-amber-900 leading-relaxed font-mono"
              >
                • {lim}
              </div>
            ))}
          </div>
        </div>

        {/* 4. EXTERNAL OUTREACH & EXPERT GUIDANCE */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-white border border-stone-300 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-600 font-semibold mb-2">
            <Mail className="w-3.5 h-3.5 text-stone-700" />
            External Feedback & Independent Academic Outreach
          </div>
          <h3 className="text-xl font-bold text-stone-900 font-serif">
            Guidance from Dr. Ge Gao (Peking University)
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-stone-600 max-w-3xl">
            After building PathoShield, I independently reached out to bioinformatics researchers to seek technical feedback on where computational biology and AI for Science (AI4S) actually stand.
          </p>

          {/* Email / Feedback Excerpt Box */}
          <div className="mt-5 p-5 rounded-lg bg-stone-50 border border-stone-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-stone-200 text-xs font-mono text-stone-600">
              <div>
                <strong className="text-stone-900">{GE_GAO_FEEDBACK.researcher}</strong> — {GE_GAO_FEEDBACK.title}
              </div>
              <div className="text-stone-500">{GE_GAO_FEEDBACK.institution}</div>
            </div>

            <div className="mt-3 space-y-2 text-xs text-stone-800 leading-relaxed">
              <p>
                Dr. Gao provided encouraging remarks regarding a Grade 9 student exploring computational biology and AI4S, advising that meaningful work in this domain requires building deep, disciplined foundations across four core pillars:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-3">
                {['1. Programming', '2. Statistics', '3. Biology', '4. Machine Learning'].map((pillar) => (
                  <div key={pillar} className="p-2 bg-white rounded border border-stone-200 font-mono text-xs font-semibold text-stone-900 text-center">
                    {pillar}
                  </div>
                ))}
              </div>
              <blockquote className="p-3 bg-stone-100 rounded border-l-2 border-stone-700 text-stone-900 italic font-serif text-sm">
                “Welcome and good luck! Cheers, Ge”
              </blockquote>
            </div>

            {/* Crucial honesty disclaimer */}
            <div className="mt-4 p-3 bg-stone-200/60 rounded text-[11px] font-mono text-stone-700 leading-relaxed">
              <strong>Context & Integrity:</strong> {GE_GAO_FEEDBACK.importantDisclaimer}
            </div>
          </div>

          {/* Global Outreach Table */}
          <div className="mt-8">
            <div className="text-xs font-mono uppercase tracking-wider text-stone-600 font-semibold mb-2 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-stone-600" />
              Independent Inquiries Across Research Centers
            </div>
            <p className="text-xs text-stone-600 mb-4">
              I reached out to researchers across various institutions to get feedback and learn from people who understand these problems better than I do:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 text-xs">
              {RESEARCH_OUTREACH_INSTITUTIONS.map((inst) => (
                <div key={inst.name} className="p-2.5 rounded bg-stone-50 border border-stone-200 text-stone-800">
                  <div className="font-semibold text-stone-900 text-[11px] leading-tight">{inst.name}</div>
                  <div className="text-[10px] text-stone-500 font-mono mt-0.5">{inst.location}</div>
                </div>
              ))}
            </div>
            <div className="mt-3 text-[11px] font-mono text-stone-500">
              * Note: Contacting researchers is an effort to learn from domain experts, not a claim of institutional endorsement.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
