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

  // Normalização de palavras para scramble
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
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  // 1. Cloze (Ocultação progressiva de palavras)
  const renderClozeText = () => {
    const words = verse.text.split(' ');
    const totalWords = words.length;
    const hideCount = Math.floor((totalWords * hidePercentage) / 100);

    // Índices pseudo-determinísticos para ocultar
    const indicesToHide = new Set<number>();
    for (let i = 0; i < hideCount; i++) {
      indicesToHide.add((i * 3 + 1) % totalWords);
    }

    return (
      <p className="text-xl leading-relaxed text-slate-100 font-serif">
        {words.map((word, idx) => {
          const isHidden = indicesToHide.has(idx);
          if (isHidden) {
            return (
              <span
                key={idx}
                className="inline-block bg-slate-800 border-b-2 border-amber-500 text-transparent hover:text-amber-400 select-none px-2 mx-1 rounded transition-colors duration-200 cursor-pointer"
                title="Passe o mouse para espiar a palavra"
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

  // 2. Primeiras Letras (Digite a 1ª letra de cada palavra)
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
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl flex flex-col gap-6">
      {/* Cabeçalho do Card */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4 border-b border-slate-800">
        <div>
          <span className="text-xs uppercase font-semibold tracking-wider text-amber-500">
            {doctrineTitle}
          </span>
          <h3 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            {verse.reference}
            {verse.version && (
              <span className="text-xs font-mono bg-slate-800 text-slate-400 px-2 py-0.5 rounded">
                {verse.version}
              </span>
            )}
          </h3>
        </div>

        {/* Seletor de Modo de Memorização */}
        <div className="flex flex-wrap gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setMode('read')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              mode === 'read'
                ? 'bg-amber-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Leitura
          </button>
          <button
            onClick={() => setMode('cloze')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              mode === 'cloze'
                ? 'bg-amber-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Lacunas
          </button>
          <button
            onClick={() => setMode('first-letters')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              mode === 'first-letters'
                ? 'bg-amber-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            1ª Letras
          </button>
          <button
            onClick={() => setMode('scramble')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              mode === 'scramble'
                ? 'bg-amber-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Ordenar Palavras
          </button>
        </div>
      </div>

      {/* Área Central Interativa */}
      <div className="min-h-[160px] flex flex-col justify-center">
        {mode === 'read' && (
          <div className="space-y-4">
            <blockquote className="text-xl md:text-2xl leading-relaxed text-slate-100 font-serif italic border-l-4 border-amber-600 pl-4 py-1">
              "{verse.text}"
            </blockquote>
            {verse.keyWords && (
              <div className="flex flex-wrap gap-2 items-center text-xs text-slate-400 pt-2">
                <span>Conceitos-chave:</span>
                {verse.keyWords.map((kw, i) => (
                  <span
                    key={i}
                    className="bg-amber-950/60 border border-amber-800/50 text-amber-300 px-2.5 py-0.5 rounded-full"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {mode === 'cloze' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Nível de dificuldade (palavras ocultas):</span>
              <div className="flex gap-2">
                {[25, 50, 75, 100].map((pct) => (
                  <button
                    key={pct}
                    onClick={() => setHidePercentage(pct)}
                    className={`px-2.5 py-1 rounded text-xs font-medium ${
                      hidePercentage === pct
                        ? 'bg-amber-600 text-white'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                    }`}
                  >
                    {pct}%
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 bg-slate-950/70 rounded-xl border border-slate-800/80">
              {renderClozeText()}
            </div>
            <p className="text-xs text-slate-500 italic flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" /> Passe o mouse sobre as faixas para espiar se esquecer.
            </p>
          </div>
        )}

        {mode === 'first-letters' && (
          <div className="space-y-4">
            <div className="p-4 bg-slate-950/70 rounded-xl border border-slate-800 text-slate-400 text-sm leading-relaxed">
              <p className="mb-2 text-xs uppercase tracking-wider font-semibold text-amber-500">
                Pistas (Primeiras Letras de Cada Palavra):
              </p>
              <div className="font-mono text-base tracking-widest text-slate-300 flex flex-wrap gap-2">
                {targetLetters.map((l, i) => {
                  const typed = userFirstLettersInput[i];
                  const isCorrect = typed === l;
                  return (
                    <span
                      key={i}
                      className={`inline-block w-7 h-7 text-center leading-7 rounded border ${
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
              placeholder="Digite a 1ª letra de cada palavra em sequência..."
              className="w-full bg-slate-950 border border-slate-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-xl px-4 py-3 text-lg font-mono uppercase tracking-widest text-slate-100 outline-none transition"
              autoFocus
            />
          </div>
        )}

        {mode === 'scramble' && (
          <div className="space-y-4">
            {/* Palavras selecionadas */}
            <div className="min-h-[70px] p-4 bg-slate-950/80 border border-slate-800 rounded-xl flex flex-wrap gap-2 items-center">
              {selectedWords.length === 0 ? (
                <span className="text-sm text-slate-500 italic">
                  Clique nas palavras abaixo na ordem correta do versículo...
                </span>
              ) : (
                selectedWords.map((word, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectedWordClick(word, idx)}
                    className="bg-amber-600/30 hover:bg-amber-600/50 border border-amber-600/60 text-amber-200 px-3 py-1 rounded-lg text-sm font-medium transition"
                  >
                    {word}
                  </button>
                ))
              )}
            </div>

            {/* Palavras embaralhadas restantes */}
            <div className="flex flex-wrap gap-2">
              {scrambledWords.map((word, idx) => (
                <button
                  key={idx}
                  onClick={() => handleWordClick(word, idx)}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg text-sm transition font-medium border border-slate-700"
                >
                  {word}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Feedback de Conclusão / Ações */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800/80">
        <div className="flex items-center gap-3">
          <button
            onClick={resetState}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 bg-slate-800/60 hover:bg-slate-800 px-3 py-2 rounded-lg transition"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reiniciar
          </button>

          <button
            onClick={() => setShowFullVerseHint(!showFullVerseHint)}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 bg-slate-800/60 hover:bg-slate-800 px-3 py-2 rounded-lg transition"
          >
            {showFullVerseHint ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            {showFullVerseHint ? 'Ocultar Dica' : 'Ver Texto Completo'}
          </button>
        </div>

        {isSuccess && (
          <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold animate-bounce">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            Parabéns! Versículo memorizado com perfeição!
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>
        )}
      </div>

      {showFullVerseHint && (
        <div className="p-3 bg-slate-950/90 border border-slate-800 rounded-lg text-xs text-slate-300 font-serif leading-relaxed italic">
          "{verse.text}"
        </div>
      )}
    </div>
  );
};
