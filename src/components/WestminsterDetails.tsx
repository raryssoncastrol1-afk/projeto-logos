import React, { useState } from 'react';
import type { WestminsterDoctrine } from '../types/westminster';
import { Scroll, History, Users, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface WestminsterDetailsProps {
  doctrine: WestminsterDoctrine;
}

export const WestminsterDetails: React.FC<WestminsterDetailsProps> = ({ doctrine }) => {
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(
    doctrine.questions[0]?.number || null
  );

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-6 backdrop-blur-sm space-y-4 sm:space-y-6">
      {/* Título & Badges */}
      <div>
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2">
          <span className="flex items-center gap-1 text-[10px] sm:text-xs font-mono uppercase tracking-wider text-amber-500 font-bold bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded-full">
            <Scroll className="w-3.5 h-3.5" />
            Breve Catecismo: {doctrine.questionRange}
          </span>
          <span className="text-[10px] sm:text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700 px-2.5 py-0.5 rounded-full">
            🏛️ {doctrine.cfwChapter}
          </span>
        </div>

        <h2 className="text-xl sm:text-3xl font-extrabold text-slate-100 font-serif leading-tight">
          {doctrine.title}
        </h2>

        <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
          {doctrine.summary}
        </p>
      </div>

      {/* Accordion de Perguntas & Respostas do Breve Catecismo */}
      <div className="space-y-2 pt-1">
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-slate-400 pb-1">
          <span className="flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            Perguntas & Respostas Oficiais de Westminster ({doctrine.questions.length})
          </span>
        </div>

        <div className="space-y-2">
          {doctrine.questions.map((q) => {
            const isOpen = expandedQuestion === q.number;
            return (
              <div
                key={q.number}
                className="bg-slate-950/70 border border-slate-800/90 rounded-xl overflow-hidden transition"
              >
                <button
                  onClick={() => setExpandedQuestion(isOpen ? null : q.number)}
                  className="w-full p-3 sm:p-3.5 flex items-center justify-between gap-3 text-left hover:bg-slate-800/40 transition"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                      {q.number}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200">
                      {q.question}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-3.5 pb-3.5 pt-1 text-xs sm:text-sm text-amber-200/90 font-serif leading-relaxed border-t border-slate-800/60 bg-slate-950/40">
                    <p className="pl-8 border-l-2 border-amber-600/70 italic">
                      "{q.answer}"
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Contexto Histórico & Puritano (Colapsável) */}
      <div className="pt-2 border-t border-slate-800">
        <button
          onClick={() => setShowHistory(!showHistory)}
          className="w-full flex items-center justify-between text-xs text-slate-400 hover:text-slate-200 py-1"
        >
          <span className="flex items-center gap-1.5 font-medium">
            <History className="w-3.5 h-3.5 text-amber-500" />
            Contexto Histórico da Assembleia de Westminster (1643-1647)
          </span>
          {showHistory ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {showHistory && (
          <div className="p-3.5 bg-slate-950/80 border border-slate-800 rounded-xl mt-2 space-y-2 text-xs text-slate-400">
            <p className="leading-relaxed">{doctrine.historicalContext.details}</p>
            <div className="flex flex-wrap items-center gap-1 pt-1">
              <span className="text-slate-500 flex items-center gap-1">
                <Users className="w-3 h-3" /> Teólogos formuladores:
              </span>
              {doctrine.historicalContext.authors.map((a, i) => (
                <span
                  key={i}
                  className="bg-slate-800 px-2 py-0.5 rounded text-[11px] text-slate-300"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
