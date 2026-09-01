import { Testimonial, CourseModule, BonusItem, FAQItem, DominoStep } from './types';

export const IMAGES = {
  heroVideo: 'https://lh3.googleusercontent.com/d/1GST_I3fpBdKL8gvITgXllktDt1BKvX2f',
  carlessa: 'https://lh3.googleusercontent.com/aida/AP1WRLs-aeQ4WdGRp2TLgr-MytBD0Yn6Fm5VlCnabGleFvSqwIYRPHueXMh6qBJCj4wjXPhhxW0LOcjdfeLvu-XF_ODn-agczVqYxoTKKqrs1njw63_GL2S_CVL9ys467-ubTDLjOpYehJKhZNQL6AE1fIpTtj4PF7IdIMy69LGy5W7JUxiUKE97RQZxSCnuRl1TeXMo9uRalTC4EgeU8ILkHaICP_vZpQfwgmUsxPtAd_eDTzArmCtURXv0venp',
  diana: 'https://lh3.googleusercontent.com/aida/AP1WRLv7rHoafLo1Q4KuDyQPEW7jypxNCzMdDY-Ong9aOtvVFW4hcIRWLFygbclhYu2zpn4id8PawTd_uCywsMW1mrp3saFFc6TP9sSl5gS57EpNtC7QE2i8UC6edloXBmLKMe2xRihiY8DNmVchmHoKXLLj624IdfzGiEqyheRo5lBkf5JqGqZYtKaserpM9gJJPl2I3hntrR_cKiyszm-Wxjxx2k8eC6uqQnUHnSzAJOHMnHtkU55kfLBQX3Qy',
  armanda: 'https://lh3.googleusercontent.com/aida/AP1WRLvN3AUPZtrb9KOh4MNmTqtxte5Ll-NY-W3jvdY9SqHrDC0x3mSbKgxS-aVHVa87bJHl2q3HQqF7yND270jjjpIPKJf9c0vSPuJTIkC3s_TayRKR7BoCjMyGHwLsP9z1vPE5LLCAJ9tUD0Vewds8PVCukvyMTMZScNcI8ERjwKWcA0RKwtZOatvZ0B5smJJ1KfkKDYA5HVs0FizBLUf2cmmT3D16KCP6ai4Y_Gdd_g4GM-Q-1LarbhQnUEk',
  screenshots: [
    'https://lh3.googleusercontent.com/d/1kB0PlenLmF8X6tyIPWaHXWOjvkdKW1pX',
    'https://lh3.googleusercontent.com/d/135vgmEPUdSX5pzEby2dpta4IkC9b73dC',
    'https://lh3.googleusercontent.com/d/1kW28EFW2hXdc5lMvIAvepc1oD_Sg-BNx',
    'https://lh3.googleusercontent.com/d/1MLE6BrVizlKYz7xUiByPMHxtw5ckssYs'
  ],
  effortImage: 'https://lh3.googleusercontent.com/aida/AP1WRLuDSJ0aX-21q8dyB3jkUIQrALrLl2z4ZWhFO8ZCyDtG1ieEwhaAh9J4vrqj75axpuM5SejeoPg0wdZ2kq-3cFjw9Ja5s8pVqv41FxRmkfepUmubSgzUNq6W7gYroFU1sMOOeNhkDbaio8J22trSe5p-YWhrIohyptNgg1ULz6kHsSnw06mBlYy9W5D-hvgCXRd95ZWchbbExEnj40ceY6Tg30ozjOy1OVfuF_Ce9LkjjajVOnya1WNu7HIw',
  mockup: 'https://lh3.googleusercontent.com/d/15C0wqln5c86wHDhXs0uyZxsoVJJAAWYW',
  draBetisa: 'https://lh3.googleusercontent.com/d/15C0wqln5c86wHDhXs0uyZxsoVJJAAWYW'
};

export const CHECKOUT_URL = 'https://pay.hotmart.com/A104102546S';

export const DOMINO_STEPS: DominoStep[] = [
  { id: '1', title: 'Ajuste no Jantar', icon: 'Utensils', description: 'Combinação inteligente de nutrientes no jantar.' },
  { id: '2', title: 'Regulação do Cortisol', icon: 'Activity', description: 'Redução do pico de cortisol noturno.' },
  { id: '3', title: 'Aumento da Melatonina', icon: 'Moon', description: 'Melhora da qualidade do sono reparador.' },
  { id: '4', title: 'Paz com a Comida', icon: 'Heart', description: 'Fim dos ataques de fome noturna e beliscos.' },
  { id: '5', title: 'Saciedade Natural', icon: 'TrendingDown', description: 'Despertar com saciedade e energia.', isResult: true }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Carlessa Paulino',
    age: 50,
    image: IMAGES.carlessa,
    stars: 5,
    quote: 'Depois que mudei meu jantar usando os 3 ajustes, acabo a noite saciada sem beliscar doces. Meu manequim baixou e sinto uma energia incrível ao acordar.',
    vimeoId: '1215996756',
    aspectRatio: 'vertical'
  },
  {
    id: '2',
    name: 'Diana Nunes',
    age: 65,
    image: IMAGES.diana,
    stars: 5,
    quote: 'Eu achava que o problema era meu café da manhã. Quando fiz os 3 ajustes no jantar, parei de sentir fome de madrugada e dormi feito um anjo.',
    vimeoId: '1216113523',
    aspectRatio: 'vertical'
  },
  {
    id: '3',
    name: 'Armanda Rocha',
    age: 48,
    image: IMAGES.armanda,
    stars: 5,
    quote: 'O protocolo do Jantar Anti-Fome foi um divisor de águas! Em poucas semanas parei de descarregar o estresse na comida à noite.',
    vimeoId: '1222883017',
    aspectRatio: 'vertical'
  }
];

