import React from 'react';
import type { Doctrine } from '../types/doctrine';
import { BookOpen, History, Users, ScrollText } from 'lucide-react';

interface DoctrineDetailsProps {
  doctrine: Doctrine;
}

export const DoctrineDetails: React.FC<DoctrineDetailsProps> = ({ doctrine }) => {
  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm space-y-6">
      {/* Título & Berkhof Reference */}
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-amber-500">
            <BookOpen className="w-4 h-4" />
            {doctrine.berkhofSection}
          </span>
          {doctrine.westminsterRef && (
            <span className="text-xs font-mono bg-amber-500/10 border border-amber-500/30 text-amber-300 px-2.5 py-0.5 rounded-full font-semibold">
              🏛️ {doctrine.westminsterRef}
            </span>
          )}
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-100 font-serif">
          {doctrine.title}
        </h2>
        <p className="mt-3 text-base text-slate-300 leading-relaxed">
          {doctrine.summary}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        {/* Origem e Contexto Histórico */}
        <div className="p-4 bg-slate-950/60 border border-slate-800/80 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
            <History className="w-4 h-4 text-amber-500" />
            <span>Origem & Contexto Histórico</span>
          </div>
          <div className="text-xs text-amber-400 font-medium">
            {doctrine.historicalOrigin.period}
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            {doctrine.historicalOrigin.originContext}
          </p>
        </div>

        {/* Formuladores & Confissões */}
        <div className="p-4 bg-slate-950/60 border border-slate-800/80 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
            <Users className="w-4 h-4 text-emerald-500" />
            <span>Figuras Centrais & Teólogos</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {doctrine.historicalOrigin.keyFigures.map((fig, idx) => (
              <span
                key={idx}
                className="bg-slate-800/80 border border-slate-700 text-slate-300 text-xs px-2.5 py-1 rounded-md"
              >
                {fig}
              </span>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 mb-2">
              <ScrollText className="w-3.5 h-3.5 text-indigo-400" />
              <span>Símbolos de Fé & Confissões:</span>
            </div>
            <ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
              {doctrine.historicalOrigin.confessions.map((conf, idx) => (
                <li key={idx}>{conf}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
