import type { Doctrine, LocusType } from '../types/doctrine';

export interface LocusInfo {
  id: LocusType;
  title: string;
  latinName: string;
  berkhofOrder: number;
  description: string;
  color: string;
}

export const LOCI_INFO: LocusInfo[] = [
  {
    id: 'teologia-propria',
    title: 'A Doutrina de Deus',
    latinName: 'Theologia Propria',
    berkhofOrder: 1,
    description: 'O ser, atributos, a Trindade, os decretos eternos, a criação e a providência.',
    color: 'from-amber-600 to-amber-900',
  },
  {
    id: 'antropologia',
    title: 'A Doutrina do Homem',
    latinName: 'Anthropologia',
    berkhofOrder: 2,
    description: 'O homem em seu estado original, a Queda, a depravação total e o Pacto das Obras e da Graça.',
    color: 'from-orange-600 to-red-950',
  },
  {
    id: 'cristologia',
    title: 'A Pessoa e Obra de Cristo',
    latinName: 'Christologia',
    berkhofOrder: 3,
    description: 'As naturezas e estados de Cristo, os ofícios (Profeta, Sacerdote, Rei) e a expiação definida.',
    color: 'from-emerald-600 to-teal-950',
  },
  {
    id: 'soteriologia',
    title: 'A Aplicação da Redenção',
    latinName: 'Soteriologia',
    berkhofOrder: 4,
    description: 'Vocação eficaz, regeneração, fé, justificação, santificação e a perseverança dos santos.',
    color: 'from-blue-600 to-indigo-950',
  },
  {
    id: 'eclesiologia',
    title: 'A Igreja e os Meios de Graça',
    latinName: 'Ecclesiologia',
    berkhofOrder: 5,
    description: 'A natureza e governo da Igreja, a pregação da Palavra e os sacramentos (Batismo e Santa Ceia).',
    color: 'from-purple-600 to-violet-950',
  },
  {
    id: 'escatologia',
    title: 'As Últimas Coisas',
    latinName: 'Eschatologia',
    berkhofOrder: 6,
    description: 'A consumação dos séculos, a segunda vinda visível, a ressurreição, o juízo e o novo céu e terra.',
    color: 'from-rose-600 to-slate-950',
  },
];

