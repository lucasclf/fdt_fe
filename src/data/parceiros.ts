export type TipoParceiro =
  | "Adepto"
  | "Ajudante"
  | "Assassino"
  | "Atirador"
  | "Combatente"
  | "Destruidor"
  | "Fortão"
  | "Guardião"
  | "Magivocador"
  | "Médico"
  | "Perseguidor"
  | "Vigilante";

export type Parceiro = {
  id: string;
  nome: string;
  imagem: string;
  tipos: TipoParceiro[];
  habilidades: string[];
};

export const tiposDisponiveis: TipoParceiro[] = [
  "Adepto",
  "Ajudante",
  "Assassino",
  "Atirador",
  "Combatente",
  "Destruidor",
  "Fortão",
  "Guardião",
  "Magivocador",
  "Médico",
  "Perseguidor",
  "Vigilante",
];

export const parceiros: Parceiro[] = [
  {
    "nome": "Abner",
    "habilidades": [
      "Médico iniciante. Uma vez por turno, o personagem pode gastar 1 PM para curar 1d8+1 PV de uma criatura adjacente."
    ],
    "id": "abner",
    "imagem": "Abner.png",
    "tipos": [
      "Médico"
    ]
  },
  {
    "nome": "Mutuca",
    "habilidades": [
      "Combatente iniciante: O personagem recebe +1 em testes de ataque.",
      "Guardião Iniciante: O personagem recebe +2 na Defesa."
    ],
    "id": "mutuca",
    "imagem": "Mutuca.png",
    "tipos": [
      "Combatente",
      "Guardião"
    ]
  },
  {
    "nome": "Andrisse",
    "habilidades": [
      "A segunda mais jovem das Dahllan Daninhas não consegue ajudar em nada."
    ],
    "id": "andrisse",
    "imagem": "Andrisse.png",
    "tipos": []
  },
  {
    "nome": "Annabel",
    "habilidades": [
      "Atiradora e médica iniciante. Uma vez por rodada o personagem recebe +1d6 em uma rolagem de dano à distância.",
      "Médica Iniciante: Pode gastar 1 PM para curar 1d8+1 PV de uma criatura adjacente.",
      "Guardião Iniciante: O personagem recebe +2 na Defesa."
    ],
    "id": "annabel",
    "imagem": "Annabel.png",
    "tipos": [
      "Atirador",
      "Guardião",
      "Médico"
    ]
  },
  {
    "nome": "Arlo “Olho de Leite”",
    "habilidades": [
      "Atirador veterano e perseguidor iniciante. O personagem recebe +2 em Percepção e Sobrevivência e, uma vez por rodada, recebe +1d10 em uma rolagem de dano à distância."
    ],
    "id": "arlo-olho-de-leite",
    "imagem": "Arlo “Olho de Leite”.png",
    "tipos": [
      "Atirador",
      "Perseguidor"
    ]
  },
  {
    "nome": "Astelle",
    "habilidades": [
      "Adepta inciante. O custo para lançar magias de 1º círculo do personagem diminui em –1 PM."
    ],
    "id": "astelle",
    "imagem": "Astelle.png",
    "tipos": [
      "Adepto"
    ]
  },
  {
    "nome": "Bartram Zonnar",
    "habilidades": [
      "Ajudante iniciante (o personagem recebe +2 em Ofício [armeiro] e Ofício [carpinteiro]).",
      "Guardião iniciante: O personagem recebe +2 na Defesa.",
      "Atirador Iniciante: Uma vez por rodada, recebe +1d6 de dano a distância;",
      "Destruidor iniciante: Uma vez por rodada, você pode gastar 1 PM para causar 2d6 de dano elementao em um alvo de alcance curto;",
      "Combatente Iniciante: +1 em testes de ataque;"
    ],
    "id": "bartram-zonnar",
    "imagem": "Bartram Zonnar.png",
    "tipos": [
      "Ajudante",
      "Atirador",
      "Combatente",
      "Destruidor",
      "Guardião"
    ]
  },
  {
    "nome": "Belinda Arting",
    "habilidades": [
      "Médica veterana. Uma vez por rodada, o personagem pode gastar 3 PM para curar 3d8+3 PV ou remover uma condição prejudicial de uma criatura adjacente.",
      "Especial: o personagem pode gastar uma ação de movimento para lançar uma das seguintes magias, pagando seu custo normal em PM: Bênção, Físico Divino, Mente Divina e Orientação. Se Belinda for usada para consertar o Forte, conserta o dobro."
    ],
    "id": "belinda-arting",
    "imagem": "Belinda Arting.png",
    "tipos": [
      "Médico"
    ]
  },
  {
    "nome": "Pascal LeBlanc",
    "habilidades": [
      "Medico iniciante: Uma vez por rodada, como uma ação livre, você pode gastar 1 PM para curar 1d8+1 PV adjacente;"
    ],
    "id": "pascal-leblanc",
    "imagem": "Pascal LeBlanc.png",
    "tipos": [
      "Médico"
    ]
  },
  {
    "nome": "Cletus Rigby",
    "habilidades": [
      "Adepto e magivocador mestre. O custo para lançar magias de 1º e 2º círculo do personagem é reduzido em 1 PM (cumulativo com outras reduções), a CD para resistir às magias do personagem aumenta em +2 e suas magias que causam dano causam +2 dados de dano do mesmo tipo."
    ],
    "id": "cletus-rigby",
    "imagem": "Cletus Rigby.png",
    "tipos": [
      "Adepto",
      "Magivocador"
    ]
  },
  {
    "nome": "Dona Erneshia",
    "habilidades": [
      "Médica iniciante: Uma vez por rodada, como uma ação livre, você pode gastar 1 PM para curar 1d8+1 PV adjacente;",
      "Magivocadora iniciante: Dano das magias aumenta em +1 dado do mesmo tipo;",
      "Perseguidor Iniciante: +2 em Percepção e Sobrevivência;",
      "Destruidor Iniciante: Uma vez por rodada, você pode gastar 1 PM para causar 2d6 de dano elementao em um alvo de alcance curto;",
      "Especial: Erneshia pode contar ao personagem uma habilidade, vulnerabilidade, resistência ou característica similar de um inimigo qualquer (exceto inimigos com nome)."
    ],
    "id": "dona-erneshia",
    "imagem": "Dona Erneshia.png",
    "tipos": [
      "Destruidor",
      "Magivocador",
      "Médico",
      "Perseguidor"
    ]
  },
  {
    "nome": "Doran Derinarion",
    "habilidades": [
      "Assassino iniciante. O personagem recebe Ataque Furtivo +1d6.",
      "Combatente Iniciante: +1 em testes de ataque;",
      "Atirador Iniciante: Uma vez por rodada, recebe +1d6 de dano a distância;",
      "Destruidor iniciante: uma vez por rodada, você pode gastar 1 PM para causar 2d6 de dano elementao em um alvo de alcance curto;"
    ],
    "id": "doran-derinarion",
    "imagem": "Doran Derinarion.png",
    "tipos": [
      "Assassino",
      "Atirador",
      "Combatente",
      "Destruidor"
    ]
  },
  {
    "nome": "Edwina",
    "habilidades": [
      "Ajudante iniciante. O personagem recebe +2 em Guerra e Conhecimento."
    ],
    "id": "edwina",
    "imagem": "Edwina.png",
    "tipos": [
      "Ajudante"
    ]
  },
  {
    "nome": "Fermond Aldaman",
    "habilidades": [
      "Combatente iniciante (+1 em ataques)."
    ],
    "id": "fermond-aldaman",
    "imagem": "Fermond Aldaman.png",
    "tipos": [
      "Combatente"
    ]
  },
  {
    "nome": "Gaspar LeBlanc",
    "habilidades": [
      "Fortão veterano. Uma vez por rodada, o personagem recebe +1d12 em uma rolagem de dano corpo a corpo."
    ],
    "id": "gaspar-leblanc",
    "imagem": "Gaspar LeBlanc.png",
    "tipos": [
      "Fortão"
    ]
  },
  {
    "nome": "Grena",
    "habilidades": [
      "Vigilante iniciante. O personagem recebe +2 em Iniciativa e Percepção."
    ],
    "id": "grena",
    "imagem": "Grena.png",
    "tipos": [
      "Vigilante"
    ]
  },
  {
    "nome": "Haran Gallobalt",
    "habilidades": [
      "Combatente iniciante. O personagem recebe +1 em testes de ataque.",
      "Médica iniciante: Uma vez por rodada, como uma ação livre, você pode gastar 1 PM para curar 1d8+1 PV adjacente;",
      "Perseguidor Iniciante: +2 em Percepção e Sobrevivência;"
    ],
    "id": "haran-gallobalt",
    "imagem": "Haran Gallobalt.png",
    "tipos": [
      "Combatente",
      "Médico",
      "Perseguidor"
    ]
  },
  {
    "nome": "Isabrine",
    "habilidades": [
      "Fortona iniciante. Uma vez por rodada, o personagem recebe +1d8 em uma rolagem de dano corpo a corpo.",
      "Atirador Iniciante: Uma vez por rodada, recebe +1d6 de dano a distância;"
    ],
    "id": "isabrine",
    "imagem": "Isabrine.png",
    "tipos": [
      "Atirador",
      "Fortão"
    ]
  },
  {
    "nome": "Jansel Gallobalt",
    "habilidades": [
      "Atirador iniciante. Uma vez por rodada, o personagem recebe +1d6 em uma rolagem de dano à distância.",
      "Guardião iniciante: + 2 de defesa;"
    ],
    "id": "jansel-gallobalt",
    "imagem": "Jansel Gallobalt.png",
    "tipos": [
      "Atirador",
      "Guardião"
    ]
  },
  {
    "nome": "Jonid, o Homem-Bode",
    "habilidades": [
      "Perseguidor veterano. O personagem recebe +2 em Percepção e Sobrevivência e o poder Sentidos Aguçados.",
      "Atirador Iniciante: Uma vez por rodada, recebe +1d6 de dano a distância;",
      "Combatente Iniciante: +1 em testes de ataque;"
    ],
    "id": "jonid-o-homem-bode",
    "imagem": "Jonid, o Homem-Bode.png",
    "tipos": [
      "Atirador",
      "Combatente",
      "Perseguidor"
    ]
  },
  {
    "nome": "Mabel LeBlanc",
    "habilidades": [
      "Ajudante veterana. O personagem recebe +2 em Fortitude, Reflexos e Vontade.",
      "Médica iniciante: Uma vez por rodada, como uma ação livre, você pode gastar 1 PM para curar 1d8+1 PV adjacente;",
      "Perseguidor Iniciante: +2 em Percepção e Sobrevivência;"
    ],
    "id": "mabel-leblanc",
    "imagem": "Mabel LeBlanc.png",
    "tipos": [
      "Ajudante",
      "Médico",
      "Perseguidor"
    ]
  },
  {
    "nome": "Moira",
    "habilidades": [
      "Guardiã iniciante. O personagem recebe +2 na Defesa.",
      "Médica iniciante: Uma vez por rodada, como uma ação livre, você pode gastar 1 PM para curar 1d8+1 PV adjacente;",
      "Perseguidor Iniciante: +2 em Percepção e Sobrevivência;"
    ],
    "id": "moira",
    "imagem": "Moira.png",
    "tipos": [
      "Guardião",
      "Médico",
      "Perseguidor"
    ]
  },
  {
    "nome": "Mortimer",
    "habilidades": [
      "Combatente iniciante. O personagem recebe +1 em testes de ataque.",
      "Adepto Iniciante: O custo para lançar suas magias de 1º circulo diminui em 1PM;",
      "Combatente Iniciante: +1 em testes de ataque;",
      "Destruidor iniciante: Uma vez por rodada, você pode gastar 1 PM para causar 2d6 de dano elementao em um alvo de alcance curto;",
      "Especial: se for usado em conjunto com Morgan, Mortimer conta como um parceiro íntimo."
    ],
    "id": "mortimer",
    "imagem": "Mortimer.png",
    "tipos": [
      "Adepto",
      "Combatente",
      "Destruidor"
    ]
  },
  {
    "nome": "Mungo Joe",
    "habilidades": [
      "Incapaz de ajudar, mas fornece bebida à vontade..."
    ],
    "id": "mungo-joe",
    "imagem": "Mungo Joe.png",
    "tipos": []
  },
  {
    "nome": "Nada Mais que a Verdade Reston",
    "habilidades": [
      "Ajudante iniciante: O personagem recebe +2 em Conhecimento e Religião.",
      "Guardião iniciante: + 2 de defesa;",
      "Magivocador iniciante: Dano das magias aumenta em +1 dado do mesmo tipo;",
      "Vigilante Iniciante: +2 Percepção e Iniciativa;",
      "Perseguidor Iniciante: +2 em Percepção e Sobrevivência;",
      "Destruidor iniciante: Uma vez por rodada, você pode gastar 1 PM para causar 2d6 de dano elementao em um alvo de alcance curto;"
    ],
    "id": "nada-mais-que-a-verdade-reston",
    "imagem": "Nada Mais que a Verdade Reston.png",
    "tipos": [
      "Ajudante",
      "Destruidor",
      "Guardião",
      "Magivocador",
      "Perseguidor",
      "Vigilante"
    ]
  },
  {
    "nome": "Nadine",
    "habilidades": [
      "Combatente iniciante. O personagem recebe +1 em testes de ataque.",
      "Atirador Iniciante: Uma vez por rodada, recebe +1d6 de dano a distância;",
      "Combatente Atirador: +1 em testes de ataque;"
    ],
    "id": "nadine",
    "imagem": "Nadine.png",
    "tipos": [
      "Atirador",
      "Combatente"
    ]
  },
  {
    "nome": "Nathanael Gallobalt",
    "habilidades": [
      "Atirador veterano. Uma vez por rodada, o personagem recebe +1d10 em uma rolagem de dano à distância.",
      "Guardião iniciante: + 2 de defesa;",
      "Vigilante Iniciante: +2 Percepção e Iniciativa;"
    ],
    "id": "nathanael-gallobalt",
    "imagem": "Nathanael Gallobalt.png",
    "tipos": [
      "Atirador",
      "Guardião",
      "Vigilante"
    ]
  },
  {
    "nome": "Tarik",
    "habilidades": [
      "Atirador iniciante. Uma vez por rodada, o personagem recebe +1d6 em uma rolagem de dano à distância.",
      "Medico Iniciante: Uma vez por rodada, como uma ação livre, você pode gastar 1 PM para curar 1d8+1 PV adjacente;",
      "Guardião Iniciante: + 2 de defesa;"
    ],
    "id": "tarik",
    "imagem": "Tarik.png",
    "tipos": [
      "Atirador",
      "Guardião",
      "Médico"
    ]
  },
  {
    "nome": "Quimby Ulysses Arronax",
    "habilidades": [
      "Destruidor e ajudante iniciante. Uma vez por turno, o personagem pode gastar 1 PM para causar 2d6 pontos de dano de fogo em um alvo em alcance curto. Além disso, recebe +2 em Enganação e Ladinagem."
    ],
    "id": "quimby-ulysses-arronax",
    "imagem": "Quimby Ulysses Arronax.png",
    "tipos": [
      "Ajudante",
      "Destruidor"
    ]
  },
  {
    "nome": "Raguria",
    "habilidades": [
      "Destruidora veterana. Uma vez por rodada, o personagem pode gastar 2 PM para causar 4d6 pontos de dano de ácido em um alvo em alcance curto."
    ],
    "id": "raguria",
    "imagem": "Raguria.png",
    "tipos": [
      "Destruidor"
    ]
  },
  {
    "nome": "Ritanna Gallobalt",
    "habilidades": [
      "Guardiã iniciante. O personagem recebe +2 na Defesa.",
      "Adepto Iniciante: O custo para lançar suas magias de 1º circulo diminui em 1PM;"
    ],
    "id": "ritanna-gallobalt",
    "imagem": "Ritanna Gallobalt.png",
    "tipos": [
      "Adepto",
      "Guardião"
    ]
  },
  {
    "nome": "Salisha Gallobalt",
    "habilidades": [
      "Magivocador iniciante: Dano das magias aumenta em +1 dado do mesmo tipo;",
      "Vigilante Iniciante: +2 Percepção e Iniciativa;"
    ],
    "id": "salisha-gallobalt",
    "imagem": "Salisha Gallobalt.png",
    "tipos": [
      "Magivocador",
      "Vigilante"
    ]
  },
  {
    "nome": "Sargento Morgan de Molok",
    "habilidades": [
      "Fortão veterano e guardião iniciante. O personagem recebe +2 na Defesa e, uma vez por rodada, recebe +1d12 em uma rolagem de dano corpo a corpo.",
      "Especial: o personagem recebe o poder Comandar. Se Morgan estiver sob as ordens de um personagem, ele será sempre o primeiro a ser “ferido”, mas pode suportar um ferimento adicional antes de sair de combate."
    ],
    "id": "sargento-morgan-de-molok",
    "imagem": "Sargento Morgan de Molok.png",
    "tipos": [
      "Fortão",
      "Guardião"
    ]
  },
  {
    "nome": "Vadrinne",
    "habilidades": [
      "Médica iniciante. Uma vez por rodada, o personagem pode gastar 1 PM para curar 1d8+1 PV de uma criatura adjacente.",
      "Destruidor iniciante: Uma vez por rodada, você pode gastar 1 PM para causar 2d6 de dano elementao em um alvo de alcance curto;"
    ],
    "id": "vadrinne",
    "imagem": "Vadrinne.png",
    "tipos": [
      "Destruidor",
      "Médico"
    ]
  },
  {
    "nome": "Zagar",
    "habilidades": [
      "Fortão iniciante. Uma vez por rodada, o personagem recebe +1d8 em uma rolagem de dano corpo a corpo.",
      "Destruidor Veterano: Uma vez por rodada, o personagem pode gastar 2 PM para causar 4d6 pontos de dano de ácido em um alvo em alcance curto.",
      "Vigilante Veterano: +4 Percepção e Iniciativa;",
      "Guardião iniciante: + 2 de defesa;",
      "Magivocador iniciante: Dano das magias aumenta em +1 dado do mesmo tipo;"
    ],
    "id": "zagar",
    "imagem": "Zagar.png",
    "tipos": [
      "Destruidor",
      "Fortão",
      "Guardião",
      "Magivocador",
      "Vigilante"
    ]
  },
  {
    "nome": "Lylla",
    "habilidades": [
      "Destruidor Iniciante: Uma vez por rodada, você pode gastar 1 PM para causar 2d6 de dano elementao em um alvo de alcance curto;",
      "Perseguidor Iniciante: +2 em Percepção e Sobrevivência;"
    ],
    "id": "lylla",
    "imagem": "Lylla.png",
    "tipos": [
      "Destruidor",
      "Perseguidor"
    ]
  },
  {
    "nome": "Alon",
    "habilidades": [
      "Destruidor Iniciante: Uma vez por rodada, você pode gastar 1 PM para causar 2d6 de dano elementao em um alvo de alcance curto;",
      "Perseguidor Iniciante: +2 em Percepção e Sobrevivência;"
    ],
    "id": "alon",
    "imagem": "Alon.png",
    "tipos": [
      "Destruidor",
      "Perseguidor"
    ]
  },
  {
    "nome": "Moira",
    "habilidades": [
      "Médico Iniciante: Uma vez por rodada, como uma ação livre, você pode gastar 1 PM para curar 1d8+1 PV adjacente;"
    ],
    "id": "moira-2",
    "imagem": "Moira.png",
    "tipos": [
      "Médico"
    ]
  },
  {
    "nome": "Dr. Kiffurn",
    "habilidades": [
      "Guardião Iniciante: + 2 de defesa;"
    ],
    "id": "dr-kiffurn",
    "imagem": "Dr. Kiffurn.png",
    "tipos": [
      "Guardião"
    ]
  },
  {
    "nome": "Miriante",
    "habilidades": [
      "Magivocador iniciante: Dano das magias aumenta em +1 dado do mesmo tipo;"
    ],
    "id": "miriante",
    "imagem": "Miriante.png",
    "tipos": [
      "Magivocador"
    ]
  },
  {
    "nome": "Ebenezer",
    "habilidades": [
      "Magivocador iniciante: Dano das magias aumenta em +1 dado do mesmo tipo;",
      "Vigilante Iniciante: +2 Percepção e Iniciativa;"
    ],
    "id": "ebenezer",
    "imagem": "Ebenezer.png",
    "tipos": [
      "Magivocador",
      "Vigilante"
    ]
  },
  {
    "nome": "Rot'Kn",
    "habilidades": [
      "Magivocador iniciante: Dano das magias aumenta em +1 dado do mesmo tipo;"
    ],
    "id": "rot-kn",
    "imagem": "Rot'Kn.png",
    "tipos": [
      "Magivocador"
    ]
  },
  {
    "nome": "Vadrinne",
    "habilidades": [
      "Atirador Iniciante: Uma vez por rodada, recebe +1d6 de dano a distância;"
    ],
    "id": "vadrinne-2",
    "imagem": "Vadrinne.png",
    "tipos": [
      "Atirador"
    ]
  },
  {
    "nome": "Marwen",
    "habilidades": [
      "Atirador Iniciante: Uma vez por rodada, recebe +1d6 de dano a distância;",
      "Combatente Iniciante: +1 em testes de ataque;"
    ],
    "id": "marwen",
    "imagem": "Marwen.png",
    "tipos": [
      "Atirador",
      "Combatente"
    ]
  },
  {
    "nome": "Sai'Kn",
    "habilidades": [
      "Atirador Iniciante: Uma vez por rodada, recebe +1d6 de dano a distância;",
      "Combatente Iniciante: +1 em testes de ataque;"
    ],
    "id": "sai-kn",
    "imagem": "Sai'Kn.png",
    "tipos": [
      "Atirador",
      "Combatente"
    ]
  },
  {
    "nome": "Josefine",
    "habilidades": [
      "Perseguidor Iniciante: +2 em Percepção e Sobrevivência;"
    ],
    "id": "josefine",
    "imagem": "Josefine.png",
    "tipos": [
      "Perseguidor"
    ]
  },
  {
    "nome": "Krilie",
    "habilidades": [
      "Médica Veterana e Magivocador Mestra. Uma vez por rodada , o persoangem pode gastar 3PM para curar 3d8+3 PV ou remover uma condição prejudicial de uma criatura adjacente e o custo para lançar magias de 1º e 2º círculo do personagem é reduzido em 1 PM (cumulativo com outras reduções), a CD para resistir às magias do personagem aumenta em +2 e suas magias que causam dano causam +2 dados de dano do mesmo tipo."
    ],
    "id": "krilie",
    "imagem": "Krilie.png",
    "tipos": [
      "Magivocador",
      "Médico"
    ]
  }
];
