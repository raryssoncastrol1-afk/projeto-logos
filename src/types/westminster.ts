export type WestminsterDivision =
  | 'introducao' // Perguntas 1 a 3
  | 'doutrina-deus' // Perguntas 4 a 12 (Deus, Trindade, Decretos, Criação, Providência)
  | 'queda-e-pecado' // Perguntas 13 a 19 (Queda, Pecado, Miséria)
  | 'o-redentor-cristo' // Perguntas 20 a 28 (Pacto da Graça, Naturezas, Ofícios, Humilhação e Exaltação)
  | 'aplicacao-da-redencao' // Perguntas 29 a 38 (Espírito Santo, Vocação, Justificação, Adoção, Santificação, Morte e Ressurreição)
  | 'a-lei-moral' // Perguntas 39 a 84 (Os Dez Mandamentos e Culpa)
  | 'meios-de-graca-sacramentos' // Perguntas 85 a 97 (Fé, Palavra, Sacramentos: Batismo e Ceia)
  | 'a-oracao-dominical'; // Perguntas 98 a 107 (A Oração do Pai Nosso)

export interface Verse {
  id: string;
  reference: string;
  text: string;
  version?: string;
  keyWords?: string[];
}

export interface CatechismQuestion {
  number: number;
  question: string;
  answer: string;
}

export interface WestminsterDoctrine {
  id: string;
  division: WestminsterDivision;
  title: string;
  questionRange: string; // Ex: "Perguntas 1 a 3"
  questions: CatechismQuestion[];
  cfwChapter: string; // Ex: "CFW Cap. I (Da Sagrada Escritura)"
  summary: string;
  historicalContext: {
    period: string;
    details: string;
    authors: string[];
  };
  verses: Verse[];
}

export type MemorizationMode = 'read' | 'cloze' | 'first-letters' | 'scramble';
