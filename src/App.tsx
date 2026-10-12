import React, { useState } from 'react';
import { WESTMINSTER_DATA, WESTMINSTER_DIVISIONS } from './data/westminsterData';
import type { WestminsterDivision, WestminsterDoctrine, Verse } from './types/westminster';
import { MemorizationTrainer } from './components/MemorizationTrainer';
import { WestminsterDetails } from './components/WestminsterDetails';
import { Library, Sparkles, BookOpenCheck, Bookmark, Compass } from 'lucide-react';

export const App: React.FC = () => {
  const [selectedDivision, setSelectedDivision] =
    useState<WestminsterDivision>('introducao');

  // Doutrinas filtradas pelo Bloco do Catecismo selecionado
  const filteredDoctrines = WESTMINSTER_DATA.filter(
    (d) => d.division === selectedDivision
  );

  const [selectedDoctrineId, setSelectedDoctrineId] = useState<string>(
    filteredDoctrines[0]?.id || WESTMINSTER_DATA[0].id
  );

  // Doutrina atual
  const currentDoctrine: WestminsterDoctrine =
    WESTMINSTER_DATA.find((d) => d.id === selectedDoctrineId) ||
    WESTMINSTER_DATA[0];

  // Versículo atual selecionado para memorização
  const [selectedVerseId, setSelectedVerseId] = useState<string>(
    currentDoctrine.verses[0]?.id || ''
  );

  // Atualizar seleção ao trocar de divisão do catecismo
  const handleSelectDivision = (div: WestminsterDivision) => {
    setSelectedDivision(div);
    const docs = WESTMINSTER_DATA.filter((d) => d.division === div);
    if (docs.length > 0) {
      setSelectedDoctrineId(docs[0].id);
      setSelectedVerseId(docs[0].verses[0]?.id || '');
    }
  };

  const handleSelectDoctrine = (doc: WestminsterDoctrine) => {
    setSelectedDoctrineId(doc.id);
    setSelectedVerseId(doc.verses[0]?.id || '');
  };

  const currentVerse: Verse | undefined =
    currentDoctrine.verses.find((v) => v.id === selectedVerseId) ||
    currentDoctrine.verses[0];

  const currentDivisionInfo = WESTMINSTER_DIVISIONS.find(
    (d) => d.id === selectedDivision
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500/30">
      {/* Top Header */}
      <header className="border-b border-slate-800/80 bg-slate-900/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-0 sm:h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center shadow-lg shadow-amber-500/20 text-slate-950 font-bold font-serif text-lg sm:text-xl shrink-0">
              W
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-xl font-serif font-black tracking-tight text-slate-100">
                  PROJETO LOGOS
                </h1>
                <span className="text-[9px] sm:text-[10px] font-sans uppercase font-bold tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30 px-1.5 py-0.5 rounded-full">
                  Westminster 1647
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400 truncate max-w-[240px] sm:max-w-none">
                Breve Catecismo de Westminster (Perguntas 1 a 107)
              </p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700/60">
              <Library className="w-3.5 h-3.5 text-amber-400" />
              107 Perguntas & Respostas
            </span>
            <span className="inline-flex items-center gap-1.5 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700/60">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Memorização de Versículos
            </span>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 space-y-6 sm:space-y-8">
        {/* Seletor dos 8 Blocos do Breve Catecismo de Westminster */}
        <section className="space-y-2 sm:space-y-3">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-amber-500" />
              Blocos do Breve Catecismo (1 a 107)
            </h2>
            <span className="text-[10px] sm:text-xs text-slate-500">
              Padrões de Westminster
            </span>
          </div>

          {/* Carrossel Horizontal no Mobile */}
          <div className="flex gap-2.5 overflow-x-auto pb-2 pt-1 no-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:pb-0">
            {WESTMINSTER_DIVISIONS.map((div) => {
              const isActive = selectedDivision === div.id;
              return (
                <button
                  key={div.id}
                  onClick={() => handleSelectDivision(div.id)}
                  className={`min-w-[170px] sm:min-w-0 p-3 rounded-xl border text-left transition-all shrink-0 sm:shrink flex flex-col justify-between ${
                    isActive
                      ? 'bg-slate-800 border-amber-500 ring-2 ring-amber-500/20 shadow-lg'
                      : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.5 rounded font-bold ${
                        isActive
                          ? 'bg-amber-500 text-slate-950'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {div.questionRange}
                    </span>
                    <span className="text-[10px] text-slate-500">
                      Bloco 0{div.order}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-200 leading-snug line-clamp-2">
                    {div.title}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Banner do Bloco Atual */}
        {currentDivisionInfo && (
          <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 text-xs text-slate-400">
            <span className="font-semibold text-slate-200 block sm:inline">
              Parte {currentDivisionInfo.order}: {currentDivisionInfo.title} ({currentDivisionInfo.questionRange})
            </span>
            <p className="mt-1 sm:mt-0.5 text-slate-400 text-[11px] sm:text-xs">
              {currentDivisionInfo.description}
            </p>
          </div>
        )}

        {/* Tópico Doutrinário Selecionado dentro do Bloco */}
        <section className="space-y-2 sm:space-y-3">
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-slate-400 px-1">
            <Bookmark className="w-3.5 h-3.5 text-amber-500" />
            Tema Teológico Selecionado
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:pb-0 no-scrollbar">
            {filteredDoctrines.map((doc) => {
              const isSelected = doc.id === currentDoctrine.id;
              return (
                <button
                  key={doc.id}
                  onClick={() => handleSelectDoctrine(doc)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium border transition-all whitespace-nowrap shrink-0 sm:shrink ${
                    isSelected
                      ? 'bg-amber-600 border-amber-500 text-white shadow-md'
                      : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {doc.title}
                </button>
              );
            })}
          </div>
        </section>

        {/* Bloco 1: Detalhes das Perguntas e Respostas de Westminster */}
        <WestminsterDetails doctrine={currentDoctrine} />

        {/* Bloco 2: Módulo Interativo de Memorização dos Versículos */}
        <section className="space-y-3 sm:space-y-4 pt-2">
          <div className="flex flex-col gap-2 border-b border-slate-800 pb-3">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-slate-100 flex items-center gap-2">
                <BookOpenCheck className="w-4 h-4 text-amber-400" />
                <span>Versículos de Embasamento Bíblico</span>
                <span className="text-xs font-normal text-slate-400">
                  ({currentDoctrine.verses.length})
                </span>
              </h3>
            </div>

            {/* Abas de Versículos da Doutrina */}
            <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
              {currentDoctrine.verses.map((v) => {
                const isVerseSelected = v.id === currentVerse?.id;
                return (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVerseId(v.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition whitespace-nowrap shrink-0 ${
                      isVerseSelected
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-sm'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {v.reference}
                  </button>
                );
              })}
            </div>
          </div>

          {/* O Treinador de Memorização Interativo */}
          {currentVerse && (
            <MemorizationTrainer
              key={currentVerse.id}
              verse={currentVerse}
              doctrineTitle={currentDoctrine.title}
            />
          )}
        </section>
      </main>

      {/* Rodapé Informativo */}
      <footer className="border-t border-slate-800/60 mt-12 py-6 text-center text-[11px] sm:text-xs text-slate-500 px-4">
        <p>
          Projeto Logos — Fundamentado no <strong>Breve Catecismo de Westminster (1647)</strong> e Confissão de Fé de Westminster.
        </p>
        <p className="mt-1">
          "O fim principal do homem é glorificar a Deus, e comprazer-se nele para sempre." (BCW Pergunta 1)
        </p>
      </footer>
    </div>
  );
};

export default App;
