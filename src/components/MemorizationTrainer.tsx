import React, { useState, useEffect } from 'react';
import type { Verse, MemorizationMode } from '../types/doctrine';
import { CheckCircle2, RotateCcw, Eye, EyeOff, Sparkles, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface MemorizationTrainerProps {
  verse: Verse;
  doctrineTitle: string;
}

export const MemorizationTrainer: React.FC<MemorizationTrainerProps> = ({
  verse,
  doctrineTitle,
}) => {
  const [mode, setMode] = useState<MemorizationMode>('read');
  const [hidePercentage, setHidePercentage] = useState<number>(30); // Para modo Cloze
  const [userFirstLettersInput, setUserFirstLettersInput] = useState<string>('');
  const [scrambledWords, setScrambledWords] = useState<string[]>([]);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [showFullVerseHint, setShowFullVerseHint] = useState<boolean>(false);

  useEffect(() => {
    resetState();
  }, [verse, mode]);

  const resetState = () => {
    setIsSuccess(false);
    setUserFirstLettersInput('');
    setShowFullVerseHint(false);

    if (mode === 'scramble') {
      const words = verse.text
        .replace(/[.,;?!]/g, '')
        .split(/\s+/)
        .filter((w) => w.length > 0);
      setScrambledWords([...words].sort(() => Math.random() - 0.5));
      setSelectedWords([]);
    }
  };

  const triggerCelebration = () => {
    setIsSuccess(true);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 },
    });
  };

  // 1. Cloze (Ocultação progressiva de palavras)
  const renderClozeText = () => {
    const words = verse.text.split(' ');
    const totalWords = words.length;
    const hideCount = Math.floor((totalWords * hidePercentage) / 100);

    const indicesToHide = new Set<number>();
    for (let i = 0; i < hideCount; i++) {
      indicesToHide.add((i * 3 + 1) % totalWords);
    }

    return (
      <p className="text-base sm:text-xl leading-relaxed text-slate-100 font-serif">
        {words.map((word, idx) => {
          const isHidden = indicesToHide.has(idx);
          if (isHidden) {
            return (
              <span
                key={idx}
                className="inline-block bg-slate-800 border-b-2 border-amber-500 text-transparent active:text-amber-400 hover:text-amber-400 select-none px-1.5 mx-0.5 rounded transition-colors duration-200 cursor-pointer text-sm sm:text-lg"
                title="Toque para ver a palavra"
              >
                {word}
              </span>
            );
          }
          return <span key={idx} className="mx-0.5">{word} </span>;
        })}
      </p>
    );
  };

  // 2. Primeiras Letras
  const wordsArray = verse.text.split(/\s+/);
  const targetLetters = wordsArray.map((w) =>
    w.replace(/[^a-zA-ZÀ-ÿ]/g, '').charAt(0).toUpperCase()
  );

  const handleFirstLettersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toUpperCase();
    setUserFirstLettersInput(val);

    if (val === targetLetters.join('') && val.length > 0) {
      triggerCelebration();
    }
  };

  // 3. Montar Quebra-Cabeça (Scramble)
  const handleWordClick = (word: string, index: number) => {
    const newSelected = [...selectedWords, word];
    const newScrambled = scrambledWords.filter((_, i) => i !== index);
    setSelectedWords(newSelected);
    setScrambledWords(newScrambled);

    const cleanTarget = verse.text
      .replace(/[.,;?!]/g, '')
      .split(/\s+/)
      .join(' ');
    if (newSelected.join(' ') === cleanTarget) {
      triggerCelebration();
    }
  };

  const handleSelectedWordClick = (word: string, index: number) => {
    const newSelected = selectedWords.filter((_, i) => i !== index);
    setSelectedWords(newSelected);
    setScrambledWords([...scrambledWords, word]);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl flex flex-col gap-4 sm:gap-6">
      {/* Cabeçalho do Card */}
      <div className="flex flex-col gap-3 pb-3 sm:pb-4 border-b border-slate-800">
        <div className="flex items-center justify-between">
          <span className="text-[11px] sm:text-xs uppercase font-semibold tracking-wider text-amber-500 truncate max-w-[200px] sm:max-w-none">
            {doctrineTitle}
          </span>
          {verse.version && (
            <span className="text-[10px] font-mono bg-slate-800 text-slate-400 px-2 py-0.5 rounded">
              {verse.version}
            </span>
          )}
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
          {verse.reference}
        </h3>

        {/* Seletor de Modo de Memorização (Carrossel Horizontal no Celular) */}
        <div className="flex gap-1.5 overflow-x-auto pb-1 bg-slate-950 p-1.5 rounded-xl border border-slate-800 no-scrollbar">
          <button
            onClick={() => setMode('read')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all shrink-0 ${
              mode === 'read'
                ? 'bg-amber-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            📖 Leitura
          </button>
          <button
            onClick={() => setMode('cloze')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all shrink-0 ${
              mode === 'cloze'
                ? 'bg-amber-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            🧩 Lacunas
          </button>
          <button
            onClick={() => setMode('first-letters')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all shrink-0 ${
              mode === 'first-letters'
                ? 'bg-amber-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            🔤 1ª Letras
          </button>
          <button
            onClick={() => setMode('scramble')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all shrink-0 ${
              mode === 'scramble'
                ? 'bg-amber-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            🔀 Ordenar
          </button>
        </div>
      </div>

      {/* Área Central Interativa */}
      <div className="min-h-[140px] sm:min-h-[160px] flex flex-col justify-center">
        {mode === 'read' && (
          <div className="space-y-4">
            <blockquote className="text-lg sm:text-2xl leading-relaxed text-slate-100 font-serif italic border-l-4 border-amber-600 pl-3 sm:pl-4 py-1">
              "{verse.text}"
            </blockquote>
            {verse.keyWords && (
              <div className="flex flex-wrap gap-1.5 items-center text-xs text-slate-400 pt-1">
                <span className="text-[11px] text-slate-500">Conceitos:</span>
                {verse.keyWords.map((kw, i) => (
                  <span
                    key={i}
                    className="bg-amber-950/60 border border-amber-800/50 text-amber-300 px-2 py-0.5 rounded-full text-[11px]"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {mode === 'cloze' && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
              <span className="text-[11px]">Dificuldade:</span>
              <div className="flex gap-1.5">
                {[25, 50, 75, 100].map((pct) => (
                  <button
                    key={pct}
                    onClick={() => setHidePercentage(pct)}
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      hidePercentage === pct
                        ? 'bg-amber-600 text-white'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {pct}%
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3.5 sm:p-4 bg-slate-950/80 rounded-xl border border-slate-800">
              {renderClozeText()}
            </div>
            <p className="text-[11px] text-slate-500 italic flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5 shrink-0" /> Toque nas lacunas para espiar se esquecer.
            </p>
          </div>
        )}

        {mode === 'first-letters' && (
          <div className="space-y-3 sm:space-y-4">
            <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-slate-400 text-xs sm:text-sm">
              <p className="mb-2 text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-amber-500">
                Pistas (Primeiras Letras):
              </p>
              <div className="font-mono text-xs sm:text-base tracking-widest text-slate-300 flex flex-wrap gap-1.5 sm:gap-2 max-h-[140px] overflow-y-auto">
                {targetLetters.map((l, i) => {
                  const typed = userFirstLettersInput[i];
                  const isCorrect = typed === l;
                  return (
                    <span
                      key={i}
                      className={`inline-block w-6 h-6 sm:w-7 sm:h-7 text-center leading-6 sm:leading-7 rounded border text-xs sm:text-sm ${
                        typed
                          ? isCorrect
                            ? 'bg-emerald-950/80 border-emerald-500 text-emerald-400 font-bold'
                            : 'bg-red-950/80 border-red-500 text-red-400'
                          : 'bg-slate-800/50 border-slate-700 text-slate-400'
                      }`}
                    >
                      {l}
                    </span>
                  );
                })}
              </div>
            </div>

            <input
              type="text"
              value={userFirstLettersInput}
              onChange={handleFirstLettersChange}
              placeholder="Digite a 1ª letra de cada palavra..."
              className="w-full bg-slate-950 border border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 text-base sm:text-lg font-mono uppercase tracking-widest text-slate-100 outline-none transition"
              autoFocus
            />
          </div>
        )}

        {mode === 'scramble' && (
          <div className="space-y-3 sm:space-y-4">
            {/* Palavras selecionadas */}
            <div className="min-h-[60px] p-3 bg-slate-950/80 border border-slate-800 rounded-xl flex flex-wrap gap-1.5 sm:gap-2 items-center">
              {selectedWords.length === 0 ? (
                <span className="text-xs sm:text-sm text-slate-500 italic">
                  Toque nas palavras abaixo na ordem bíblica correta...
                </span>
              ) : (
                selectedWords.map((word, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectedWordClick(word, idx)}
                    className="bg-amber-600/30 active:bg-amber-600/50 border border-amber-600/60 text-amber-200 px-2.5 py-1 rounded-lg text-xs sm:text-sm font-medium transition"
                  >
                    {word}
                  </button>
                ))
              )}
            </div>

            {/* Palavras embaralhadas restantes */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 max-h-[160px] overflow-y-auto">
              {scrambledWords.map((word, idx) => (
                <button
                  key={idx}
                  onClick={() => handleWordClick(word, idx)}
                  className="bg-slate-800 active:bg-slate-700 text-slate-200 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-xs sm:text-sm transition font-medium border border-slate-700"
                >
                  {word}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Feedback de Conclusão / Ações em Mobile */}
      <div className="flex flex-col gap-3 pt-3 border-t border-slate-800/80">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <button
              onClick={resetState}
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 bg-slate-800/60 px-2.5 py-1.5 rounded-lg transition"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reiniciar
            </button>

            <button
              onClick={() => setShowFullVerseHint(!showFullVerseHint)}
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 bg-slate-800/60 px-2.5 py-1.5 rounded-lg transition"
            >
              {showFullVerseHint ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              {showFullVerseHint ? 'Ocultar' : 'Ver Texto'}
            </button>
          </div>

          {isSuccess && (
            <div className="flex items-center gap-1.5 text-emerald-400 text-xs sm:text-sm font-semibold animate-pulse">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Perfeito!
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            </div>
          )}
        </div>

        {showFullVerseHint && (
          <div className="p-3 bg-slate-950/90 border border-slate-800 rounded-lg text-xs text-slate-300 font-serif leading-relaxed italic">
            "{verse.text}"
          </div>
        )}
      </div>
    </div>
  );
};
