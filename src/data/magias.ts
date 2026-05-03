export type CategoriaMagia = "Ofensiva" | "Defensiva" | "Controle" | "Suporte" | "Utilidade";

export type Magia = {
  id: string;
  nome: string;
  circulo: 1 | 2;
  custoBase: string;
  tipo: "Arcana" | "Divina" | "Universal";
  escola: string;
  categorias: CategoriaMagia[];
  fonte: string;
  arquivo: string;
  pagina: number;
  detalhes: string;
  resumo: string;
  aumentos: string[];
};

export const magias = [
  {
    "id": "abencoar-alimentos",
    "nome": "Abençoar Alimentos",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Transmutação",
    "categorias": [
      "Defensiva",
      "Utilidade"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 1,
    "detalhes": "Execução: padrão; Alcance: curto; Alvo: alimento para 1 criatura; Duração: cena.",
    "resumo": "Você purifica e abençoa uma porção de comida ou dose de bebida. Isso torna um alimento sujo, estragado ou envenenado próprio para consumo.",
    "aumentos": [
      "+1 PM: aumenta o número de alvos em +1.",
      "+1 PM: muda a duração para permanente, o alvo para 1 frasco com água e adiciona componente material (pó de prata no valor de T$ 5). Em vez do normal, cria um frasco de água benta."
    ]
  },
  {
    "id": "acalmar-animal",
    "nome": "Acalmar Animal",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Encantamento",
    "categorias": [
      "Utilidade"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 1,
    "detalhes": "Execução: padrão; Alcance: curto; Alvo: 1 animal; Duração: cena; Resistência: Vontade anula.",
    "resumo": "O animal fica prestativo em relação a você. Ele não fica sob seu controle, mas percebe suas palavras e ações da maneira mais favorável possível.",
    "aumentos": [
      "+1 PM: muda o alcance para médio.",
      "+1 PM: muda o alvo para 1 monstro ou espírito com Inteligência 1 ou 2.",
      "+2 PM: aumenta o número de alvos em +1.",
      "+5 PM: muda o alvo para 1 monstro ou espírito. Requer 3º círculo."
    ]
  },
  {
    "id": "acoite-flamejante",
    "nome": "Açoite Flamejante",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Convocação",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Ameaças de Arton",
    "arquivo": "magias ameaça.pdf",
    "pagina": 1,
    "detalhes": "Execução: padrão; Alcance: pessoal; Efeito: açoite de chamas criado em sua mão (veja texto); Duração: sustentada; Resistência: Reflexos reduz parcial.",
    "resumo": "Um açoite de fogo surge em uma de suas mãos com a qual possa empunhar uma arma (essa mão fica ocupada pela duração da magia).",
    "aumentos": [
      "+2 PM: muda a execução para movimento.",
      "+2 PM: muda o dano para 4d6. Requer 2° círculo.",
      "+5 PM: muda o dano para 6d6. Requer 3° círculo."
    ]
  },
  {
    "id": "adaga-mental",
    "nome": "Adaga Mental",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Encantamento",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 1,
    "detalhes": "Execução: padrão; Alcance: curto; Alvo: 1 criatura; Duração: instantânea; Resistência: Vontade parcial.",
    "resumo": "Você manifesta e dispara uma adaga imaterial contra a mente do alvo, que sofre 2d6 pontos de dano psíquico e fica atordoado por uma rodada.",
    "aumentos": [
      "+1 PM: você lança a magia sem gesticular ou pronunciar palavras (o que permite lançar esta magia de armadura) e a adaga se torna invisível. Se o alvo falhar no teste de resistência, não percebe que você lançou uma magia contra ele.",
      "+2 PM: muda a duração para 1 dia. Além do normal, você “finca” a adaga na mente do alvo. Enquanto a magia durar, você sabe a direção e localização do alvo, desde que ele esteja no mesmo mundo.",
      "+2 PM: aumenta o dano em +1d6."
    ]
  },
  {
    "id": "alarme",
    "nome": "Alarme",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Abjuração",
    "categorias": [
      "Utilidade"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 1,
    "detalhes": "Execução: padrão; Alcance: curto; Área: esfera com 9m de raio; Duração: 1 dia.",
    "resumo": "Você cria uma barreira protetora invisível que detecta qualquer criatura que tocar ou entrar na área protegida. Ao lançar a magia, você pode escolher quais criaturas podem entrar na área sem ativar seus efeitos.",
    "aumentos": [
      "+2 PM: muda o alcance para pessoal. A área é emanada a partir de você.",
      "+5 PM: além do normal, você também percebe qualquer efeito de adivinhação que seja usado dentro da área ou atravesse a área. Você pode fazer um teste oposto de Misticismo contra quem usou o efeito; se passar, tem um vislumbre de seu rosto e uma ideia aproximada de sua localização (“três dias de viagem ao norte”, por exemplo).",
      "+9 PM: muda a duração para 1 dia ou até ser descarregada e a resistência para Vontade anula. Quando um intruso entra na área, você pode descarregar a magia. Se o intruso falhar na resistência, ficará paralisado por 1d4 rodadas. Além disso, pelas próximas 24 horas você e as criaturas escolhidas ganham +10 em testes de Sobrevivência para rastrear o intruso."
    ]
  },
  {
    "id": "aliado-animal",
    "nome": "Aliado Animal",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Divina",
    "escola": "Encantamento",
    "categorias": [
      "Suporte"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 1,
    "detalhes": "Execução: padrão; Alcance: curto; Alvo: 1 animal prestativo; Duração: 1 dia.",
    "resumo": "Você cria um vínculo mental com um animal prestativo em relação a você. O Aliado Animal obedece a você no melhor de suas capacidades, mesmo que isso arrisque a vida dele.",
    "aumentos": [
      "+1 PM: muda o alvo para 1 animal Minúsculo e a duração para 1 semana. Em vez do normal, o animal se desloca no melhor de suas capacidades até um local designado por você — em geral, para levar um item, carta ou similar. Quando o animal chega ao destino, fica esperando até o fim da magia, permitindo apenas que uma ou mais criaturas escolhidas por você se aproximem e peguem o que ele estiver carregando.",
      "+7 PM: muda o parceiro para mestre. Requer 3º círculo.",
      "+12 PM: muda o alvo para 2 animais prestativos. Cada animal funciona como um parceiro de um tipo diferente, e você pode receber a ajuda de ambos (mas ainda precisa seguir o limite de parceiros de acordo com o seu nível de personagem). Requer 4º círculo."
    ]
  },
  {
    "id": "alterar-tamanho",
    "nome": "Alterar Tamanho",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Arcana",
    "escola": "Transmutação",
    "categorias": [
      "Utilidade"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 2,
    "detalhes": "Execução: padrão; Alcance: curto; Alvo: 1 objeto; Duração: 1 dia.",
    "resumo": "Esta magia aumenta ou diminui o tamanho de um item mundano em até três categorias (um objeto Enorme vira Pequeno, por exemplo).",
    "aumentos": [
      "+1 PM: aumenta o número de alvos em +1.",
      "+2 PM: muda o alcance para toque e o alvo para 1 criatura. Em vez do normal, o alvo aumenta uma categoria de tamanho (seu equipamento se ajusta ao novo tamanho). O alvo também recebe Força +2. Um alvo involuntário pode fazer um teste de Fortitude para negar o efeito.",
      "+3 PM: muda o alcance para toque e o alvo para 1 criatura. Em vez do normal, o alvo diminuem uma categoria de tamanho (seu equipamento se ajusta ao novo tamanho). O alvo também recebe Destreza +2. Um alvo involuntário pode fazer um teste de Fortitude para negar o efeito. Requer 3º círculo.",
      "+7 PM: muda o alcance para toque, o alvo para 1 criatura, a duração para permanente e a resistência para Fortitude anula. Em vez do normal, se falhar na resistência o alvo e seu equipamento têm seu tamanho mudado para Minúsculo. O alvo também tem seu valor de Força reduzido a 1 e suas formas de deslocamento reduzidas a 3m. Requer 4º círculo."
    ]
  },
  {
    "id": "amarras-etereas",
    "nome": "Amarras Etéreas",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Arcana",
    "escola": "Convocação",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 2,
    "detalhes": "Execução: padrão; Alcance: médio; Alvo: 1 criatura; Duração: cena; Resistência: Reflexos anula.",
    "resumo": "Três laços de energia surgem e se enroscam no alvo, deixando-o agarrado. A vítima pode tentar se livrar, gastando uma ação padrão para fazer um teste de Atletismo (CD igual à da magia).",
    "aumentos": [
      "+2 PM: aumenta o número de alvos em +1.",
      "+2 PM: aumenta o número de laços em um alvo a sua escolha em +1.",
      "+3 PM: em vez do normal, cada laço é destruído automaticamente com um único ataque bem-sucedido; porém, cada laço destruído libera um choque de energia que causa 1d6+1 pontos de dano de essência na criatura amarrada. Requer 3º círculo."
    ]
  },
  {
    "id": "amedrontar",
    "nome": "Amedrontar",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Necromancia",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 2,
    "detalhes": "Execução: padrão; Alcance: curto; Alvo: 1 animal ou humanoide; Duração: cena; Resistência: Vontade parcial.",
    "resumo": "O alvo é envolvido por energias sombrias e assustadoras. Se falhar na resistência, fica apavorado por 1 rodada, depois abalado. Se passar, fica abalado por 1d4 rodadas.",
    "aumentos": [
      "+2 PM: alvos que falhem na resistência ficam apavorados por 1d4+1 rodadas, em vez de apenas 1.",
      "+2 PM: muda o alvo para 1 criatura.",
      "+5 PM: afeta todos os alvos válidos a sua escolha dentro do alcance."
    ]
  },
  {
    "id": "aparencia-perfeita",
    "nome": "Aparência Perfeita",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Arcana",
    "escola": "Ilusão",
    "categorias": [
      "Utilidade"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 3,
    "detalhes": "Execução: padrão; Alcance: pessoal; Alvo: você; Duração: cena.",
    "resumo": "Esta magia lhe concede um rosto idealizado, porte físico garboso, voz melodiosa e olhar sedutor. Enquanto a magia estiver ativa, seu Carisma torna-se 5 (ou recebe um bônus de +2, caso seja 5 ou maior) e você recebe +5 nos testes de Diplomacia e Enganação.",
    "aumentos": [
      "+1 PM: muda o alcance para toque e o alvo para 1 humanoide."
    ]
  },
  {
    "id": "area-escorregadia",
    "nome": "Área Escorregadia",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Convocação",
    "categorias": [
      "Ofensiva",
      "Controle"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 3,
    "detalhes": "Execução: padrão; Alcance: curto; Alvo ou Área: quadrado de 3m ou 1 objeto; Duração: cena; Resistência: Reflexos (veja texto).",
    "resumo": "Esta magia recobre uma superfície com uma substância gordurosa e escorregadia. Criaturas na área devem passar na resistência para não cair.",
    "aumentos": [
      "+1 PM: aumenta a área em +1 quadrado de 1,5m.",
      "+2 PM: muda a CD dos testes de Acrobacia para 15.",
      "+5 PM: muda a CD dos testes de Acrobacia para 20."
    ]
  },
  {
    "id": "arma-de-jade",
    "nome": "Arma de Jade",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Transmutação",
    "categorias": [
      "Suporte"
    ],
    "fonte": "Campeões dos Deuses",
    "arquivo": "magias deuses.pdf",
    "pagina": 1,
    "detalhes": "Execução: padrão; Alcance: toque; Alvo: 1 arma; Duração: cena.",
    "resumo": "Esta magia ofertada por Lin-Wu transfere temporariamente para uma arma as qualdades místicas do jade, um raro material de Tamu-ra.",
    "aumentos": [
      "+1 PM: a arma causa +1d4 de dano de eletricidade.",
      "+2 PM: aumenta o bônus de ataque e dano em +1 (bônus máximo limitado pelo círculo máximo de magia que você pode lançar). +2 PM (AƞƓƜƏơ DƓƤƝƢƝơ ƒƓ LƗƜWƣ): muda o bônus de dano do aprimoramento acima para +2d4."
    ]
  },
  {
    "id": "arma-espiritual",
    "nome": "Arma Espiritual",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Convocação",
    "categorias": [
      "Defensiva",
      "Ofensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 3,
    "detalhes": "Execução: padrão; Alcance: pessoal; Alvo: você; Duração: cena.",
    "resumo": "Você invoca a arma preferida de sua divindade (se tiver uma), que surge flutuando a seu lado. Uma vez por rodada, quando você sofre um ataque corpo a corpo, pode usar uma reação para que a arma cause automaticamente 2d6 pontos de dano do tipo da arma — por exemplo, uma espada...",
    "aumentos": [
      "+1 PM: além do normal, a arma o protege. Você recebe +1 na Defesa.",
      "+2 PM: aumenta o bônus na Defesa em +1.",
      "+2 PM: muda a duração para sustentada. Além do normal, uma vez por rodada, você pode gastar uma ação livre para fazer a arma acertar automaticamente um alvo adjacente. Se a arma atacar, não poderá contra-atacar até seu próximo turno. Requer 2º círculo.",
      "+2 PM: muda o tipo do dano para essência. Requer 2º círculo.",
      "+2 PM: aumenta o dano causado pela arma em +1d6, limitado pelo círculo máximo de magia que você pode lançar.",
      "+5 PM: invoca duas armas, permitindo que você contra-ataque (ou ataque, se usar o aprimoramento acima) duas vezes por rodada. Requer 3º círculo."
    ]
  },
  {
    "id": "arma-magica",
    "nome": "Arma Mágica",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Universal",
    "escola": "Transmutação",
    "categorias": [
      "Suporte"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 4,
    "detalhes": "Execução: padrão; Alcance: toque; Alvo: 1 arma empunhada; Duração: cena.",
    "resumo": "A arma fornece +1 nos testes de ataque e rolagens de dano e é considerada mágica (não cumulativo com bônus de encantos). Caso você esteja empunhando a arma, pode usar seu atributo-chave de magias em vez do atributo original nos testes de ataque (não cumulativo com efeitos que...",
    "aumentos": [
      "+2 PM: aumenta o bônus em +1 (bônus máximo limitado pelo círculo máximo de magia que você pode lançar).",
      "+2 PM: a arma passa a causar +1d6 de dano de ácido, eletricidade, fogo ou frio, escolhido no momento em que a magia é lançada."
    ]
  },
  {
    "id": "armadura-arcana",
    "nome": "Armadura Arcana",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Abjuração",
    "categorias": [
      "Defensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 4,
    "detalhes": "Execução: padrão; Alcance: pessoal; Alvo: você; Duração: cena.",
    "resumo": "Esta magia cria uma película protetora invisível, mas tangível, fornecendo +4 na Defesa. Esse bônus é cumulativo com outras magias, mas não com bônus fornecido por armaduras.",
    "aumentos": [
      "+1 PM: muda a execução para reação. Em vez do normal, você cria um escudo mágico que fornece +6 na Defesa contra o próximo ataque que sofrer (cumulativo com o bônus fornecido pelo efeito básico desta magia e armaduras).",
      "+2 PM: aumenta o bônus na Defesa em +1.",
      "+2 PM: muda a duração para 1 dia. Requer 2º círculo."
    ]
  },
  {
    "id": "armadura-elemental",
    "nome": "Armadura Elemental",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Evocação",
    "categorias": [
      "Ofensiva",
      "Defensiva",
      "Utilidade"
    ],
    "fonte": "Arsenal dos Heróis",
    "arquivo": "magias herois.pdf",
    "pagina": 1,
    "detalhes": "Execução: padrão; Alcance: pessoal; Alvo: você; Duração: cena.",
    "resumo": "Escolha um tipo de energia entre ácido, eletricidade, fogo ou frio. Uma aura faiscante dessa energia emana de seu corpo — sempre que uma criatura adjacente acertar um ataque corpo a corpo em você, ela sofre 2d6 pontos de dano do tipo escolhido.",
    "aumentos": [
      "+2 PM: muda o alcance para toque e o alvo para 1 criatura. Requer 2º círculo.",
      "+2 PM: aumenta o dano em +1d6 (total de dados limitado pelo círculo máximo de magia que você pode lançar). Requer 3º círculo.",
      "+3 PM: muda a energia para essência. Requer 2º círculo."
    ]
  },
  {
    "id": "armamento-da-natureza",
    "nome": "Armamento da Natureza",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Transmutação",
    "categorias": [
      "Suporte"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 4,
    "detalhes": "Execução: padrão; Alcance: toque; Alvo: 1 arma (veja texto); Duração: cena.",
    "resumo": "Você fortalece uma arma mundana primitiva (sem custo em T$, como bordão, clava, funda ou tacape), uma arma natural ou um ataque desarmado.",
    "aumentos": [
      "+1 PM: fornece +1 nos testes de ataque com a arma.",
      "+2 PM: muda a execução para ação de movimento.",
      "+3 PM: aumenta o bônus nos testes de ataque em +1.",
      "+5 PM: aumenta o dano da arma em mais um passo."
    ]
  },
  {
    "id": "arsenal-de-allihanna",
    "nome": "Arsenal de Allihanna",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Transmutação",
    "categorias": [
      "Suporte"
    ],
    "fonte": "Campeões dos Deuses",
    "arquivo": "magias deuses.pdf",
    "pagina": 1,
    "detalhes": "Execução: padrão; Alcance: pessoal; Efeito: arma criada em sua mão; Duração: cena.",
    "resumo": "Outrora chamada Armamento de Allihanna, esta magia recentemente recebeu um novo nome — com implicações curiosas. Utilizada pela primeira vez por Lisandra de Galrasia, diz-se que a verdadeira origem da magia estaria relacionada a seu pai, Arsenal, então mortal.",
    "aumentos": [
      "+2 PM: aumenta o bônus em +1 (bônus máximo limitado pelo círculo máximo de magia que você pode lançar).",
      "+2 PM: a arma, ou sua munição, é recoberta de espinhos. Ela causa +1d6 pontos de dano e o alvo do ataque fica sangrando. +3 PM (AƞƓƜƏơ DƓƤƝƢƝơ ƒƓ AƚƚƗƖƏƜƜƏ Ɲƣ DƏƖƚƚƏƜ): muda o alvo para uma planta e o alcance para toque. A planta manifesta uma arma corpo a corpo simples de madeira Tollon e uma armadura de couro batido reforçada. Se você tiver o suplemento Ameaças de Arton, ela pode manifestar uma espada espinhenta ou um fruto da espada-mãe (p. 245). Se estiver apto, você empunha/veste os itens como ação livre e eles desaparecem quando a magia acaba. Requer 2º círculo."
    ]
  },
  {
    "id": "assobio-perigoso",
    "nome": "Assobio Perigoso",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Convocação",
    "categorias": [
      "Ofensiva",
      "Defensiva",
      "Utilidade"
    ],
    "fonte": "Arsenal dos Heróis",
    "arquivo": "magias herois.pdf",
    "pagina": 1,
    "detalhes": "Execução: padrão; Alcance: pessoal; Efeito: grupo de criaturas conjuradas; Duração: especial.",
    "resumo": "Esta estranha magia conjura um grupo de criaturas agressivas que imediatamente atacam quem está por perto… Inclusive o conjurador e seus aliados! As criaturas são feitas de energia e representam um encontro, preparado pelo mestre, de ND igual ao nível do conjurador.",
    "aumentos": []
  },
  {
    "id": "augurio",
    "nome": "Augúrio",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Divina",
    "escola": "Adivinhação",
    "categorias": [
      "Utilidade"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 4,
    "detalhes": "Execução: completa; Alcance: pessoal; Alvo: você; Duração: instantânea.",
    "resumo": "Esta magia diz se uma ação que você tomará em breve — no máximo uma hora no futuro — trará resultados bons ou ruins. O mestre rola 1d6 em segredo; com um resultado de 2 a 6, a magia funciona e você recebe uma das seguintes respostas: “felicidade” (a ação trará bons resultados)...",
    "aumentos": [
      "+3 PM: muda a execução para 1 minuto. Em vez do normal, você pode consultar uma divindade, fazendo uma pergunta sobre um evento que acontecerá até um dia no futuro. O mestre rola a chance de falha; com um resultado de 2 a 6, você recebe uma resposta, desde uma simples frase até uma profecia ou enigma. Em geral, este uso sempre oferece pistas, indicando um caminho a tomar para descobrir a resposta que se procura. Numa falha você não recebe resposta alguma. Requer 3º círculo.",
      "+7 PM: muda a execução para 10 minutos e a duração para 1 minuto. Em vez do normal, você consulta uma divindade, podendo fazer uma pergunta por rodada, desde que ela possa ser respondida com “sim”, “não” ou “não sei” (embora poderosos, os deuses não são oniscientes). O mestre rola a chance de falha para cada pergunta. Em caso de falha, a resposta também é “não sei”. Requer 4º círculo.",
      "+7 PM: o mestre rola 1d12; a magia só falha em um resultado 1.",
      "+12 PM: o mestre rola 1d20; a magia só falha em um resultado 1."
    ]
  },
  {
    "id": "aura-de-morte",
    "nome": "Aura de Morte",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Arcana",
    "escola": "Necromancia",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Arsenal dos Heróis",
    "arquivo": "magias herois.pdf",
    "pagina": 1,
    "detalhes": "Execução: padrão; Alcance: pessoal; Área: esfera com 6m de raio; Duração: cena.",
    "resumo": "Uma aura de frio necrótico emana a partir do seu corpo, alimentando-se de sua própria força vital. Quando você lança a magia, e no início de cada um dos seus turnos, você perde 1d6 pontos de vida e cada outra criatura na área perde 2d8 pontos de vida.",
    "aumentos": [
      "+1 PM: aumenta a perda de vida para outras criaturas em +1d8 (número de dados de perda de vida máximos limitados pelo círculo máximo de magia que você pode lançar). Requer 3º círculo.",
      "+3 PM: adiciona resistência (Fortitude parcial). Além do normal, outras criaturas que percam pontos de vida pela magia devem fazer um teste de Fortitude. Se falharem, não podem recuperar PV por 1 rodada. Requer 3º círculo."
    ]
  },
  {
    "id": "aviso",
    "nome": "Aviso",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Universal",
    "escola": "Adivinhação",
    "categorias": [
      "Utilidade"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 5,
    "detalhes": "Execução: movimento; Alcance: longo; Alvo: 1 criatura; Duração: instantânea.",
    "resumo": "Envia um aviso telepático para uma criatura, mesmo que não possa vê-la nem tenha linha de efeito. Escolha um: Alerta: o alvo recebe +5 em seu próximo teste de Iniciativa e de Percepção dentro da cena.",
    "aumentos": [
      "+1 PM: aumenta o alcance em um fator de 10 (90m para 900m, 900m para 9km e assim por diante).",
      "+1 PM: se escolher mensagem, o alvo pode enviar uma resposta de até 25 palavras para você até o fim de seu próximo turno.",
      "+2 PM: se escolher localização, muda a duração para cena. O alvo sabe onde você está mesmo que você mude de posição.",
      "+3 PM: aumenta o número de alvos em +1."
    ]
  },
  {
    "id": "bencao",
    "nome": "Bênção",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Encantamento",
    "categorias": [
      "Defensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 5,
    "detalhes": "Execução: padrão; Alcance: curto; Alvos: aliados; Duração: cena.",
    "resumo": "Abençoa seus aliados, que recebem +1 em testes de ataque e rolagens de dano. Bênção anula Perdição.",
    "aumentos": [
      "+1 PM: muda o alvo para 1 cadáver e a duração para 1 semana. O cadáver não se decompõe nem pode ser transformado em morto-vivo.",
      "+2 PM: aumenta os bônus em +1 (bônus máximo limitado pelo círculo máximo de magia que você pode lançar)."
    ]
  },
  {
    "id": "bofetada-de-nimb",
    "nome": "Bofetada de Nimb",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Evocação",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Campeões dos Deuses",
    "arquivo": "magias deuses.pdf",
    "pagina": 1,
    "detalhes": "Execução: padrão; Alcance: curto; Alvo: 1 humanoide; Duração: instantânea; Resistência: Vontade parcial.",
    "resumo": "Uma mão mágica surge diante do alvo e o esbofeteia na face, ou em outra parte vulnerável, desaparecendo em seguida. O golpe não causa dano, mas é bastante humilhante.",
    "aumentos": [
      "+1 PM: alvos que falhem na resistência ficam vulneráveis pela cena.",
      "+2 PM: muda o alvo para 1 criatura.",
      "+2 PM: em vez do normal, a mão dá leves tapinhas que acalmam os alvos e anulam uma condição entre abalado, alquebrado, apavorado e frustrado. Requer 2° círculo.",
      "+3 PM: alvos que falhem na resistência ficam desprevenidos por 1d4+1 rodadas, em vez de apenas 1. +5 PM (AƞƓƜƏơ DƓƤƝƢƝơ ƒƓ NƗƛƐ): afeta todos os alvos válidos a sua escolha dentro do alcance."
    ]
  },
  {
    "id": "bola-de-fogo",
    "nome": "Bola de Fogo",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Arcana",
    "escola": "Evocação",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 5,
    "detalhes": "Execução: padrão; Alcance: médio; Área: esfera com 6m de raio; Duração: instantânea; Resistência: Reflexos reduz à metade.",
    "resumo": "Esta famosa magia de ataque cria uma poderosa explosão, causando 6d6 pontos de dano de fogo em todas as criaturas e objetos livres na área.",
    "aumentos": [
      "+2 PM: aumenta o dano em +2d6.",
      "+2 PM: muda a área para efeito de esfera Áamejante com tamanho Médio e a duração para cena. Em vez do normal, cria uma esfera Áamejante com 1,5m de diâmetro que causa 3d6 pontos de dano a qualquer criatura no mesmo espaço. Você pode gastar uma ação de movimento para fazer a esfera voar 9m em qualquer direção. Ela é imune a dano, mas pode ser apagada com água. Uma criatura só pode sofrer dano da esfera uma vez por rodada.",
      "+3 PM: muda a duração para 1 dia ou até ser descarregada. Em vez do normal, você cria uma pequena pedra Áamejante, que pode detonar como uma reação, descarregando a magia. A pedra pode ser usada como uma arma de arremesso com alcance curto. Uma vez detonada, causa o dano da magia numa área de esfera com 6m de raio."
    ]
  },
  {
    "id": "caminhos-da-natureza",
    "nome": "Caminhos da Natureza",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Convocação",
    "categorias": [
      "Defensiva",
      "Utilidade"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 6,
    "detalhes": "Execução: padrão; Alcance: curto; Área: criaturas escolhidas; Duração: 1 dia.",
    "resumo": "Você invoca espíritos da natureza, pedindo que eles abram seu caminho. As criaturas afetadas recebem deslocamento +3m e ignoram penalidades por terreno difícil em terrenos naturais.",
    "aumentos": [
      "+1 PM: além do normal, a CD para rastrear os alvos em terreno natural aumenta em +10.",
      "+2 PM: aumenta o bônus de deslocamento em +3m."
    ]
  },
  {
    "id": "campo-de-forca",
    "nome": "Campo de Força",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Arcana",
    "escola": "Abjuração",
    "categorias": [
      "Defensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 6,
    "detalhes": "Execução: padrão; Alcance: pessoal; Alvo: você; Duração: cena.",
    "resumo": "Esta magia cria uma película protetora sobre você. Você recebe 30 PV temporários, mas apenas contra dano de corte, impacto ou perfuração (esses PV não impedem que você fique inconsciente, comece a sangrar, morra...).",
    "aumentos": [
      "+1 PM: muda a execução para reação e a duração para instantânea. Em vez do normal, você recebe redução 30 contra o próximo dano que sofrer.",
      "+1 PM: aumenta os PV temporários em +5 ou a redução de dano em +10.",
      "+7 PM: muda o alcance para curto, o alvo para outra criatura ou objeto Enorme ou menor e a duração para sustentada. Em vez do normal, cria uma esfera imóvel e tremeluzente ao redor do alvo. Nenhuma criatura, objeto ou efeito de dano pode passar pela esfera, embora criaturas possam respirar normalmente. Criaturas na área podem fazer um teste de Reflexos para evitar serem aprisionadas e sempre que você se concentrar. Requer 4º círculo.",
      "+9 PM: como o aprimoramento acima, mas tudo dentro da esfera fica praticamente sem peso. Uma vez por rodada, você pode gastar uma ação livre para flutuar a esfera e seu conteúdo 9m em uma direção. Requer 4º círculo."
    ]
  },
  {
    "id": "camuflagem-ilusoria",
    "nome": "Camuflagem ilusória",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Arcana",
    "escola": "Ilusão",
    "categorias": [
      "Utilidade",
      "Defensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 6,
    "detalhes": "Execução: padrão; Alcance: toque; Alvo: 1 criatura; Duração: cena.",
    "resumo": "O alvo fica com sua imagem nublada, como se vista através de um líquido, recebendo os efeitos de camuflagem leve.",
    "aumentos": [
      "+3 PM: a imagem do alvo fica mais distorcida, aumentando a chance de falha da camuflagem leve para 50%.",
      "+7 PM: muda o alcance para curto e o alvo para criaturas escolhidas. Requer 4º círculo."
    ]
  },
  {
    "id": "circulo-da-justica",
    "nome": "Círculo da Justiça",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Divina",
    "escola": "Abjuração",
    "categorias": [
      "Controle"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 6,
    "detalhes": "Execução: completa; Alcance: curto; Área: cubo com 9m de lado; Duração: 1 dia; Resistência: Vontade parcial.",
    "resumo": "Também conhecida como Lágrimas de Hyninn, esta magia é usada em tribunais e para proteger áreas sensíveis. Criaturas na área sofrem –10 em testes de Acrobacia, Enganação, Furtividade e Ladinagem e não podem mentir deliberadamente — mas podem tentar evitar perguntas que normalm...",
    "aumentos": [
      "+1 PM: muda a execução para ação padrão, o alcance para pessoal, o alvo para você, a duração para cena e a resistência para nenhuma. Em vez do normal, qualquer criatura ou objeto invisível em alcance curto se torna visível. Isso não dissipa o efeito mágico; se sair do seu alcance, a criatura ou objeto voltam a ficar invisíveis.",
      "+3 PM: muda a penalidade nas perícias para –10 (se passar na resistência) e –20 (se falhar). Requer 4º círculo.",
      "+7 PM: muda a duração para permanente e adiciona componente material (balança de prata no valor de T$ 5.000)."
    ]
  },
  {
    "id": "comando",
    "nome": "Comando",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Encantamento",
    "categorias": [
      "Controle",
      "Ofensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 7,
    "detalhes": "Execução: padrão; Alcance: curto; Alvo: 1 humanoide; Duração: 1 rodada; Resistência: Vontade anula.",
    "resumo": "Você dá uma ordem irresistível, que o alvo deve ser capaz de ouvir (mas não precisa entender). Se falhar na resistência, ele deve obedecer ao comando em seu próprio turno da melhor maneira possível.",
    "aumentos": [
      "+1 PM: muda o alvo para 1 criatura.",
      "+2 PM: aumenta a quantidade de alvos em +1."
    ]
  },
  {
    "id": "compreensao",
    "nome": "Compreensão",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Universal",
    "escola": "Adivinhação",
    "categorias": [
      "Utilidade"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 7,
    "detalhes": "Execução: padrão; Alcance: toque; Alvo: 1 criatura ou texto; Duração: cena; Resistência: Vontade anula (veja descrição).",
    "resumo": "Essa magia lhe confere compreensão sobrenatural. Você pode tocar um texto e entender as palavras mesmo que não conheça o idioma.",
    "aumentos": [
      "+1 PM: muda o alcance para curto.",
      "+2 PM: muda o alcance para curto e o alvo para criaturas escolhidas. Você pode entender todas as criaturas afetadas, mas só pode ouvir os pensamentos de uma por vez.",
      "+2 PM: muda o alvo para 1 criatura. Em vez do normal, pode vasculhar os pensamentos do alvo para extrair informações. O alvo tem direito a um teste de Vontade para anular este efeito. O mestre decide se a criatura sabe ou não a informação que você procura. Requer 2º círculo.",
      "+5 PM: muda o alcance para pessoal e o alvo para você. Em vez do normal, você pode falar, entender e escrever qualquer idioma. Requer 3º círculo."
    ]
  },
  {
    "id": "concentracao-de-combate",
    "nome": "Concentração de Combate",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Adivinhação",
    "categorias": [
      "Suporte"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 8,
    "detalhes": "Execução: livre; Alcance: pessoal; Alvo: você; Duração: 1 rodada.",
    "resumo": "Você amplia sua percepção, antecipando movimentos dos inimigos e achando brechas em sua defesa. Quando faz um teste de ataque, você rola dois dados e usa o melhor resultado.",
    "aumentos": [
      "+2 PM: muda a execução para padrão e a duração para cena. Requer 2º círculo.",
      "+5 PM: além do normal, ao atacar você, um inimigo deve rolar dois dados e usar o pior resultado. Requer 3º círculo.",
      "+9 PM: muda a execução para padrão, o alcance para curto, o alvo para criaturas escolhidas e a duração para cena. Requer 4º círculo.",
      "+14 PM: muda a execução para padrão e a duração para 1 dia. Além do normal, você recebe um sexto sentido que o avisa de qualquer perigo ou ameaça. Você fica imune às condições surpreendido e desprevenido e recebe +10 na Defesa e Reflexos. Requer 5º círculo."
    ]
  },
  {
    "id": "condicao",
    "nome": "Condição",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Divina",
    "escola": "Adivinhação",
    "categorias": [
      "Suporte"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 8,
    "detalhes": "Execução: padrão; Alcance: curto; Alvo: até 5 criaturas; Duração: cena.",
    "resumo": "Pela duração da magia, você sabe a posição e status (PV atuais, se estão com uma condição ou sob efeito de magia...) dos alvos. Depois de lançada, a distância dos alvos não importa — a magia só deixa de detectar um alvo se ele morrer ou for para outro plano.",
    "aumentos": [
      "+1 PM: aumenta o número de alvos em +1.",
      "+1 PM: aumenta a duração para 1 dia."
    ]
  },
  {
    "id": "conjurar-armadilha",
    "nome": "Conjurar Armadilha",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Arcana",
    "escola": "Transmutação",
    "categorias": [
      "Ofensiva",
      "Utilidade"
    ],
    "fonte": "Arsenal dos Heróis",
    "arquivo": "magias herois.pdf",
    "pagina": 1,
    "detalhes": "Execução: completa; Alcance: curto; Efeito: 1 armadilha conjurada; Duração: permanente.",
    "resumo": "Esta magia modifica o terreno e/ou a arquitetura de um ponto no alcance, transformando-o em uma armadilha de caçador (Tormenta20, p.",
    "aumentos": [
      "+1 PM: seus poderes que afetam armadilhas também afetam a armadilha criada pela magia.",
      "+3 PM: quando lança a magia, você pode escolher qualquer número de criaturas no alcance para não serem afetadas pela armadilha. Requer 2° círculo.",
      "+5 PM: muda a execução para padrão. A armadilha pode ser conjurada diretamente em uma área ocupada por uma criatura, o que a aciona imediatamente. Requer 3º círculo. +1 PM(AƞƓƜƏơ AƠƛƏƒƗƚƖƓƗƠƝơ MƓơƢƠƓơ Ɠ CƏƯƏƒƝƠƓơ): reduz o tempo de execução para movimento. +4 PM (AƞƓƜƏơ AƠƛƏƒƗƚƖƓƗƠƝơơ MƓơƢƠƓơ): em vez do normal, você pode conjurar uma das suas armadilhas de armadilheiro mestre."
    ]
  },
  {
    "id": "conjurar-monstro",
    "nome": "Conjurar Monstro",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Convocação",
    "categorias": [
      "Ofensiva",
      "Suporte"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 8,
    "detalhes": "Execução: completa; Alcance: curto; Efeito: 1 criatura conjurada; Duração: sustentada.",
    "resumo": "Você conjura um monstro Pequeno que ataca seus inimigos. Você escolhe a aparência do monstro e o tipo de dano que ele pode causar, entre corte, impacto e perfuração.",
    "aumentos": [
      "+1 PM: o monstro ganha deslocamento de escalada ou natação igual ao seu deslocamento terrestre.",
      "+1 PM: aumenta o deslocamento do monstro em +3m.",
      "+1 PM: muda o tipo de dano do ataque do monstro para ácido, fogo, frio ou eletricidade.",
      "+2 PM: o monstro ganha percepção às cegas (alcance curto).",
      "+2 PM: aumenta os PV do monstro em +10 para cada categoria de tamanho a partir de Pequeno (+10 PV para Pequeno, +20 PV para Médio etc.).",
      "+2 PM: aumenta o tamanho do monstro para Médio. Ele tem For 18, Des 16, 45 PV, deslocamento 12m e seu ataque causa 2d6+4 pontos de dano.",
      "+2 PM: o monstro ganha resistência 5 contra dois tipos de dano (por exemplo, corte e frio).",
      "+4 PM: o monstro ganha uma nova ordem: Arma de Sopro. O monstro causa o dobro de seu dano de ataque em um cone de 6m a partir de si (Reflexos reduz à metade).",
      "+5 PM: aumenta o tamanho do monstro para Grande. Ele tem For 24, Des 14, 75 PV, deslocamento 12m e seu ataque causa 3d6+7 pontos de dano com 3m de alcance. Requer 2º círculo.",
      "+9 PM: o monstro ganha deslocamento de voo igual ao dobro do deslocamento.",
      "+9 PM: o monstro ganha imunidade contra dois tipos de dano.",
      "+9 PM: aumenta o tamanho do monstro para Enorme. Ele tem For 32, Des 12, 110 PV, deslocamento 15m e seu ataque causa 4d6+11 pontos de dano com 4,5m de alcance. Requer 4º círculo.",
      "+14 PM: aumenta o tamanho do monstro para Colossal. Ele tem For 41, Des 10, 180 PV, deslocamento 15m e seu ataque causa 6d6+15 de dano com 9m de alcance. Requer 5º círculo."
    ]
  },
  {
    "id": "conjurar-mortos-vivos",
    "nome": "Conjurar Mortos-vivos",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Universal",
    "escola": "Necromancia",
    "categorias": [
      "Ofensiva",
      "Defensiva",
      "Utilidade"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 9,
    "detalhes": "Execução: completa; Alcance: curto; Efeito: 6 mortos-vivos; Duração: sustentada.",
    "resumo": "Seis esqueletos de tamanho Médio feitos de energia negativa emergem do chão em espaços desocupados escolhidos por você dentro do alcance.",
    "aumentos": [
      "+2 PM: aumenta o número de mortos--vivos conjurados em +1.",
      "+3 PM: em vez de esqueletos, conjura carniçais. Requer 3º círculo.",
      "+7 PM: em vez de esqueletos, conjura sombras. Requer 4º círculo. Carniçal: como o esqueleto, mas tem For 16, Des 16, 12 PV e causa 1d8+3 pontos de dano de trevas mais perda de 1d8 PV por veneno. Além disso, criaturas atingidas por um carniçal devem passar num teste de Fortitude (CD igual à da magia) ou ficam paralisadas por 1 rodada. Uma criatura que passe no teste de resistência fica imune à paralisia dos carniçais por 24 horas. Sombra: como o esqueleto, mas tem a habilidade incorpóreo, Des 18, 30 PV e causa 1d10 pontos de dano de trevas mais 1d10 pontos de dano de frio. Além disso, criaturas vivas atingidas por uma sombra devem passar num teste de Fortitude (CD igual à da magia) ou perdem 1d4 PM. Sombras perdem a habilidade incorpóreo quando expostas à luz do sol."
    ]
  },
  {
    "id": "consagrar",
    "nome": "Consagrar",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Evocação",
    "categorias": [
      "Defensiva",
      "Suporte"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 9,
    "detalhes": "Execução: padrão; Alcance: longo; Área: esfera com 9m de raio; Duração: 1 dia.",
    "resumo": "Esta magia enche a área com energia positiva. Efeitos de luz que curam pontos de vida ou canalizam energia positiva têm seus efeitos maximizados dentro da área.",
    "aumentos": [
      "+1 PM: além do normal, mortos-vivos na área sofrem –2 em testes e Defesa.",
      "+2 PM: aumenta as penalidades para mortos-vivos em –1.",
      "+9 PM: muda a execução para 1 hora, a duração para permanente e adiciona componente material (incenso e óleos no valor de T$ 1.000). Requer 4º círculo."
    ]
  },
  {
    "id": "controlar-fogo",
    "nome": "Controlar Fogo",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Divina",
    "escola": "Evocação",
    "categorias": [
      "Utilidade"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 10,
    "detalhes": "Execução: padrão; Alcance: curto; Alvo: veja texto; Duração: cena.",
    "resumo": "Você pode criar, moldar, mover ou extinguir chamas e emanações de calor. Ao lançar a magia, escolha um dos efeitos. Chamejar: o alvo é armas escolhidas.",
    "aumentos": [
      "+1 PM: muda a duração para sustentada e a resistência para Reflexos reduz à metade. Em vez do normal, você deve escolher o seguinte efeito. Labaredas: a cada rodada, você pode gastar uma ação de movimento para projetar uma labareda, acertando um alvo em alcance curto a partir da chama. O alvo sofre 4d6 pontos de dano de fogo (Reflexos reduz à metade).",
      "+2 PM: aumenta o dano em +1d6 (exceto do efeito chamejar).",
      "+3 PM: muda o alvo para 1 criatura composta principalmente por fogo, lava ou magma (como um elemental do fogo) e a resistência para Fortitude parcial. Em vez do normal, se a criatura falhar no teste de resistência, é reduzida a 0 PV. Se passar, sofre 5d6 pontos de dano."
    ]
  },
  {
    "id": "controlar-madeira",
    "nome": "Controlar Madeira",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Divina",
    "escola": "Transmutação",
    "categorias": [
      "Utilidade"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 10,
    "detalhes": "Execução: padrão; Alcance: médio; Alvo: 1 objeto de madeira Grande ou menor; Duração: cena.",
    "resumo": "Você molda, retorce, altera ou repele madeira. Se lançar esta magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la.",
    "aumentos": [
      "+1 PM: muda o alcance para pessoal, o alvo para você e a duração para 1 dia. Você e seu equipamento se transformam em uma árvore de tamanho Grande. Nessa forma, você não pode falar ou fazer ações físicas, mas consegue perceber seus arredores normalmente. Se for atacado nessa forma, a magia é dissipada. Um teste de Sobrevivência (CD 30) revela que você não é uma árvore verdadeira.",
      "+3 PM: muda o alvo para área de quadrado com 9m de lado e a duração para cena. Em vez do normal, qualquer vegetação na área fica rígida e afiada. A área é considerada terreno difícil e criaturas que andem nela sofrem 1d6 pontos de dano de corte para cada 1,5m que avancem.",
      "+7 PM: muda o tamanho do alvo para Enorme ou menor. Requer 3º círculo.",
      "+12 PM: muda o tamanho do alvo para Colossal ou menor. Requer 4º círculo."
    ]
  },
  {
    "id": "controlar-plantas",
    "nome": "Controlar Plantas",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Transmutação",
    "categorias": [
      "Controle"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 11,
    "detalhes": "Execução: padrão; Alcance: curto; Área: quadrado com 9m de lado; Duração: cena; Resistência: Reflexos anula.",
    "resumo": "Esta magia só pode ser lançada em uma área com vegetação. As plantas se enroscam nas criaturas da área. Aquelas que falharem na resistência ficam enredadas.",
    "aumentos": [
      "+1 PM: muda a duração para instantânea. Em vez do normal, as plantas na área diminuem, como se tivessem sido podadas. Terreno difícil muda para terreno normal e não oferece camuflagem. Esse efeito dissipa o uso normal de Controlar Plantas.",
      "+1 PM: além do normal, criaturas que falhem na resistência também ficam imóveis.",
      "+2 PM: muda o alcance para pessoal, a área para alvo (você) e a resistência para nenhuma. Em vez do normal, você consegue se comunicar com plantas, que começam com atitude prestativa em relação a você. Além disso, você pode fazer testes de Diplomacia com plantas. Em geral, plantas têm uma percepção limitada de seus arredores e normalmente fornecem respostas simplórias."
    ]
  },
  {
    "id": "couraca-de-allihanna",
    "nome": "Couraça de Allihanna",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Divina",
    "escola": "Abjuração",
    "categorias": [
      "Defensiva"
    ],
    "fonte": "Campeões dos Deuses",
    "arquivo": "magias deuses.pdf",
    "pagina": 1,
    "detalhes": "Execução: padrão; Alcance: toque; Alvo: 1 armadura ou vestuário; Duração: cena.",
    "resumo": "Lisandra de Galrasia foi a primeira a manifestar uma armadura fibrosa, mas hoje outros podem fazer o mesmo. Esta magia transforma o alvo em uma couraça arbórea.",
    "aumentos": [
      "+1 PM: aumenta a Defesa em +1 (bônus máximo limitado pelo círculo máximo de magia que você pode lançar).",
      "+2 PM: além do normal, suas magias de evocação e transmutação custam –1 PM.",
      "+2 PM: o alvo é recoberto por folhas e galhos. Você recebe +5 em testes de Furtividade e pode se esconder mesmo sem camuflagem ou cobertura disponível.",
      "+2 PM: além do normal, o alvo fornece o mesmo bônus em testes de resistência. Requer 3° círculo.",
      "+3 PM: além do normal, o alvo é recoberto esporos de cogumelo. Quando uma criatura faz um ataque corpo a corpo contra você, ela deve fazer um teste de Fortitude (CD da magia). Se falhar, fica paralisada por 1 rodada (apenas uma vez por cena) e lenta. Se passar, fica lenta por 1 rodada. Requer 3° círculo."
    ]
  },
  {
    "id": "cranio-voador-de-vladislav",
    "nome": "Crânio Voador de Vladislav",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Arcana",
    "escola": "Necromancia",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 11,
    "detalhes": "Execução: padrão; Alcance: médio; Alvo: 1 criatura; Duração: instantânea; Resistência: Fortitude parcial.",
    "resumo": "Esta magia cria um crânio envolto em energia negativa. Quando atinge o alvo, ele causa 4d8+4 pontos de dano de trevas e se desfaz emitindo um som horrendo, deixando abalado o alvo e todos os inimigos num raio de 3m dele (criaturas já abaladas ficam apavoradas por 1d4 rodadas).",
    "aumentos": [
      "+2 PM: aumenta o dano em +1d8+1.",
      "+2 PM: aumenta o número de alvos em +1."
    ]
  },
  {
    "id": "criar-elementos",
    "nome": "Criar Elementos",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Convocação",
    "categorias": [
      "Utilidade"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 11,
    "detalhes": "Execução: padrão; Alcance: curto; Efeito: elemento escolhido; Duração: instantânea.",
    "resumo": "Você cria uma pequena porção de um elemento, a sua escolha. Os elementos criados são reais, não mágicos. Elementos físicos devem surgir em uma superfície.",
    "aumentos": [
      "+1 PM: aumenta a quantidade do elemento em um passo (uma categoria de tamanho para água ou terra, +1 quadrado de 1,5m para ar e fogo).",
      "+1 PM: muda o efeito para alvo 1 criatura ou objeto e a resistência para Reflexos reduz à metade. Se escolher água ou terra, você arremessa o cubo ou objeto criado no alvo, causando 2d4 pontos de dano de impacto. Para cada categoria de tamanho acima de Minúsculo, o dano aumenta em um passo. O cubo se desfaz em seguida.",
      "+2 PM: se escolheu fogo, aumenta o dano inicial de cada chama em +1d6."
    ]
  },
  {
    "id": "criar-ilusao",
    "nome": "Criar Ilusão",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Ilusão",
    "categorias": [
      "Utilidade"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 12,
    "detalhes": "Execução: padrão; Alcance: médio; Efeito: ilusão que se estende a até 4 cubos de 1,5m; Duração: cena; Resistência: Vontade desacredita.",
    "resumo": "Esta magia cria uma ilusão visual (uma criatura, uma parede...) ou sonora (um grito de socorro, um uivo assustador...). A magia cria apenas imagens ou sons simples, com volume equivalente ao tom de voz normal para cada cubo de 1,5m no efeito.",
    "aumentos": [
      "+1 PM: muda a duração para sustentada. A cada rodada você pode gastar uma ação livre para mover a imagem ou alterar levemente o som, como aumentar o volume ou fazer com que pareça se afastar ou se aproximar, ainda dentro dos limites do efeito. Você pode, por exemplo, criar a ilusão de um fantasma que anda pela sala, controlando seus movimentos. Quando você para de sustentar a magia, a imagem ou som persistem por mais uma rodada antes de a magia se dissipar.",
      "+1 PM: aumenta o efeito da ilusão em +1 cubo de 1,5m.",
      "+1 PM: também pode criar ilusões de imagem e sons combinados.",
      "+1 PM: também pode criar sons complexos com volume máximo equivalente ao que cinco pessoas podem produzir para cada cubo de 1,5m no efeito. Com uma ação livre, você pode alterar o volume do som ou fazê-lo se aproximar ou se afastar dentro do alcance.",
      "+2 PM: também pode criar odores e sensações térmicas, que são percebidos a uma distância igual ao dobro do tamanho máximo do efeito. Por exemplo, uma miragem de uma fogueira com 4 cubos de 1,5m poderia emanar calor e cheiro de queimado a até 12m.",
      "+2 PM: muda o alcance para longo e o efeito para esfera com 30m de raio. Em vez do normal, você cria um som muito alto, equivalente a uma multidão. Criaturas na área lançam magias como se estivessem em uma condição ruim e a CD de testes de Percepção para ouvir aumenta em +10. Requer 2º círculo.",
      "+2 PM: também criar sensações táteis, como texturas; criaturas que não saibam que é uma ilusão não conseguem atravessá-la sem passar em um teste de Vontade (objetos ainda a atravessam). A ilusão ainda é incapaz de causar ou sofrer dano. Requer 2º círculo.",
      "+5 PM: muda a duração para sustentada. Além do normal, você pode gastar uma ação livre para modificar livremente a ilusão (mas não pode acrescentar novos aprimoramentos após lançá-la). Requer 3º círculo."
    ]
  },
  {
    "id": "curar-ferimentos",
    "nome": "Curar Ferimentos",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Evocação",
    "categorias": [
      "Defensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 12,
    "detalhes": "Execução: padrão; Alcance: toque; Alvo: 1 criatura; Duração: instantânea.",
    "resumo": "Você canaliza energia positiva que recupera 2d8+2 pontos de vida na criatura tocada. TƠƣƟƣƓ: muda o alvo para 1 morto-vivo. Em vez do normal, causa 1d8 pontos de dano de luz (Vontade reduz à metade).",
    "aumentos": [
      "+1 PM: aumenta a cura em +1d8+1.",
      "+2 PM: também remove uma condição de fadiga do alvo.",
      "+2 PM: muda o alcance para curto.",
      "+5 PM: muda o alcance para curto e o alvo para criaturas escolhidas."
    ]
  },
  {
    "id": "dardo-gelido",
    "nome": "Dardo Gélido",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Evocação",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Ameaças de Arton",
    "arquivo": "magias ameaça.pdf",
    "pagina": 1,
    "detalhes": "Execução: padrão; Alcance: curto; Alvo: 1 criatura; Duração: instantânea; Resistência: Fortitude parcial.",
    "resumo": "Você dispara um dardo de gelo contra o alvo, que sofre 2d6 pontos de dano de frio e fica lento por 1 rodada. Passar no teste de resistência reduz o dano à metade e evita a condição.",
    "aumentos": [
      "+1 PM: aumenta o dano em +1d6.",
      "+1 PM: aumenta o número de alvos em +1 (total de alvos limitado pelo círculo máximo de magia que você pode lançar)."
    ]
  },
  {
    "id": "desafio-corajoso",
    "nome": "Desafio Corajoso",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Arcana",
    "escola": "Encantamento",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Arsenal dos Heróis",
    "arquivo": "magias herois.pdf",
    "pagina": 1,
    "detalhes": "Execução: padrão; Alcance: curto; Alvo: 1 criatura voluntária; Duração: sustentada; Resistência: Vontade anula.",
    "resumo": "Esta magia cria uma aura de influência de 9m ao redor do alvo. Outras criaturas que iniciarem seus turnos dentro da aura devem fazer um teste de Vontade. Se falharem, quaisquer ações hostis nesse turno devem ser feitas contra o alvo.",
    "aumentos": [
      "+3 PM: muda o alvo para 1 criatura ou objeto. Requer 4° círculo."
    ]
  },
  {
    "id": "descobrir-fraqueza",
    "nome": "Descobrir Fraqueza",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Adivinhação",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Arsenal dos Heróis",
    "arquivo": "magias herois.pdf",
    "pagina": 2,
    "detalhes": "Execução: movimento; Alcance: curto; Alvo: 1 criatura; Duração: instantânea; Resistência: Vontade evita.",
    "resumo": "Você analisa uma criatura em busca de pontos fracos e outras características. Para isso, como parte do efeito da magia, você faz um teste de Misticismo para identificar criatura contra o alvo (independente do tipo dele) com um bônus de +10.",
    "aumentos": [
      "+1 PM: aumenta o bônus no teste em +5.",
      "+1 PM: além do normal, sua próxima rolagem de dano contra a criatura nessa cena ignora 10 pontos da redução de dano dela. Requer 2° círculo.",
      "+2 PM: além do normal, você recebe +2 em testes contra a criatura até o fim da cena. Requer 2° círculo."
    ]
  },
  {
    "id": "desespero-esmagador",
    "nome": "Desespero Esmagador",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Arcana",
    "escola": "Encantamento",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 13,
    "detalhes": "Execução: padrão; Alcance: pessoal; Área: cone de 6m; Duração: cena; Resistência: Vontade parcial.",
    "resumo": "Humanoides na área são acometidos de grande tristeza, adquirindo as condições fraco e frustrado. Se passarem na resistência, adquirem essas condições por uma rodada.",
    "aumentos": [
      "+2 PM: em vez do normal, as condições adquiridas são debilitado e esmorecido.",
      "+3 PM: em vez do normal, afeta qualquer tipo de criatura.",
      "+3 PM: além do normal, criaturas que falhem na resistência ficam aos prantos (em termos de jogo, adquirem a condição pasmo) por 1 rodada (apenas uma vez por cena). Requer 3º círculo."
    ]
  },
  {
    "id": "desfazer-engenhoca",
    "nome": "Desfazer Engenhoca",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Universal",
    "escola": "Abjuração",
    "categorias": [
      "Ofensiva",
      "Defensiva",
      "Utilidade"
    ],
    "fonte": "Arsenal dos Heróis",
    "arquivo": "magias herois.pdf",
    "pagina": 2,
    "detalhes": "Execução: padrão; Alcance: médio; Área ou Alvo: esfera com 3m de raio ou 1 criatura ou engenhoca; Duração: instantânea.",
    "resumo": "Você desfaz os efeitos ativos de engenhocas, como se sua duração tivesse acabado (efeitos instantâneos não podem ser dissipados).",
    "aumentos": [
      "+2 PM: além do normal, você recebe +5 no seu teste de Misticismo para dissipar uma engenhoca para cada vez que a viu ser usada na cena.",
      "+5 PM: além do normal, a magia ignora qualquer efeito ativo gerado por engenhocas (por exemplo, um Campo Antimagia).",
      "+12 PM: muda a área para esfera com 9m de raio. Em vez do normal, cria um efeito de disjunção. Todos os efeitos de engenhocas na área são automaticamente dissipados e todas as engenhocas na área, exceto aquelas que você estiver carregando, enguiçam por uma cena (o usuário de engenhocas carregadas tem direito a um teste de Vontade para evitar isso; engenhocas soltas são itens mundanos e por isso não têm direito a testes, como normal). Requer 5º círculo."
    ]
  },
  {
    "id": "despedacar",
    "nome": "Despedaçar",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Evocação",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 13,
    "detalhes": "Execução: padrão; Alcance: curto; Alvo: 1 criatura ou objeto mundano Pequeno; Duração: instantânea; Resistência: Fortitude parcial ou Reflexos anula.",
    "resumo": "Esta magia emite um som alto e agudo. O alvo sofre 1d8+2 pontos de dano de impacto e fica atordoado por uma rodada (Fortitude reduz o dano à metade e evita o atordoamento).",
    "aumentos": [
      "+2 PM: aumenta o dano em +1d8+2.",
      "+2 PM: muda o alvo para objeto mundano Médio. Requer 2º círculo.",
      "+5 PM: muda o alvo para objeto mundano Grande. Requer 3º círculo.",
      "+9 PM: muda o alvo para objeto mundano Enorme. Requer 4º círculo.",
      "+14 PM: muda o alvo para objeto mundano Colossal. Requer 5º círculo.",
      "+5 PM: muda o alcance para pessoal e a área para esfera com 6m de raio. Todas as criaturas e objetos na área são afetados."
    ]
  },
  {
    "id": "detectar-ameacas",
    "nome": "Detectar Ameaças",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Adivinhação",
    "categorias": [
      "Utilidade"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 13,
    "detalhes": "Execução: padrão; Alcance: pessoal; Área: esfera com 18m de raio; Duração: cena, até ser descarregada.",
    "resumo": "Você recebe uma intuição aguçada sobre perigos ao seu redor. Quando uma criatura hostil ou armadilha entra na área do efeito, você faz um teste de Percepção (CD determinada pelo mestre de acordo com a situação).",
    "aumentos": [
      "+1 PM: você descobre também a raça ou espécie e o poder da criatura detectada (determinado pela aura dela). Criaturas de 1º a 6º nível geram aura tênue, criaturas de 7º a 12º nível geram aura moderada e criaturas de 13º ao 20º nível geram aura poderosa. Criaturas acima do 20º nível geram aura avassaladora.",
      "+2 PM: além do normal, você não fica surpreso desprevenido contra perigos detectados com sucesso e recebe +5 em testes de resistência contra armadilhas. Requer 2º círculo."
    ]
  },
  {
    "id": "discricao",
    "nome": "Discrição",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Universal",
    "escola": "Encantamento",
    "categorias": [
      "Ofensiva",
      "Defensiva",
      "Utilidade"
    ],
    "fonte": "Arsenal dos Heróis",
    "arquivo": "magias herois.pdf",
    "pagina": 2,
    "detalhes": "Execução: padrão; Alcance: pessoal ou toque; Alvo: você ou 1 objeto; Duração: cena; Resistência: Vontade anula.",
    "resumo": "Esta magia torna a aparência do alvo desinteressante, como se ele fosse parte da paisagem, algo perdido na bagunça ou mais um na multidão.",
    "aumentos": [
      "+1 PM: muda o alvo para 1 criatura. Requer 2º círculo.",
      "+2 PM: aumenta a penalidade em testes para –15. Requer 2º círculo.",
      "+3 PM: além do normal, o alvo não pode ser detectado por magias de adivinhação. Requer 4° círculo."
    ]
  },
  {
    "id": "disfarce-ilusorio",
    "nome": "Disfarce Ilusório",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Ilusão",
    "categorias": [
      "Utilidade"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 14,
    "detalhes": "Execução: padrão; Alcance: pessoal; Alvo: você; Duração: cena; Resistência: Vontade desacredita.",
    "resumo": "Você muda a aparência do alvo, incluindo seu equipamento. Isso inclui altura, peso, tom de pele, cor de cabelo, timbre de voz etc.",
    "aumentos": [
      "+1 PM: muda o alcance para curto e o alvo para 1 objeto. Você pode, por exemplo, transformar pedaços de ferro em moedas de ouro. Você recebe +10 em testes de Enganação para falsificação.",
      "+2 PM: muda o alcance para curto e o alvo para 1 criatura. Uma criatura involuntária pode anular o efeito com um teste de Vontade.",
      "+2 PM: a ilusão inclui odores e sensações. Isso muda o bônus em testes de Enganação para disfarce para +20.",
      "+3 PM: muda o alcance para curto e o alvo para criaturas escolhidas. Cada criatura pode ter uma aparência diferente. Criaturas involuntárias podem anular o efeito com um teste de Vontade. Requer 2º círculo."
    ]
  },
  {
    "id": "dissipar-magia",
    "nome": "Dissipar Magia",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Universal",
    "escola": "Abjuração",
    "categorias": [
      "Defensiva",
      "Utilidade"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 14,
    "detalhes": "Execução: padrão; Alcance: médio; Alvo ou Área: 1 criatura ou 1 objeto mágico ou esfera com 3m de raio; Duração: instantânea.",
    "resumo": "Você dissipa outras magias que estejam ativas, como se sua duração tivesse acabado. Note que efeitos de magias instantâneas não podem ser dissipados (não se pode dissipar uma Bola de Fogo ou Relâmpago depois que já causaram dano...).",
    "aumentos": [
      "+12 PM: muda a área para esfera com 9m de raio. Em vez do normal, cria um efeito de disjunção. Todas as magias na área são automaticamente dissipadas e todos os itens mágicos na área, exceto aqueles que você estiver carregando, viram itens mundanos por uma cena (com direito a um teste de Vontade para evitar esse efeito). Requer 5º círculo."
    ]
  },
  {
    "id": "distracao-fugaz",
    "nome": "Distração Fugaz",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Ilusão",
    "categorias": [
      "Ofensiva",
      "Defensiva",
      "Utilidade"
    ],
    "fonte": "Arsenal dos Heróis",
    "arquivo": "magias herois.pdf",
    "pagina": 2,
    "detalhes": "Execução: padrão; Alcance: curto; Alvo: 1 humanoide; Duração: instantânea; Resistência: Vontade anula.",
    "resumo": "Esta magia busca algo de grande interesse pessoal (uma pessoa, um item, uma lembrança...) na memória do alvo e produz uma breve ilusão disso, visível a todos os presentes.",
    "aumentos": [
      "+1 PM: além do normal, se falhar no teste de Vontade o alvo também sofre –5 em testes de Diplomacia e Intimidação até o fim da cena.",
      "+1 PM: muda o alvo para 1 criatura. Requer 2º círculo.",
      "+2 PM: em vez de desprevenido, o alvo fica atordoado (apenas uma vez por cena).",
      "+2 PM: afeta todos os alvos válidos a sua escolha dentro do alcance. Requer 2º círculo."
    ]
  },
  {
    "id": "emular-magia",
    "nome": "Emular Magia",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Universal",
    "escola": "Evocação",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Arsenal dos Heróis",
    "arquivo": "magias herois.pdf",
    "pagina": 2,
    "detalhes": "Execução: movimento; Alcance: pessoal; Alvo: você; Duração: cena.",
    "resumo": "Pela duração de Emular Magia, você pode lançar uma única magia que tenha visto ser lançada em alcance curto desde sua última rodada. A magia deve ser de um tipo (arcana ou divina) e de um círculo a que você tenha acesso.",
    "aumentos": [
      "+1 PM: a magia emulada pode ser de qualquer tipo, arcana ou divina."
    ]
  },
  {
    "id": "enfeiticar",
    "nome": "Enfeitiçar",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Encantamento",
    "categorias": [
      "Controle",
      "Utilidade"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 14,
    "detalhes": "Execução: padrão; Alcance: curto; Alvo: 1 humanoide; Duração: cena; Resistência: Vontade anula.",
    "resumo": "O alvo fica enfeitiçado (veja a página 394). Um alvo hostil ou que esteja envolvido em um combate recebe +5 em seu teste de resistência.",
    "aumentos": [
      "+2 PM: em vez do normal, você sugere uma ação para o alvo e ele obedece. A sugestão deve ser feita de modo que pareça aceitável, a critério do mestre. Pedir ao alvo que pule de um precipício, por exemplo, dissipa a magia. Já sugerir a um guarda que descanse um pouco, de modo que você e seus aliados passem por ele, é aceitável. Quando o alvo executa a ação, a magia termina. Você pode determinar uma condição específica para a sugestão: por exemplo, que um rico mercador doe suas moedas para o primeiro mendigo que encontrar.",
      "+5 PM: muda o alvo para 1 espírito ou monstro. Requer 3º círculo.",
      "+5 PM: afeta todos os alvos dentro do alcance."
    ]
  },
  {
    "id": "enxame-de-pestes",
    "nome": "Enxame de Pestes",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Divina",
    "escola": "Convocação",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 15,
    "detalhes": "Execução: completa; Alcance: médio; Efeito: 1 enxame Médio (quadrado de 1,5m); Duração: sustentada. Resistência: Fortitude reduz à metade.",
    "resumo": "Você conjura um enxame de criaturas a sua escolha, como besouros, gafanhotos, ratos, morcegos ou serpentes. O enxame pode passar pelo espaço de outras criaturas e não impede que outras criaturas entrem no espaço dele.",
    "aumentos": [
      "+2 PM: aumenta o dano em +1d12.",
      "+3 PM: muda a resistência para Reflexos reduz à metade e o enxame para criaturas maiores, como gatos, guaxinins, compsognatos ou kobolds. Ele causa 3d12 pontos de dano (a sua escolha entre corte, impacto ou perfuração). O resto da magia segue normal.",
      "+5 PM: aumenta o número de enxames em +1. Eles não podem ocupar o mesmo espaço. Requer 3º círculo.",
      "+7 PM: muda a resistência para Reflexos reduz à metade e o enxame para criaturas elementais. Ele causa 5d12 pontos do dano (a sua escolha entre ácido, eletricidade, fogo ou frio). O resto da magia segue normal. Requer 4º círculo."
    ]
  },
  {
    "id": "escapatoria-de-hyninn",
    "nome": "Escapatória de Hyninn",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Abjuração",
    "categorias": [
      "Defensiva"
    ],
    "fonte": "Campeões dos Deuses",
    "arquivo": "magias deuses.pdf",
    "pagina": 2,
    "detalhes": "Execução: reação; Alcance: pessoal; Alvo: você; Duração: instantânea.",
    "resumo": "Por um breve instante, você adquire uma agilidade espantosa para se esquivar de algum perigo súbito. Você recebe +5 em um teste de Ladinagem para desarmar armadilhas ou de Reflexos.",
    "aumentos": [
      "+2 PM: muda o alcance para curto e o alvo para 1 criatura. Requer 2º círculo.",
      "+5 PM: muda a execução para padrão e a duração para cena. Em vez do normal, o bônus se aplica a todos os testes destas perícias pela duração. Requer 3º círculo. +3 PM (AƞƓƜƏơ DƓƤƝƢƝơ ƒƓ HƧƜƗƜƜ): além do normal, o alvo pode usar Evasão (Tormenta20, p. 73). +7 PM (AƞƓƜƏơ DƓƤƝƢƝơ ƒƓ HƧƜƗƜƜ): além do normal, o alvo pode usar Evasão Aprimorada (Tormenta20, p. 75). Requer 4° círculo."
    ]
  },
  {
    "id": "escudo-da-fe",
    "nome": "Escudo da Fé",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Abjuração",
    "categorias": [
      "Defensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 15,
    "detalhes": "Execução: reação; Alcance: curto; Alvo: 1 criatura; Duração: 1 turno.",
    "resumo": "Um escudo místico se manifesta momentaneamente para bloquear um golpe. O alvo recebe +2 na Defesa.",
    "aumentos": [
      "+1 PM: muda a execução para ação padrão, o alcance para toque e a duração para cena.",
      "+1 PM: também fornece ao alvo camuflagem leve contra ataques à distância.",
      "+2 PM: aumenta o bônus na Defesa em +1.",
      "+2 PM: muda a execução para ação padrão, o alcance para toque e a duração para cena. A magia cria uma conexão mística entre você e o alvo. Além do efeito normal, o alvo sofre metade do dano por ataques e efeitos; a outra metade do dano é transferida a você. Se o alvo sair de alcance curto de você, a magia é dissipada. Requer 2º círculo.",
      "+3 PM: muda a duração para 1 dia. Requer 2º círculo."
    ]
  },
  {
    "id": "esculpir-sons",
    "nome": "Esculpir Sons",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Arcana",
    "escola": "Ilusão",
    "categorias": [
      "Utilidade"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 15,
    "detalhes": "Execução: padrão; Alcance: médio; Alvo: 1 criatura ou objeto; Duração: cena; Resistência: Vontade anula.",
    "resumo": "Esta magia altera os sons emitidos pelo alvo. Ela não é capaz de criar sons, mas pode omiti-los (como fazer uma carroça ficar silenciosa) ou transformá-los (como fazer uma pessoa ficar com voz de passarinho).",
    "aumentos": [
      "+2 PM: aumenta o número de alvos em +1. Todas as criaturas e objetos devem ser afetadas da mesma forma."
    ]
  },
  {
    "id": "escuridao",
    "nome": "Escuridão",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Universal",
    "escola": "Necromancia",
    "categorias": [
      "Controle",
      "Utilidade"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 16,
    "detalhes": "Execução: padrão; Alcance: curto; Alvo: 1 objeto; Duração: cena; Resistência: Vontade anula (veja texto).",
    "resumo": "O alvo emana sombras em uma área com 6m de raio. Criaturas dentro da área recebem camuflagem leve por escuridão leve. As sombras não podem ser iluminadas por nenhuma fonte de luz natural.",
    "aumentos": [
      "+1 PM: aumenta a área da escuridão em +1,5m de raio.",
      "+2 PM: muda o efeito para fornecer camuflagem total por escuridão total. As sombras bloqueiam a visão na área e através dela.",
      "+2 PM: muda a duração para 1 dia.",
      "+2 PM: muda o alvo para 1 criatura e a resistência para Fortitude parcial. Você lança a magia nos olhos do alvo, que fica cego pela cena. Se passar na resistência, fica cego por 1 rodada. Requer 2º círculo.",
      "+5 PM: muda o alcance para pessoal e o alvo para você. Em vez do normal, você é coberto por sombras, recebendo +10 em testes de Furtividade e camuflagem leve. Requer 2º círculo."
    ]
  },
  {
    "id": "espirito-balistico",
    "nome": "Espírito Balístico",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Convocação",
    "categorias": [
      "Ofensiva",
      "Defensiva",
      "Utilidade"
    ],
    "fonte": "Arsenal dos Heróis",
    "arquivo": "magias herois.pdf",
    "pagina": 2,
    "detalhes": "Execução: padrão; Alcance: curto; Efeito: 1 criatura conjurada; Duração: sustentada.",
    "resumo": "Esta magia invoca um pequeno espírito feito de energia com aparência a sua escolha em um espaço desocupado. O espírito é fixo, permanecendo no lugar onde foi invocado.",
    "aumentos": [
      "+2 PM: aumenta o dano em um dado do mesmo tipo (total de dados limitado pelo círculo máximo de magia que você pode lançar).",
      "+2 PM: muda o número de espíritos para dois. Requer 2º círculo",
      "+5 PM: muda o número de espíritos para três. Requer 3º círculo. +3 PM (AƞƓƜƏơ GƝƚƓƛ [ƓƜƓƠƕƗƏ ƓƚƓƛƓƜƢƏƚ]Ž QƏƠƓƓƜ Ɲƣ KƏƚƚƧƏƜƏƑƖ): muda o dado de dano para d8 e o tipo de dano para o o tipo escolhido para sua habilidade racial elemental."
    ]
  },
  {
    "id": "euforia-de-valkaria",
    "nome": "Euforia de Valkaria",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Encantamento",
    "categorias": [
      "Ofensiva",
      "Defensiva",
      "Utilidade"
    ],
    "fonte": "Campeões dos Deuses",
    "arquivo": "magias deuses.pdf",
    "pagina": 2,
    "detalhes": "Execução: padrão; Alcance: pessoal; Alvo: você; Duração: cena.",
    "resumo": "Esta magia enche o alvo de disposição, apagando o medo (e bom senso) em seu coração e impedindo-o de ser intimidado por desafios árduos.",
    "aumentos": [
      "+2 PM: aumenta o bônus em testes de ataque em +1 (bônus máximo limitado pelo círculo máximo de magia que você pode lançar).",
      "+2 PM: muda a execução para reação e a duração para 1 rodada. Em vez do normal, o alvo recebe imunidade a medo e +5 em Vontade. Requer 2° círculo.",
      "+2 PM: muda o alvo para área de esfera com 3m de raio. Você e todos os aliados na área são afetados pela magia. Requer 2º círculo. +1 PM (AƞƓƜƏơ DƓƤƝƢƝơ ƒƓ VƏƚƙƏƠƗƏ): muda o alcance para toque e o alvo para 1 criatura."
    ]
  },
  {
    "id": "execucao-de-thwor",
    "nome": "Execução de Thwor",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Necromancia",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Campeões dos Deuses",
    "arquivo": "magias deuses.pdf",
    "pagina": 2,
    "detalhes": "Execução: movimento; Alcance: curto; Alvo: 1 humanoide sob efeito de uma condição de medo; Duração: 1 rodada; Resistência: Vontade anula.",
    "resumo": "Se acertar seu próximo ataque no alvo, ele se torna um acerto crítico. Se for um crítico naturalmente, em vez disso seu multiplicador aumenta em +1.",
    "aumentos": [
      "+2 PM: muda o alvo para 1 criatura. Requer 2º círculo.",
      "+5 PM: em vez do normal, a magia afeta 1 alvo sob efeito de uma condição mental. Requer 3º círculo. +7 PM (AƞƓƜƏơ DƓƤƝƢƝơ ƒƓ TƖƥƝƠ): se o ataque for um acerto crítico naturalmente, em vez do normal ele causa o efeito de um golpe de misericórdia (Tormenta20, p. 235). Requer 5º círculo."
    ]
  },
  {
    "id": "explosao-de-chamas",
    "nome": "Explosão de Chamas",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Evocação",
    "categorias": [
      "Ofensiva",
      "Defensiva",
      "Utilidade"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 16,
    "detalhes": "Execução: padrão; Alcance: pessoal; Área: cone de 6m; Duração: instantânea; Resistência: Reflexos reduz à metade.",
    "resumo": "Um leque de chamas irrompe de suas mãos, causando 2d6 pontos de dano de fogo às criaturas na área. TƠƣƟƣƓ: muda o alcance para curto, a área para alvo de 1 objeto e a resistência para Reflexos anula.",
    "aumentos": [
      "+1 PM: aumenta o dano em +1d6.",
      "+1 PM: muda a resistência para Reflexos parcial. Se passar, a criatura reduz o dano à metade; se falhar, fica em chamas (veja Condições, no AƞƲƜƒƗƑƓ)."
    ]
  },
  {
    "id": "farejar-fortuna",
    "nome": "Farejar Fortuna",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Adivinhação",
    "categorias": [
      "Defensiva",
      "Utilidade"
    ],
    "fonte": "Arsenal dos Heróis",
    "arquivo": "magias herois.pdf",
    "pagina": 3,
    "detalhes": "Execução: padrão; Alcance: pessoal; Alvo: você; Duração: cena.",
    "resumo": "Ao lançar esta magia, você descobre se existe algum tesouro em alcance longo. Para este efeito, “tesouro” é qualquer acúmulo de itens valiosos (acima do dinheiro inicial de um personagem do seu nível) que não estejam sendo carregados ou vestidos por uma criatura inteligente.",
    "aumentos": [
      "+1 PM: muda o alcance para toque, o alvo para um item recém-encontrado e a duração para instantânea. Em vez do normal, você recebe +5 em testes de perícia para identificar o item.",
      "+2 PM: além do normal, você recebe +5 em testes de perícia para localizar o tesouro.",
      "+2 PM: em vez do normal, quando você rola qualquer dado para definir um tesouro, pode rolar dois dados e escolher qual resultado usar."
    ]
  },
  {
    "id": "fisico-divino",
    "nome": "Físico Divino",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Divina",
    "escola": "Transmutação",
    "categorias": [
      "Defensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 16,
    "detalhes": "Execução: padrão; Alcance: toque; Alvo: 1 criatura; Duração: cena.",
    "resumo": "Você fortalece o corpo do alvo. Ele recebe +2 em Força, Destreza ou Constituição, a sua escolha. Esse aumento não oferece PV ou PM adicionais.",
    "aumentos": [
      "+3 PM: muda o alcance para curto e o alvo para criaturas escolhidas.",
      "+3 PM: em vez do normal, o alvo recebe +2 nos três atributos físicos. Requer 3º círculo.",
      "+7 PM: em vez do normal, o alvo recebe +4 no atributo escolhido. Requer 4º círculo.",
      "+15 PM: em vez do normal, o alvo recebe +4 nos três atributos físicos. Requer 5º círculo."
    ]
  },
  {
    "id": "flecha-acida",
    "nome": "Flecha Ácida",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Arcana",
    "escola": "Evocação",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 16,
    "detalhes": "Execução: padrão; Alcance: médio; Alvo: 1 criatura ou objeto; Duração: instantânea; Resistência:",
    "resumo": "Você dispara um projétil que causa 4d6 pontos de dano de ácido. Se falhar no teste de resistência, o alvo fica coberto por um muco corrosivo, sofrendo mais 2d6 de dano de ácido no início de seus dois próximos turnos.",
    "aumentos": [
      "+1 PM: além do normal, se o alvo coberto pelo muco ácido estiver usando armadura ou escudo, o item é corroído. Isso reduz o bônus na Defesa do item em 1 ponto permanentemente. O item pode ser consertado, restaurando seu bônus (veja Ofício, na página 121).",
      "+2 PM: aumenta a redução na Defesa em +1.",
      "+2 PM: aumenta o dano inicial e o dano por rodada em +1d6."
    ]
  },
  {
    "id": "flecha-de-luz",
    "nome": "Flecha de Luz",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Universal",
    "escola": "Evocação",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Campeões dos Deuses",
    "arquivo": "magias deuses.pdf",
    "pagina": 2,
    "detalhes": "Execução: padrão; Alcance: médio; Alvo: 1 criatura; Duração: instantânea; Resistência: Reflexos parcial.",
    "resumo": "Esta magia lança uma flecha luminosa contra o alvo, que sofre 2d8+2 pontos de dano de luz e fica ofuscado por 1 rodada. Passar no teste de resistência reduz o dano à metade e evita a condição.",
    "aumentos": [
      "+1 PM: muda o alvo para uma criatura que tenha causado dano a você ou a seus aliados na última rodada e os dados de dano da magia para d10.",
      "+2 PM: aumenta o dano em +1d8+1.",
      "+2 PM: aumenta o número de alvos em +1 (número de alvos adicionais limitado pelo círculo máximo de magia que você pode lançar). +2 PM (AƞƓƜƏơ AƠƑƏƜƝơ): alvos que falhem na resistência ficam cegos por 1 rodada e então ofuscados. Requer 2º círculo. +3 PM (AƞƓƜƏơ AƠƟƣƓƗƠƝơ ƒƓ LƓƜƹƠƗƓƜƜ): muda o alcance para pessoal, o alvo para seu arco arcano, a duração para sustentada e a resistência para nenhuma. Em vez do normal, o alvo emite luz como uma tocha e causa +2d8+2 pontos de dano de luz. Criaturas que sofram dano do arco ficam ofuscadas (veja Arqueiro de Lenórienn em Heróis de Arton). +1 PM (AƞƓƜƏơ EƚƔƝơ): muda o alvo para 1 duyshidakk ou 1 devoto de Aharadak, Tauron ou Thwor. Muda os dados de dano para d10. +2 PM (AƞƓƜƏơ DƗƤƗƜƝơ): além do normal, para cada alvo que falhar na resistência, o próximo aliado que causar dano a ele recebe uma quantidade de PV temporários igual à metade do dano causado pela magia. Requer 2º círculo."
    ]
  },
  {
    "id": "frescor-de-lena",
    "nome": "Frescor de Lena",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Abjuração",
    "categorias": [
      "Defensiva"
    ],
    "fonte": "Campeões dos Deuses",
    "arquivo": "magias deuses.pdf",
    "pagina": 2,
    "detalhes": "Execução: padrão; Alcance: pessoal; Área: raio de 9m; Duração: instantânea.",
    "resumo": "Você emana uma aura refrescante, que envolve você e aliados na área. A aura purifica o ar ao redor, eliminando todo tipo de fumaça, poeira, gás nocivo, nuvem ácida ou veneno de inalação, exceto se forem gerados por magias de 2º círculo ou maior.",
    "aumentos": [
      "+2 PM: aumenta em 1 o círculo de magia afetado (limitado pelo círculo máximo de magia que você pode lançar).",
      "+2 PM: muda o alcance para toque, a área para alvo (1 criatura) e a duração para 1 dia. Em vez do normal, suprime uma doença do alvo. Requer 2° círculo. +3 PM (AƞƓƜƏơ DƓƤƝƢƝơ ƒƓ LƓƜƏ): como acima, mas quando faz o teste da doença nesse dia, o alvo recebe um bônus de +5. Requer 3° círculo. +9 PM (AƞƓƜƏơ DƓƤƝƢƝơ ƒƓ LƓƜƏ): muda o alcance para toque, a área para alvo (1 criatura) e adiciona componente material (ervas no valor de T$ 1.000). O alvo recupera 1 ponto de atributo perdido por uma doença. Requer 4° círculo."
    ]
  },
  {
    "id": "furia-dos-antepassados",
    "nome": "Fúria dos Antepassados",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Evocação",
    "categorias": [
      "Ofensiva",
      "Defensiva",
      "Utilidade"
    ],
    "fonte": "Campeões dos Deuses",
    "arquivo": "magias deuses.pdf",
    "pagina": 2,
    "detalhes": "Execução: padrão; Alcance: curto; Alvo: 1 humanoide; Duração: instantânea; Resistência: Vontade parcial.",
    "resumo": "Para aqueles devotados a Lin-Wu, respeito aos ancestrais é algo levado muito a sério — pois no além-vida, eles podem julgar suas ações e trazer fortuna ou desgraça.",
    "aumentos": [
      "+2 PM: aumenta o número de alvos em +1. Requer 2° círculo.",
      "+4 PM: aumenta o dano psíquico e de luz em +1d6 cada. +0 PM(AƞƓƜƏơ DƓƤƝƢƝơ ƒƓ LƗƜWƣ): muda o alvo para 1 criatura inteligente (Int –3 ou maior)."
    ]
  },
  {
    "id": "futuro-melhor",
    "nome": "Futuro Melhor",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Adivinhação",
    "categorias": [
      "Defensiva"
    ],
    "fonte": "Campeões dos Deuses",
    "arquivo": "magias deuses.pdf",
    "pagina": 3,
    "detalhes": "Execução: reação; Alcance: pessoal; Alvo: você; Duração: instantânea.",
    "resumo": "Esta magia permite enxergar todas as possibilidades e consequências de um evento muito recente, ainda a tempo de escolher o melhor caminho. O alvo recebe +2 em um teste cujo dado já rolou, mas cujo resultado o mestre ainda não tenha declarado.",
    "aumentos": [
      "+2 PM: muda o alcance para curto e o alvo para 1 criatura. Requer 2º círculo. +2 PM (AƞƓƜƏơ DƓƤƝƢƝơ ƒƓ TƖƧƏƢƗơ): muda o bônus para 1d4+2."
    ]
  },
  {
    "id": "globo-da-verdade-de-gwen",
    "nome": "Globo da Verdade de Gwen",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Divina",
    "escola": "Adivinhação",
    "categorias": [
      "Defensiva",
      "Utilidade"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 17,
    "detalhes": "Execução: padrão; Alcance: curto; Efeito: 1 globo; Duração: cena.",
    "resumo": "Cria um globo flutuante e intangível, com 50cm de diâmetro. O globo mostra uma cena vista até uma semana atrás por você ou por uma criatura que você toque ao lançar a magia (mediante uma pergunta; a criatura pode fazer um teste de Vontade para anular o efeito), permitindo que...",
    "aumentos": [
      "+1 PM: o globo mostra uma cena vista até um mês atrás.",
      "+2 PM: como acima, até um ano atrás.",
      "+2 PM: ao lançar a magia, você pode tocar um cadáver. O globo mostra a última cena vista por essa criatura.",
      "+4 PM: muda o alcance para longo e o efeito para 10 globos. Todos mostram a mesma cena."
    ]
  },
  {
    "id": "hipnotismo",
    "nome": "Hipnotismo",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Encantamento",
    "categorias": [
      "Controle"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 17,
    "detalhes": "Execução: padrão; Alcance: curto; Alvos: 1 animal ou humanoide; Duração: 1d4 rodadas; Resistência: Vontade anula.",
    "resumo": "Suas palavras e movimentos ritmados deixam o alvo fascinado. Esta magia só afeta criaturas que possam perceber você. Se usar esta magia em combate, o alvo recebe +5 em seu teste de resistência.",
    "aumentos": [
      "+1 PM: como o normal, mas alvos que passem na resistência não sabem que foram vítimas de uma magia.",
      "+2 PM: muda o alvo para animais ou humanoides escolhidos.",
      "+2 PM: muda a duração para sustentada.",
      "+2 PM: também afeta espíritos e monstros na área. Requer 2º círculo.",
      "+5 PM: também afeta construtos, espíritos, monstros e mortos-vivos na área. Requer 3º círculo."
    ]
  },
  {
    "id": "imagem-espelhada",
    "nome": "Imagem Espelhada",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Ilusão",
    "categorias": [
      "Defensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 18,
    "detalhes": "Execução: padrão; Alcance: pessoal; Alvo: você; Duração: cena.",
    "resumo": "Três cópias ilusórias suas aparecem. As duplicatas ficam ao seu redor e imitam suas ações, tornando difícil para um inimigo saber quem atacar.",
    "aumentos": [
      "+2 PM: aumenta o número de cópias em +1 (e o bônus na Defesa em +2).",
      "+2 PM: além do normal, toda vez que uma cópia é destruída, emite um clarão de luz. A criatura que destruiu a cópia fica ofuscada por uma rodada. Requer 2º círculo."
    ]
  },
  {
    "id": "infligir-ferimentos",
    "nome": "Infligir Ferimentos",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Necromancia",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 18,
    "detalhes": "Execução: padrão; Alcance: toque; Alvo: 1 criatura; Duração: instantânea; Resistência: Fortitude reduz à metade.",
    "resumo": "Você canaliza energia negativa contra um alvo, causando 2d8+2 pontos de dano de trevas (ou curando 2d8+2 PV, se for um morto-vivo). InÁigir Ferimentos anula Curar Ferimentos.",
    "aumentos": [
      "+1 PM: além do normal, se falhar na resistência, o alvo fica fraco pela cena.",
      "+2 PM: aumenta o dano em 1d8+1.",
      "+2 PM: muda a resistência para nenhum. Como parte da execução da magia, você pode fazer um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e o efeito da magia.",
      "+5 PM: muda o alcance para curto e o alvo para criaturas escolhidas."
    ]
  },
  {
    "id": "infortunio-de-sszzaas",
    "nome": "Infortúnio de Sszzaas",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Necromancia",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Campeões dos Deuses",
    "arquivo": "magias deuses.pdf",
    "pagina": 3,
    "detalhes": "Execução: padrão; Alcance: curto; Alvo: 1 criatura; Duração: cena; Resistência: Vontade anula.",
    "resumo": "Esta maldição menor reduz a resiliência da vítima, tornando-a mais suscetível a efeitos nocivos. O alvo sofre –2 em testes de sua resistência originalmente mais baixa.",
    "aumentos": [
      "+1 PM: além do normal, a vítima perde imunidade a venenos até o fim da próxima rodada. Requer 2° círculo.",
      "+2 PM: aumenta a penalidade em –1 (penalidade máxima limitada pelo círculo máximo de magia que você pode lançar). +3 PM (AƞƓƜƏơ DƓƤƝƢƝơ ƒƓ SơƨƨƏƏơ): além do normal, quando o alvo morre, deixa para trás um pequeno cristal com memórias e segredos. Ao resolver uma busca (Tormenta20, p. 278), um personagem pode quebrar um desses cristais para receber +2 em um teste de perícia. Requer 3° círculo."
    ]
  },
  {
    "id": "instante-estoico",
    "nome": "Instante Estoico",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Abjuração",
    "categorias": [
      "Defensiva"
    ],
    "fonte": "Campeões dos Deuses",
    "arquivo": "magias deuses.pdf",
    "pagina": 3,
    "detalhes": "Execução: reação; Alcance: pessoal; Alvo: você; Duração: instantânea.",
    "resumo": "Invocando a proteção de Khalmyr, você resiste a agressões potencialmente perigosas. Quando sofre dano não mágico, você recebe RD 10 contra esse dano.",
    "aumentos": [
      "+1 PM: muda a RD para 20. Requer 2° círculo.",
      "+2 PM: além do normal, para cada 10 pontos de dano que a magia reduzir em um turno, sua próxima rolagem de dano feita até a próxima rodada causa +1d6 pontos de dano de essência. +1 PM (AƞƓƜƏơ DƓƤƝƢƝơ ƒƓ KƖƏƚƛƧƠ): muda a execução para padrão e a duração para cena, até ser descarregada. Em vez do normal, quando sofre dano não mágico, você pode receber RD 10 contra esse dano. A magia é descarregada após você usar este efeito pela terceira vez. Requer 3º círculo. +2 PM (AƞƓƜƏơ DƓƤƝƢƝơ ƒƓ KƖƏƚƛƧƠ): muda o alcance para toque e o alvo para 1 criatura."
    ]
  },
  {
    "id": "invisibilidade",
    "nome": "Invisibilidade",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Arcana",
    "escola": "Ilusão",
    "categorias": [
      "Defensiva",
      "Utilidade"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 18,
    "detalhes": "Execução: livre; Alcance: pessoal; Alvo: você; Duração: 1 rodada.",
    "resumo": "O alvo fica invisível (incluindo seu equipamento). Um personagem invisível recebe camuflagem total, +10 em testes de Furtividade contra ouvir e criaturas que não possam vê-lo ficam desprevenidas contra seus ataques.",
    "aumentos": [
      "+1 PM: muda a execução para ação padrão, o alcance para toque e o alvo para 1 criatura ou 1 objeto Grande ou menor.",
      "+3 PM: muda a duração para cena. Requer 3º círculo.",
      "+3 PM: muda a duração para sustentada. Em vez do normal, o alvo gera uma esfera de invisibilidade. Não pode ser usado em conjunto com outros aprimoramentos. O alvo e todas as criaturas a até 3m dele se tornam invisíveis, como no efeito normal da magia (ainda ficam visíveis caso façam uma ação hostial). A esfera se move juntamente com o alvo; qualquer coisa que saia da esfera fica visível. Requer 3º círculo.",
      "+7 PM: muda a execução para ação padrão, o alcance para toque e o alvo para 1 criatura. A magia não é dissipada caso o alvo faça uma ação hostil. Requer 4º círculo."
    ]
  },
  {
    "id": "invocar-fagulha-elemental",
    "nome": "Invocar Fagulha Elemental",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Arcana",
    "escola": "Convocação",
    "categorias": [
      "Ofensiva",
      "Defensiva",
      "Utilidade"
    ],
    "fonte": "Ameaças de Arton",
    "arquivo": "magias ameaça.pdf",
    "pagina": 1,
    "detalhes": "Execução: completa; Alcance: curto; Efeito: familiar elemental; Duração: sustentada.",
    "resumo": "Você transforma uma porção de um elemento inerte em uma criatura elemental Pequena do tipo do elemento alvo. Por exemplo, lançar esta magia em um copo de água cria um elemental da água.",
    "aumentos": [
      "+1 PM: além do normal, o elemental fornece redução 10 contra o dano correspondente a seu tipo.",
      "+2 PM: em vez do normal, o elemental recebe a habilidade de dois familiares, um comum e um elemental."
    ]
  },
  {
    "id": "jato-corrosivo",
    "nome": "Jato Corrosivo",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Evocação",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Ameaças de Arton",
    "arquivo": "magias ameaça.pdf",
    "pagina": 1,
    "detalhes": "Execução: padrão; Alcance: pessoal; Área: linha de 9m; Duração: instantânea; Resistência: Reflexos reduz à metade.",
    "resumo": "Você dispara um jato, que causa 2d6 pontos de dano de ácido às criaturas na área. Contra construtos e objetos soltos, a magia causa +1 ponto de dano por dado.",
    "aumentos": [
      "+1 PM: aumenta o dano em +1d6.",
      "+1 PM: muda a resistência para Reflexos parcial. Se passar, a criatura reduz o dano à metade; se falhar, fica vulnerável."
    ]
  },
  {
    "id": "leque-cromatico",
    "nome": "Leque Cromático",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Ilusão",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 19,
    "detalhes": "Execução: padrão; Alcance: pessoal; Área: cone de 4,5m; Duração: instantânea. Resistência: Vontade parcial.",
    "resumo": "Um cone de luzes brilhantes surge das suas mãos, deixando os animais e humanoides na área atordoados por 1 rodada e ofuscados pela cena.",
    "aumentos": [
      "+2 PM: além do normal, as criaturas afetadas ficam vulneráveis pela cena.",
      "+2 PM: também afeta espíritos e monstros na área. Requer 2º círculo.",
      "+5 PM: também afeta construtos, espíritos, monstros e mortos-vivos na área. Requer 3º círculo."
    ]
  },
  {
    "id": "ligacao-telepatica",
    "nome": "Ligação Telepática",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Arcana",
    "escola": "Adivinhação",
    "categorias": [
      "Utilidade"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 20,
    "detalhes": "Execução: padrão; Alcance: toque; Alvo: 2 criaturas voluntárias; Duração: 1 dia.",
    "resumo": "Você cria um elo mental entre duas criaturas com Inteligência 3 ou maior (você pode ser uma delas). As criaturas podem se comunicar independente de idioma ou distância, mas não em mundos diferentes.",
    "aumentos": [
      "+2 PM: aumenta o número de alvos em +1.",
      "+3 PM: muda o alvo para 1 criatura. Em vez do normal, você cria um elo mental que permite que você veja e ouça pelos sentidos da criatura, se gastar uma ação de movimento. Uma criatura involuntária pode fazer um teste de Vontade para suprimir a magia por uma hora. Requer 3º círculo."
    ]
  },
  {
    "id": "localizacao",
    "nome": "Localização",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Arcana",
    "escola": "Adivinhação",
    "categorias": [
      "Utilidade"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 20,
    "detalhes": "Execução: padrão; Alcance: pessoal; Área: esfera com 90m de raio; Duração: cena.",
    "resumo": "Esta magia pode encontrar uma criatura ou objeto a sua escolha. Você pode pensar em termos gerais (“um elfo”, “algo de metal”) ou específicos (“Gwen, a elfa”, “uma espada longa”).",
    "aumentos": [
      "+5 PM: aumenta a área em um fator de 10 (90m para 900m, 900m para 9km e assim por diante)."
    ]
  },
  {
    "id": "luz",
    "nome": "Luz",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Universal",
    "escola": "Evocação",
    "categorias": [
      "Utilidade"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 20,
    "detalhes": "Execução: padrão; Alcance: curto; Alvo: 1 objeto; Duração: cena; Resistência: Vontade anula (veja texto).",
    "resumo": "O alvo emite luz (mas não produz calor) em uma área com 6m de raio. O objeto pode ser guardado (em um bolso, por exemplo) para interromper a luz, que voltará a funcionar caso o objeto seja revelado.",
    "aumentos": [
      "+1 PM: aumenta a área iluminada em +3m de raio.",
      "+2 PM: muda a duração para 1 dia.",
      "+2 PM: muda a duração para permanente e adiciona componente material (pó de rubi no valor de T$ 50). Requer 2º círculo. +2 PM (AƞƓƜƏơ AƠƑƏƜƝơ): muda o alvo para 1 criatura. Você lança a magia nos olhos do alvo, que fica ofuscado pela cena. Não afeta criaturas cegas. +2 PM (AƞƓƜƏơ AƠƑƏƜƝơ): muda o alcance para longo e o efeito para cria 4 pequenos globos flutuantes de pura luz. Você pode posicionar os globos onde quiser dentro do alcance. Você pode enviar um à frente, outra para trás, outra para cima e manter um perto de você, por exemplo. Uma vez por rodada, você pode mover os globos com uma ação livre. Cada um ilumina como uma tocha, mas não produz calor. Se um globo ocupar o espaço de uma criatura, ela fica ofuscada e sua silhueta pode ser vista claramente (ela não recebe camuflagem por escuridão ou invisibilidade). Requer 2º círculo. +2 PM (AƞƓƜƏơ DƗƤƗƜƝơ): a luz é cálida como a do sol. Criaturas que sofrem penalidades e dano pela luz solar sofrem seus efeitos como se estivessem expostos à luz solar real. Seus aliados na área estabilizam automaticamente e ficam imunes à condição sangrando, e seus inimigos ficam ofuscados. Requer 2º círculo. +5 PM (AƞƓƜƏơ DƗƤƗƜƝơ): muda o alcance para toque e o alvo para 1 criatura. Em vez do normal, o alvo é envolto por um halo de luz, recebendo +10 em testes de Diplomacia e redução de trevas 10. Requer 2º círculo."
    ]
  },
  {
    "id": "maaais-klunc",
    "nome": "Maaais Klunc",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Transmutação",
    "categorias": [
      "Ofensiva",
      "Defensiva",
      "Utilidade"
    ],
    "fonte": "Arsenal dos Heróis",
    "arquivo": "magias herois.pdf",
    "pagina": 3,
    "detalhes": "Execução: padrão; Alcance: pessoal; Alvo: você; Duração: cena.",
    "resumo": "Esta magia surgiu com o objetivo de invocar a força estupenda e estapafúrdia de certo bárbaro lendário, capaz de alcançar dimensões colossais.",
    "aumentos": [
      "+2 PM: muda o alcance para toque e o alvo para 1 criatura voluntária (por que alguém seria voluntário?). Requer 2º círculo.",
      "+5 PM: muda o alcance para curto e o alvo para 1 criatura involuntária (Vontade evita). Requer 3º círculo. Espera, o quê!?"
    ]
  },
  {
    "id": "magia-dadivosa",
    "nome": "Magia Dadivosa",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Transmutação",
    "categorias": [
      "Defensiva",
      "Utilidade"
    ],
    "fonte": "Campeões dos Deuses",
    "arquivo": "magias deuses.pdf",
    "pagina": 3,
    "detalhes": "Execução: movimento; Alcance: pessoal; Alvo: você; Duração: cena, até ser descarregada.",
    "resumo": "Não é comum descrever uma divindade maior do Panteão como “maluquinha”. Contudo, há ocasiões em que Wynna faz por merecer — como quando oferece estas dádivas caóticas.",
    "aumentos": [
      "+1 PM: muda o alcance para curto e o alvo para 1 criatura. Requer 3° círculo. +0 PM (AƞƓƜƏơ DƓƤƝƢƝơ ƒƓ WƧƜƜƏ): muda a execução para padrão, o ganho para +2 PM temporários e o limite para descarregar para +8 PM."
    ]
  },
  {
    "id": "mapear",
    "nome": "Mapear",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Arcana",
    "escola": "Adivinhação",
    "categorias": [
      "Utilidade"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 21,
    "detalhes": "Execução: padrão; Alcance: toque; Alvo: superfície ou objeto plano, como uma mesa ou pergaminho; Duração: cena.",
    "resumo": "Uma fagulha percorre a superfície afetada, queimando-a enquanto esboça um mapa da região onde o conjurador está. Se você conhece o lugar, o mapa será completo.",
    "aumentos": [
      "+3 PM: muda o alvo para 1 criatura e a duração para 1 hora. Em vez do normal, a criatura tocada descobre o caminho mais direto para entrar ou sair de um lugar. Assim, a magia pode ser usada para descobrir a rota até o relicário de uma catedral ou a saída mais próxima de uma masmorra (mas não para encontrar a localização de uma criatura ou objeto; a magia funciona apenas em relação a lugares). Caso a criatura demore mais de uma hora para percorrer o caminho, o conhecimento se perde."
    ]
  },
  {
    "id": "maquina-de-combate",
    "nome": "Máquina de Combate",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Arcana",
    "escola": "Transmutação",
    "categorias": [
      "Ofensiva",
      "Defensiva"
    ],
    "fonte": "Arsenal dos Heróis",
    "arquivo": "magias herois.pdf",
    "pagina": 3,
    "detalhes": "Execução: padrão; Alcance: toque; Alvo: 1 construto; Duração: cena.",
    "resumo": "Esta magia energiza a fonte de energia de um golem ou outro construto, sobrecarregando-a temporariamente. O alvo recebe +5 em Atletismo e Luta, mas perde 1d4 pontos de vida no fim de cada turno em que executar uma ação padrão.",
    "aumentos": [
      "+2 PM: além do normal, os ataques corpo a corpo do alvo causam +1d6 pontos de dano.",
      "+2 PM: além do normal, o alvo recebe +2 na Defesa.",
      "+2 PM: aumenta o bônus na Defesa em +1."
    ]
  },
  {
    "id": "marca-da-obediencia",
    "nome": "Marca da Obediência",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Universal",
    "escola": "Encantamento",
    "categorias": [
      "Controle"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 21,
    "detalhes": "Execução: padrão; Alcance: toque; Alvo: 1 criatura; Duração: cena; Resistência: Vontade anula.",
    "resumo": "Você toca uma criatura, gravando uma marca mística no corpo dela enquanto profere uma ordem, como “não ataque a mim ou meus aliados”, “siga-me” ou “não saia desta sala”.",
    "aumentos": [
      "+3 PM: muda a duração para 1 dia. Se não estiver em combate, a criatura só pode fazer o teste de Vontade a cada hora. Requer 3º círculo.",
      "+3 PM: sempre que o alvo fizer o teste de Vontade e falhar, a marca causa 3d6 pontos de dano psíquico. Requer 3º círculo."
    ]
  },
  {
    "id": "mente-divina",
    "nome": "Mente Divina",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Divina",
    "escola": "Adivinhação",
    "categorias": [
      "Defensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 21,
    "detalhes": "Execução: padrão; Alcance: toque; Alvo: 1 criatura; Duração: cena.",
    "resumo": "Você fortalece a mente do alvo. Ele recebe +2 em Inteligência, Sabedoria ou Carisma, a sua escolha. Esse aumento não oferece PV, PM ou perícias adicionais.",
    "aumentos": [
      "+3 PM: muda o alcance para curto e o alvo para criaturas escolhidas.",
      "+3 PM: em vez do normal, o alvo recebe +2 nos três atributos mentais. Requer 3º círculo.",
      "+7 PM: em vez do normal, o alvo recebe +4 no atributo escolhido. Requer 4º círculo.",
      "+15 PM: em vez do normal, o alvo recebe +4 nos três atributos mentais. Requer 5º círculo."
    ]
  },
  {
    "id": "metamorfose",
    "nome": "Metamorfose",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Arcana",
    "escola": "Transmutação",
    "categorias": [
      "Utilidade",
      "Defensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 21,
    "detalhes": "Execução: padrão; Alcance: pessoal; Alvo: você; Duração: cena.",
    "resumo": "Você muda sua aparência e forma — incluindo seu equipamento — para qualquer outra criatura, existente ou imaginada. Independentemente da forma escolhida, você recebe +20 em testes de Enganação para disfarce.",
    "aumentos": [
      "+1 PM: a forma escolhida recebe uma habilidade de sentidos entre faro, visão na penumbra e visão no escuro.",
      "+3 PM: a forma escolhida recebe percepção às cegas. Requer 3º círculo.",
      "+3 PM: muda o alcance para toque, o alvo para 1 criatura e adiciona resistência (Vontade anula).",
      "+3 PM: muda o alcance para médio, o alvo para 1 criatura e a resistência para Vontade anula. Em vez do normal, transforma o alvo em uma criatura ou objeto inofensivo (ovelha, sapo, galinha, pudim de ameixa etc.). A criatura não pode atacar, falar e lançar magias; seu deslocamento vira 3m e sua Defesa vira 10. Suas outras características não mudam. No início de seus turnos, o alvo pode fazer um teste de Vontade; se passar, retorna à sua forma normal e a magia termina. Requer 3º círculo.",
      "+5 PM: se mudar para formas não humanoides, pode escolher uma Forma Selvagem Aprimorada. Requer 3º círculo.",
      "+9 PM: se mudar para formas não humanoides, pode escolher uma Forma Selvagem Superior. Requer 4º círculo.",
      "+12 PM: além do normal, no início de seus turnos o alvo pode mudar de forma novamente, como uma ação livre, fazendo novas escolhas. Requer 5º círculo."
    ]
  },
  {
    "id": "miasma-mefitico",
    "nome": "Miasma Mefítico",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Divina",
    "escola": "Necromancia",
    "categorias": [
      "Ofensiva",
      "Controle"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 22,
    "detalhes": "Execução: padrão; Alcance: médio; Área: nuvem com 6m de raio; Duração: instantânea; Resistência: Fortitude (veja texto).",
    "resumo": "A área é coberta por emanações letais. Criaturas na área sofrem 5d6 pontos de dano de ácido e ficam enjoadas por 1 rodada.",
    "aumentos": [
      "+2 PM: aumenta o dano em +1d6.",
      "+3 PM: muda o tipo do dano para trevas."
    ]
  },
  {
    "id": "momento-de-tormenta",
    "nome": "Momento de Tormenta",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Universal",
    "escola": "Convocação",
    "categorias": [
      "Ofensiva",
      "Defensiva",
      "Utilidade"
    ],
    "fonte": "Ameaças de Arton",
    "arquivo": "magias ameaça.pdf",
    "pagina": 1,
    "detalhes": "Execução: completa; Alcance: pessoal; Área: cubo de 30m; Duração: sustentada; Resistência: veja texto.",
    "resumo": "A critério do mestre, a magia Conjurar Mortos-vivos pode ser usada para invocar outros tipos de mortos-vivos, usando os aprimoramentos descritos a seguir.",
    "aumentos": [
      "+3 PM: em vez de esqueletos, conjura fúrias de Tauron. Requer 3º círculo. Fúria de Tauron: como esqueletos, mas têm tamanho Pequeno, deslocamento de voo 12m, a habilidade incorpóreo, Des 5, Defesa 18 e causam 1d6 pontos de dano de trevas mais 1d6 pontos de dano de fogo. Além disso, criaturas vivas atingidas ficam Conjurar Mortos-vivos: Novos Aprimoramentos desprevenidas por 1 rodada e em chamas (Fort CD igual à da magia evita). +3 PM (AƞƓƜƏơ DƓƤƝƢƝơ ƒƓ AƠơƓƜƏƚ): em vez de esqueletos, conjura guerreiros perpétuos. Requer 3º círculo. Guerreiro Perpétuo: como esqueletos, mas têm For 5, Des 4, Defesa 33, a habilidade incorpóreo e causam 3d6 pontos de dano de impacto duas vezes por ação. +3 PM (AƞƓƜƏơ DƓƤƝƢƝơ ƒƓ SơƨƨƏƏơ): em vez de esqueletos, conjura zumbis peçonha. Requer 3º círculo. Zumbi Peçonha: como esqueletos, mas têm For 3, Des 1, Defesa 25 e causam 1d8+1 pontos de dano de trevas mais perda de 2d6 PV por veneno. Além disso, criaturas atingidas por um zumbi peçonha ficam atordoadas por 1 rodada (apenas uma vez por cena) e depois fracas (Fort reduz para fracas por 1 rodada). Uma nuvem rubra surge acima do conjurador. Uma vez por turno, você pode gastar uma ação de movimento para fazer a nuvem manifestar um dos fenômenos a seguir. Chuva ácida. Gotas corrosivas causam 6d4 pontos de dano de ácido em todas as criaturas na área. Neblina venenosa. Uma neblina faz com que todas as criaturas na área percam 2d12 PV por veneno (Fortitude evita). Raios escarlates. Até 6 inimigos aleatórios na área sofrem 6d8 pontos de dano de eletricidade (Reflexos reduz à metade). Pesadelos reais. Cada criatura na área sofre 4d6 pontos de dano psíquico e perde 1d4 PM (Vontade reduz o dano à metade e evita a perda de PM). Esta magia só pode ser aprendida e lançada por conjuradores que tenham observado uma área de Tormenta pelo menos uma vez. Sua divulgação é proibida e seu uso é permitido apenas em áreas controladas na Academia Arcana e outros lugares restritos, para estudar o fenômeno da Tormenta. Usar esta magia em qualquer outro ponto do Reinado é um crime enquadrado na décima-primeira infração do Vigintílogo.",
      "+3 PM: aumenta o dano em +1 dado do mesmo tipo.",
      "+5 PM: além do normal, criaturas na área ficam alquebradas enquanto permanecerem na área. +5 PM (AƞƓƜƏơ DƓƤƝƢƝơ ƒƓ AƖƏƠƏƒƏƙ): muda a área para círculo de 1km de raio."
    ]
  },
  {
    "id": "montaria-arcana",
    "nome": "Montaria Arcana",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Arcana",
    "escola": "Convocação",
    "categorias": [
      "Utilidade"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 22,
    "detalhes": "Execução: padrão; Alcance: curto; Efeito: criatura conjurada; Duração: 1 dia.",
    "resumo": "Esta magia convoca um parceiro cavalo (ou pônei) de guerra veterano. Sua aparência é de um animal negro com crina e cauda cinzentas e cascos feitos de fumaça, mas você pode mudá-la se quiser.",
    "aumentos": [
      "+1 PM: além do normal, criaturas do tipo animal em alcance curto da montaria devem fazer um teste de Vontade. Se passarem, ficam abaladas pela cena; se falharem, ficam apavoradas por 1d4 rodadas, depois abaladas pela cena.",
      "+3 PM: muda a duração para permanente e adiciona penalidade de –3 PM.",
      "+3 PM: aumenta o tamanho da montaria em uma categoria. Isso também aumenta o número de criaturas que ela pode carregar — duas para uma criatura Enorme, seis para Colossal. Uma única criatura controla a montaria; as outras apenas são deslocadas.",
      "+3 PM: muda o nível do parceiro para mestre. Requer 3º círculo."
    ]
  },
  {
    "id": "nevoa",
    "nome": "Névoa",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Universal",
    "escola": "Convocação",
    "categorias": [
      "Controle",
      "Defensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 23,
    "detalhes": "Execução: padrão; Alcance: curto; Efeito: nuvem com 6m de raio e 6m de altura; Duração: cena.",
    "resumo": "Uma névoa espessa eleva-se de um ponto a sua escolha, obscurecendo toda a visão — criaturas a até 1,5m têm camuflagem leve e criaturas a partir de 3m têm camuflagem total.",
    "aumentos": [
      "+1 PM: a magia também funciona sob a água, criando uma nuvem de tinta.",
      "+2 PM: você pode escolher criaturas no alcance ao lançar a magia; elas enxergam através do efeito. Requer 2º círculo.",
      "+2 PM: a nuvem tem um cheiro horrível. No início de seus turnos, qualquer criatura dentro dela, ou qualquer criatura com faro em alcance curto da nuvem, deve fazer um teste de Fortitude. Se falhar, fica enjoada por uma rodada.",
      "+2 PM: a nuvem tem um tom esverdeado e se torna cáustica. No início de seus turnos, criaturas dentro dela sofrem 2d4 pontos de dano de ácido.",
      "+3 PM: aumenta o dano de ácido em +2d4.",
      "+5 PM: além do normal, a nuvem fica espessa, quase sólida. Qualquer criatura dentro dela tem seu deslocamento reduzido para 3m (independentemente de seu deslocamento normal) e sofre –2 em testes de ataque e rolagens de dano."
    ]
  },
  {
    "id": "oracao",
    "nome": "Oração",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Divina",
    "escola": "Encantamento",
    "categorias": [
      "Defensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 23,
    "detalhes": "Execução: padrão; Alcance: curto; Alvos: todas as criaturas (veja texto); Duração: sustentada.",
    "resumo": "Você e os seus aliados no alcance recebem +2 em testes de perícia e rolagens de dano, e todos os seus inimigos no alcance sofrem –2 em testes de perícia e rolagens de dano.",
    "aumentos": [
      "+2 PM: aumenta os bônus em +1 (bônus máximo limitado pelo círculo máximo de magia que você pode lançar).",
      "+2 PM: aumenta as penalidades em –1 (penalidade máxima limitada pelo círculo máximo de magia que você pode lançar).",
      "+7 PM: muda o alcance para médio. Requer 3º círculo.",
      "+12 PM: muda a duração para cena. Requer 4º círculo."
    ]
  },
  {
    "id": "orbe-do-oceano",
    "nome": "Orbe do Oceano",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Abjuração",
    "categorias": [
      "Ofensiva",
      "Defensiva",
      "Utilidade"
    ],
    "fonte": "Campeões dos Deuses",
    "arquivo": "magias deuses.pdf",
    "pagina": 3,
    "detalhes": "Execução: padrão; Alcance: pessoal; Alvo: você; Duração: sustentada.",
    "resumo": "Você cria um globo protetor de água salgada que ocupa 1 quadrado e o acompanha, fornecendo a você camuflagem leve e cobertura leve.",
    "aumentos": [
      "+4 PM: muda a duração para cena. Requer 3º círculo. +2 PM (AƞƓƜƏơ DƓƤƝƢƝơ ƒƓ OƑƓƏƜƝ): além do normal, você é considerado submerso. Isso exige que você prenda a respiração (a menos que possa respirar debaixo d’água), mas faz com que sofra apenas a metade do dano de armas de corte e impacto que não sejam armas naturais e é considerado submerso para benefícios de suas habilidades que dependam dessa situação."
    ]
  },
  {
    "id": "orientacao",
    "nome": "Orientação",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Adivinhação",
    "categorias": [
      "Defensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 23,
    "detalhes": "Execução: padrão; Alcance: curto; Alvo: 1 criatura; Duração: 1 rodada.",
    "resumo": "Se o alvo fizer um teste de perícia, pode rolar dois dados e ficar com o melhor resultado.",
    "aumentos": [
      "+2 PM: muda a duração para cena. Em vez do normal, escolha um atributo. Sempre que o alvo fizer um teste de perícia baseado no atributo escolhido, pode rolar dois dados e ficar com o melhor resultado. Não se aplica a testes de ataque ou resistência. Requer 2º círculo.",
      "+5 PM: como acima, mas, em vez de um atributo, escolha entre atributos físicos (Força, Destreza e Constituição) ou mentais (Inteligência, Sabedoria e Carisma). Requer 3º círculo.",
      "+5 PM: muda o alvo para criaturas escolhidas. Requer 3º círculo."
    ]
  },
  {
    "id": "ossos-de-adamante",
    "nome": "Ossos de Adamante",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Transmutação",
    "categorias": [
      "Defensiva"
    ],
    "fonte": "Arsenal dos Heróis",
    "arquivo": "magias herois.pdf",
    "pagina": 3,
    "detalhes": "Execução: padrão; Alcance: pessoal; Alvo: você; Duração: cena.",
    "resumo": "Esta magia confere resistência extraordinária ao esqueleto, evitando ataques que causam fraturas graves. O alvo recebe redução de impacto 5 e fortificação 25%.",
    "aumentos": [
      "+2 PM: muda a redução de impacto para RD 5 e a fortificação para 50%. Requer 2º círculo.",
      "+2 PM: muda o alcance para toque e o alvo para 1 criatura viva."
    ]
  },
  {
    "id": "paixao-de-marah",
    "nome": "Paixão de Marah",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Encantamento",
    "categorias": [
      "Defensiva",
      "Utilidade"
    ],
    "fonte": "Campeões dos Deuses",
    "arquivo": "magias deuses.pdf",
    "pagina": 3,
    "detalhes": "Execução: padrão; Alcance: pessoal; Alvo: você; Duração: cena.",
    "resumo": "Você é cercado por uma aura de magnetismo pessoal que o torna mais interessante e atraente aos olhos dos demais. Você recebe +2 em perícias originalmente baseadas em Carisma (exceto Intimidação).",
    "aumentos": [
      "+2 PM: muda o alcance para curto e o alvo para 1 criatura. +1 PM (AƞƓƜƏơ DƓƤƝƢƝơ ƒƓ MƏƠƏƖ): além do normal, o alvo recebe +1 em Carisma. Esse aumento não oferece PV ou PM adicionais. +3 PM (AƞƓƜƏơ DƓƤƝƢƝơ ƒƓ MƏƠƏƖ): muda a duração para 1 dia. Requer 2º círculo."
    ]
  },
  {
    "id": "percepcao-rubra",
    "nome": "Percepção Rubra",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Universal",
    "escola": "Adivinhação",
    "categorias": [
      "Ofensiva",
      "Defensiva",
      "Utilidade"
    ],
    "fonte": "Campeões dos Deuses",
    "arquivo": "magias deuses.pdf",
    "pagina": 4,
    "detalhes": "Execução: padrão; Alcance: pessoal; Alvo: você; Duração: cena.",
    "resumo": "Esta magia faz o conjurador adquirir, por algum tempo, a estranha percepção de tempo dos lefeu — que permite ver alguns momentos no futuro. O alvo recebe +1 em testes de ataque, em Reflexos e na Defesa.",
    "aumentos": [
      "+1 PM: muda o alcance para curto e o alvo para 1 criatura. +2 PM (AƞƓƜƏơ DƓƤƝƢƝơ ƒƓ AƖƏƠƏƒƏƙ): aumenta o bônus em +1 (bônus máximo limitado pelo círculo máximo de magia que você pode lançar)."
    ]
  },
  {
    "id": "perdicao",
    "nome": "Perdição",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Necromancia",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 24,
    "detalhes": "Execução: padrão; Alcance: curto; Alvos: criaturas escolhidas; Duração: cena; Resistência: nenhuma.",
    "resumo": "Amaldiçoa os alvos, que recebem –1 em testes de ataque e rolagens de dano. Perdição anula Bênção.",
    "aumentos": [
      "+2 PM: aumenta as penalidades em –1, limitado pelo círculo máximo de magia que você pode lançar."
    ]
  },
  {
    "id": "perturbacao-sombria",
    "nome": "Perturbação Sombria",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Ilusão",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Campeões dos Deuses",
    "arquivo": "magias deuses.pdf",
    "pagina": 4,
    "detalhes": "Execução: padrão; Alcance: pessoal; Alvo: você; Duração: cena.",
    "resumo": "Com a proteção de Tenebra, você emana uma aura de sombras com 6m de raio. As sombras se movem de formas estranhas, com rangidos e gemidos sem explicação, vultos fugidios nas janelas e faces macabras urrando para sumir no instante seguinte.",
    "aumentos": [
      "+2 PM: muda o efeito para aura de 9m.",
      "+5 PM: muda o alcance para toque e o alvo para 1 criatura ou objeto. O alvo emana a aura.",
      "+5 PM: você pode escolher quais criaturas são afetadas pela aura. Requer 2º círculo.",
      "+9 PM: muda o alcance para curto, o alvo para área (esfera de 6m de raio), a execução para 1 hora, a duração para permanente e adiciona componente material (incenso e óleos no valor de T$ 1.000). Requer 5° círculo. +2 PM (AƞƓƜƏơ DƓƤƝƢƝơ ƒƓ TƓƜƓƐƠƏ): adiciona resistência (Vontade parcial). Além do normal, criaturas que comecem seu turno dentro da área ficam abaladas. Passar no teste de resistência evita a condição e impede que a criatura seja abalada por esta magia até o fim da cena. Requer 2° círculo."
    ]
  },
  {
    "id": "piscar",
    "nome": "Piscar",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Arcana",
    "escola": "Transmutação",
    "categorias": [
      "Defensiva"
    ],
    "fonte": "Arsenal dos Heróis",
    "arquivo": "magias herois.pdf",
    "pagina": 4,
    "detalhes": "Execução: padrão; Alcance: pessoal; Alvo: você; Duração: cena.",
    "resumo": "Pela duração da magia, você fica “piscando” entre o Plano material e o etéreo. Para quem o observa, é como se você ficasse visível e invisível várias vezes por segundo.",
    "aumentos": [
      "+2 PM: muda o alcance para toque e o alvo para 1 criatura voluntária. Requer 3º círculo."
    ]
  },
  {
    "id": "pocao-explosiva",
    "nome": "Poção Explosiva",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Arcana",
    "escola": "Transmutação",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Arsenal dos Heróis",
    "arquivo": "magias herois.pdf",
    "pagina": 4,
    "detalhes": "Execução: padrão; Alcance: curto; Alvo: 1 poção; Duração: cena.",
    "resumo": "Esta magia transforma o conteúdo de uma poção em uma substância volátil e explosiva. Quando é usada, em vez de ter seu efeito normal, a poção causa 2d6 pontos de dano de essência por círculo da magia que ela continha (outras características da magia, como alvos, área e testes...",
    "aumentos": [
      "+5 PM: você pode determinar uma palavra-chave que, pronunciada por qualquer pessoa em alcance curto, faz a poção explodir. Requer 3° círculo.",
      "+7 PM: muda o alcance para pessoal e o alvo para área (esfera com 9m de raio). A magia afeta mesmo poções na área que estejam sendo carregadas. Requer 4° círculo."
    ]
  },
  {
    "id": "poder-de-kallyadranoch",
    "nome": "Poder de Kallyadranoch",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Evocação",
    "categorias": [
      "Ofensiva",
      "Defensiva",
      "Utilidade"
    ],
    "fonte": "Campeões dos Deuses",
    "arquivo": "magias deuses.pdf",
    "pagina": 4,
    "detalhes": "Execução: movimento; Alcance: pessoal; Alvo: você; Duração: 1 turno.",
    "resumo": "Por um breve momento, você manifesta uma pequena parte da força e majestade das grandes feras dracônicas: a capacidade de criar elementos em sua forma mais pura.",
    "aumentos": [
      "+2 PM: aumenta a CD em +1 (bônus máximo limitado pelo círculo máximo de magias que você pode lançar). Requer 3° círculo. +1 PM (AƞƓƜƏơ DƓƤƝƢƝơ ƒƓ KƏƚƚƧƏƒƠƏƜƝƑƖ): além do normal, criaturas que falhem nos testes de resistência contra suas habilidades mágicas sofrem uma condição baseada no tipo de dano. Ácido: vulnerável até o fim da cena. Eletricidade: atordoado por 1 rodada (apenas uma vez por cena). Fogo: em chamas e vulnerável enquanto estiver em chamas. Frio: lento até o fim da cena. Requer 2° círculo."
    ]
  },
  {
    "id": "posse-de-arsenal",
    "nome": "Posse de Arsenal",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Convocação",
    "categorias": [
      "Defensiva",
      "Utilidade"
    ],
    "fonte": "Campeões dos Deuses",
    "arquivo": "magias deuses.pdf",
    "pagina": 4,
    "detalhes": "Execução: padrão; Alcance: pessoal; Alvo: 1 item empunhado; Duração: 1 dia.",
    "resumo": "Esta magia cria um vínculo poderoso entre você e seus pertences, dificultando sua perda ou roubo. Você recebe +5 em testes contra as manobras desarmar e quebrar, e de Percepção contra punga (veja Ladinagem) para roubá-lo.",
    "aumentos": []
  },
  {
    "id": "primor-atletico",
    "nome": "Primor Atlético",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Transmutação",
    "categorias": [
      "Suporte"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 24,
    "detalhes": "Execução: padrão; Alcance: toque; Alvo: 1 criatura; Duração: cena.",
    "resumo": "Você modifica os limites físicos do alvo, que recebe deslocamento +9m e +10 em testes de Atletismo.",
    "aumentos": [
      "+1 PM: além do normal, o alvo recebe um bônus adicional de +20 em testes de Atletismo para saltar (para um bônus total de +30).",
      "+1 PM: além do normal, o alvo pode escalar paredes e tetos sem precisar fazer testes de Atletismo. Para isso, precisa estar com as mãos livres, mas pode usar uma única mão se ficar parado no lugar. O alvo não fica desprevenido enquanto escala.",
      "+1 PM: muda a execução para ação de movimento, o alcance para pessoal, o alvo para você e a duração para instantânea. Você salta muito alto e pousa em alcance corpo a corpo de uma criatura em alcance curto. Se fizer um ataque corpo a corpo contra essa criatura neste turno, recebe os benefícios e penalidades de uma investida e sua arma causa um dado extra de dano do mesmo tipo durante este ataque.",
      "+3 PM: além do normal, ao fazer testes de perícias baseadas em Força, Destreza ou Constituição, o alvo pode rolar dois dados e escolher o melhor. Não afeta testes de ataque ou resistência. Requer 2º círculo."
    ]
  },
  {
    "id": "profanar",
    "nome": "Profanar",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Necromancia",
    "categorias": [
      "Ofensiva",
      "Suporte"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 25,
    "detalhes": "Execução: padrão; Alcance: longo; Área: esfera com 9m de raio; Duração: 1 dia.",
    "resumo": "Esta magia enche a área com energia negativa. Efeitos que causam dano de trevas ou canalizam energia negativa são maximizados dentro da área. Esta magia não pode ser lançada em uma área contendo um símbolo visível dedicado a uma divindade que não a sua. Profanar anula Consagrar.",
    "aumentos": [
      "+1 PM: além do normal, mortos-vivos na área recebem +2 na Defesa e +2 em todos os testes.",
      "+2 PM: aumenta os bônus para mortos-vivos em +1.",
      "+9 PM: muda a execução para 1 hora, a duração para permanente e adiciona componente material (incenso e óleos no valor de T$ 1.000). Requer 4º círculo."
    ]
  },
  {
    "id": "protecao-de-tauron",
    "nome": "Proteção de Tauron",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Abjuração",
    "categorias": [
      "Defensiva"
    ],
    "fonte": "Campeões dos Deuses",
    "arquivo": "magias deuses.pdf",
    "pagina": 4,
    "detalhes": "Execução: movimento; Alcance: curto; Alvo: 1 criatura que não você; Duração: cena.",
    "resumo": "Esta antiga magia ofertada pelo Deus da Força ainda pode ser lançada mesmo após sua morte, preservada por divindades simpatizantes em honra a seu aspecto como protetor dos fracos.",
    "aumentos": [
      "+2 PM: além do normal, você pode usar habilidades mágicas com alcance de toque no alvo como se elas tivessem alcance curto.",
      "+2 PM: aumenta o bônus na Defesa em +2 (bônus máximo limitado ao dobro do círculo máximo de magia que você pode lançar). Requer 2º círculo. +2 PM (AƞƓƜƏơ MƗƜƝƢƏƣƠƝơ): além do normal, uma vez por rodada, quando uma criatura faz uma ação hostil contra o protegido, você pode gastar 1 PM para fazer um ataque corpo a corpo contra ela, desde que ela esteja em seu alcance pessoal."
    ]
  },
  {
    "id": "protecao-divina",
    "nome": "Proteção Divina",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Abjuração",
    "categorias": [
      "Defensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 25,
    "detalhes": "Execução: padrão; Alcance: toque; Alvo: 1 criatura; Duração: cena.",
    "resumo": "Esta magia cria uma barreira mística invisível que fornece ao alvo +2 em testes de resistência.",
    "aumentos": [
      "+2 PM: aumenta o bônus concedido em +1.",
      "+2 PM: muda a execução para reação, o alcance para curto e a duração para 1 rodada. Em vez do normal, o alvo recebe +5 no próximo teste de resistência que fizer.",
      "+2 PM: muda o alvo para área de esfera com 3m de raio. Todos os aliados dentro do círculo recebem o bônus da magia. Requer 2º círculo.",
      "+5 PM: também torna o alvo imune a efeitos mentais e de medo. Requer 3º círculo."
    ]
  },
  {
    "id": "punho-de-mitral",
    "nome": "Punho de Mitral",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Transmutação",
    "categorias": [
      "Defensiva"
    ],
    "fonte": "Arsenal dos Heróis",
    "arquivo": "magias herois.pdf",
    "pagina": 4,
    "detalhes": "Execução: padrão; Alcance: pessoal; Alvo: você; Duração: cena.",
    "resumo": "Esta magia transforma uma de suas mãos em mitral, tornando-a prateada como esse metal. A mão continua capaz de realizar movimentos normais e segurar objetos — mas também pode golpear ou esmagar.",
    "aumentos": [
      "+2 PM: muda o bônus em testes de ataque e na margem de ameaça para +2.",
      "+2 PM: muda o alcance para toque e o alvo para 1 criatura. Requer 2º círculo.",
      "+5 PM: além do normal, se você estiver empunhando uma arma ou um item esotérico com essa mão, ele recebe os benefícios do material especial mitral (mesmo que já possua outro material especial). Requer 2° círculo."
    ]
  },
  {
    "id": "punicao-do-profano",
    "nome": "Punição do Profano",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Divina",
    "escola": "Evocação",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Campeões dos Deuses",
    "arquivo": "magias deuses.pdf",
    "pagina": 4,
    "detalhes": "Execução: padrão; Alcance: curto; Alvo: 1 humanoide; Duração: instantânea; Resistência: Vontade reduz à metade.",
    "resumo": "Por meio de um brado poderoso, entoando um dogma de sua religião, você inÁige dano a devotos de divindades adversárias. Esta magia causa 6d8 pontos de dano de impacto a devotos de deuses que canalizam energia oposta a seu deus.",
    "aumentos": [
      "+1 PM: muda o alvo para 1 espírito ou morto-vivo.",
      "+2 PM: aumenta o dano em +2d8.",
      "+2 PM: muda o alvo para 1 criatura.",
      "+3 PM: muda o alvo para criaturas escolhidas. Requer 3° círculo."
    ]
  },
  {
    "id": "purificacao",
    "nome": "Purificação",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Divina",
    "escola": "Evocação",
    "categorias": [
      "Defensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 25,
    "detalhes": "Execução: padrão; Alcance: toque; Alvo: 1 criatura; Duração: instantânea.",
    "resumo": "Você purifica a criatura tocada, removendo uma condição dela entre abalado, apavorado, alquebrado, atordoado, cego, confuso, debilitado, enjoado, envenenado, esmorecido, exausto, fascinado, fatigado, fraco, frustrado, lento, ofuscado, paralisado, pasmo ou surdo.",
    "aumentos": [
      "+2 PM: também recupera todos os PV perdidos por veneno.",
      "+2 PM: em vez de uma, remove todas as condições listadas.",
      "+3 PM: também permite que o alvo solte qualquer item amaldiçoado que esteja segurando (mas não remove a maldição do item em si).",
      "+7 PM: também dissipa magias e efeitos prejudiciais de encantamento, necromancia e transmutação afetando o alvo. Requer 3º círculo."
    ]
  },
  {
    "id": "queda-suave",
    "nome": "Queda Suave",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Transmutação",
    "categorias": [
      "Defensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 25,
    "detalhes": "Execução: reação; Alcance: curto; Alvos: 1 criatura ou objeto com até 200kg; Duração: até chegar ao solo ou cena, o que vier primeiro.",
    "resumo": "O alvo cai lentamente. A velocidade da queda é reduzida para 18m por rodada — o suficiente para não causar dano. Como lançar esta magia é uma reação, você pode lançá-la rápido o bastante para salvar a si ou um aliado de quedas inesperadas.",
    "aumentos": [
      "+2 PM: muda o alvo para até 10 criaturas ou objetos."
    ]
  },
  {
    "id": "raio-do-enfraquecimento",
    "nome": "Raio do Enfraquecimento",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Necromancia",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 25,
    "detalhes": "Execução: padrão; Alcance: curto; Alvo: 1 criatura; Duração: cena; Resistência: Fortitude parcial.",
    "resumo": "Você dispara um raio púrpura que drena as forças do alvo. Se falhar na resistência, o alvo fica fatigado. Se passar, fica vulnerável.",
    "aumentos": [
      "+2 PM: em vez do normal, se falhar na resistência o alvo fica exausto. Se passar, fica fatigado. Requer 2º círculo.",
      "+5 PM: como acima, mas muda o alvo para criaturas escolhidas. Requer 3º círculo."
    ]
  },
  {
    "id": "raio-solar",
    "nome": "Raio Solar",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Divina",
    "escola": "Evocação",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 26,
    "detalhes": "Execução: padrão; Alcance: médio; Área: linha; Duração: instantânea; Resistência: Reflexos (veja texto).",
    "resumo": "Você canaliza uma poderosa rajada de energia positiva que ilumina o campo de batalha. Criaturas na área sofrem 4d8 pontos de dano de luz (ou 4d12, se forem mortos-vivos) e ficam ofuscadas por uma rodada.",
    "aumentos": [
      "+2 PM: aumenta o dano ou cura em +1d8 (ou +1d12 em mortos-vivos).",
      "+3 PM: em vez do normal, criaturas vivas a sua escolha na área curam 4d8 pontos de vida; o restante sofre o dano normalmente.",
      "+3 PM: criaturas que falhem na resistência ficam cegas por 1d4 rodadas."
    ]
  },
  {
    "id": "refugio",
    "nome": "Refúgio",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Arcana",
    "escola": "Abjuração",
    "categorias": [
      "Utilidade",
      "Defensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 26,
    "detalhes": "Execução: completa; Alcance: curto; Efeito: domo com 6m de raio; Duração: 1 dia.",
    "resumo": "Esta magia cria um domo imóvel e quase opaco por fora, mas transparente pelo lado de dentro. Ele protege contra calor, frio e forças pequenas, mas não contra qualquer coisa capaz de causar dano.",
    "aumentos": [
      "+1 PM: além do normal, os limites do domo são envoltos por uma fumaça escura e espessa, que impede criaturas do lado de fora de enxergar ou ouvir o que está dentro. Criaturas do lado de dentro enxergam e ouvem normalmente o que está do lado de fora. A fumaça também bloqueia magias de adivinhação.",
      "+3 PM: em vez do normal, cria uma cabana que comporta até 10 criaturas Médias. Descansar nesse espaço concede recuperação confortável (recupera PV e PM igual ao dobro do nível). Para todos os efeitos é uma cabana normal, com paredes de madeira, telhado, uma porta, duas janelas e alguma mobília (camas, uma mesa com bancos e uma lareira). A porta e as janelas têm 15 PV, RD 5 e são protegidas por um efeito idêntico à magia Tranca Arcana. As paredes têm 200 PV e RD 5.",
      "+3 PM: em vez do normal, cria um espaço extradimensional, similar a uma caverna vazia e escura, que comporta até 10 criaturas Médias. A entrada para o espaço precisa estar desenhada em um objeto fixo como uma grande pedra ou árvore. Qualquer criatura que atravesse a entrada consegue entrar no espaço. Nenhum efeito a partir do mundo real afeta o espaço e vice-versa, mas aqueles que estiverem dentro podem observar o mundo real como se uma janela de 1m estivesse centrada na entrada. Qualquer coisa que esteja no espaço extradimensional surge no mundo real na área vazia mais próxima da entrada quando a duração da magia acaba. Requer 3º círculo.",
      "+9 PM: em vez do normal, cria uma mansão extradimensional que comporta até 100 criaturas Médias, com quartos luxuosos, comida e bebida e dez servos fantasmagóricos (como na magia Servos Invisíveis). Descansar na mansão concede recuperação luxuosa (recupera PV e PM igual ao triplo do nível). A mansão tem uma única entrada, uma porta feita de luz. Você pode deixá-la visível ou invisível como uma ação livre e apenas criaturas escolhidas por você podem passar. Requer 4º círculo."
    ]
  },
  {
    "id": "relampago",
    "nome": "Relâmpago",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Arcana",
    "escola": "Evocação",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 26,
    "detalhes": "Execução: padrão; Alcance: médio; Área: linha; Duração: instantânea; Resistência: Reflexos reduz à metade.",
    "resumo": "Você dispara um poderoso raio que causa 6d6 pontos de dano de eletricidade em todas as criaturas e objetos livres na área.",
    "aumentos": [
      "+2 PM: aumenta o dano em +2d6.",
      "+3 PM: muda a área para alvo (criaturas escolhidas). Em vez do normal, você dispara vários relâmpagos, um para cada alvo escolhido, causando 6d6 pontos de dano de eletricidade. Requer 3º círculo."
    ]
  },
  {
    "id": "resistencia-a-energia",
    "nome": "Resistência a Energia",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Universal",
    "escola": "Abjuração",
    "categorias": [
      "Defensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 27,
    "detalhes": "Execução: padrão; Alcance: toque; Alvo: 1 criatura; Duração: cena.",
    "resumo": "Ao lançar esta magia, escolha entre ácido, eletricidade, fogo, frio, luz ou trevas. O alvo recebe redução de dano 10 contra o tipo de dano escolhido.",
    "aumentos": [
      "+2 PM: aumenta a redução de dano em +5.",
      "+2 PM: muda a duração para 1 dia. Requer 2º círculo.",
      "+5 PM: muda o alcance para curto e o alvo para criaturas escolhidas. Requer 3º círculo.",
      "+5 PM: muda o efeito para redução de dano contra todos os tipos listados na magia. Requer 3º círculo.",
      "+9 PM: muda o efeito para imunidade a um tipo listado na magia. Requer 4º círculo."
    ]
  },
  {
    "id": "rogar-maldicao",
    "nome": "Rogar Maldição",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Divina",
    "escola": "Necromancia",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 27,
    "detalhes": "Execução: padrão; Alcance: curto; Alvo: 1 criatura; Duração: sustentada; Resistência: Fortitude anula.",
    "resumo": "Você entoa cânticos maléficos que amaldiçoam uma vítima, criando efeitos variados. Ao lançar a magia, escolha entre os seguintes.",
    "aumentos": [
      "+3 PM: aumenta o número de efeitos que você pode escolher em +1. Requer 3º círculo.",
      "+7 PM: muda a duração para permanente e resistência para Fortitude parcial. Se passar, a criatura ainda sofre os efeitos da maldição, mas por 1 rodada. Requer 4º círculo."
    ]
  },
  {
    "id": "runa-de-protecao",
    "nome": "Runa de Proteção",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Universal",
    "escola": "Abjuração",
    "categorias": [
      "Defensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 27,
    "detalhes": "Execução: 1 hora; Alcance: toque; Alvo: uma área de 6m de raio; Duração: permanente até ser descarregada.",
    "resumo": "Resistência: varia (veja o texto). Você escreve uma runa pessoal em uma superfície fixa, como uma parede ou o chão, que protege uma pequena área ao redor.",
    "aumentos": [
      "+1 PM: aumenta o dano em +2d6.",
      "+1 PM: muda o alvo para “você” e o alcance para “pessoal”. Ao invés do normal, escolha uma magia de 1º círculo que você conhece e pode lançar, com tempo de execução de uma ação padrão ou menor. Você escreve a runa em seu corpo e especifica uma condição de ativação como, por exemplo, “quando eu for alvo de um ataque” ou “quando for alvo de uma magia”. Quando a condição for cumprida, você pode ativar a runa e lançar a magia escolhida como uma reação. Você só pode escrever uma runa em seu corpo ao mesmo tempo.",
      "+3 PM: como o aprimoramento anterior, mas você pode escolher magias de 2º círculo. Requer 3º círculo."
    ]
  },
  {
    "id": "salto-dimensional",
    "nome": "Salto Dimensional",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Arcana",
    "escola": "Convocação",
    "categorias": [
      "Utilidade",
      "Defensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 28,
    "detalhes": "Execução: padrão; Alcance: curto; Alvo: você; Duração: instantânea.",
    "resumo": "Esta magia transporta você para outro lugar dentro do alcance. Você não precisa perceber nem ter linha de efeito ao seu destino, podendo simplesmente imaginá-lo.",
    "aumentos": [
      "+1 PM: muda o alcance para médio.",
      "+1 PM: muda o alvo para você e uma criatura voluntária. Você pode escolher este aprimoramento mais vezes para aumentar o número de alvos adicionais em +1, mas deve estar tocando todos os alvos.",
      "+2 PM: muda a execução para reação. Em vez do normal, você salta para um espaço adjacente (1,5m), recebendo +5 na Defesa e em testes de Reflexos contra um ataque ou efeito que esteja prestes a atingi-lo.",
      "+3 PM: muda o alcance para longo."
    ]
  },
  {
    "id": "santuario",
    "nome": "Santuário",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Abjuração",
    "categorias": [
      "Defensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 28,
    "detalhes": "Execução: padrão; Alcance: toque; Alvo: 1 criatura; Duração: cena; Resistência: Vontade anula.",
    "resumo": "Qualquer criatura que tente fazer uma ação hostil contra o alvo deve fazer um teste de Vontade. Se falhar, não consegue, perde a ação e não pode tentar novamente até o fim da cena.",
    "aumentos": [
      "+1 PM: além do normal, escolha um tipo de criatura entre animal, construto ou morto-vivo. Você não pode ser percebido por criaturas não inteligentes do tipo escolhido.",
      "+9 PM: também protege o alvo contra efeitos de área. Uma criatura que tente atacar uma área que inclua o alvo deve fazer o teste de Vontade; se falhar, não consegue e perde a ação. Ela só pode tentar novamente se o alvo sair da área."
    ]
  },
  {
    "id": "servos-invisiveis",
    "nome": "Servos Invisíveis",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Arcana",
    "escola": "Convocação",
    "categorias": [
      "Utilidade"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 29,
    "detalhes": "Execução: padrão; Alcance: longo; Efeito: criaturas conjuradas; Duração: 1 cena.",
    "resumo": "Você cria até três servos invisíveis e silenciosos, capazes de realizar tarefas simples como apanhar lenha, colher frutos, varrer o chão ou alimentar um cavalo.",
    "aumentos": [
      "+2 PM: aumenta o número de servos conjurados em 1.",
      "+3 PM: você pode comandar os servos para realizar uma única tarefa no seu lugar. Em termos de jogo, eles passam automaticamente em um teste de perícia com CD máxima igual ao seu nível, +2 para cada servo conjurado. O tempo necessário para realizar a tarefa é o tempo do uso da perícia em questão. Requer 3º círculo."
    ]
  },
  {
    "id": "seta-infalivel-de-talude",
    "nome": "Seta Infalível de Talude",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Evocação",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 29,
    "detalhes": "Execução: padrão; Alcance: médio; Alvos: até 2 criaturas; Duração: instantânea.",
    "resumo": "Favorita entre arcanistas iniciantes, esta magia lança duas setas de energia que causando 1d4+1 pontos de dano de essência cada.",
    "aumentos": [
      "+2 PM: muda as setas para lanças de energia que surgem e caem do céu. Cada lança causa 1d8+1 pontos de dano de essência. Requer 2º círculo.",
      "+2 PM: muda o número de setas/lanças para três.",
      "+4 PM: muda o número de setas/lanças para cinco. Requer 2º círculo.",
      "+9 PM: muda o número de setas/lanças para dez. Requer 4º círculo."
    ]
  },
  {
    "id": "sigilo-de-sszzaas",
    "nome": "Sigilo de Sszzaas",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Abjuração",
    "categorias": [
      "Ofensiva",
      "Defensiva",
      "Utilidade"
    ],
    "fonte": "Campeões dos Deuses",
    "arquivo": "magias deuses.pdf",
    "pagina": 5,
    "detalhes": "Execução: padrão; Alcance: pessoal; Alvo: você; Duração: 1 dia.",
    "resumo": "Ofertada pelo Deus dos Segredos, esta magia é utilizada por todos que buscam preservar a própria privacidade. Pela duração da magia, quaisquer criaturas que fizerem testes de perícia para obter alguma informação a seu respeito sofrem –5 nesses testes.",
    "aumentos": [
      "+2 PM: muda o alcance para toque e o alvo para 1 criatura. Requer 2º círculo.",
      "+2 PM: adiciona resistência (Vontade evita). Além do normal, criaturas que usem habilidades mágicas de detecção, como a magia Vidência, devem fazer um teste de Vontade. Se falharem, a habilidade não funciona e, pela duração da magia, novas tentativas de usar a mesma habilidade feitas pela mesma criatura falham automaticamente. Requer 2º círculo. +2 PM (AƞƓƜƏơ DƓƤƝƢƝơ ƒƓ SơƨƨƏƏơ): muda a penalidade para –10."
    ]
  },
  {
    "id": "silencio",
    "nome": "Silêncio",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Divina",
    "escola": "Ilusão",
    "categorias": [
      "Controle"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 29,
    "detalhes": "Execução: padrão; Alcance: médio; Área: esfera com 6m de raio; Duração: sustentada.",
    "resumo": "Um silêncio sepulcral recai sobre a área e nenhum som é produzido nela. Enquanto estiverem na área, todas as criaturas ficam surdas. Além disso, como lançar magias exige palavras mágicas, normalmente nenhuma magia pode ser lançada dentro da área.",
    "aumentos": [
      "+1 PM: muda a área para alvo de 1 objeto. Em vez do normal, o alvo emana uma área de silêncio com 3m de raio. Se lançar a magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la.",
      "+2 PM: muda a duração para cena. Em vez do normal, nenhum som pode deixar a área, mas criaturas dentro da área podem falar, ouvir e lançar magias com palavras mágicas normalmente."
    ]
  },
  {
    "id": "siroco-de-azgher",
    "nome": "Siroco de Azgher",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Evocação",
    "categorias": [
      "Ofensiva",
      "Defensiva",
      "Utilidade"
    ],
    "fonte": "Campeões dos Deuses",
    "arquivo": "magias deuses.pdf",
    "pagina": 5,
    "detalhes": "Execução: padrão; Alcance: curto; Alvo: 1 criatura; Duração: instantânea; Resistência: Reflexos reduz à metade.",
    "resumo": "Invocando a fúria do Deus-Sol, você cria uma breve e focada tempestade de areia, capaz de esfolar a carne dos ossos! Criaturas afetadas sofrem dano de corte conforme seu grau de proteção: 3d6 se estiverem sem armadura, 2d6 se estiverem com armadura leve e 1d6 se estiveren com...",
    "aumentos": [
      "+1 PM: aumenta o dano em +1d6.",
      "+1 PM: muda o tipo de dano para luz.",
      "+1 PM: muda o alcance para pessoal e o alvo para área (cone de 9m). Requer 2° círculo. +1 PM (AƞƓƜƏơ DƓƤƝƢƝơ ƒƓ AƨƕƖƓƠ): além do normal, criaturas que falhem na resistência ficam em chamas e sangrando."
    ]
  },
  {
    "id": "soco-de-arsenal",
    "nome": "Soco de Arsenal",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Divina",
    "escola": "Convocação",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 29,
    "detalhes": "Execução: padrão; Alcance: médio; Alvo: 1 criatura; Duração: instantânea; Resistência: Fortitude parcial.",
    "resumo": "Ninguém sabe se Mestre Arsenal foi realmente o criador desta magia — mas ele foi o primeiro a utilizá-la. Você fecha o punho e gesticula como se estivesse golpeando o alvo, causando dano de impacto igual a 4d6 + sua Força.",
    "aumentos": [
      "+1 PM: muda o alcance para pessoal, o alvo para você, a duração para cena e a resistência para nenhuma. Em vez do normal, seus ataques corpo a corpo passam a acertar inimigos distantes. Seu alcance natural aumenta em 3m; uma criatura Média pode atacar adversários a até 4,5m, por exemplo.",
      "+2 PM: aumenta o dano em +1d6.",
      "+4 PM: aumenta o empurrão em +3m.",
      "+5 PM: muda o tipo do dano para essência."
    ]
  },
  {
    "id": "sono",
    "nome": "Sono",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Encantamento",
    "categorias": [
      "Controle",
      "Ofensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 30,
    "detalhes": "Execução: padrão; Alcance: curto; Alvo: 1 humanoide; Duração: cena; Resistência: Vontade parcial.",
    "resumo": "Um cansaço místico recai sobre o alvo. Se falhar na resistência, ele fica inconsciente e caído ou, se estiver envolvido em combate ou outra situação perigosa, fica exausto por 1 rodada, depois fatigado. Em ambos os casos, se passar, o alvo fica fatigado por 1d4 rodadas.",
    "aumentos": [
      "+2 PM: alvos que falhem na resistência ficam exaustos por 1d4+1 rodadas, em vez de apenas 1.",
      "+2 PM: muda o alvo para criatura.",
      "+5 PM: afeta todos os alvos válidos a sua escolha dentro do alcance."
    ]
  },
  {
    "id": "sopro-das-uivantes",
    "nome": "Sopro das Uivantes",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Arcana",
    "escola": "Evocação",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 30,
    "detalhes": "Execução: padrão; Alcance: pessoal; Área: cone de 9m; Duração: instantânea; Resistência: Fortitude parcial.",
    "resumo": "Você sopra ar gélido que causa 4d6 pontos de dano de frio (Fortitude reduz à metade). Criaturas de tamanho Médio ou menor que falhem na resistência ficam caídas e são empurradas 6m na direção oposta.",
    "aumentos": [
      "+2 PM: aumenta o dano de frio em +2d6.",
      "+3 PM: aumenta o tamanho máximo das criaturas afetadas em uma categoria. Requer 3º círculo."
    ]
  },
  {
    "id": "sorriso-da-fortuna",
    "nome": "Sorriso da Fortuna",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Evocação",
    "categorias": [
      "Defensiva"
    ],
    "fonte": "Campeões dos Deuses",
    "arquivo": "magias deuses.pdf",
    "pagina": 5,
    "detalhes": "Execução: padrão; Alcance: pessoal; Alvo: você; Duração: 1 dia, até ser descarregada.",
    "resumo": "Variantes desta magia, com diferentes nomes, são concedidas por Nimb, Hyninn, Sszzaas, Valkaria e até Thyatis. O objetivo, contudo, é sempre o mesmo: trapacear em jogos.",
    "aumentos": [
      "+2 PM: aumenta em +1 o total de usos antes de a magia ser descarregada.",
      "+2 PM: muda a execução para reação, o alcance para curto e o alvo para 1 criatura. Além disso, você lança a magia usando apenas concentração (Tormenta20, p. 170). Em vez do normal, a magia confunde um dos jogadores presentes, que rola seu teste de Jogatina com dois dados e usa o pior resultado.",
      "+3 PM: além do normal, você pode escolher um “número da sorte”. Se o número da sorte for rolado em qualquer um dos dados, o resultado conta como um 20 natural. Requer 2° círculo. “Mas é outro deus!” Grande parte das magias neste capítulo trazem o nome de um deus no título. Isso significa que a magia é tipicamente ofertada (ou foi criada) por aquela divindade. Mas então, sendo devoto de outra fé, ainda posso aprendê-la e lançá-la? A resposta é sim. Embora existam rivalidades e inimizades, deuses maiores ainda formam um Panteão, são irmãos unidos sob uma mesma liderança. Poderes divinos são exclusivos, mas magias não (exceto quando sua descrição diz o contrário). Além disso, apesar de suas naturezas díspares, deuses são orgulhosos e vaidosos. Ficam satisfeitos quando devotos de outros entoam seu nome, recorrem a seus milagres. A divindade padroeira, contudo, talvez se aborreça um pouquinho... Como regra opcional, quando você lança uma magia com o nome de um deus inimigo ou rival, o mestre pode estabelecer que essa transgressão cobra um pequeno preço. Se falhar em um teste de Religião (CD 20) para conseguir perdão adequado, você sofre –2 em seu próximo teste de perícia e recebe uma breve visão de sua divindade, levemente desapontada... +1 PM (AƞƓƜƏơ DƓƤƝƢƝơ ƒƓ HƧƜƗƜƜ): muda a execução para reação e a duração para instantânea. Em vez do normal, quando faz seu primeiro teste de uma perícia em uma cena, você pode rolar dois dados e usar o melhor resultado."
    ]
  },
  {
    "id": "suporte-ambiental",
    "nome": "Suporte Ambiental",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Abjuração",
    "categorias": [
      "Defensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 30,
    "detalhes": "Execução: padrão; Alcance: toque; Alvo: 1 criatura; Duração: 1 dia.",
    "resumo": "Esta magia garante a sobrevivência em ambientes hostis. O alvo fica imune aos efeitos de calor e frio extremos, pode respirar na água se respirar ar (ou vice-versa) e não sufoca em fumaça densa.",
    "aumentos": [
      "+5 PM: muda o alcance para curto e o alvo para criaturas escolhidas."
    ]
  },
  {
    "id": "sussurros-insanos",
    "nome": "Sussurros Insanos",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Arcana",
    "escola": "Encantamento",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 30,
    "detalhes": "Execução: padrão; Alcance: curto; Alvo: 1 humanoide; Duração: cena; Resistência: Vontade anula.",
    "resumo": "Você murmura palavras desconexas que afetam a mente do alvo. O alvo fica confuso.",
    "aumentos": [
      "+2 PM: aumenta o número de alvos em +1.",
      "+3 PM: muda o alvo para 1 criatura.",
      "+12 PM: muda o alvo para criaturas escolhidas. Requer 5º círculo."
    ]
  },
  {
    "id": "teia",
    "nome": "Teia",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Convocação",
    "categorias": [
      "Controle",
      "Ofensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 31,
    "detalhes": "Execução: padrão; Alcance: curto; Área: cubo com 6m de lado; Duração: cena; Resistência: Reflexos anula.",
    "resumo": "Teia cria várias camadas de fibras entrelaçadas e pegajosas na área. Qualquer criatura na área que falhar na resistência fica enredada.",
    "aumentos": [
      "+1 PM: além do normal, criaturas que falhem na resistência também ficam imóveis.",
      "+2 PM: além do normal, no início de seus turnos a magia afeta novamente qualquer criatura na área, exigindo um novo teste de Reflexos. Requer 2º círculo.",
      "+2 PM: aumenta a área em +1 cubo de 1,5m."
    ]
  },
  {
    "id": "tempestade-divina",
    "nome": "Tempestade Divina",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Divina",
    "escola": "Evocação",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 31,
    "detalhes": "Execução: completa; Alcance: longo; Área: cilindro com 15m de raio e 15m de altura; Duração: sustentada.",
    "resumo": "Esta magia só pode ser usada em ambientes abertos. A área fica sujeita a um vendaval — ataques à distância sofrem penalidade de –5, chamas são apagadas e névoas são dissipadas.",
    "aumentos": [
      "+1 PM: muda a duração para sustentada. Além do normal, uma vez por rodada você pode gastar uma ação padrão para fazer um raio cair sobre um alvo na área, causando 3d8 pontos de dano de eletricidade (Reflexos reduz à metade).",
      "+2 PM: aumenta o dano de raios (veja acima) em +1d8.",
      "+3 PM: se escolheu causar chuva, ela se torna mais grossa, revelando a silhueta de criaturas invisíveis na área. Criaturas Médias ou menores ficam lentas e criaturas voadoras precisam passar num teste de Atletismo (CD da magia) por rodada ou caem ao solo (mas podem fazer testes de Acrobacia para reduzir o dano de queda, como o normal).",
      "+3 PM: se escolheu causar granizo, muda o dano para 2d6 por rodada.",
      "+3 PM: se escolheu causar neve, criaturas na área sofrem 2d6 pontos de dano de frio no início de seus turnos.",
      "+3 PM: muda a área para cilindro com 90m de raio e 90m de altura."
    ]
  },
  {
    "id": "toque-chocante",
    "nome": "Toque Chocante",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Evocação",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 32,
    "detalhes": "Execução: padrão; Alcance: toque; Alvo: 1 criatura; Duração: instantânea; Resistência: Fortitude reduz à metade.",
    "resumo": "Arcos elétricos envolvem sua mão, causando 2d8+2 pontos de dano de eletricidade. Se o alvo usa armadura de metal (ou carrega muito metal, a critério do mestre), sofre uma penalidade de –5 no teste de resistência.",
    "aumentos": [
      "+1 PM: aumenta o dano em 1d8+1.",
      "+2 PM: muda a resistências para nenhum. Como parte da execução da magia, você faz um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e da magia.",
      "+2 PM: muda o alcance para pessoal e o alvo para área: esfera com 6m de raio. Você dispara raios pelas pontas dos dedos que afetam todas as criaturas na área."
    ]
  },
  {
    "id": "toque-de-megalokk",
    "nome": "Toque de Megalokk",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Transmutação",
    "categorias": [
      "Ofensiva",
      "Defensiva",
      "Utilidade"
    ],
    "fonte": "Campeões dos Deuses",
    "arquivo": "magias deuses.pdf",
    "pagina": 6,
    "detalhes": "Execução: padrão; Alcance: pessoal; Alvo: você; Duração: cena.",
    "resumo": "Criaturas de Allihanna seguem leis naturais. Monstros existem para violar essas leis. Após deformações horrendas, você se transforma em uma criatura do tipo monstro.",
    "aumentos": [
      "+1 PM: a margem de ameaça de suas armas naturais aumenta em +1.",
      "+2 PM: o dano de suas armas naturais aumenta em um passo. Requer 3° círculo. +5 PM (AƞƓƜƏơ DƓƤƝƢƝơ ƒƓ MƓƕƏƚƝƙƙ): além do normal, você recebe redução de dano 5.Requer 2º círculo."
    ]
  },
  {
    "id": "toque-do-horizonte",
    "nome": "Toque do Horizonte",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Transmutação",
    "categorias": [
      "Ofensiva",
      "Defensiva"
    ],
    "fonte": "Arsenal dos Heróis",
    "arquivo": "magias herois.pdf",
    "pagina": 4,
    "detalhes": "Execução: padrão; Alcance: toque; Alvo: 1 arma de ataque à distância; Duração: cena.",
    "resumo": "A magia melhora a precisão da arma, aumentando seu alcance em um passo (de curto para médio e de médio para longo). Se o alcance da arma já é longo, ele é dobrado. Os efeitos desta magia contam como um bônus de encanto.",
    "aumentos": [
      "+1 PM: a arma ignora camuflagem leve e penalidades por cobertura leve.",
      "+1 PM: além do normal, a arma fornece +1 em testes de ataque e rolagens de dano feitos dentro do seu alcance original.",
      "+2 PM: aumenta o bônus do aprimoramento acima em +1 (bônus máximo limitado pelo círculo máximo de magia que você pode lançar).",
      "+2 PM: a margem de ameaça da arma aumenta em +1. Requer 2° círculo.",
      "+5 PM: muda o alvo para uma arma de arremesso e a duração para sustentada. Em vez do normal, a arma recebe o benefício do encanto dançarina. Requer 3° círculo."
    ]
  },
  {
    "id": "toque-vampirico",
    "nome": "Toque Vampírico",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Arcana",
    "escola": "Necromancia",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 32,
    "detalhes": "Execução: padrão; Alcance: toque; Alvo: 1 criatura; Duração: instantânea; Resistência: Fortitude reduz à metade.",
    "resumo": "Sua mão brilha com energia sombria, causando 6d6 pontos de dano de trevas. Você recupera pontos de vida iguais à metade do dano causado (se causou algum dano).",
    "aumentos": [
      "+1 PM: muda a resistências para nenhum como parte da execução da magia, você pode fazer um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e da magia, e recupera pontos de vida iguais à metade do dano da magia.",
      "+2 PM: aumenta o dano em +2d6.",
      "+2 PM: muda o alcance para pessoal, o alvo para você e a duração para cena. Em vez do normal, a cada rodada você pode gastar uma ação padrão para tocar 1 criatura e causar 3d6 pontos de dano. Você recupera pontos de vida iguais à metade do dano causado. Requer 3º círculo."
    ]
  },
  {
    "id": "traicao-da-lamina",
    "nome": "Traição da Lâmina",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Divina",
    "escola": "Abjuração",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Campeões dos Deuses",
    "arquivo": "magias deuses.pdf",
    "pagina": 6,
    "detalhes": "Execução: padrão; Alcance: curto; Alvo: 1 arma em posse de uma criatura; Duração: cena, até ser descarregada; Resistência: Vontade (veja texto).",
    "resumo": "Provavelmente ofertada por Sszzaas, esta magia amaldiçoa uma arma contra seu usuário. Quando faz um ataque com a arma, o usuário deve passar em um teste de Vontade.",
    "aumentos": [
      "+1 PM: em vez do usuário, a arma se volta para outra criatura em alcance curto que você possa perceber, a sua escolha.",
      "+1 PM: muda o alvo para 1 arma e a duração para 1 dia, até ser descarregada. Requer 3° círculo.",
      "+2 PM: aumenta o número de alvos em +1.",
      "+2 PM: adiciona componente material (uma dose de veneno). Além do normal, o ataque envenena o usuário com o veneno utilizado como componente (a CD desse veneno é a CD da própria magia)."
    ]
  },
  {
    "id": "traicao-magica",
    "nome": "Traição Mágica",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Universal",
    "escola": "Abjuração",
    "categorias": [
      "Ofensiva"
    ],
    "fonte": "Campeões dos Deuses",
    "arquivo": "magias deuses.pdf",
    "pagina": 6,
    "detalhes": "Execução: padrão; Alcance: curto; Alvo: 1 criatura; Duração: instantânea; Resistência: Vontade reduz à metade.",
    "resumo": "Esta magia desestabiliza outras magias ativas no alvo, fazendo com que elas causem uma súbita descarga de energia mística.",
    "aumentos": [
      "+3 PM: muda o alvo para criaturas escolhidas. Requer 3º círculo.",
      "+3 PM: muda a resistência para nenhuma. Requer 3º círculo."
    ]
  },
  {
    "id": "tranca-arcana",
    "nome": "Tranca Arcana",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Abjuração",
    "categorias": [
      "Utilidade"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 32,
    "detalhes": "Execução: padrão; Alcance: toque; Alvo: 1 objeto Grande ou menor; Duração: permanente.",
    "resumo": "Esta magia tranca uma porta ou outro item que possa ser aberto ou fechado (como um baú, caixa etc.), aumentando a CD de testes de Força ou Ladinagem para abri-lo em +10.",
    "aumentos": [
      "+1 PM: muda o alcance para curto e a duração para instantânea. Em vez do normal, a magia abre portas, baús e janelas trancadas, presas, barradas ou protegidas por Tranca Arcana (o efeito é dissipado) a sua escolha. Ela também afrouxa grilhões e solta correntes.",
      "+5 PM: aumenta a CD para abrir o alvo em +5.",
      "+5 PM: muda o alvo para 1 objeto de qualquer tamanho, podendo afetar até mesmo os portões de um castelo. Requer 3º círculo."
    ]
  },
  {
    "id": "tranquilidade",
    "nome": "Tranquilidade",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Encantamento",
    "categorias": [
      "Defensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 33,
    "detalhes": "Execução: padrão; Alcance: curto; Alvo: 1 animal ou humanoide; Duração: cena; Resistência: Vontade parcial.",
    "resumo": "Você emana ondas de serenidade. Se falhar na resistência, o alvo tem sua atitude mudada para indiferente (veja a página 259) e não pode atacar ou realizar qualquer ação agressiva.",
    "aumentos": [
      "+1 PM: muda o alvo para 1 criatura.",
      "+1 PM: aumenta o número de alvos em +1.",
      "+5 PM: muda o alcance para médio e o alvo para criaturas escolhidas. Requer 3º círculo."
    ]
  },
  {
    "id": "transmutar-objetos",
    "nome": "Transmutar Objetos",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Transmutação",
    "categorias": [
      "Utilidade"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 33,
    "detalhes": "Execução: padrão; Alcance: toque; Alvo: matéria-prima, como madeira, rochas, ossos; Duração: cena.",
    "resumo": "A magia transforma matéria bruta para moldar um novo objeto. Você pode usar matéria-prima mundana para criar um objeto de tamanho Pequeno ou menor e preço máximo de T$ 25, como um balde ou uma espada.",
    "aumentos": [
      "+1 PM: muda o alcance para toque, o alvo para 1 construto e a duração para instantânea. Em vez do normal, cura 2d8 PV do alvo. Você pode gastar 2 PM adicionais para aumentar a cura em +1d8.",
      "+2 PM: aumenta o limite de tamanho do objeto em uma categoria.",
      "+3 PM: aumenta o preço máximo do objeto criado em um fator de x10 (+3 PM por T$ 250 de preço, +6 PM por T$ 2.500 de preço e assim por diante).",
      "+5 PM: muda o alvo para 1 objeto mundano e a duração para instantânea. Em vez do normal, você cura todos os PV do alvo, restaurando o objeto totalmente. Este aprimoramento está sujeito aos limites de tamanho e preço do objeto conforme a magia original e não funciona se o objeto tiver sido completamente destruído (queimado até virar cinzas ou desintegrado, por exemplo). Requer 3º círculo.",
      "+9 PM: como o aprimoramento anterior, mas passa a afetar itens mágicos."
    ]
  },
  {
    "id": "transposicao",
    "nome": "Transposição",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Arcana",
    "escola": "Convocação",
    "categorias": [
      "Defensiva",
      "Utilidade"
    ],
    "fonte": "Arsenal dos Heróis",
    "arquivo": "magias herois.pdf",
    "pagina": 4,
    "detalhes": "Execução: padrão; Alcance: curto; Alvo: 2 criaturas voluntárias; Duração: instantânea.",
    "resumo": "Esta magia teletransporta duas criaturas, incluindo seu equipamento, fazendo com que troquem de lugar imediatamente.",
    "aumentos": [
      "+2 PM: aumenta o número de alvos em +2. Você determina com quais criaturas cada alvo troca de lugar.",
      "+5 PM: a troca não exige linha de efeito, mas os alvos ainda devem estar dentro do alcance. Requer 3º círculo.",
      "+5 PM: muda o alvo para 2 criaturas do tipo lacaio e adiciona resistência (Vontade anula). Requer 4º círculo."
    ]
  },
  {
    "id": "velocidade",
    "nome": "Velocidade",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Arcana",
    "escola": "Transmutação",
    "categorias": [
      "Suporte",
      "Defensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 33,
    "detalhes": "Execução: padrão; Alcance: curto; Alvo: 1 criatura; Duração: sustentada.",
    "resumo": "O alvo pode realizar uma ação padrão ou de movimento adicional por turno. Esta ação não pode ser usada para lançar magias e ativar engenhocas.",
    "aumentos": [
      "+2 PM: muda a duração para cena. A ação adicional que você pode fazer é apenas de movimento. Uma criatura só pode receber uma ação adicional por turno como efeito de Velocidade.",
      "+7 PM: muda o alvo para criaturas escolhidas no alcance. Requer 4º círculo.",
      "+7 PM: muda o alcance para pessoal e o alvo para você. Você acelera sua mente, além de seu corpo. A ação adicional pode ser usada para lançar magias e ativar engenhocas. Requer 4º círculo."
    ]
  },
  {
    "id": "vestimenta-da-fe",
    "nome": "Vestimenta da Fé",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Divina",
    "escola": "Abjuração",
    "categorias": [
      "Defensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 33,
    "detalhes": "Execução: padrão; Alcance: toque; Alvo: 1 armadura, escudo ou vestuário; Duração: 1 dia.",
    "resumo": "Você fortalece um item, aumentando o bônus de Defesa de uma armadura ou escudo em +2. No caso de um vestuário, ele passa a oferecer +2 na Defesa (não cumulativo com armadura).",
    "aumentos": [
      "+3 PM: o objeto oferece o mesmo bônus em testes de resistência. Requer 3º círculo.",
      "+4 PM: aumenta o bônus em +1.",
      "+7 PM: o objeto também oferece redução de dano 5. Requer 4º círculo."
    ]
  },
  {
    "id": "viagem-onirica",
    "nome": "Viagem Onírica",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Arcana",
    "escola": "Adivinhação",
    "categorias": [
      "Ofensiva",
      "Utilidade"
    ],
    "fonte": "Arsenal dos Heróis",
    "arquivo": "magias herois.pdf",
    "pagina": 4,
    "detalhes": "Execução: padrão; Alcance: pessoal; Alvo: você; Duração: cena.",
    "resumo": "Lançar esta magia faz você adormecer e abandonar seu corpo físico. Você se torna um espírito incorpóreo com deslocamento de voo 18m.",
    "aumentos": [
      "+2 PM: você pode falar em sua forma incorpórea. Requer 3º círculo.",
      "+5 PM: você pode lançar magias em sua forma incorpórea. Requer 4º círculo."
    ]
  },
  {
    "id": "visao-mistica",
    "nome": "Visão Mística",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Universal",
    "escola": "Adivinhação",
    "categorias": [
      "Utilidade"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 34,
    "detalhes": "Execução: padrão; Alcance: pessoal; Alvo: você; Duração: cena.",
    "resumo": "Seus olhos brilham com uma luz azul e passam a enxergar auras mágicas. Este efeito é similar ao uso de Misticismo para detectar magia, mas você detecta todas as auras mágicas em alcance médio e recebe todas as informações sobre elas sem gastar ações.",
    "aumentos": [
      "+1 PM: recebe visão no escuro.",
      "+2 PM: muda a duração para 1 dia.",
      "+2 PM: também pode enxergar objetos e criaturas invisíveis. Eles aparecem como formas translúcidas."
    ]
  },
  {
    "id": "vitalidade-fantasma",
    "nome": "Vitalidade Fantasma",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Arcana",
    "escola": "Necromancia",
    "categorias": [
      "Defensiva"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 34,
    "detalhes": "Execução: padrão; Alcance: pessoal; Alvo: você; Duração: instantânea.",
    "resumo": "Você suga energia vital da terra, recebendo 2d8 pontos de vida temporários. Os PV temporários desaparecem ao final da cena.",
    "aumentos": [
      "+2 PM: aumenta os PV temporários recebidos em +1d8. Caso a magia cause dano, em vez disso aumenta o dano causado em +1d8.",
      "+5 PM: muda o alvo para área: esfera com 6m de raio centrada em você e a resistência para Fortitude reduz à metade. Em vez do normal, você suga energia das criaturas vivas na área, causando 1d8 pontos de dano de trevas e recebendo PV temporários iguais ao dano total causado. Os PV temporários desaparecem ao final da cena. Requer 2º círculo."
    ]
  },
  {
    "id": "voz-da-razao",
    "nome": "Voz da Razão",
    "circulo": 1,
    "custoBase": "1 PM",
    "tipo": "Divina",
    "escola": "Encantamento",
    "categorias": [
      "Defensiva"
    ],
    "fonte": "Campeões dos Deuses",
    "arquivo": "magias deuses.pdf",
    "pagina": 6,
    "detalhes": "Execução: padrão; Alcance: pessoal; Alvo: você; Duração: cena.",
    "resumo": "Iluminada por Tanna-Toh, sua mente transborda de argumentos e informações. Você recebe +5 em Conhecimento, Diplomacia e Intimidação.",
    "aumentos": [
      "+2 PM: muda o bônus para +10. Requer 2º círculo. +2 PM (AƞƓƜƏơ DƓƤƝƢƝơ ƒƓ TƏƜƜƏ-TƝƖ): além do normal, você recebe +5 em Intuição e em testes de Investigação para interrogar."
    ]
  },
  {
    "id": "voz-divina",
    "nome": "Voz Divina",
    "circulo": 2,
    "custoBase": "2 PM",
    "tipo": "Divina",
    "escola": "Adivinhação",
    "categorias": [
      "Suporte",
      "Controle"
    ],
    "fonte": "Básico",
    "arquivo": "Magias básico.pdf",
    "pagina": 34,
    "detalhes": "Execução: padrão; Alcance: pessoal; Alvo: você; Duração: cena.",
    "resumo": "Você pode conversar com criaturas de qualquer raça e tipo: animal, construto, espírito, humanoide, monstro ou morto-vivo.",
    "aumentos": [
      "+1 PM: você concede um pouco de vida a um cadáver, suficiente para que ele responda a suas perguntas. O conhecimento do corpo é limitado ao que ele tinha enquanto vivo e suas respostas são curtas e enigmáticas. Um corpo só pode ser alvo desta magia uma vez. Ela também não funciona em um corpo cuja cabeça tenha sido destruída.",
      "+1 PM: você pode falar com plantas (normais ou monstruosas) e rochas. Plantas e rochas têm percepção limitada de seus arredores e normalmente fornecem respostas simplórias."
    ]
  }
] satisfies Magia[];

export const categoriasMagiaDisponiveis = ["Ofensiva", "Defensiva", "Controle", "Suporte", "Utilidade"] satisfies CategoriaMagia[];

export const circulosMagiaDisponiveis = [1, 2] as const;
