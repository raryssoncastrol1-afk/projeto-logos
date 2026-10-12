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
    description: 'A existência, os atributos divinos, a Trindade, os decretos eternos, a criação e a providência.',
    color: 'from-amber-600 to-amber-900',
  },
  {
    id: 'antropologia',
    title: 'A Doutrina do Homem',
    latinName: 'Anthropologia',
    berkhofOrder: 2,
    description: 'O homem no estado de integridade, a Queda, a depravação total, o Pacto das Obras e o Pacto da Graça.',
    color: 'from-orange-600 to-red-950',
  },
  {
    id: 'cristologia',
    title: 'A Pessoa e Obra de Cristo',
    latinName: 'Christologia',
    berkhofOrder: 3,
    description: 'A união hipostática, os ofícios (Profeta, Sacerdote e Rei) e a expiação definida vicária.',
    color: 'from-emerald-600 to-teal-950',
  },
  {
    id: 'soteriologia',
    title: 'A Aplicação da Redenção',
    latinName: 'Soteriologia',
    berkhofOrder: 4,
    description: 'A ordem da salvação: vocação eficaz, regeneração, fé, justificação, santificação e perseverança.',
    color: 'from-blue-600 to-indigo-950',
  },
  {
    id: 'eclesiologia',
    title: 'A Igreja e os Meios de Graça',
    latinName: 'Ecclesiologia',
    berkhofOrder: 5,
    description: 'A natureza da Igreja invisível e visível, o governo presbiteriano, a pregação da Palavra e os Sacramentos.',
    color: 'from-purple-600 to-violet-950',
  },
  {
    id: 'escatologia',
    title: 'As Últimas Coisas',
    latinName: 'Eschatologia',
    berkhofOrder: 6,
    description: 'A morte física, a ressurreição, o julgamento universal, a segunda vinda visível e o estado eterno.',
    color: 'from-rose-600 to-slate-950',
  },
];