export const WHY_IMPORTANT_POINTS = [
  {
    title: 'Reduz o cortisol noturno',
    desc: 'Cortisol alto avisa seu corpo pra guardar gordura e te devolver com fome dobrada no dia seguinte.'
  },
  {
    title: 'Aumenta melatonina',
    desc: 'Muito mais que sono, ela também age como antioxidante, protegendo a área do cérebro que regula sua fome. Quando essa área está "inflamada", os sinais de fome e saciedade se bagunçam e você sente fome mesmo tendo comido o suficiente.'
  },
  {
    title: 'Melhora o sono profundo',
    desc: 'É nele que a grelina (hormônio da fome) baixa e a leptina (hormônio da saciedade) volta a funcionar direito. Dormir mal bagunça essa dupla e no dia seguinte a fome parece maior, mesmo comendo a mesma quantidade de sempre.'
  },
  {
    title: 'Ativa o cérebro racional, não o compulsivo',
    desc: 'É por isso que, com o jantar errado, você toma decisões no impulso no dia seguinte. Não é falta de força de vontade.'
  },
  {
    title: 'Reduz a ansiedade, a vontade de doce e a comer emocional',
    desc: 'O carboidrato certo, na quantidade certa, leva triptofano até o cérebro pra virar serotonina, o hormônio do bem-estar. Sem essa conversão, o corpo busca esse alívio em outro lugar, geralmente no açúcar.'
  },
  {
    title: 'Acerta o relógio do seu corpo, não só o prato',
    desc: 'Comer certo na hora errada é dar o comando certo pro turno errado e sua fome, sono e metabolismo ficam trabalhando um contra o outro.'
  }
];

export const COURSE_MODULES: CourseModule[] = [
  {
    id: '1',
    number: 'Fase 1',
    title: 'Empratar, não Cozinhar',
    subtitle: 'Você vai aprender a lógica por trás do jantar anti-fome, sem depender de receitas, tempo ou da energia que você não tem.',
    color: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  },
  {
    id: '2',
    number: 'Fase 2',
    title: 'O Gatilho Certo',
    subtitle: 'Você vai entender os horários internos do seu corpo que funcionam como gatilhos e ajudam a reduzir a fome antes da primeira garfada.',
    color: 'bg-blue-50 text-blue-700 border-blue-200'
  },
  {
    id: '3',
    number: 'Fase 3',
    title: 'A Fórmula da Saciedade',
    subtitle: 'Você vai receber um cardápio estratégico de 7 dias e aprender a combinar os alimentos certos para controlar a fome, reduzir a compulsão e favorecer a produção dos hormônios da saciedade.',
    color: 'bg-purple-50 text-purple-700 border-purple-200'
  },
  {
    id: '4',
    number: 'Fase 4',
    title: 'Pós-Jantar',
    subtitle: 'Você vai aprender quais alimentos e estratégias ajudam a preparar o sistema digestivo para um sono reparador, além de favorecer o equilíbrio dos hormônios da fome, da queima de gordura e da manutenção da massa magra.',
    color: 'bg-amber-50 text-amber-700 border-amber-200'
  },
  {
    id: '5',
    number: 'Fase 5',
    title: 'Fora de Controle, Sob Controle',
    subtitle: 'Você vai aprender como manter o método mesmo em restaurantes, festas, viagens ou pedindo iFood, sem perder os resultados nem sentir que está de dieta.',
    color: 'bg-rose-50 text-rose-700 border-rose-200'
  }
];

