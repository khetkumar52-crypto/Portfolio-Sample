import React, { useState } from 'react';
import { STUDY_PILOT_STUDY } from '../data/portfolioData';
import {
  GraduationCap,
  Lock,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Cpu,
  BookOpen,
  HelpCircle,
  RotateCcw,
  Check,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

export const StudyPilotCaseStudy: React.FC = () => {
  const [activeHintStep, setActiveHintStep] = useState<number>(0);
  const [showAllModules, setShowAllModules] = useState(false);

  // Socratic Ladder interactive demonstration data
  const sampleProblem = {
    subject: 'AKU-EB Grade 9 Physics • Kinematics & Force',
    question:
      'A cart of mass 4.0 kg accelerates from rest along a frictionless track when pulled by a constant horizontal force of 12.0 N. What is the cart’s velocity after 3.0 seconds?',
    badAiOutput:
      'The answer is 9.0 m/s. Formula: a = F/m = 12/4 = 3 m/s². Then v = u + at = 0 + 3(3) = 9 m/s. Here is your full solution without you having to think.',
    socraticSteps: [
      {
        stage: 'Student Attempt (No Answer Provided Yet)',
        instruction: 'Student asks: "How do I find the final velocity for this cart problem?"',
        hintType: 'Direct answer withheld by design',
        systemBehavior:
          'System verifies curriculum standard: AKU-EB SLO 3.2.1 (Newton’s 2nd Law & 1D Equations). Identifies that the student has not attempted identifying given variables.',
      },
      {
        stage: 'Hint 1: Conceptual Identification',
        instruction:
          'Socratic Prompt: "Before finding velocity, what two quantities are given about the cart and the push? Can you identify the relationship between force, mass, and acceleration?"',
        hintType: 'Cognitive nudge',
        systemBehavior:
          'Encourages the student to state: mass m = 4 kg, Force F = 12 N, time t = 3 s, initial velocity u = 0 m/s. Refuses to output formulas automatically.',
      },
      {
        stage: 'Hint 2: Scaffolding the Intermediate Rate',
        instruction:
          'Socratic Prompt: "Exactly. By Newton’s second law, F = m × a. With a 12 N force acting on 4 kg, what is the rate of acceleration each second?"',
        hintType: 'Mathematical bridge',
        systemBehavior:
          'Student calculates a = 3 m/s². System validates the intermediate value without revealing the velocity step.',
      },
      {
        stage: 'Hint 3: Kinematic Synthesis & Verification',
        instruction:
          'Socratic Prompt: "Great. Now the cart started from rest (u = 0) and accelerates at 3 m/s² for 3 full seconds. Which kinematic relation connects u, a, t, and final v?"',
        hintType: 'Synthesizing the solution',
        systemBehavior:
          'Student computes: v = u + at = 0 + (3)(3) = 9 m/s. System confirms mastery and updates kinematics retention score in the student knowledge graph.',
      },
    ],
  };

  const architectureFlow = [
    { name: 'CURRICULUM', sub: 'AKU-EB / IGCSE Syllabus Standards' },
    { name: 'STUDENT CONTEXT', sub: 'Mastery Level & Prior Errors' },
    { name: 'ATTEMPT', sub: 'Student Work / Rough Draft' },
    { name: 'SOCRATIC GUIDANCE', sub: 'Tiered Non-Spoiling Hints' },
    { name: 'RETRY', sub: 'Active Student Reasoning' },
    { name: 'EVALUATION', sub: 'Concept Rubric Check' },
    { name: 'MASTERY', sub: 'Graph Score & Retention Update' },
    { name: 'NEXT RECOMMENDATION', sub: '“What Should I Study Today?”' },
  ];

  return (
    <section id="studypilot" className="py-16 md:py-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Case Study Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-200">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-50 border border-amber-200 text-amber-900 font-semibold inline-flex items-center gap-1.5">
                <Lock className="w-3 h-3 text-amber-700" />
                Active Development • Private Repository
              </span>
              <span className="text-xs font-mono text-stone-500">
                Education Technology Architecture
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 font-serif">
              {STUDY_PILOT_STUDY.title}
            </h2>
            <p className="mt-1 text-base text-stone-600 max-w-3xl">
              {STUDY_PILOT_STUDY.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-xs font-mono px-3 py-2 rounded bg-stone-100 border border-stone-200 text-stone-600">
              Target: AKU-EB Grade 9–10 (Bio, Chem, Phys, Math)
            </div>
          </div>
        </div>

        {/* 1. THE PROBLEM & THE IDEA */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-6">
            <div className="p-5 rounded-lg bg-stone-50 border border-stone-200">
              <div className="text-xs font-mono uppercase tracking-wider text-stone-600 font-semibold mb-2">
                The Problem
              </div>
              <h3 className="font-semibold text-stone-900 text-base leading-snug">
                {STUDY_PILOT_STUDY.problem.title}
              </h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                {STUDY_PILOT_STUDY.problem.description}
              </p>
              <p className="mt-3 text-xs text-stone-500 border-t border-stone-200 pt-2.5">
                {STUDY_PILOT_STUDY.problem.context}
              </p>
            </div>

            <div className="p-5 rounded-lg bg-white border border-stone-200">
              <div className="text-xs font-mono uppercase tracking-wider text-stone-600 font-semibold mb-2">
                The Idea
              </div>
              <p className="text-sm text-stone-800 leading-relaxed font-medium">
                {STUDY_PILOT_STUDY.idea}
              </p>
              <div className="mt-4 pt-3 border-t border-stone-150">
                <div className="text-xs font-mono text-stone-600 mb-2">Stack / Foundation:</div>
                <div className="flex flex-wrap gap-1.5">
                  {STUDY_PILOT_STUDY.technology.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs font-mono bg-stone-100 border border-stone-200 rounded text-stone-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 2. THE VISUAL ARCHITECTURE FLOW */}
          <div className="lg:col-span-7 p-6 rounded-lg bg-stone-900 text-stone-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                <div className="text-xs font-mono uppercase tracking-wider text-stone-400 font-semibold flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-emerald-400" />
                  System Architecture Diagram
                </div>
                <span className="text-[11px] font-mono text-stone-400">
                  Curriculum-Grounded Loop
                </span>
              </div>
              <p className="mt-3 text-xs text-stone-300 leading-relaxed">
                Unlike consumer chatbots that execute an unconstrained prompt-to-response generation, StudyPilot routes every student interaction through an 8-stage state machine:
              </p>
            </div>

            {/* Architecture Flow Stepper */}
            <div className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {architectureFlow.map((node, i) => (
                <div
                  key={node.name}
                  className="p-2.5 rounded bg-stone-800/80 border border-stone-700/80 flex flex-col justify-between relative"
                >
                  <div className="text-[10px] font-mono text-emerald-400 font-semibold">
                    0{i + 1}
                  </div>
                  <div className="text-xs font-bold text-stone-100 font-mono tracking-tight mt-1">
                    {node.name}
                  </div>
                  <div className="text-[10px] text-stone-400 mt-1 leading-tight">
                    {node.sub}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-xs font-mono text-stone-400 border-t border-stone-800 pt-3 flex items-center justify-between">
              <span>Goal: Scaffold the student’s thinking, not do their homework for them.</span>
              <span className="text-emerald-400">✓ Structured State</span>
            </div>
          </div>
        </div>

        {/* 3. INTERACTIVE SOCRATIC HINT LADDER DEMONSTRATOR */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-white border border-stone-300 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-stone-200">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-stone-600 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-stone-700" />
                The Core Pedagogical Engine
              </div>
              <h3 className="text-xl font-bold text-stone-900 font-serif mt-0.5">
                Interactive Socratic Hint Ladder
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                The most important conceptual feature: Guiding students toward solving rather than immediately dumping the answer.
              </p>
            </div>
            <div className="text-xs font-mono bg-stone-100 px-3 py-1.5 rounded border border-stone-200 text-stone-700">
              Interactive Simulation
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Problem & Bad AI contrast */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-4 rounded-lg bg-stone-50 border border-stone-200">
                <div className="text-[11px] font-mono text-stone-500 uppercase tracking-wider mb-1">
                  {sampleProblem.subject}
                </div>
                <div className="text-sm font-medium text-stone-900 leading-snug">
                  {sampleProblem.question}
                </div>
              </div>

              {/* Unregulated chatbot comparison */}
              <div className="p-4 rounded-lg bg-rose-50/60 border border-rose-200">
                <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-rose-800 mb-1">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Generic AI Model (Passive Spoiler)
                </div>
                <p className="text-xs text-rose-900 font-mono leading-relaxed">
                  {sampleProblem.badAiOutput}
                </p>
                <div className="mt-2 text-[11px] text-rose-700">
                  Result: Student copies the number, but retains zero procedural intuition.
                </div>
              </div>
            </div>

            {/* Right: The Socratic Ladder Stepper */}
            <div className="lg:col-span-7 flex flex-col justify-between p-5 rounded-lg bg-stone-950 text-stone-100 border border-stone-800">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                  <span className="text-xs font-mono text-emerald-400 font-semibold">
                    StudyPilot Socratic Ladder Progression
                  </span>
                  <span className="text-xs font-mono text-stone-400">
                    Step {activeHintStep + 1} of 4
                  </span>
                </div>

                {/* Step Selector Buttons */}
                <div className="grid grid-cols-4 gap-1.5 mt-3 mb-4">
                  {sampleProblem.socraticSteps.map((step, idx) => (
                    <button
                      key={step.stage}
                      onClick={() => setActiveHintStep(idx)}
                      className={`py-1.5 px-2 text-[11px] font-mono rounded border transition-all ${
                        activeHintStep === idx
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
                          : 'bg-stone-900 text-stone-400 border-stone-800 hover:bg-stone-850'
                      }`}
                    >
                      Tier {idx}
                    </button>
                  ))}
                </div>

                {/* Current Active Step Display */}
                <div className="bg-stone-900 p-4 rounded-md border border-stone-800 space-y-3">
                  <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                    {sampleProblem.socraticSteps[activeHintStep].stage}
                  </div>
                  <div className="text-sm font-medium text-stone-100 leading-relaxed">
                    {sampleProblem.socraticSteps[activeHintStep].instruction}
                  </div>
                  <div className="pt-2 border-t border-stone-800 flex items-start gap-2 text-xs text-stone-400 font-mono">
                    <span className="text-stone-500 shrink-0">System guard:</span>
                    <span>{sampleProblem.socraticSteps[activeHintStep].systemBehavior}</span>
                  </div>
                </div>
              </div>

              {/* Ladder Controls */}
              <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between">
                <button
                  onClick={() => setActiveHintStep((prev) => Math.max(0, prev - 1))}
                  disabled={activeHintStep === 0}
                  className="px-3 py-1.5 text-xs font-mono rounded bg-stone-800 hover:bg-stone-700 disabled:opacity-30 text-stone-200 transition-colors"
                >
                  ← Previous Hint
                </button>
                <span className="text-[11px] font-mono text-stone-500">
                  {sampleProblem.socraticSteps[activeHintStep].hintType}
                </span>
                <button
                  onClick={() => setActiveHintStep((prev) => Math.min(3, prev + 1))}
                  disabled={activeHintStep === 3}
                  className="px-3 py-1.5 text-xs font-mono rounded bg-emerald-600 hover:bg-emerald-500 disabled:opacity-30 text-white transition-colors"
                >
                  Next Hint →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4. WHAT WAS ACTUALLY BUILT (System Modules) */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-stone-900 font-serif flex items-center gap-2">
              <Layers className="w-4 h-4 text-stone-700" />
              Engineered Subsystems & Architecture Modules
            </h3>
            <button
              onClick={() => setShowAllModules(!showAllModules)}
              className="text-xs font-mono text-stone-600 hover:text-stone-900 inline-flex items-center gap-1"
            >
              {showAllModules ? 'Show primary modules' : 'View all 10 modules'}
              {showAllModules ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {(showAllModules
              ? STUDY_PILOT_STUDY.whatIBuilt
              : STUDY_PILOT_STUDY.whatIBuilt.slice(0, 6)
            ).map((module, i) => (
              <div
                key={i}
                className="p-3.5 rounded-md bg-stone-50 border border-stone-200 flex items-start gap-2.5 text-xs text-stone-700"
              >
                <CheckCircle2 className="w-4 h-4 text-stone-700 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{module}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 5. DEVELOPMENT HONESTY & LIMITATIONS */}
        <div className="mt-10 p-6 rounded-lg bg-stone-100/90 border border-stone-300">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-3">
            <AlertTriangle className="w-4 h-4 text-stone-800" />
            Development Stage & Realistic Boundaries
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-stone-600">
            <div>
              <div className="font-semibold text-stone-900 mb-1.5">Honest Project Status:</div>
              <ul className="space-y-1.5 list-disc list-inside leading-relaxed">
                {STUDY_PILOT_STUDY.limitations.map((lim, i) => (
                  <li key={i}>{lim}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-semibold text-stone-900 mb-1.5">What I Learned & Next Steps:</div>
              <ul className="space-y-1.5 list-disc list-inside leading-relaxed">
                {STUDY_PILOT_STUDY.whatILearned.map((lrn, i) => (
                  <li key={i}>{lrn}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Repository & Access Notice */}
          <div className="mt-5 pt-4 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 font-mono text-stone-600">
              <Lock className="w-3.5 h-3.5 text-stone-500" />
              <span>Repository Status: <strong>Private</strong> while architectural components are refined.</span>
            </div>
            <span className="font-mono text-stone-500 text-[11px]">
              github.com/khetkumar52-crypto/Study_Pilot_AI
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