export const DOCTRINES_DATA: Doctrine[] = [
  // =========================================================================
  // 1. TEOLOGIA PRÓPRIA (A DOUTRINA DE DEUS)
  // =========================================================================
  {
    id: 'decretos-e-eleicao',
    locus: 'teologia-propria',
    title: 'A Soberania de Deus e os Decretos Eternos',
    berkhofSection: 'Parte 1: A Doutrina de Deus - Cap. V: Os Decretos Divinos',
    westminsterRef: 'CFW Cap. III | BCW Perguntas 7 e 8',
    summary:
      'Desde toda a eternidade, Deus, pelo mui sábio e santo conselho da sua própria vontade, ordenou livre e inalteravelmente tudo quanto acontece, sem ser o autor do pecado nem violar a vontade secundária das criaturas.',
    historicalOrigin: {
      period: 'Patrística e Reforma Protestante (Séc. V e XVI)',
      originContext:
        'Sistematizado contra o pelagianismo por Agostinho de Hipona no séc. V, resgatado por João Calvino nas Institutas e formalizado nos Cânones de Dort contra o Remonstrante Arminiano.',
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
    westminsterRef: 'CFW Cap. II.3 | BCW Pergunta 6',
    summary:
      'Na unidade da Divindade há três pessoas de uma mesma substância, poder e eternidade: Deus o Pai, Deus o Filho e Deus o Espírito Santo. O Pai não é gerado; o Filho é eternamente gerado do Pai; o Espírito Santo procede eternamente do Pai e do Filho.',
    historicalOrigin: {
      period: 'Era Conciliar dos Primeiros Séculos (325 - 381 d.C.)',
      originContext:
        'Defendida contra o arianismo e o sabelianismo nos Concílios Ecumênicos de Niceia (325) e Constantinopla (381), sob a pena de Atanásio de Alexandria e dos Padres Capadócios.',
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
  {
    id: 'providencia-divina',
    locus: 'teologia-propria',
    title: 'A Santa Providência de Deus',
    berkhofSection: 'Parte 1: A Doutrina de Deus - Cap. VIII: A Providência',
    westminsterRef: 'CFW Cap. V | BCW Pergunta 11',
    summary:
      'Deus, o grande Criador de todas as coisas, pela sua mui sábia e santa providência, sustenta, dirige, dispõe e governa todas as criaturas, ações e coisas, desde a maior até à menor, para o louvor da glória da sua graça.',
    historicalOrigin: {
      period: 'Reforma Protestante e Escolástica Reformada',
      originContext:
        'Distinção crucial reformada entre Providência Geral e Providência Especial, rechaçando tanto o deísmo (Deus distante) quanto o fatalismo estóico.',
      keyFigures: ['João Calvino (Institutas I.16-18)', 'Ulrico Zuínglio', 'Francis Turretin'],
      confessions: [
        'Confissão de Fé de Westminster (Cap. V)',
        'Catecismo de Heidelberg (Domingos 9 e 10)',
        'Confissão Belga (Art. 13)',
      ],
    },
    verses: [
      {
        id: 'mt-10-29-31',
        reference: 'Mateus 10:29-31',
        text: 'Não se vendem dois passarinhos por um asse? E nenhum deles cairá em terra sem o consentimento de vosso Pai. E, quanto a vós outros, até os cabelos todos da cabeça estão contados. Não temais, pois! Bem mais valeis vós do que muitos passarinhos.',
        version: 'ARA',
        keyWords: ['passarinhos', 'cairá', 'consentimento', 'Pai', 'cabelos', 'contados'],
      },
      {
        id: 'gn-50-20',
        reference: 'Gênesis 50:20',
        text: 'Vós, na verdade, intentastes o mal contra mim; porém Deus o tornou em bem, para fazer, como vedes agora, que se conserve com vida muita gente.',
        version: 'ARA',
        keyWords: ['intentastes', 'mal', 'Deus', 'bem', 'conserve', 'vida'],
      },
    ],
  },

  // =========================================================================
  // 2. ANTROPOLOGIA (A DOUTRINA DO HOMEM E DOS PACTOS)
  // =========================================================================
  {
    id: 'pacto-das-obras-e-graca',
    locus: 'antropologia',
    title: 'A Teologia do Pacto: Obras e Graça',
    berkhofSection: 'Parte 2: A Doutrina do Homem - Cap. II e Cap. VI: O Pacto das Obras e da Graça',
    westminsterRef: 'CFW Cap. VII | BCW Perguntas 12 e 20',
    summary:
      'A distância entre Deus e a criatura é tão grande que o homem jamais poderia gozar dele como sua bem-aventurança sem uma voluntária condescendência da parte de Deus, a qual a Ele aprouve manifestar por meio de um Pacto (primeiro o Pacto das Obras em Adão, e depois o Pacto da Graça em Cristo).',
    historicalOrigin: {
      period: 'Teologia Federal / Reformada Pactual (Séculos XVI e XVII)',
      originContext:
        'Desenvolvida por Johannes Cocceius, Zacharias Ursinus e consolidada na Assembleia de Westminster como a espinha dorsal de toda a teologia presbiteriana.',
      keyFigures: ['Zacharias Ursinus', 'Caspar Olevianus', 'Herman Witsius', 'O. Palmer Robertson'],
      confessions: [
        'Confissão de Fé de Westminster (Cap. VII)',
        'Catecismo Maior de Westminster (P. 30-36)',
      ],
    },
    verses: [
      {
        id: 'os-6-7',
        reference: 'Oséias 6:7',
        text: 'Mas eles, como Adão, transgrediram a aliança; ali se portaram aleivosamente contra mim.',
        version: 'ARA',
        keyWords: ['Adão', 'transgrediram', 'aliança', 'aleivosamente'],
      },
      {
        id: 'rm-5-18-19',
        reference: 'Romanos 5:19',
        text: 'Porque, como, pela desobediência de um só homem, muitos se tornaram pecadores, assim também, por meio da obediência de um só, muitos se tornarão justos.',
        version: 'ARA',
        keyWords: ['desobediência', 'pecadores', 'obediência', 'justos'],
      },
      {
        id: 'jr-31-33',
        reference: 'Jeremias 31:33',
        text: 'Porque esta é a aliança que firmarei com a casa de Israel, depois daqueles dias, diz o Senhor: Na mente, lhes imprimirei as minhas leis, também no coração lhas inscreverei; eu serei o seu Deus, e eles serão o meu povo.',
        version: 'ARA',
        keyWords: ['aliança', 'mente', 'leis', 'coração', 'Deus', 'povo'],
      },
    ],
  },
  {
    id: 'depravacao-total',
    locus: 'antropologia',
    title: 'A Queda e a Depravação Total (Incapacidade Moral)',
    berkhofSection: 'Parte 2: A Doutrina do Homem - Cap. IV: O Pecado na Vida da Raça Humana',
    westminsterRef: 'CFW Cap. VI | BCW Perguntas 13 a 19',
    summary:
      'Pela transgressão original, os nossos primeiros pais caíram da sua retidão e comunhão com Deus, e ficaram inteiramente corrompidos em todas as faculdades e partes do corpo e da alma, transmitindo essa culpa e poluição a toda a sua posteridade.',
    historicalOrigin: {
      period: 'Controvérsia Pelagiana e Reforma (410 d.C. e 1618)',
      originContext:
        'Defendida por Agostinho contra Pelágio, revitalizada na Reforma (Lutero em "Nascido Escravo") e codificada como o primeiro ponto (T) dos Cânones de Dort.',
      keyFigures: ['Agostinho', 'Martinho Lutero', 'Herman Bavinck', 'Louis Berkhof'],
      confessions: [
        'Cânones de Dort (Cap. III/IV)',
        'Confissão de Fé de Westminster (Cap. VI)',
        'Catecismo de Heidelberg (D. 3-8)',
      ],
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
        id: 'ef-2-1',
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

  // =========================================================================
  // 3. CRISTOLOGIA (A PESSOA E OBRA DO MEDIADOR)
  // =========================================================================
  {
    id: 'uniao-hipostatica',
    locus: 'cristologia',
    title: 'A União Hipostática: Duas Naturezas em Uma Pessoa',
    berkhofSection: 'Parte 3: A Pessoa e Obra de Cristo - Cap. II: As Duas Naturezas de Cristo',
    westminsterRef: 'CFW Cap. VIII.2 | BCW Pergunta 21',
    summary:
      'O Filho de Deus tomou sobre si a natureza humana, com todas as suas propriedades essenciais e enfermidades comuns, contudo sem pecado. Duas naturezas inteiras, perfeitas e distintas foram inseparavelmente unidas em uma só pessoa, sem conversão, composição ou confusão.',
    historicalOrigin: {
      period: 'Concílio Ecumênico de Calcedônia (451 d.C.)',
      originContext:
        'A Definição de Calcedônia estabeleceu o padrão perene contra o nestorianismo (separação excessiva) e o monofisismo de Eutiques (mistura das naturezas).',
      keyFigures: ['Leão Magno', 'Cirilo de Alexandria', 'João Calvino', 'B. B. Warfield'],
      confessions: [
        'Definição de Calcedônia (451)',
        'Confissão de Fé de Westminster (Cap. VIII.2)',
        'Segunda Confissão Helvética (Cap. XI)',
      ],
    },
    verses: [
      {
        id: 'jo-1-14',
        reference: 'João 1:14',
        text: 'E o Verbo se fez carne e habitou entre nós, cheio de graça e de verdade, e vimos a sua glória, glória como do unigênito do Pai.',
        version: 'ARA',
        keyWords: ['Verbo', 'carne', 'habitou', 'graça', 'glória', 'unigênito'],
      },
      {
        id: '1tm-2-5',
        reference: '1 Timóteo 2:5',
        text: 'Porquanto há um só Deus e um só Mediador entre Deus e os homens, Cristo Jesus, homem.',
        version: 'ARA',
        keyWords: ['um só Deus', 'Mediador', 'Cristo Jesus', 'homem'],
      },
      {
        id: 'cl-2-9',
        reference: 'Colossenses 2:9',
        text: 'Porquanto, nele, habita corporalmente toda a plenitude da Divindade.',
        version: 'ARA',
        keyWords: ['habita', 'corporalmente', 'plenitude', 'Divindade'],
      },
    ],
  },
  {
    id: 'oficios-de-cristo',
    locus: 'cristologia',
    title: 'O Tríplice Ofício: Profeta, Sacerdote e Rei (Munus Triplex)',
    berkhofSection: 'Parte 3: A Pessoa e Obra de Cristo - Cap. V: Os Ofícios de Cristo',
    westminsterRef: 'CFW Cap. VIII.1 | BCW Perguntas 23 a 26',
    summary:
      'Para executar o encargo de nosso Redentor, Cristo exerce os ofícios de Profeta (revelando-nos a vontade de Deus), de Sacerdote (oferecendo-se em sacrifício e intercedendo perpetuamente) e de Rei (subjugando-nos a si, governando e defendendo a sua Igreja).',
    historicalOrigin: {
      period: 'Reforma de Genebra e Catecismo de Heidelberg (1563)',
      originContext:
        'Sistematizado com maestria nas Institutas de Calvino (Livro II, Cap. 15) como a chave interpretativa de toda a obra redentora de Jesus no Antigo e Novo Testamento.',
      keyFigures: ['João Calvino', 'Zacharias Ursinus', 'Eusébio de Cesareia'],
      confessions: [
        'Catecismo de Heidelberg (Pergunta 31)',
        'Breve Catecismo de Westminster (P. 23-26)',
        'Catecismo Maior de Westminster (P. 42-45)',
      ],
    },
    verses: [
      {
        id: 'hb-1-1-2',
        reference: 'Hebreus 1:1-2',
        text: 'Havendo Deus, outrora, falado, muitas vezes e de muitas maneiras, aos pais, pelos profetas, nestes últimos dias, nos falou pelo Filho, a quem constituiu herdeiro de todas as coisas, pelo qual também fez o universo.',
        version: 'ARA',
        keyWords: ['falado', 'profetas', 'Filho', 'herdeiro', 'universo'],
      },
      {
        id: 'hb-7-24-25',
        reference: 'Hebreus 7:25',
        text: 'Por isso, também pode salvar totalmente os que por ele se aproximam de Deus, vivendo sempre para interceder por eles.',
        version: 'ARA',
        keyWords: ['salvar', 'totalmente', 'aproximam', 'interceder'],
      },
      {
        id: 'ap-19-16',
        reference: 'Apocalipse 19:16',
        text: 'Tem no seu manto e na sua coxa um nome inscrito: REI DOS REIS E SENHOR DOS SENHORES.',
        version: 'ARA',
        keyWords: ['manto', 'nome', 'REI DOS REIS', 'SENHOR DOS SENHORES'],
      },
    ],
  },
  {
    id: 'expiacao-definida',
    locus: 'cristologia',
    title: 'A Expiação Definida e Eficaz (Redenção Particular)',
    berkhofSection: 'Parte 3: A Pessoa e Obra de Cristo - Cap. VII: A Extensão da Expiação',
    westminsterRef: 'CFW Cap. VIII.5 e VIII.8 | Cânones de Dort Cap. II',
    summary:
      'A morte expiatória de Cristo foi desenhada com valor infinito e com o propósito específico e infalível de redimir todos os eleitos dados a Ele pelo Pai, garantindo-lhes plena reconciliação, fé e vida eterna.',
    historicalOrigin: {
      period: 'Controvérsia Remonstrante (Séc. XVII)',
      originContext:
        'Defendida por John Owen em "A Morte da Morte na Morte de Cristo" e oficializada no segundo ponto dos Cânones de Dort (1618-1619).',
      keyFigures: ['John Owen', 'João Calvino', 'B. B. Warfield', 'Francis Turretin'],
      confessions: [
        'Cânones de Dort (Cap. II)',
        'Confissão de Fé de Westminster (Cap. VIII)',
      ],
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

  // =========================================================================
  // 4. SOTERIOLOGIA (A APLICAÇÃO DA REDENÇÃO)
  // =========================================================================
  {
    id: 'vocacao-eficaz-e-regeneracao',
    locus: 'soteriologia',
    title: 'A Vocação Eficaz e a Regeneração Soberana',
    berkhofSection: 'Parte 4: A Doutrina da Aplicação da Redenção - Cap. II e Cap. IV',
    westminsterRef: 'CFW Cap. X | BCW Perguntas 29 a 31',
    summary:
      'Todos aqueles que Deus predestinou para a vida, apraz-lhe, no seu tempo determinado, chamar eficazmente pela sua Palavra e pelo seu Espírito para fora daquele estado de pecado e morte em que estão por natureza, iluminando-lhes a mente e renovando-lhes a vontade.',
    historicalOrigin: {
      period: 'Sínodo de Dort e Teologia Puritana (1618 e 1647)',
      originContext:
        'A Graça Irresistível (I do TULIP): a regeneração precede a fé — o Espírito Santo infunde nova vida espiritual no coração do pecador morto.',
      keyFigures: ['João Calvino', 'John Flavel', 'Jonathan Edwards', 'Charles Hodge'],
      confessions: [
        'Confissão de Fé de Westminster (Cap. X)',
        'Cânones de Dort (Cap. III/IV.11-12)',
        'Catecismo Maior de Westminster (P. 67)',
      ],
    },
    verses: [
      {
        id: 'ez-36-26',
        reference: 'Ezequiel 36:26',
        text: 'Dar-vos-ei coração novo e porei dentro de vós espírito novo; tirarei de vós o coração de pedra e vos darei coração de carne.',
        version: 'ARA',
        keyWords: ['coração novo', 'espírito novo', 'pedra', 'carne'],
      },
      {
        id: 'jo-6-44',
        reference: 'João 6:44',
        text: 'Ninguém pode vir a mim se o Pai, que me enviou, não o trouxer; e eu o ressuscitarei no último dia.',
        version: 'ARA',
        keyWords: ['Ninguém', 'pode vir', 'Pai', 'trouxer', 'ressuscitarei'],
      },
      {
        id: 'jo-3-3',
        reference: 'João 3:3',
        text: 'A isto, respondeu Jesus: Em verdade, em verdade te digo que, se alguém não nascer de novo, não pode ver o reino de Deus.',
        version: 'ARA',
        keyWords: ['verdade', 'nascer de novo', 'ver', 'reino de Deus'],
      },
    ],
  },
  {
    id: 'justificacao-pela-fe',
    locus: 'soteriologia',
    title: 'A Justificação Somente pela Fé (Sola Fide)',
    berkhofSection: 'Parte 4: A Doutrina da Aplicação da Obra da Redenção - Cap. IX: A Justificação',
    westminsterRef: 'CFW Cap. XI | BCW Pergunta 33',
    summary:
      'A justificação é um ato judicial da livre graça de Deus pelo qual Ele perdoa todos os nossos pecados e nos aceita como justos perante Ele, não por qualquer virtude em nós, mas unicamente pela justiça perfeita e obediência de Cristo imputada a nós e recebida tão somente pela fé.',
    historicalOrigin: {
      period: 'Reforma Protestante do Século XVI (1517)',
      originContext:
        'O "articulus stantis vel cadentis ecclesiae" (artigo pelo qual a igreja permanece de pé ou cai). Rearticulado por Lutero e refinado juridicamente por Calvino em oposição à justificação por obras.',
      keyFigures: ['Martinho Lutero', 'João Calvino', 'Philip Melanchthon', 'Augustus Nicodemus'],
      confessions: [
        'Confissão de Fé de Westminster (Cap. XI)',
        'Catecismo de Heidelberg (D. 60)',
        '39 Artigos da Religião (Art. XI)',
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
    id: 'santificacao-e-boa-obras',
    locus: 'soteriologia',
    title: 'A Santificação e as Boas Obras',
    berkhofSection: 'Parte 4: A Doutrina da Aplicação da Redenção - Cap. X: A Santificação',
    westminsterRef: 'CFW Cap. XIII e XVI | BCW Pergunta 35',
    summary:
      'A santificação é a obra da livre graça de Deus pela qual somos renovados no homem interior segundo a imagem de Deus, e somos habilitados a morrer cada vez mais para o pecado e a viver para a retidão em obediência grata aos mandamentos de Deus.',
    historicalOrigin: {
      period: 'Teologia Puritana e Confessional Reformada',
      originContext:
        'Distingue claramente a justificação (instantânea e forense) da santificação (progressiva e transformadora), rejeitando tanto o legalismo quanto o antinomismo.',
      keyFigures: ['John Owen', 'João Calvino', 'J. C. Ryle', 'Louis Berkhof'],
      confessions: [
        'Confissão de Fé de Westminster (Cap. XIII e XVI)',
        'Catecismo de Heidelberg (Terceira Parte: Da Gratidão)',
      ],
    },
    verses: [
      {
        id: '1ts-4-3',
        reference: '1 Tessalonicenses 4:3',
        text: 'Pois esta é a vontade de Deus: a vossa santificação, que vos abstenhais da prostituição.',
        version: 'ARA',
        keyWords: ['vontade de Deus', 'santificação', 'abstenhais'],
      },
      {
        id: 'hb-12-14',
        reference: 'Hebreus 12:14',
        text: 'Segui a paz com todos e a santificação, sem a qual ninguém verá o Senhor.',
        version: 'ARA',
        keyWords: ['paz', 'santificação', 'ninguém', 'verá o Senhor'],
      },
      {
        id: 'ef-2-10',
        reference: 'Efésios 2:10',
        text: 'Pois somos feitura dele, criados em Cristo Jesus para boas obras, as quais Deus de antemão preparou para que andássemos nelas.',
        version: 'ARA',
        keyWords: ['feitura', 'criados', 'boas obras', 'preparou', 'andássemos'],
      },
    ],
  },
  {
    id: 'perseveranca-dos-santos',
    locus: 'soteriologia',
    title: 'A Preservação e Perseverança dos Santos',
    berkhofSection: 'Parte 4: A Doutrina da Aplicação da Redenção - Cap. XII: A Perseverança dos Santos',
    westminsterRef: 'CFW Cap. XVII | Cânones de Dort Cap. V | BCW Pergunta 36',
    summary:
      'Aqueles a quem Deus aceitou no seu Amado, eficazmente chamados e santificados pelo seu Espírito, não podem cair total nem finalmente do estado de graça, mas certamente nele perseverarão até o fim e serão eternamente salvos.',
    historicalOrigin: {
      period: 'Sínodo de Dort (1618-1619)',
      originContext:
        'O quinto ponto reformado (P do TULIP), alicerçado na imutabilidade do decreto divino, na eficácia do mérito e na intercessão contínua de Jesus Cristo.',
      keyFigures: ['João Calvino', 'Wilhelmus à Brakel', 'Louis Berkhof'],
      confessions: [
        'Cânones de Dort (Cap. V)',
        'Confissão de Fé de Westminster (Cap. XVII)',
      ],
    },
    verses: [
      {
        id: 'jo-10-28',
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

  // =========================================================================
  // 5. ECLESIOLOGIA (A IGREJA E OS MEIOS DE GRAÇA)
  // =========================================================================
  {
    id: 'marcas-da-igreja',
    locus: 'eclesiologia',
    title: 'A Verdadeira Igreja e as Marcas Confessionais',
    berkhofSection: 'Parte 5: A Doutrina da Igreja - Cap. III: O Governo e as Notas da Igreja',
    westminsterRef: 'CFW Cap. XXV | Confissão Belga Art. 29',
    summary:
      'A Igreja Católica ou Universal é invisível e compreende o número total dos eleitos. A Igreja visível consiste em todos aqueles que em todo o mundo professam a verdadeira religião, juntamente com seus filhos, e é identificada pela pregação fiel da Palavra, correta administração dos sacramentos e santa disciplina.',
    historicalOrigin: {
      period: 'Reforma Magisterial (Século XVI)',
      originContext:
        'Desenvolvida por Guido de Brès na Confissão Belga e Calvino nas Institutas para distinguir a igreja de Cristo das adulterações da cúria papal e do anabatismo sectário.',
      keyFigures: ['João Calvino', 'Guido de Brès', 'John Knox', 'Herman Bavinck'],
      confessions: [
        'Confissão Belga (Art. 29)',
        'Confissão Escocesa (Art. 18)',
        'Confissão de Fé de Westminster (Cap. XXV)',
      ],
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
  {
    id: 'governo-presbiteriano',
    locus: 'eclesiologia',
    title: 'O Governo Presbiteriano da Igreja (Oficiais Bíblicos)',
    berkhofSection: 'Parte 5: A Doutrina da Igreja - Cap. IV: O Governo da Igreja',
    westminsterRef: 'CFW Cap. XXX e XXXI | Manual Presbiteriano da IPB',
    summary:
      'Cristo, como único Rei e Cabeça de sua Igreja, instituiu um governo em mãos de oficiais da igreja: Presbíteros docentes (ministros/pastores), Presbíteros regentes (anciãos) e Diáconos, reunidos em conselhos e concílios representativos para o cuidado pastoral e ordem do rebanho.',
    historicalOrigin: {
      period: 'Reforma de Genebra e Assembleia de Westminster (1541 / 1645)',
      originContext:
        'Rejeição do episcopalismo hierárquico (governo de bispos/papas) e do congregacionalismo puro, resgatando o modelo sinodal do Concílio de Jerusalém (Atos 15).',
      keyFigures: ['João Calvino', 'John Knox', 'George Gillespie', 'Samuel Miller'],
      confessions: [
        'Forma de Governo Eclesiástico de Westminster (1645)',
        'Confissão de Fé de Westminster (Cap. XXX)',
        'Constituição da Igreja Presbiteriana do Brasil (CI/IPB)',
      ],
    },
    verses: [
      {
        id: 'tt-1-5',
        reference: 'Tito 1:5',
        text: 'Por esta causa, te deixei em Creta, para que pusesses em ordem as coisas restantes, bem como, em cada cidade, constituísses presbíteros, conforme te prescrevi.',
        version: 'ARA',
        keyWords: ['ordem', 'cidade', 'constituísses', 'presbíteros', 'prescrevi'],
      },
      {
        id: '1tm-5-17',
        reference: '1 Timóteo 5:17',
        text: 'Devem ser considerados merecedores de dobrados honorários os presbíteros que presidem bem, com especialidade os que se afadigam na palavra e no ensino.',
        version: 'ARA',
        keyWords: ['merecedores', 'presbíteros', 'presidem bem', 'palavra', 'ensino'],
      },
      {
        id: 'at-20-28',
        reference: 'Atos 20:28',
        text: 'Atendei por vós e por todo o rebanho sobre o qual o Espírito Santo vos constituiu bispos, para pastoreardes a igreja de Deus, a qual ele comprou com o seu próprio sangue.',
        version: 'ARA',
        keyWords: ['rebanho', 'Espírito Santo', 'bispos', 'pastoreardes', 'sangue'],
      },
    ],
  },
  {
    id: 'sacramentos-batismo-e-ceia',
    locus: 'eclesiologia',
    title: 'Os Sacramentos do Pacto: Batismo e a Ceia do Senhor',
    berkhofSection: 'Parte 5: Meios de Graça - Cap. VII, VIII e IX: Os Sacramentos',
    westminsterRef: 'CFW Cap. XXVII a XXIX | BCW Perguntas 91 a 97',
    summary:
      'Os sacramentos são santos sinais e selos do Pacto da Graça, instituídos diretamente por Cristo para representar a Ele e aos seus benefícios, e confirmar o nosso interesse nele. Sob o Novo Testamento, Cristo instituiu apenas dois: o Batismo (sinal de ingresso pactual, aplicável a crentes e seus filhos) e a Santa Ceia (alimento espiritual contínuo pela fé).',
    historicalOrigin: {
      period: 'Reforma Clássica contra Roma e o Zwinglianismo radical',
      originContext:
        'A visão calvinista afirma a presença espiritual real de Cristo pela fé operada pelo Espírito Santo (não transubstanciação romana nem mero memorialismo desprovido de eficácia).',
      keyFigures: ['João Calvino', 'Guido de Brès', 'Francis Turretin', 'Louis Berkhof'],
      confessions: [
        'Confissão de Fé de Westminster (Cap. XXVII-XXIX)',
        'Catecismo de Heidelberg (D. 25-30)',
        'Confissão Belga (Art. 33-35)',
      ],
    },
    verses: [
      {
        id: 'at-2-38-39',
        reference: 'Atos 2:39',
        text: 'Pois para vós outros é a promessa, para vossos filhos e para todos os que ainda estão longe, a quantos o Senhor, nosso Deus, chamar.',
        version: 'ARA',
        keyWords: ['promessa', 'vossos filhos', 'longe', 'Senhor', 'chamar'],
      },
      {
        id: '1co-11-23-26',
        reference: '1 Coríntios 11:26',
        text: 'Porque, todas as vezes que comerdes deste pão e beberdes do cálice, anunciais a morte do Senhor, até que ele venha.',
        version: 'ARA',
        keyWords: ['pão', 'cálice', 'anunciais', 'morte do Senhor', 'venha'],
      },
      {
        id: 'rm-4-11',
        reference: 'Romanos 4:11',
        text: 'E recebeu o sinal da circuncisão, como selo da justiça da fé que teve quando ainda incircunciso.',
        version: 'ARA',
        keyWords: ['recebeu', 'sinal', 'selo', 'justiça da fé'],
      },
    ],
  },

  // =========================================================================
  // 6. ESCATOLOGIA (AS ÚLTIMAS COISAS)
  // =========================================================================
  {
    id: 'estado-intermediario',
    locus: 'escatologia',
    title: 'A Morte Física e o Estado Intermediário',
    berkhofSection: 'Parte 6: As Últimas Coisas - Cap. I: A Escatologia Individual',
    westminsterRef: 'CFW Cap. XXXII.1 | BCW Pergunta 37',
    summary:
      'Os corpos dos homens, depois da morte, voltam ao pó; mas as suas almas (não morrendo nem dormindo), tendo uma subsistência imortal, voltam imediatamente para Deus que as deu: as almas dos justos são recebidas no mais alto céu onde veem a face de Deus, enquanto as dos ímpios são lançadas no inferno.',
    historicalOrigin: {
      period: 'Reforma Protestante contra o Purgatório e o Sono da Alma',
      originContext:
        'João Calvino escreveu sua primeira grande obra teológica em 1534 (*Psicopaniquia*) refutando o erro anabatista do sono das almas e a doutrina espúria do purgatório católico.',
      keyFigures: ['João Calvino (*Psicopaniquia*)', 'Francis Turretin', 'Geerhardus Vos'],
      confessions: [
        'Confissão de Fé de Westminster (Cap. XXXII)',
        'Segunda Confissão Helvética (Cap. XXVI)',
        'Catecismo de Heidelberg (D. 22)',
      ],
    },
    verses: [
      {
        id: 'fp-1-21-23',
        reference: 'Filipenses 1:21-23',
        text: 'Porquanto, para mim, o viver é Cristo, e o morrer é lucro. (...) Mas de ambos os lados estou em aperto, tendo desejo de partir e estar com Cristo, o que é incomparavelmente melhor.',
        version: 'ARA',
        keyWords: ['viver é Cristo', 'morrer é lucro', 'partir', 'estar com Cristo', 'melhor'],
      },
      {
        id: '2co-5-8',
        reference: '2 Coríntios 5:8',
        text: 'Entretanto, estamos em plena confiança, preferindo deixar o corpo e habitar com o Senhor.',
        version: 'ARA',
        keyWords: ['confiança', 'deixar o corpo', 'habitar com o Senhor'],
      },
      {
        id: 'lc-23-43',
        reference: 'Lucas 23:43',
        text: 'Jesus lhe respondeu: Em verdade te digo que hoje estarás comigo no paraíso.',
        version: 'ARA',
        keyWords: ['verdade', 'hoje', 'comigo', 'paraíso'],
      },
    ],
  },
  {
    id: 'segunda-vinda-e-juizo',
    locus: 'escatologia',
    title: 'A Parúsia de Cristo, a Ressurreição e a Consumação',
    berkhofSection: 'Parte 6: As Últimas Coisas - Cap. II a V: A Segunda Vinda e o Juízo Geral',
    westminsterRef: 'CFW Cap. XXXII e XXXIII | BCW Perguntas 38 e 107',
    summary:
      'No último dia, Cristo retornará pessoal e visivelmente em glória. Os mortos ressuscitarão com seus mesmos corpos; todos os homens comparecerão perante o tribunal de Cristo para prestar contas de seus pensamentos, palavras e ações; os ímpios irão para o castigo eterno e os justos para a vida eterna no novo céu e nova terra.',
    historicalOrigin: {
      period: 'Credos Ecumênicos e Confessionalismo Histórico',
      originContext:
        'A escatologia confessional reformada (predominantemente amilenista e pós-milenista clássica) centra-se na esperança bendita da consumação cósmica sob o reino pleno do Messias.',
      keyFigures: ['Agostinho', 'Geerhardus Vos', 'Anthony Hoekema', 'Louis Berkhof'],
      confessions: [
        'Credo dos Apóstolos',
        'Confissão de Fé de Westminster (Cap. XXXII e XXXIII)',
        'Catecismo Maior de Westminster (P. 86-90)',
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
        id: '2co-5-10',
        reference: '2 Coríntios 5:10',
        text: 'Porque importa que todos nós compareçamos perante o tribunal de Cristo, para que cada um receba segundo o bem ou o mal que tiver feito por meio do corpo.',
        version: 'ARA',
        keyWords: ['importa', 'compareçamos', 'tribunal de Cristo', 'receba', 'corpo'],
      },
    ],
  },
];