export const BONUSES: BonusItem[] = [
  {
    id: 'b1',
    num: 1,
    title: '21 Receitas Anti-Fome',
    desc: 'Você vai receber 21 receitas práticas e saborosas para variar o jantar sem enjoar, mantendo a saciedade e o controle da fome.',
    value: 'R$ 67,00'
  },
  {
    id: 'b2',
    num: 2,
    title: '10 Receitas de Sobremesas Alinhadas com o Método',
    desc: 'Você vai aprender a preparar sobremesas que matam a vontade de doce sem comprometer a estratégia hormonal da noite.',
    value: 'R$ 47,00'
  },
  {
    id: 'b3',
    num: 3,
    title: 'Jejum Intermitente',
    desc: 'Você vai descobrir como usar diferentes protocolos de jejum de forma estratégica para controlar a fome, reduzir a compulsão e favorecer o equilíbrio hormonal.',
    value: 'R$ 97,00'
  },
  {
    id: 'b4',
    num: 4,
    title: 'Masterclass: O Mapa dos Alimentos',
    desc: 'Você vai identificar quais alimentos aumentam a fome, quais promovem saciedade, quais ajudam no equilíbrio hormonal e quais preparam o corpo para um sono reparador.',
    value: 'R$ 97,00'
  },
  {
    id: 'b5',
    num: 5,
    title: 'Planner "Jantar Anti-Fome — 7 Dias"',
    desc: 'Você vai organizar seus jantares de forma simples e acompanhar sua evolução aplicando o método todos os dias.',
    value: 'R$ 27,00'
  },
  {
    id: 'b6',
    num: 6,
    title: 'Guia de Suplementos para Fome e Ansiedade',
    desc: 'Você vai conhecer os suplementos que podem auxiliar no controle da fome, da ansiedade e da vontade de beliscar, entendendo quando eles fazem sentido.',
    value: 'R$ 97,00'
  },
  {
    id: 'b7',
    num: 7,
    title: 'Ebook de Receitas de Chás',
    desc: 'Você vai aprender combinações de chás que ajudam a relaxar, melhorar a qualidade do sono e reduzir a vontade de doces no período da noite.',
    value: 'R$ 67,00'
  }
];

export const FOR_WHOM_YES = [
  'Já perdeu a conta de quantas vezes acordou com fome antes da hora e quer entender a causa hormonal disso, não só "se esforçar mais"',
  'Já tentou dieta, remédio e nada durou a longo prazo, porque nenhum deles calculava o jantar certo',
  'Se pega descontando emoção na comida à noite e quer entender o que está por trás disso, não só se culpar de novo',
  'Acha que "comer saudável no jantar" é suficiente e não sabe que existe uma equação por trás disso',
  'Quer praticidade pra montar o jantar, mas sem abrir mão do resultado de emagrecimento saudável.',
  'Quer ativar os mesmos hormônios das canetas emagrecedoras (Monjauro, Ozempic) sem precisar investir R$ 4.000 por mês',
  'Quer viver o pós-menopausa com saúde e autoestima, entendendo o que realmente acontece com seus hormônios à noite',
  'Quer emagrecer sem sofrimento e não precisar emagrecer nunca mais.'
];

export const FOR_WHOM_NO = [
  'Está confortável com o seu peso e saúde',
  'Não tem episódios de fome fora de hora, beliscos ou compulsão',
  'Acredita que qualquer combinação "saudável" no jantar já é suficiente pra ativar saciedade real'
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Funciona mesmo se eu já tentei de tudo e nada deu certo antes?',
    answer: 'Sim, é justamente por isso que costuma funcionar. A maioria das dietas foca em restrição durante o dia e ignora o jantar, que é o momento que mais influencia seus hormônios de fome e sono.'
  },
  {
    id: 'faq-2',
    question: 'Preciso cozinhar todos os dias?',
    answer: 'Não. O método é sobre preparações práticas com sugestões para substituir a comida para quem prefere um lanche rápido ou mesmo um shake saboroso. Você ainda tem o Cardápio de 7 Dias e as 21 Receitas prontas pra quando quiser algo já resolvido.'
  },
  {
    id: 'faq-3',
    question: 'Serve pra mim mesmo se eu não for de dieta restritiva, só quero parar de beliscar e comer emocionalmente à noite?',
    answer: 'Sim, esse é o público que mais sente diferença rápido, porque o método trabalha nos hormônios que geram fome fora de hora e vontade de comer por ansiedade.'
  },
  {
    id: 'faq-4',
    question: 'Tenho restrição alimentar. Dá pra adaptar?',
    answer: 'Sim. A lógica é baseada em categorias de alimentos (proteína, fibra, carboidrato complexo), então dá pra adaptar mantendo a mesma equação.'
  },
  {
    id: 'faq-5',
    question: 'E se eu tiver jantar de trabalho, viagem ou evento social?',
    answer: 'A fase 5 é exatamente pra isso, manter a mesma estratégia em restaurante, evento, viagem ou iFood, sem sair do protocolo.'
  },
  {
    id: 'faq-6',
    question: 'Preciso comprar suplemento ou alimento caro?',
    answer: 'Não. O protocolo usa alimentos comuns. O Guia de Suplementos é um bônus opcional, não um requisito.'
  },
  {
    id: 'faq-7',
    question: 'Em quanto tempo eu sinto diferença?',
    answer: 'A maioria relata mudança na fome, no sono ou na vontade de beliscar já nos primeiros dias.'
  },
  {
    id: 'faq-8',
    question: 'Por quanto tempo eu tenho acesso ao método?',
    answer: 'Você tem acesso completo por 1 ano, podendo revisitar os módulos, cardápios e bônus sempre que precisar.'
  },
  {
    id: 'faq-9',
    question: 'E se não funcionar pra mim?',
    answer: 'Você tem 7 dias de garantia incondicional. Se não sentir diferença, é só mandar uma mensagem e devolvemos 100% do valor.'
  }
];
