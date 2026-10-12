export type LocusType =
  | 'teologia-propria'
  | 'antropologia'
  | 'cristologia'
  | 'soteriologia'
  | 'eclesiologia'
  | 'escatologia';

export interface Verse {
  id: string;
  reference: string; // Ex: "Efésios 1:4-5"
  text: string;
  version?: string; // Ex: "ARA", "NAA"
  keyWords?: string[]; // Palavras para o modo de lacunas
}

export interface Doctrine {
  id: string;
  locus: LocusType;
  title: string;
  berkhofSection: string; // Ex: "Parte 1: A Doutrina de Deus - Os Decretos Divinos"
  summary: string;
  historicalOrigin: {
    period: string; // Ex: "Reforma Protestante (Séc. XVI) / Sínodo de Dort (1618-1619)"
    originContext: string; // Detalhes históricos
    keyFigures: string[]; // Teólogos e Pais da Igreja que formularam/sistematizaram
    confessions: string[]; // Confissões reformadas que atestam (ex: CFW, Catecismo Maior, Cânones de Dort)
  };
  verses: Verse[];
}

export type MemorizationMode = 'read' | 'cloze' | 'first-letters' | 'scramble' | 'quiz';