export const DOCTRINES_DATA: Doctrine[] = [
  // --- 1. TEOLOGIA PRÓPRIA ---
  {
    id: 'decretos-e-eleicao',
    locus: 'teologia-propria',
    title: 'A Soberania de Deus e os Decretos Eternos',
    berkhofSection: 'Parte 1: A Doutrina de Deus - Cap. V: Os Decretos Divinos',
    summary:
      'O decreto de Deus é Seu propósito eterno, baseado no conselho de Sua própria vontade, pelo qual Ele, para Sua própria glória, pré-ordenou tudo o que acontece na história.',
    historicalOrigin: {
      period: 'Patrística e Reforma Protestante (Séc. V e XVI)',
      originContext:
        'Sistematizado incisivamente contra o pelagianismo por Agostinho de Hipona no séc. V, resgatado com vigor bíblico por João Calvino nas Institutas e formalizado nos Cânones de Dort contra o Arminiano Remonstrante.',
      keyFigures: ['Agostinho de Hipona', 'João Calvino', 'Francis Turretin', 'Louis Berkhof'],
      confessions: [
        'Confissão de Fé de Westminster (Cap. III)',
        'Cânones de Dort (Cap. I)',
        'Segunda Confissão Helvética',
      ],
    },
    verses: [
      {
        id: 'ef-1-4-5',
        reference: 'Efésios 1:4-5',
        text: 'Assim como nos escolheu nele antes da fundação do mundo, para sermos santos e irrepreensíveis perante ele; e em amor nos predestinou para ele mesmo, para a adoção de filhos, por meio de Jesus Cristo, segundo o beneplácito de sua vontade.',
        version: 'ARA',
        keyWords: ['escolheu', 'fundação', 'predestinou', 'adoção', 'beneplácito'],
      },
      {
        id: 'is-46-9-10',
        reference: 'Isaías 46:9-10',
        text: 'Lembrai-vos das coisas passadas da antiguidade: que eu sou Deus, e não há outro, eu sou Deus, e não há outro semelhante a mim; que desde o princípio anuncio o que há de acontecer e desde a antiguidade, as coisas que ainda não sucederam; que digo: o meu conselho permanecerá de pé, farei toda a minha vontade.',
        version: 'ARA',
        keyWords: ['antiguidade', 'princípio', 'anuncio', 'conselho', 'vontade'],
      },
      {
        id: 'rm-9-15-16',
        reference: 'Romanos 9:15-16',
        text: 'Pois ele diz a Moisés: Terei misericórdia de quem me aprouver ter misericórdia e compadecer-me-ei de quem me aprouver ter compaixão. Assim, pois, não depende de quem quer ou de quem corre, mas de Deus, que se compadece.',
        version: 'ARA',
        keyWords: ['misericórdia', 'compaixão', 'depende', 'quer', 'corre'],
      },
    ],
  },
  {
    id: 'trindade-santa',
    locus: 'teologia-propria',
    title: 'A Santíssima Trindade',
    berkhofSection: 'Parte 1: A Doutrina de Deus - Cap. VI: A Trindade',
    summary:
      'Há somente um Deus vivo e verdadeiro, existindo eternamente em três pessoas distintas da mesma substância, iguais em poder e glória: o Pai, o Filho e o Espírito Santo.',
    historicalOrigin: {
      period: 'Era Conciliar dos Primeiros Séculos (325 - 381 d.C.)',
      originContext:
        'Formulada para combater o arianismo e sabelianismo nos Concílios Ecumênicos de Niceia (325) e Constantinopla (381), sob a defesa basilar de Atanásio e dos Padres Capadócios.',
      keyFigures: ['Atanásio de Alexandria', 'Basílio de Cesareia', 'Gregório de Nazianzo', 'João Calvino'],
      confessions: [
        'Credo Niceno-Constantinopolitano',
        'Credo de Atanásio',
        'Confissão de Fé de Westminster (Cap. II)',
        'Confissão Belga (Art. 8 e 9)',
      ],
    },
    verses: [
      {
        id: 'mt-28-19',
        reference: 'Mateus 28:19',
        text: 'Ide, portanto, fazei discípulos de todas as nações, batizando-os em nome do Pai, e do Filho, e do Espírito Santo.',
        version: 'ARA',
        keyWords: ['discípulos', 'todas', 'batizando-os', 'Pai', 'Filho', 'Espírito Santo'],
      },
      {
        id: '2co-13-13',
        reference: '2 Coríntios 13:13',
        text: 'A graça do Senhor Jesus Cristo, e o amor de Deus, e a comunhão do Espírito Santo sejam com todos vós.',
        version: 'ARA',
        keyWords: ['graça', 'Senhor', 'amor', 'comunhão', 'Espírito Santo'],
      },
    ],
  },

  // --- 2. ANTROPOLOGIA ---
  {
    id: 'depravacao-total',
    locus: 'antropologia',
    title: 'A Queda e a Depravação Total (Incapacidade Moral)',
    berkhofSection: 'Parte 2: A Doutrina do Homem - Cap. IV: O Pecado na Vida da Raça Humana',
    summary:
      'Pela queda de Adão, o pecado corrompeu todas as faculdades humanas (mente, afeições, vontade), tornando o homem caído espiritualmente morto e incapaz de buscar a Deus ou cooperar para sua salvação por si mesmo.',
    historicalOrigin: {
      period: 'Controvérsia Pelagiana e Reforma (410 d.C. e 1618)',
      originContext:
        'Sustentada por Agostinho contra Pelágio, revitalizada na Reforma (Lutero em "Nascido Escravo") e codificada como o primeiro ponto (T) dos Cânones de Dort.',
      keyFigures: ['Agostinho', 'Martinho Lutero', 'Herman Bavinck', 'Louis Berkhof'],
      confessions: ['Cânones de Dort (Cap. III/IV)', 'Confissão de Fé de Westminster (Cap. VI)', 'Catecismo de Heidelberg (D. 3-8)'],
    },
    verses: [
      {
        id: 'rm-3-10-12',
        reference: 'Romanos 3:10-12',
        text: 'Como está escrito: Não há justo, nem um sequer, não há quem entenda, não há quem busque a Deus; todos se extraviaram, à uma se fizeram inúteis; não há quem faça o bem, não há nem um sequer.',
        version: 'ARA',
        keyWords: ['justo', 'entenda', 'busque', 'extraviaram', 'inúteis', 'bem'],
      },
      {
        id: 'ef-2-1-3',
        reference: 'Efésios 2:1',
        text: 'Ele vos deu vida, estando vós mortos nos vossos delitos e pecados.',
        version: 'ARA',
        keyWords: ['vida', 'mortos', 'delitos', 'pecados'],
      },
      {
        id: 'jr-17-9',
        reference: 'Jeremias 17:9',
        text: 'Enganoso é o coração, mais do que todas as coisas, e desesperadamente corrupto; quem o conhecerá?',
        version: 'ARA',
        keyWords: ['Enganoso', 'coração', 'desesperadamente', 'corrupto'],
      },
    ],
  },

  // --- 3. CRISTOLOGIA ---
  {
    id: 'expiacao-definida',
    locus: 'cristologia',
    title: 'A Expiação Definida e Eficaz (Redenção Particular)',
    berkhofSection: 'Parte 3: A Pessoa e Obra de Cristo - Cap. VII: A Extensão da Expiação',
    summary:
      'A morte expiatória de Cristo foi desenhada e realizada com o objetivo específico de redimir infalivelmente os eleitos do Pai, garantindo plenamente sua justificação e reconciliação.',
    historicalOrigin: {
      period: 'Controvérsia Remonstrante (Séc. XVII)',
      originContext:
        'Defendida amplamente por John Owen em "A Morte da Morte na Morte de Cristo" e oficializada no segundo ponto dos Cânones de Dort (1618-1619).',
      keyFigures: ['John Owen', 'João Calvino', 'B. B. Warfield', 'Francis Turretin'],
      confessions: ['Cânones de Dort (Cap. II)', 'Confissão de Fé de Westminster (Cap. VIII)'],
    },
    verses: [
      {
        id: 'jo-10-14-15',
        reference: 'João 10:14-15',
        text: 'Eu sou o bom pastor; conheço as minhas ovelhas, e elas me conhecem a mim, assim como o Pai me conhece a mim, e eu conheço o Pai; e dou a minha vida pelas ovelhas.',
        version: 'ARA',
        keyWords: ['bom pastor', 'conheço', 'ovelhas', 'dou a minha vida'],
      },
      {
        id: 'ef-5-25',
        reference: 'Efésios 5:25',
        text: 'Maridos, amai vossa mulher, como também Cristo amou a igreja e a si mesmo se entregou por ela.',
        version: 'ARA',
        keyWords: ['amai', 'Cristo', 'amou', 'igreja', 'entregou'],
      },
      {
        id: 'mt-1-21',
        reference: 'Mateus 1:21',
        text: 'Ela dará à luz um filho e lhe porás o nome de Jesus, porque ele salvará o seu povo dos pecados deles.',
        version: 'ARA',
        keyWords: ['filho', 'Jesus', 'salvará', 'povo', 'pecados'],
      },
    ],
  },

  // --- 4. SOTERIOLOGIA ---
  {
    id: 'justificacao-pela-fe',
    locus: 'soteriologia',
    title: 'A Justificação Somente pela Fé (Sola Fide)',
    berkhofSection: 'Parte 4: A Doutrina da Aplicação da Obra da Redenção - Cap. IX: A Justificação',
    summary:
      'A justificação é um ato judicial da livre graça de Deus pelo qual Ele perdoa todos os nossos pecados e nos aceita como justos perante Ele, unicamente pela justiça perfeita de Cristo imputada a nós e recebida tão somente pela fé.',
    historicalOrigin: {
      period: 'Reforma Protestante do Século XVI (1517)',
      originContext:
        'O "articulus stantis vel cadentis ecclesiae" (artigo pelo qual a igreja se mantém ou cai). Rearticulado por Martinho Lutero e formalizado juridicamente por Calvino em oposição às doutrinas tridentinas de justificação infusa.',
      keyFigures: ['Martinho Lutero', 'João Calvino', 'Philip Melanchthon', 'Charles Hodge'],
      confessions: [
        'Confissão de Fé de Westminster (Cap. XI)',
        'Artigos de Esmalcalde',
        'Catecismo de Heidelberg (D. 60)',
      ],
    },
    verses: [
      {
        id: 'rm-5-1',
        reference: 'Romanos 5:1',
        text: 'Justificados, pois, mediante a fé, temos paz com Deus por meio de nosso Senhor Jesus Cristo.',
        version: 'ARA',
        keyWords: ['Justificados', 'fé', 'paz', 'Deus', 'Jesus Cristo'],
      },
      {
        id: '2co-5-21',
        reference: '2 Coríntios 5:21',
        text: 'Aquele que não conheceu pecado, ele o fez pecado por nós; para que, nele, fôssemos feitos justiça de Deus.',
        version: 'ARA',
        keyWords: ['conheceu', 'pecado', 'justiça', 'Deus'],
      },
      {
        id: 'gl-2-16',
        reference: 'Gálatas 2:16',
        text: 'Sabendo, contudo, que o homem não é justificado por obras da lei, e sim mediante a fé em Cristo Jesus, também nós temos crido em Cristo Jesus, para que fôssemos justificados pela fé em Cristo e não por obras da lei.',
        version: 'ARA',
        keyWords: ['homem', 'justificado', 'obras', 'lei', 'fé', 'Cristo'],
      },
    ],
  },
  {
    id: 'perseveranca-dos-santos',
    locus: 'soteriologia',
    title: 'A Perseverança e Preservação dos Santos',
    berkhofSection: 'Parte 4: A Doutrina da Aplicação da Redenção - Cap. XII: A Perseverança dos Santos',
    summary:
      'Aqueles a quem Deus aceitou em Seu Amado, eficazmente chamados e santificados pelo Seu Espírito, não podem cair total nem finalmente do estado de graça, mas certamente perseverarão nele até o fim.',
    historicalOrigin: {
      period: 'Sínodo de Dort (1618-1619)',
      originContext:
        'O quinto ponto reformado formalizado nos Cânones de Dort, alicerçado na fidelidade e no decreto inabalável do Pai, na intercessão do Filho e no selo do Espírito Santo.',
      keyFigures: ['João Calvino', 'Wilhelmus à Brakel', 'Louis Berkhof'],
      confessions: ['Cânones de Dort (Cap. V)', 'Confissão de Fé de Westminster (Cap. XVII)'],
    },
    verses: [
      {
        id: 'jo-10-27-29',
        reference: 'João 10:28',
        text: 'Eu lhes dou a vida eterna; jamais perecerão, e ninguém as arrebatará da minha mão.',
        version: 'ARA',
        keyWords: ['vida eterna', 'jamais', 'perecerão', 'ninguém', 'arrebatará', 'mão'],
      },
      {
        id: 'fp-1-6',
        reference: 'Filipenses 1:6',
        text: 'Estou plenamente certo de que aquele que começou boa obra em vós há de completá-la até ao Dia de Cristo Jesus.',
        version: 'ARA',
        keyWords: ['plenamente', 'certo', 'começou', 'boa obra', 'completá-la', 'Dia de Cristo'],
      },
      {
        id: 'rm-8-38-39',
        reference: 'Romanos 8:38-39',
        text: 'Porque eu estou bem certo de que nem a morte, nem a vida, nem os anjos, nem os principados, nem as coisas do presente, nem do porvir, nem os poderes, nem a altura, nem a profundidade, nem qualquer outra criatura poderá separar-nos do amor de Deus, que está em Cristo Jesus, nosso Senhor.',
        version: 'ARA',
        keyWords: ['morte', 'vida', 'anjos', 'presente', 'porvir', 'separar-nos', 'amor de Deus'],
      },
    ],
  },

  // --- 5. ECLESIOLOGIA ---
  {
    id: 'marcas-da-igreja',
    locus: 'eclesiologia',
    title: 'A Verdadeira Igreja e os Meios de Graça',
    berkhofSection: 'Parte 5: A Doutrina da Igreja - Cap. III: O Governo e as Notas da Igreja',
    summary:
      'A verdadeira Igreja visível é reconhecida pelas marcas clássicas reformadas: a fiel pregação do Evangelho puro, a correta ministração dos sacramentos segundo a instituição de Cristo, e o fiel exercício da disciplina eclesiástica.',
    historicalOrigin: {
      period: 'Reforma Magisterial (Século XVI)',
      originContext:
        'Desenvolvida por Guido de Brès na Confissão Belga e Calvino nas Institutas para distinguir a igreja fiel da corrupção papal e do sectarismo radical anabatista.',
      keyFigures: ['João Calvino', 'Guido de Brès', 'John Knox', 'Herman Bavinck'],
      confessions: ['Confissão Belga (Art. 29)', 'Confissão Escocesa (Art. 18)', 'Confissão de Fé de Westminster (Cap. XXV)'],
    },
    verses: [
      {
        id: 'at-2-42',
        reference: 'Atos 2:42',
        text: 'E perseveravam na doutrina dos apóstolos e na comunhão, no partir do pão e nas orações.',
        version: 'ARA',
        keyWords: ['perseveravam', 'doutrina', 'apóstolos', 'comunhão', 'partir do pão', 'orações'],
      },
      {
        id: '1tm-3-15',
        reference: '1 Timóteo 3:15',
        text: 'Para que, se eu tardar, fiques ciente de como se deve proceder na casa de Deus, que é a igreja do Deus vivo, coluna e baluarte da verdade.',
        version: 'ARA',
        keyWords: ['proceder', 'casa de Deus', 'igreja', 'Deus vivo', 'coluna', 'baluarte', 'verdade'],
      },
    ],
  },

  // --- 6. ESCATOLOGIA ---
  {
    id: 'segunda-vinda-e-juizo',
    locus: 'escatologia',
    title: 'A Parúsia de Cristo e a Consumação dos Séculos',
    berkhofSection: 'Parte 6: As Últimas Coisas - Cap. II: A Segunda Vinda e o Juízo Geral',
    summary:
      'Cristo retornará física, pessoal e visivelmente em glória, trazendo a ressurreição dos mortos, o julgamento final de toda a humanidade e a restauração de todas as coisas em novos céus e nova terra.',
    historicalOrigin: {
      period: 'Credos Ecumênicos e Confissões Reformadas',
      originContext:
        'Confessado universalmente pela igreja desde os Credos dos Apóstolos e Niceno ("donde há de vir a julgar os vivos e os mortos"), resguardado na escatologia reformada amilenar e pós-milenar clássica.',
      keyFigures: ['Agostinho', 'João Calvino', 'Geerhardus Vos', 'Louis Berkhof'],
      confessions: [
        'Credo Apostólico',
        'Confissão de Fé de Westminster (Cap. XXXII e XXXIII)',
        'Catecismo de Heidelberg (D. 52)',
      ],
    },
    verses: [
      {
        id: '1ts-4-16-17',
        reference: '1 Tessalonicenses 4:16',
        text: 'Porquanto o Senhor mesmo, dada a sua palavra de ordem, ouvida a voz do arcanjo, e ressoada a trombeta de Deus, descerá dos céus, e os mortos em Cristo ressuscitarão primeiro.',
        version: 'ARA',
        keyWords: ['Senhor', 'ordem', 'arcanjo', 'trombeta', 'descerá', 'mortos', 'ressuscitarão'],
      },
      {
        id: 'ap-21-3-4',
        reference: 'Apocalipse 21:3-4',
        text: 'Então, ouvi grande voz vinda do trono, dizendo: Eis o tabernáculo de Deus com os homens. A Deus mesmo estará com eles e lhes enxugará dos olhos toda lágrima, e a morte já não existirá, já não haverá luto, nem pranto, nem dor, porque as primeiras coisas passaram.',
        version: 'ARA',
        keyWords: ['trono', 'tabernáculo', 'enxugará', 'lágrima', 'morte', 'luto', 'dor'],
      },
      {
        id: 'tito-2-13',
        reference: 'Tito 2:13',
        text: 'Aguardando a bendita esperança e a manifestação da glória do nosso grande Deus e Salvador Cristo Jesus.',
        version: 'ARA',
        keyWords: ['Aguardando', 'bendita', 'esperança', 'manifestação', 'glória', 'Salvador'],
      },
    ],
  },
];
