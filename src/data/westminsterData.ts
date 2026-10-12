import type { WestminsterDivision, WestminsterDoctrine } from '../types/westminster';

export interface DivisionInfo {
  id: WestminsterDivision;
  title: string;
  order: number;
  questionRange: string;
  description: string;
}

export const WESTMINSTER_DIVISIONS: DivisionInfo[] = [
  {
    id: 'introducao',
    title: 'O Fim Principal & As Escrituras',
    order: 1,
    questionRange: 'P. 1 a 3',
    description: 'O propósito supremo da existência humana e a autoridade infalível da Bíblia como única regra de fé.',
  },
  {
    id: 'doutrina-deus',
    title: 'Deus, Decretos & Providência',
    order: 2,
    questionRange: 'P. 4 a 12',
    description: 'A natureza e atributos de Deus, a Trindade, Seus santos decretos, a Criação e a Providência.',
  },
  {
    id: 'queda-e-pecado',
    title: 'A Queda, Pecado & Miséria',
    order: 3,
    questionRange: 'P. 13 a 19',
    description: 'A violação do Pacto das Obras, o pecado original, a depravação da natureza e a miséria humana.',
  },
  {
    id: 'o-redentor-cristo',
    title: 'O Redentor Jesus Cristo',
    order: 4,
    questionRange: 'P. 20 a 28',
    description: 'O Pacto da Graça, as duas naturezas de Cristo, Seu ofício tríplice, humilhação e exaltação.',
  },
  {
    id: 'aplicacao-da-redencao',
    title: 'Aplicação da Obra da Salvação',
    order: 5,
    questionRange: 'P. 29 a 38',
    description: 'A obra do Espírito: vocação eficaz, justificação, adoção, santificação, paz na morte e ressurreição.',
  },
  {
    id: 'a-lei-moral',
    title: 'A Lei Moral & Os Dez Mandamentos',
    order: 6,
    questionRange: 'P. 39 a 84',
    description: 'O dever moral que Deus requer do homem: a exposição completa do Decálogo e a gravidade das transgressões.',
  },
  {
    id: 'meios-de-graca-sacramentos',
    title: 'Meios de Graça & Sacramentos',
    order: 7,
    questionRange: 'P. 85 a 97',
    description: 'Fé em Jesus Cristo, arrependimento para a vida, a eficácia da Palavra e os santos sacramentos (Batismo e Ceia).',
  },
  {
    id: 'a-oracao-dominical',
    title: 'A Oração & O Pai Nosso',
    order: 8,
    questionRange: 'P. 98 a 107',
    description: 'O que é a verdadeira oração segundo a vontade de Deus e a explicação das petições da Oração Dominical.',
  },
];

