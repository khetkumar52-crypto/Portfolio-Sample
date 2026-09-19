import React, { useState } from 'react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';
import {
  Award,
  Medal,
  BookOpen,
  Globe2,
  Users,
  CheckCircle,
  FileCheck,
  Filter,
  Info,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

export const AcademicRecord: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredItems =
    selectedFilter === 'all'
      ? ACHIEVEMENTS_DATA
      : ACHIEVEMENTS_DATA.filter((item) => item.category === selectedFilter);

  const getBadgeStyle = (type: string) => {
    switch (type) {
      case 'Award':
        return 'bg-amber-100 text-amber-900 border-amber-300';
      case 'Honorable Mention':
        return 'bg-blue-50 text-blue-800 border-blue-200';
      case 'Qualification':
        return 'bg-purple-50 text-purple-800 border-purple-200';
      case 'Star Recognition':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      default:
        return 'bg-stone-100 text-stone-700 border-stone-200';
    }
  };

  return (
    <section id="achievements" className="py-16 md:py-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono uppercase tracking-wider text-stone-600 font-semibold mb-2 flex items-center gap-2">
            <Award className="w-4 h-4 text-stone-700" />
            Academics & Competitive Record
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 font-serif">
            Verified Academic Standings & Competitions
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
            Documented achievements, olympiad qualifications, and participation records. Every entry is labeled strictly by its verified status without inflated titles.
          </p>
        </div>

        {/* Featured Pillars */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Academic 1st Position */}
          <div className="p-5 rounded-lg bg-white border border-stone-300 shadow-2xs">
            <div className="text-xs font-mono text-stone-500 uppercase tracking-wider mb-1 flex items-center justify-between">
              <span>Academic Rank</span>
              <BookOpen className="w-4 h-4 text-stone-700" />
            </div>
            <div className="text-xl font-bold text-stone-900 font-serif">
              1st Position
            </div>
            <div className="text-xs text-stone-700 font-semibold mt-1">
              Grade 8 Academic Excellence
            </div>
            <p className="mt-2 text-xs text-stone-500 leading-relaxed">
              Achieved 1st position in academics for Grade 8 with school remarks on record. Currently continuing in Grade 9.
            </p>
          </div>

          {/* Copernicus Olympiads */}
          <div className="p-5 rounded-lg bg-white border border-stone-300 shadow-2xs">
            <div className="text-xs font-mono text-stone-500 uppercase tracking-wider mb-1 flex items-center justify-between">
              <span>Olympiads</span>
              <Medal className="w-4 h-4 text-stone-700" />
            </div>
            <div className="text-xl font-bold text-stone-900 font-serif">
              Honorable Mention
            </div>
            <div className="text-xs text-stone-700 font-semibold mt-1">
              Copernicus Science & Math (Grade 7)
            </div>
            <p className="mt-2 text-xs text-stone-500 leading-relaxed">
              Preliminary-round achievements and documented qualification eligibility for the Global Round (did not attend Houston final).
            </p>
          </div>

          {/* Kangaroo Contests */}
          <div className="p-5 rounded-lg bg-white border border-stone-300 shadow-2xs">
            <div className="text-xs font-mono text-stone-500 uppercase tracking-wider mb-1 flex items-center justify-between">
              <span>International Contests</span>
              <Globe2 className="w-4 h-4 text-stone-700" />
            </div>
            <div className="text-xl font-bold text-stone-900 font-serif">
              Kangaroo Series
            </div>
            <div className="text-xs text-stone-700 font-semibold mt-1">
              IKLC, IKMC, IKSC Records
            </div>
            <p className="mt-2 text-xs text-stone-500 leading-relaxed">
              Multiple contest evaluations across linguistic, mathematical, and scientific problem-solving including performance recognitions.
            </p>
          </div>

          {/* Extracurriculars */}
          <div className="p-5 rounded-lg bg-white border border-stone-300 shadow-2xs">
            <div className="text-xs font-mono text-stone-500 uppercase tracking-wider mb-1 flex items-center justify-between">
              <span>Extracurricular</span>
              <Users className="w-4 h-4 text-stone-700" />
            </div>
            <div className="text-xl font-bold text-stone-900 font-serif">
              Diplomacy & Chess
            </div>
            <div className="text-xs text-stone-700 font-semibold mt-1">
              Model United Nations & Strategy
            </div>
            <p className="mt-2 text-xs text-stone-500 leading-relaxed">
              Attended 1 MUN conference with sustained interest in international affairs and diplomacy; documented chess activity.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3">
          <div className="text-xs font-mono uppercase tracking-wider text-stone-600 font-semibold flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5" />
            Complete Achievement & Evaluation Archive
          </div>

          <div className="flex flex-wrap gap-1">
            {[
              { id: 'all', label: 'All Records' },
              { id: 'academic', label: 'Academic' },
              { id: 'olympiad', label: 'Olympiads' },
              { id: 'international', label: 'International Contests' },
              { id: 'extracurricular', label: 'Extracurricular' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
                  selectedFilter === tab.id
                    ? 'bg-stone-900 text-stone-100 font-semibold'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Archive List */}
        <div className="mt-6 divide-y divide-stone-200 border border-stone-200 rounded-lg bg-white overflow-hidden">
          {filteredItems.map((item) => {
            const isExpanded = !!expandedItems[item.id];
            return (
              <div key={item.id} className="p-4 sm:p-5 hover:bg-stone-50/70 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div className="space-y-1 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-semibold text-stone-900 text-sm sm:text-base">
                        {item.title}
                      </h4>
                      <span
                        className={`text-[11px] font-mono px-2 py-0.5 rounded border ${getBadgeStyle(
                          item.type
                        )}`}
                      >
                        {item.resultStatus}
                      </span>
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {item.details}
                    </p>

                    {item.importantContext && (
                      <div className="text-[11px] font-mono text-stone-500 bg-stone-50 p-2 rounded border border-stone-200 mt-2 flex items-start gap-1.5">
                        <Info className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                        <span><strong>Verification note:</strong> {item.importantContext}</span>
                      </div>
                    )}
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-xs font-mono text-stone-400 bg-stone-100 px-2 py-1 rounded">
                      {item.year}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 text-xs font-mono text-stone-500 flex items-center gap-1.5">
          <FileCheck className="w-4 h-4 text-emerald-600" />
          <span>All records strictly correspond to verified documentary evidence and contest results on file.</span>
        </div>
      </div>
    </section>
  );
};