export const WESTMINSTER_DATA: WestminsterDoctrine[] = [
  // =========================================================================
  // BLOCO 1: INTRODUÇÃO (P. 1 a 3)
  // =========================================================================
  {
    id: 'fim-principal-e-escrituras',
    division: 'introducao',
    title: 'O Fim Principal do Homem e a Autoridade da Palavra',
    questionRange: 'Perguntas 1 a 3',
    cfwChapter: 'CFW Cap. I (Da Sagrada Escritura)',
    summary:
      'O fim supremo para o qual o homem foi criado é glorificar a Deus e comprazer-se nele eternamente. A única regra que Deus concedeu para nos orientar nisso são as Sagradas Escrituras.',
    historicalContext: {
      period: 'Assembleia de Westminster (1643 - 1647)',
      details:
        'Redigido pelos teólogos puritanos e escoceses na Abadia de Westminster para unificar a fé cristã da Grã-Bretanha sob o alicerce exclusivo da Sola Scriptura.',
      authors: ['George Gillespie', 'Samuel Rutherford', 'Alexander Henderson', 'Edward Reynolds'],
    },
    questions: [
      {
        number: 1,
        question: 'Qual é o fim principal do homem?',
        answer: 'O fim principal do homem é glorificar a Deus, e comprazer-se nele para sempre.',
      },
      {
        number: 2,
        question: 'Que regra Deus nos deu para nos dirigir na maneira de o glorificar e gozar?',
        answer: 'A Palavra de Deus, que se acha nas Escrituras do Antigo e do Novo Testamento, é a única regra para nos dirigir na maneira de o glorificar e gozar.',
      },
      {
        number: 3,
        question: 'Qual é a coisa principal que as Escrituras ensinam?',
        answer: 'A coisa principal que as Escrituras ensinam é o que o homem deve crer a respeito de Deus, e o dever que Deus requer do homem.',
      },
    ],
    verses: [
      {
        id: '1co-10-31',
        reference: '1 Coríntios 10:31',
        text: 'Portanto, quer comais, quer bebais ou façais outra coisa qualquer, fazei tudo para a glória de Deus.',
        version: 'ARA',
        keyWords: ['comais', 'bebais', 'façais', 'glória de Deus'],
      },
      {
        id: 'sl-73-25-26',
        reference: 'Salmo 73:25-26',
        text: 'Quem mais tenho eu no céu? Não há outro em quem eu me compraza na terra. Ainda que a minha carne e o meu coração desfaleçam, Deus é a fortaleza do meu coração e a minha herança para sempre.',
        version: 'ARA',
        keyWords: ['céu', 'compraza', 'terra', 'fortaleza', 'herança para sempre'],
      },
      {
        id: '2tm-3-16-17',
        reference: '2 Timóteo 3:16-17',
        text: 'Toda a Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção, para a educação na justiça, a fim de que o homem de Deus seja perfeito e perfeitamente habilitado para toda boa obra.',
        version: 'ARA',
        keyWords: ['Escritura', 'inspirada', 'ensino', 'repreensão', 'correção', 'perfeito'],
      },
    ],
  },

  // =========================================================================
  // BLOCO 2: DOUTRINA DE DEUS, DECRETOS E PROVIDÊNCIA (P. 4 a 12)
  // =========================================================================
  {
    id: 'natureza-de-deus-e-trindade',
    division: 'doutrina-deus',
    title: 'O Ser de Deus, a Trindade e os Decretos Eternos',
    questionRange: 'Perguntas 4 a 8',
    cfwChapter: 'CFW Cap. II (De Deus e da Santíssima Trindade) e Cap. III (Dos Eternos Decretos)',
    summary:
      'Deus é espírito infinito, eterno e imutável em seu ser, sabedoria, poder, santidade, justiça, bondade e verdade. Há um só Deus vivo em três pessoas: Pai, Filho e Espírito Santo, que desde a eternidade soberanamente decretou tudo quanto sucede.',
    historicalContext: {
      period: 'Consolidação Reformada Clássica',
      details:
        'A resposta da Pergunta 4 é celebrada universalmente como a mais sublime definição sintética do Ser de Deus jamais escrita na história da teologia.',
      authors: ['Assembleia de Westminster', 'João Calvino', 'Francis Turretin'],
    },
    questions: [
      {
        number: 4,
        question: 'Quem é Deus?',
        answer: 'Deus é um Espírito, infinito, eterno e imutável em seu ser, sabedoria, poder, santidade, justiça, bondade e verdade.',
      },
      {
        number: 5,
        question: 'Há mais de um Deus?',
        answer: 'Há um só Deus, o Deus vivo e verdadeiro.',
      },
      {
        number: 6,
        question: 'Quantas pessoas há na Divindade?',
        answer: 'Há três pessoas na Divindade: o Pai, o Filho e o Espírito Santo, e estas três são um Deus, da mesma substância, iguais em poder e glória.',
      },
      {
        number: 7,
        question: 'O que são os decretos de Deus?',
        answer: 'Os decretos de Deus são o seu eterno propósito, segundo o conselho da sua vontade, pelo qual, para a sua própria glória, Ele pré-ordenou tudo quanto acontece.',
      },
    ],
    verses: [
      {
        id: 'jo-4-24',
        reference: 'João 4:24',
        text: 'Deus é espírito; e importa que os seus adoradores o adorem em espírito e em verdade.',
        version: 'ARA',
        keyWords: ['Deus é espírito', 'adoradores', 'adorem', 'verdade'],
      },
      {
        id: 'mt-28-19',
        reference: 'Mateus 28:19',
        text: 'Ide, portanto, fazei discípulos de todas as nações, batizando-os em nome do Pai, e do Filho, e do Espírito Santo.',
        version: 'ARA',
        keyWords: ['discípulos', 'batizando-os', 'Pai', 'Filho', 'Espírito Santo'],
      },
      {
        id: 'ef-1-11',
        reference: 'Efésios 1:11',
        text: 'Nele, digo, no qual fomos também feitos herança, predestinados segundo o propósito daquele que faz todas as coisas conforme o conselho da sua vontade.',
        version: 'ARA',
        keyWords: ['herança', 'predestinados', 'propósito', 'conselho da sua vontade'],
      },
    ],
  },
  {
    id: 'criacao-e-providencia',
    division: 'doutrina-deus',
    title: 'A Criação do Universo e a Santa Providência',
    questionRange: 'Perguntas 9 a 12',
    cfwChapter: 'CFW Cap. IV (Da Criação) e Cap. V (Da Providência)',
    summary:
      'Deus criou todas as coisas do nada, pela palavra do seu poder, no espaço de seis dias, e tudo era muito bom. Ele formou o homem à sua própria imagem em justiça e santidade, sustentando e governando todas as criaturas por sua santa providência.',
    historicalContext: {
      period: 'Confessionalismo Reformado e Criacionismo Bíblico',
      details:
        'Apresenta o homem no Pacto da Vida/Obras antes da Queda, sob a condição de perfeita obediência pessoal.',
      authors: ['Thomas Manton', 'William Twisse', 'Assembleia de Westminster'],
    },
    questions: [
      {
        number: 9,
        question: 'Qual é a obra da criação?',
        answer: 'A obra da criação é aquela pela qual Deus fez todas as coisas do nada, pela palavra do seu poder, no espaço de seis dias, e tudo muito bem.',
      },
      {
        number: 10,
        question: 'Como Deus criou o homem?',
        answer: 'Deus criou o homem, macho e fêmea, conforme a sua própria imagem, em conhecimento, justiça e santidade, com domínio sobre as criaturas.',
      },
      {
        number: 11,
        question: 'Quais são as obras da providência de Deus?',
        answer: 'As obras da providência de Deus são a sua maneira mui santa, sábia e poderosa de preservar e governar todas as suas criaturas e todas as ações delas.',
      },
      {
        number: 12,
        question: 'Que ato especial de providência exerceu Deus para com o homem no estado em que ele foi criado?',
        answer: 'Quando Deus criou o homem, fez com ele um pacto de vida sob condição de perfeita obediência, proibindo-lhe de comer da árvore da ciência do bem e do mal, sob pena de morte.',
      },
    ],
    verses: [
      {
        id: 'gn-1-27',
        reference: 'Gênesis 1:27',
        text: 'Criou Deus, pois, o homem à sua imagem, à imagem de Deus o criou; homem e mulher os criou.',
        version: 'ARA',
        keyWords: ['imagem de Deus', 'criou', 'homem e mulher'],
      },
      {
        id: 'sl-103-19',
        reference: 'Salmo 103:19',
        text: 'Nos céus, estabeleceu o Senhor o seu trono, e o seu reino domina sobre tudo.',
        version: 'ARA',
        keyWords: ['céus', 'trono', 'reino domina', 'tudo'],
      },
      {
        id: 'gn-2-17',
        reference: 'Gênesis 2:17',
        text: 'Mas da árvore do conhecimento do bem e do mal não comerás; porque, no dia em que dela comeres, certamente morrerás.',
        version: 'ARA',
        keyWords: ['árvore', 'conhecimento', 'não comerás', 'certamente morrerás'],
      },
    ],
  },

  // =========================================================================
  // BLOCO 3: A QUEDA, O PECADO E A MISÉRIA (P. 13 a 19)
  // =========================================================================
  {
    id: 'a-queda-e-o-pecado-original',
    division: 'queda-e-pecado',
    title: 'A Queda de Adão, a Culpa e a Miséria da Raça Humana',
    questionRange: 'Perguntas 13 a 19',
    cfwChapter: 'CFW Cap. VI (Da Queda do Homem, do Pecado e do seu Castigo)',
    summary:
      'Nossos primeiros pais pecaram contra Deus comendo do fruto proibido. Sendo Adão o cabeça federal da humanidade, todo o gênero humano pecou nele e com ele caiu, nascendo em estado de pecado e corrupção total da natureza, sob a ira e maldição de Deus.',
    historicalContext: {
      period: 'Teologia Federal Reformada contra o Socinianismo e Pelagianismo',
      details:
        'A definição de pecado na Pergunta 14 ("qualquer falta de conformidade com a lei de Deus, ou a transgressão dela") é o padrão exegético reformado de 1 João 3:4.',
      authors: ['Agostinho de Hipona', 'João Calvino', 'Assembleia de Westminster'],
    },
    questions: [
      {
        number: 14,
        question: 'O que é o pecado?',
        answer: 'Pecado é qualquer falta de conformidade com a lei de Deus, ou qualquer transgressão dela.',
      },
      {
        number: 16,
        question: 'Caiu todo o gênero humano na primeira transgressão de Adão?',
        answer: 'Visto que o pacto foi feito com Adão não só para ele, mas também para a sua posteridade, todo o gênero humano que dele descende por geração ordinária pecou nele e com ele caiu na sua primeira transgressão.',
      },
      {
        number: 18,
        question: 'Em que consiste a pecaminosidade do estado em que o homem caiu?',
        answer: 'A pecaminosidade do estado em que o homem caiu consiste na culpa do primeiro pecado de Adão, na falta da justiça original e na corrupção de toda a sua natureza, juntamente com todas as transgressões atuais que procedem dela.',
      },
      {
        number: 19,
        question: 'Qual é a miséria do estado em que o homem caiu?',
        answer: 'Todo o gênero humano, pela sua queda, perdeu a comunhão com Deus, está sob a sua ira e maldição, e assim ficou sujeito a todas as misérias desta vida, à morte e às penas do inferno para sempre.',
      },
    ],
    verses: [
      {
        id: '1jo-3-4',
        reference: '1 João 3:4',
        text: 'Todo aquele que pratica o pecado também transgride a lei, porque o pecado é a transgressão da lei.',
        version: 'ARA',
        keyWords: ['pecado', 'transgride', 'lei', 'transgressão'],
      },
      {
        id: 'rm-5-12',
        reference: 'Romanos 5:12',
        text: 'Portanto, assim como por um só homem entrou o pecado no mundo, e pelo pecado, a morte, assim também a morte passou a todos os homens, porque todos pecaram.',
        version: 'ARA',
        keyWords: ['um só homem', 'pecado', 'morte', 'todos pecaram'],
      },
      {
        id: 'ef-2-3',
        reference: 'Efésios 2:3',
        text: 'Entre os quais também todos nós andávamos outrora, (...) e éramos, por natureza, filhos da ira, como também os demais.',
        version: 'ARA',
        keyWords: ['natureza', 'filhos da ira', 'demais'],
      },
    ],
  },

  // =========================================================================
  // BLOCO 4: O REDENTOR JESUS CRISTO (P. 20 a 28)
  // =========================================================================
  {
    id: 'o-redentor-e-seus-oficios',
    division: 'o-redentor-cristo',
    title: 'O Único Redentor, Sua Pessoa e Seus Três Ofícios',
    questionRange: 'Perguntas 20 a 28',
    cfwChapter: 'CFW Cap. VII (Do Pacto de Deus com o Homem) e Cap. VIII (De Cristo o Mediador)',
    summary:
      'Deus não deixou o homem perecer na miséria, mas estabeleceu o Pacto da Graça para salvar os eleitos por um Redentor. O Senhor Jesus Cristo é o eterno Filho de Deus, que se fez homem com duas naturezas perfeitas, e desempenha para nós os ofícios de Profeta, Sacerdote e Rei.',
    historicalContext: {
      period: 'Cristologia Reformada Westminsteriana',
      details:
        'A estrutura dos ofícios de Cristo (Munus Triplex) e a transição entre seu estado de humilhação (nascimento, paixão e sepulcro) e exaltação (ressurreição, ascensão e volta triunfal).',
      authors: ['João Calvino', 'Assembleia de Westminster', 'John Owen'],
    },
    questions: [
      {
        number: 21,
        question: 'Quem é o Redentor dos eleitos de Deus?',
        answer: 'O único Redentor dos eleitos de Deus é o Senhor Jesus Cristo que, sendo o eterno Filho de Deus, se fez homem, e assim foi e continua a ser Deus e homem em duas naturezas distintas e uma só pessoa, para sempre.',
      },
      {
        number: 23,
        question: 'Quais são os ofícios que Cristo executa como nosso Redentor?',
        answer: 'Cristo, como nosso Redentor, executa os ofícios de profeta, de sacerdote e de rei, tanto no seu estado de humilhação como no de exaltação.',
      },
      {
        number: 25,
        question: 'Como Cristo executa o ofício de sacerdote?',
        answer: 'Cristo executa o ofício de sacerdote, oferecendo-se a si mesmo uma vez em sacrifício para satisfazer a justiça divina e reconciliar-nos com Deus, e fazendo contínua intercessão por nós.',
      },
      {
        number: 26,
        question: 'Como Cristo executa o ofício de rei?',
        answer: 'Cristo executa o ofício de rei, sujeitando-nos a si mesmo, governando-nos e protegendo-nos, e contendo e conquistando todos os seus e os nossos inimigos.',
      },
    ],
    verses: [
      {
        id: '1tm-2-5',
        reference: '1 Timóteo 2:5',
        text: 'Porquanto há um só Deus e um só Mediador entre Deus e os homens, Cristo Jesus, homem.',
        version: 'ARA',
        keyWords: ['um só Deus', 'Mediador', 'Cristo Jesus', 'homem'],
      },
      {
        id: 'hb-7-25',
        reference: 'Hebreus 7:25',
        text: 'Por isso, também pode salvar totalmente os que por ele se aproximam de Deus, vivendo sempre para interceder por eles.',
        version: 'ARA',
        keyWords: ['salvar', 'totalmente', 'aproximam', 'interceder'],
      },
      {
        id: 'fp-2-8-9',
        reference: 'Filipenses 2:8-9',
        text: 'A si mesmo se humilhou, tornando-se obediente até à morte e morte de cruz. Pelo que também Deus o exaltou sobremaneira e lhe deu o nome que está sobre todo nome.',
        version: 'ARA',
        keyWords: ['humilhou', 'obediente', 'cruz', 'exaltou', 'nome sobre todo nome'],
      },
    ],
  },

  // =========================================================================
  // BLOCO 5: APLICAÇÃO DA REDENÇÃO (P. 29 a 38)
  // =========================================================================
  {
    id: 'ordem-da-salvacao-e-beneficios',
    division: 'aplicacao-da-redencao',
    title: 'A Ordo Salutis: Vocação, Justificação, Adoção e Santificação',
    questionRange: 'Perguntas 29 a 38',
    cfwChapter: 'CFW Caps. IX a XVIII e XXXII (Da Aplicação da Redenção até o Estado Intermediário)',
    summary:
      'O Espírito Santo aplica a redenção adquirida por Cristo operando em nós a fé pela vocação eficaz. Os justificados são perdoados pela justiça de Cristo imputada, recebem o direito de filhos de Deus (Adoção), são progressivamente renovados (Santificação) e na morte suas almas passam imediatamente para a glória.',
    historicalContext: {
      period: 'Soteriologia Puritana de Westminster',
      details:
        'A clareza incomparável da Pergunta 33 sobre Justificação como ato forense exclusivo da graça de Deus recebido unicamente pela fé.',
      authors: ['Assembleia de Westminster', 'Richard Sibbes', 'Thomas Watson'],
    },
    questions: [
      {
        number: 30,
        question: 'Como o Espírito nos aplica a redenção adquirida por Cristo?',
        answer: 'O Espírito aplica-nos a redenção adquirida por Cristo, operando em nós a fé, e unindo-nos a Cristo por meio dela na nossa vocação eficaz.',
      },
      {
        number: 33,
        question: 'O que é Justificação?',
        answer: 'A justificação é um ato da livre graça de Deus, no qual Ele perdoa todos os nossos pecados, e nos aceita como justos diante de si, somente pela justiça de Cristo imputada a nós, e recebida só pela fé.',
      },
      {
        number: 34,
        question: 'O que é Adoção?',
        answer: 'A adoção é um ato da livre graça de Deus, pelo qual somos recebidos no número dos filhos de Deus e temos direito a todos os seus privilégios.',
      },
      {
        number: 35,
        question: 'O que é Santificação?',
        answer: 'A santificação é a obra da livre graça de Deus, pela qual somos renovados em todo o nosso ser, segundo a imagem de Deus, e habilitados a morrer cada vez mais para o pecado e a viver para a retidão.',
      },
      {
        number: 37,
        question: 'Que benefícios os crentes recebem de Cristo na morte?',
        answer: 'As almas dos crentes são na morte aperfeiçoadas em santidade e passam imediatamente para a glória; e os seus corpos, estando ainda unidos a Cristo, descansam nas suas sepulturas até à ressurreição.',
      },
    ],
    verses: [
      {
        id: 'rm-5-1',
        reference: 'Romanos 5:1',
        text: 'Justificados, pois, mediante a fé, temos paz com Deus por meio de nosso Senhor Jesus Cristo.',
        version: 'ARA',
        keyWords: ['Justificados', 'fé', 'paz com Deus', 'Jesus Cristo'],
      },
      {
        id: '2co-5-21',
        reference: '2 Coríntios 5:21',
        text: 'Aquele que não conheceu pecado, ele o fez pecado por nós; para que, nele, fôssemos feitos justiça de Deus.',
        version: 'ARA',
        keyWords: ['não conheceu pecado', 'fez pecado', 'justiça de Deus'],
      },
      {
        id: '1jo-3-1',
        reference: '1 João 3:1',
        text: 'Vede que grande amor nos tem concedido o Pai, a ponto de sermos chamados filhos de Deus; e, de fato, somos.',
        version: 'ARA',
        keyWords: ['grande amor', 'Pai', 'filhos de Deus'],
      },
      {
        id: 'fp-1-23',
        reference: 'Filipenses 1:23',
        text: 'Mas de ambos os lados estou em aperto, tendo desejo de partir e estar com Cristo, o que é incomparavelmente melhor.',
        version: 'ARA',
        keyWords: ['partir', 'estar com Cristo', 'incomparavelmente melhor'],
      },
    ],
  },

  // =========================================================================
  // BLOCO 6: A LEI MORAL E OS DEZ MANDAMENTOS (P. 39 a 84)
  // =========================================================================
  {
    id: 'a-lei-moral-e-o-decalogo',
    division: 'a-lei-moral',
    title: 'A Lei Moral de Deus: Os Dez Mandamentos (Decálogo)',
    questionRange: 'Perguntas 39 a 84',
    cfwChapter: 'CFW Cap. XIX (Da Lei de Deus) e Cap. XX (Da Liberdade Cristã)',
    summary:
      'O dever que Deus requer do homem é a obediência à sua vontade revelada na Lei Moral, resumida nos Dez Mandamentos. A primeira tábua (1º ao 4º) ensina o amor e culto a Deus; a segunda tábua (5º ao 10º) ensina o amor e justiça para com o próximo. Nenhum mero homem nesta vida é capaz de guardar perfeitamente a lei.',
    historicalContext: {
      period: 'A Terceira Função da Lei (Tertius Usus Legis)',
      details:
        'Na teologia reformada, a Lei não é meio de justificação, mas a regra perpétua de gratidão e santificação para o crente remido.',
      authors: ['Assembleia de Westminster', 'João Calvino', 'Thomas Watson (*Os Dez Mandamentos*)'],
    },
    questions: [
      {
        number: 39,
        question: 'Qual é o dever que Deus requer do homem?',
        answer: 'O dever que Deus requer do homem é a obediência à sua vontade revelada.',
      },
      {
        number: 41,
        question: 'Onde está a lei moral resumida?',
        answer: 'A lei moral está resumida nos dez mandamentos.',
      },
      {
        number: 42,
        question: 'Qual é o resumo dos dez mandamentos?',
        answer: 'O resumo dos dez mandamentos é amar ao Senhor nosso Deus de todo o nosso coração, de toda a nossa alma, de todas as nossas forças e de todo o nosso entendimento; e ao nosso próximo como a nós mesmos.',
      },
      {
        number: 82,
        question: 'É algum homem capaz de guardar perfeitamente os mandamentos de Deus?',
        answer: 'Nenhum mero homem, desde a queda, é capaz, nesta vida, de guardar perfeitamente os mandamentos de Deus; mas diariamente os transgride por pensamentos, palavras e ações.',
      },
    ],
    verses: [
      {
        id: 'mt-22-37-39',
        reference: 'Mateus 22:37-39',
        text: 'Respondeu-lhe Jesus: Amarás o Senhor, teu Deus, de todo o teu coração, de toda a tua alma e de todo o teu entendimento. Este é o grande e primeiro mandamento. O segundo, semelhante a este, é: Amarás o teu próximo como a ti mesmo.',
        version: 'ARA',
        keyWords: ['Amarás o Senhor', 'coração', 'alma', 'entendimento', 'próximo'],
      },
      {
        id: 'ex-20-2-3',
        reference: 'Êxodo 20:2-3',
        text: 'Eu sou o Senhor, teu Deus, que te tirei da terra do Egito, da casa da servidão. Não terás outros deuses diante de mim.',
        version: 'ARA',
        keyWords: ['Senhor teu Deus', 'Egito', 'Não terás outros deuses'],
      },
      {
        id: 'tg-2-10',
        reference: 'Tiago 2:10',
        text: 'Pois qualquer que guarda toda a lei, mas tropeça em um só ponto, se torna culpado de todos.',
        version: 'ARA',
        keyWords: ['guarda toda a lei', 'tropeça', 'um só ponto', 'culpado de todos'],
      },
    ],
  },

  // =========================================================================
  // BLOCO 7: OS MEIOS DE GRAÇA E SACRAMENTOS (P. 85 a 97)
  // =========================================================================
  {
    id: 'os-meios-de-graca-e-sacramentos',
    division: 'meios-de-graca-sacramentos',
    title: 'Os Meios Ordinários da Graça: A Palavra e os Sacramentos',
    questionRange: 'Perguntas 85 a 97',
    cfwChapter: 'CFW Caps. XXVII, XXVIII e XXIX (Dos Sacramentos, do Batismo e da Ceia do Senhor)',
    summary:
      'Para escapar da ira e maldição devidas pelo pecado, Deus requer de nós fé em Jesus Cristo e arrependimento para a vida. Ele nos comunica os benefícios da redenção pelos meios externos da graça: a pregação da Palavra, os sacramentos (Batismo e Santa Ceia) e a oração.',
    historicalContext: {
      period: 'Eclesiologia e Pactualismo Presbiteriano',
      details:
        'Rejeição da eficácia ex opere operato de Roma: os sacramentos não operam por poder intrínseco, mas pela ação do Espírito Santo recebida mediante a fé.',
      authors: ['Assembleia de Westminster', 'Robert Bruce', 'João Calvino'],
    },
    questions: [
      {
        number: 85,
        question: 'O que Deus requer de nós para que possamos escapar da sua ira e maldição devidas pelo pecado?',
        answer: 'Para que possamos escapar da ira e maldição de Deus devidas pelo pecado, Deus requer de nós fé em Jesus Cristo e arrependimento para a vida, com o uso diligente de todos os meios exteriores pelos quais Cristo nos comunica os benefícios da redenção.',
      },
      {
        number: 88,
        question: 'Quais são os meios exteriores e ordinários pelos quais Cristo nos comunica os benefícios da redenção?',
        answer: 'Os meios exteriores e ordinários pelos quais Cristo nos comunica os benefícios da redenção são as suas ordenanças, especialmente a Palavra, os sacramentos e a oração; as quais todas se tornam eficazes para os eleitos para a sua salvação.',
      },
      {
        number: 92,
        question: 'O que é um sacramento?',
        answer: 'Um sacramento é uma santa ordenança instituída por Cristo, na qual, por sinais sensíveis, Cristo e os benefícios do novo pacto são representados, selados e aplicados aos crentes.',
      },
      {
        number: 95,
        question: 'A quem deve ser administrado o batismo?',
        answer: 'O batismo não deve ser administrado a ninguém fora da igreja visível, até que professe a sua fé em Cristo e obediência a Ele; mas os filhos daqueles que são membros da igreja visível devem ser batizados.',
      },
      {
        number: 96,
        question: 'O que é a Ceia do Senhor?',
        answer: 'A Ceia do Senhor é um sacramento no qual, dando-se e recebendo-se pão e vinho segundo a instituição de Cristo, a sua morte é anunciada, e os participantes dignos tornam-se, não de uma maneira corporal e carnal, mas pela fé, participantes do seu corpo e sangue.',
      },
    ],
    verses: [
      {
        id: 'rm-10-17',
        reference: 'Romanos 10:17',
        text: 'E, assim, a fé é pelo ouvir, e o ouvir pela palavra de Cristo.',
        version: 'ARA',
        keyWords: ['fé', 'ouvir', 'palavra de Cristo'],
      },
      {
        id: 'at-2-39',
        reference: 'Atos 2:39',
        text: 'Pois para vós outros é a promessa, para vossos filhos e para todos os que ainda estão longe, a quantos o Senhor, nosso Deus, chamar.',
        version: 'ARA',
        keyWords: ['promessa', 'vossos filhos', 'longe', 'Senhor chamar'],
      },
      {
        id: '1co-11-26',
        reference: '1 Coríntios 11:26',
        text: 'Porque, todas as vezes que comerdes deste pão e beberdes do cálice, anunciais a morte do Senhor, até que ele venha.',
        version: 'ARA',
        keyWords: ['pão', 'cálice', 'anunciais', 'morte do Senhor', 'venha'],
      },
    ],
  },

  // =========================================================================
  // BLOCO 8: A ORAÇÃO E O PAI NOSSO (P. 98 a 107)
  // =========================================================================
  {
    id: 'a-oracao-e-o-pai-nosso',
    division: 'a-oracao-dominical',
    title: 'A Oração Eficaz e a Oração Dominical (O Pai Nosso)',
    questionRange: 'Perguntas 98 a 107',
    cfwChapter: 'CFW Cap. XXI (Do Culto Religioso e do Domingo)',
    summary:
      'A oração é o oferecimento dos nossos desejos a Deus por coisas conformes com a sua vontade, em nome de Cristo, com confissão de nossos pecados e reconhecimento de suas misericórdias. A regra especial de oração deixada por Cristo é a Oração Dominical (o Pai Nosso).',
    historicalContext: {
      period: 'Piedade e Liturgia Reformada de Westminster',
      details:
        'As perguntas 98 a 107 explicam o prefácio ("Pai nosso que estás nos céus"), as seis petições (glória, reino, vontade, pão, perdão, livramento) e a solene conclusão doxológica.',
      authors: ['Assembleia de Westminster', 'João Calvino', 'Thomas Watson (*A Oração do Senhor*)'],
    },
    questions: [
      {
        number: 98,
        question: 'O que é a oração?',
        answer: 'A oração é o oferecimento dos nossos desejos a Deus, por coisas conformes com a sua vontade, em nome de Cristo, com a confissão dos nossos pecados, e um grato reconhecimento das suas misericórdias.',
      },
      {
        number: 99,
        question: 'Qual a regra que Deus nos deu para nossa direção na oração?',
        answer: 'Toda a Palavra de Deus é útil para nos dirigir na oração; mas a regra especial de direção é aquela forma de oração que Cristo ensinou aos seus discípulos, comumente chamada a Oração do Senhor.',
      },
      {
        number: 100,
        question: 'O que nos ensina o prefácio da Oração do Senhor?',
        answer: 'O prefácio da Oração do Senhor, que é: "Pai nosso que estás nos céus", ensina-nos a aproximar-nos de Deus com toda a santa reverência e confiança, como filhos a um pai poderoso e pronto a nos ajudar.',
      },
      {
        number: 107,
        question: 'O que nos ensina a conclusão da Oração do Senhor?',
        answer: 'A conclusão da Oração do Senhor, que é: "Pois teu é o reino, o poder e a glória para sempre. Amém", ensina-nos a buscar somente em Deus a nossa motivação na oração, e a louvá-lo somente atribuindo a Ele reino, poder e glória.',
      },
    ],
    verses: [
      {
        id: 'fp-4-6',
        reference: 'Filipenses 4:6',
        text: 'Não andeis ansiosos de coisa alguma; em tudo, porém, sejam conhecidas, diante de Deus, as vossas petições, pela oração e pela súplica, com ações de graças.',
        version: 'ARA',
        keyWords: ['não andeis ansiosos', 'petições', 'oração', 'súplica', 'ações de graças'],
      },
      {
        id: 'mt-6-9-13',
        reference: 'Mateus 6:9-10',
        text: 'Portanto, vós orareis assim: Pai nosso, que estás nos céus, santificado seja o teu nome; venha o teu reino; faça-se a tua vontade, assim na terra como no céu.',
        version: 'ARA',
        keyWords: ['Pai nosso', 'céus', 'santificado', 'venha o teu reino', 'tua vontade'],
      },
      {
        id: '1jo-5-14',
        reference: '1 João 5:14',
        text: 'E esta é a confiança que temos para com ele: que, se pedirmos alguma coisa segundo a sua vontade, ele nos ouve.',
        version: 'ARA',
        keyWords: ['confiança', 'pedirmos', 'segundo a sua vontade', 'ele nos ouve'],
      },
    ],
  },
];
