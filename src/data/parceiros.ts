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
      "<strong>Médico iniciante:</strong> Uma vez por turno, o personagem pode gastar 1 PM para curar 1d8+1 PV de uma criatura adjacente."
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
      "<strong>Combatente iniciante:</strong> O personagem recebe +1 em testes de ataque.",
      "<strong>Guardião iniciante:</strong> O personagem recebe +2 na Defesa."
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
      "<strong>Atiradora Iniciante:</strong> Uma vez por rodada o personagem recebe +1d6 em uma rolagem de dano à distância.",
      "<strong>Médica Iniciante:</strong> Pode gastar 1 PM para curar 1d8+1 PV de uma criatura adjacente.",
      "<strong>Guardião Iniciante:</strong> O personagem recebe +2 na Defesa."
    ],
    "id": "annabel",
    "imagem": "Annabel.png",
    "tipos": [
      "Atirador",
      "Médico",
      "Guardião"
    ]
  },
  {
    "nome": "Arlo “Olho de Leite”",
    "habilidades": [
      "<strong>Atirador veterano:</strong> Uma vez por rodada, recebe +1d10 em uma rolagem de dano à distância.",
      "<strong>Perseguidor iniciante:</strong> O personagem recebe +2 em Percepção e Sobrevivência."
    ],
    "id": "arlo-olho-de-leite",
    "imagem": "Arlo.png",
    "tipos": [
      "Atirador",
      "Perseguidor"
    ]
  },
  {
    "nome": "Astelle",
    "habilidades": [
      "<strong>Adepta inciante:</strong> O custo para lançar magias de 1º círculo do personagem diminui em –1 PM."
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
      "<strong>Ajudante iniciante:</strong> (o personagem recebe +2 em Ofício [armeiro] e Ofício [carpinteiro]).",
      "<strong>Combatente iniciante:</strong> O personagem recebe +2 na Defesa.",
      "<strong>Atirador  iniciante:</strong> Uma vez por rodada, recebe +1d6 de dano a distância;",
      "<strong>Destruidor iniciante:</strong> Uma vez por rodada, você pode gastar 1 PM para causar 2d6 de dano elementao em um alvo de alcance curto;",
      "<strong>Combatente iniciante:</strong> +1 em testes de ataque;"
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
      "<strong>Médica veterana:</strong> Uma vez por rodada, o personagem pode gastar 3 PM para curar 3d8+3 PV ou remover uma condição prejudicial de uma criatura adjacente.",
      "<strong>Especial:</strong> o personagem pode gastar uma ação de movimento para lançar uma das seguintes magias, pagando seu custo normal em PM: Bênção, Físico Divino, Mente Divina e Orientação. Se Belinda for usada para consertar o Forte, conserta o dobro."
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
      "<strong>Medico iniciante:</strong> Uma vez por rodada, como uma ação livre, você pode gastar 1 PM para curar 1d8+1 PV adjacente;"
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
      "<strong>Adepto Mestre:</strong> O custo para lançar magias de 1º e 2º círculo do personagem é reduzido em 1 PM (cumulativo com outras reduções)",
      "<strong>Magivocador Mestre:</strong> Suas magias que causam dano causam +2 dados de dano do mesmo tipo e a CD para resistir às suas magias aumenta em +1."
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
      "<strong>Médica iniciante:</strong> Uma vez por rodada, como uma ação livre, você pode gastar 1 PM para curar 1d8+1 PV adjacente;",
      "<strong>Magivocadora iniciante:</strong> Dano das magias aumenta em +1 dado do mesmo tipo;",
      "<strong>Perseguidor iniciante:</strong> +2 em Percepção e Sobrevivência;",
      "<strong>Destruidor Iniciante:</strong> Uma vez por rodada, você pode gastar 1 PM para causar 2d6 de dano elementao em um alvo de alcance curto;",
      "<strong>Especial:</strong> Erneshia pode contar ao personagem uma habilidade, vulnerabilidade, resistência ou característica similar de um inimigo qualquer (exceto inimigos com nome)."
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
      "<strong>Assassino iniciante:</strong> O personagem recebe Ataque Furtivo +1d6.",
      "<strong>Combatente iniciante:</strong> +1 em testes de ataque;",
      "<strong>Atirador  iniciante:</strong> Uma vez por rodada, recebe +1d6 de dano a distância;",
      "<strong>Destruidor iniciante:</strong> uma vez por rodada, você pode gastar 1 PM para causar 2d6 de dano elementao em um alvo de alcance curto;"
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
      "<strong>Ajudante iniciante:</strong> O personagem recebe +2 em Guerra e Conhecimento."
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
      "<strong>Combatente iniciante:</strong> (+1 em ataques)."
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
      "<strong>Fortão veterano:</strong> Uma vez por rodada, o personagem recebe +1d12 em uma rolagem de dano corpo a corpo."
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
      "<strong>Vigilante Iniciante:</strong> O personagem recebe +2 em Iniciativa e Percepção."
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
      "<strong>Combatente iniciante:</strong> O personagem recebe +1 em testes de ataque.",
      "<strong>Médica iniciante:</strong> Uma vez por rodada, como uma ação livre, você pode gastar 1 PM para curar 1d8+1 PV adjacente;",
      "<strong>Perseguidor iniciante:</strong> +2 em Percepção e Sobrevivência;"
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
      "<strong>Fortona iniciante:</strong> Uma vez por rodada, o personagem recebe +1d8 em uma rolagem de dano corpo a corpo.",
      "<strong>Atirador iniciante:</strong> Uma vez por rodada, recebe +1d6 de dano a distância;"
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
      "<strong>Atirador  iniciante:</strong> Uma vez por rodada, o personagem recebe +1d6 em uma rolagem de dano à distância.",
      "<strong>Combatente iniciante:</strong> + 2 de defesa;"
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
      "<strong>Perseguidor veterano:</strong> O personagem recebe +2 em Percepção e Sobrevivência e o poder Sentidos Aguçados.",
      "<strong>Atirador  iniciante:</strong> Uma vez por rodada, recebe +1d6 de dano a distância;",
      "<strong>Combatente iniciante:</strong> +1 em testes de ataque;"
    ],
    "id": "jonid-o-homem-bode",
    "imagem": "Jonid.png",
    "tipos": [
      "Atirador",
      "Combatente",
      "Perseguidor"
    ]
  },
  {
    "nome": "Mabel LeBlanc",
    "habilidades": [
      "<strong>Ajudante veterana:</strong> O personagem recebe +2 em Fortitude, Reflexos e Vontade.",
      "<strong>Médica iniciante:</strong> Uma vez por rodada, como uma ação livre, você pode gastar 1 PM para curar 1d8+1 PV adjacente;",
      "<strong>Perseguidor iniciante:</strong> +2 em Percepção e Sobrevivência;"
    ],
    "id": "mabel-leblanc",
    "imagem": "Mabel.png",
    "tipos": [
      "Ajudante",
      "Médico",
      "Perseguidor"
    ]
  },
  {
    "nome": "Moira",
    "habilidades": [
      "<strong>Guardiã iniciante:</strong> O personagem recebe +2 na Defesa.",
      "<strong>Médica iniciante:</strong> Uma vez por rodada, como uma ação livre, você pode gastar 1 PM para curar 1d8+1 PV adjacente;",
      "<strong>Perseguidor iniciante:</strong> +2 em Percepção e Sobrevivência;"
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
      "<strong>Combatente iniciante:</strong> O personagem recebe +1 em testes de ataque.",
      "<strong>Adepto Iniciante:</strong> O custo para lançar suas magias de 1º circulo diminui em 1PM;",
      "<strong>Combatente iniciante:</strong> +1 em testes de ataque;",
      "<strong>Destruidor iniciante:</strong> Uma vez por rodada, você pode gastar 1 PM para causar 2d6 de dano elementao em um alvo de alcance curto;"
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
      "<strong>Ajudante iniciante:</strong> O personagem recebe +2 em Conhecimento e Religião.",
      "<strong>Combatente iniciante:</strong> + 2 de defesa;",
      "<strong>Magivocador iniciante:</strong> Dano das magias aumenta em +1 dado do mesmo tipo;",
      "<strong>Vigilante Iniciante:</strong> +2 Percepção e Iniciativa;",
      "<strong>Perseguidor iniciante:</strong> +2 em Percepção e Sobrevivência;",
      "<strong>Destruidor iniciante:</strong> Uma vez por rodada, você pode gastar 1 PM para causar 2d6 de dano elementao em um alvo de alcance curto;"
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
      "<strong>Combatente iniciante:</strong> O personagem recebe +1 em testes de ataque.",
      "<strong>Atirador  iniciante:</strong> Uma vez por rodada, recebe +1d6 de dano a distância;"
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
      "<strong>Atirador veterano:</strong> Uma vez por rodada, o personagem recebe +1d10 em uma rolagem de dano à distância.",
      "<strong>Combatente iniciante:</strong> + 2 de defesa;",
      "<strong>Vigilante Iniciante:</strong> +2 Percepção e Iniciativa;"
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
      "<strong>Atirador  iniciante:</strong> Uma vez por rodada, o personagem recebe +1d6 em uma rolagem de dano à distância.",
      "<strong>Medico iniciante:</strong> Uma vez por rodada, como uma ação livre, você pode gastar 1 PM para curar 1d8+1 PV adjacente;",
      "<strong>Combatente iniciante:</strong> + 2 de defesa;"
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
    "nome": "Raguria",
    "habilidades": [
      "<strong>Destruidora Veterana:</strong> Uma vez por rodada, o personagem pode gastar 2 PM para causar 4d6 pontos de dano de ácido em um alvo em alcance curto."
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
      "<strong>Guardiã iniciante:</strong> O personagem recebe +2 na Defesa.",
      "<strong>Adepto Iniciante:</strong> O custo para lançar suas magias de 1º circulo diminui em 1PM;"
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
      "<strong>Magivocador iniciante:</strong> Dano das magias aumenta em +1 dado do mesmo tipo;",
      "<strong>Vigilante Iniciante:</strong> +2 Percepção e Iniciativa;"
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
      "<strong>Fortão veterano:</strong> O personagem recebe +2 na Defesa e, uma vez por rodada, recebe +1d12 em uma rolagem de dano corpo a corpo.",
      "<strong>Guardião iniciante:</strong> O personagem recebe +2 na Defesa.",
      "<strong>Especial</strong>: o personagem recebe o poder Comandar. Se Morgan estiver sob as ordens de um personagem, ele será sempre o primeiro a ser “ferido”, mas pode suportar um ferimento adicional antes de sair de combate."
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
      "<strong>Médica iniciante:</strong> Uma vez por rodada, o personagem pode gastar 1 PM para curar 1d8+1 PV de uma criatura adjacente.",
      "<strong>Destruidor iniciante:</strong> Uma vez por rodada, você pode gastar 1 PM para causar 2d6 de dano elementao em um alvo de alcance curto;",
      "<strong>Atirador iniciante:</strong> Uma vez por rodada, recebe +1d6 de dano a distância;"
    ],
    "id": "vadrinne",
    "imagem": "Vadrinne.png",
    "tipos": [
      "Destruidor",
      "Médico",
      "Atirador"
    ]
  },
  {
    "nome": "Zagar",
    "habilidades": [
      "<strong>Fortão iniciante:</strong> Uma vez por rodada, o personagem recebe +1d8 em uma rolagem de dano corpo a corpo.",
      "<strong>Destruidor Veterano:</strong> Uma vez por rodada, o personagem pode gastar 2 PM para causar 4d6 pontos de dano de ácido em um alvo em alcance curto.",
      "<strong>Vigilante Veterano:</strong> +4 Percepção e Iniciativa;",
      "<strong>Combatente iniciante:</strong> + 2 de defesa;",
      "<strong>Magivocador iniciante:</strong> Dano das magias aumenta em +1 dado do mesmo tipo;"
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
      "<strong>Destruidor Iniciante:</strong> Uma vez por rodada, você pode gastar 1 PM para causar 2d6 de dano elementao em um alvo de alcance curto;",
      "<strong>Perseguidor iniciante:</strong> +2 em Percepção e Sobrevivência;"
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
      "<strong>Destruidor Iniciante:</strong> Uma vez por rodada, você pode gastar 1 PM para causar 2d6 de dano elementao em um alvo de alcance curto;",
      "<strong>Perseguidor iniciante:</strong> +2 em Percepção e Sobrevivência;"
    ],
    "id": "alon",
    "imagem": "Alon.png",
    "tipos": [
      "Destruidor",
      "Perseguidor"
    ]
  },
  {
    "nome": "Dr. Kiffurn",
    "habilidades": [
      "<strong>Guardião iniciante:</strong> + 2 de defesa;",
      "<strong>Médico veterano:</strong> Uma vez por rodada, o personagem pode gastar 3 PM para curar 3d8+3 PV ou remover uma condição prejudicial de uma criatura adjacente."
    ],
    "id": "dr-kiffurn",
    "imagem": "Dr. Kiffurn.png",
    "tipos": [
      "Guardião",
      "Médico"
    ]
  },
  {
    "nome": "Miriante",
    "habilidades": [
      "<strong>Magivocador iniciante:</strong> Dano das magias aumenta em +1 dado do mesmo tipo;"
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
      "<strong>Magivocador iniciante:</strong> Dano das magias aumenta em +1 dado do mesmo tipo;",
      "<strong>Vigilante Iniciante:</strong> +2 Percepção e Iniciativa;"
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
      "<strong>Magivocador iniciante:</strong> Dano das magias aumenta em +1 dado do mesmo tipo;"
    ],
    "id": "rot-kn",
    "imagem": "Rot'Kn.png",
    "tipos": [
      "Magivocador"
    ]
  },
  {
    "nome": "Marwen",
    "habilidades": [
      "<strong>Atirador  iniciante:</strong> Uma vez por rodada, recebe +1d6 de dano a distância;",
      "<strong>Combatente iniciante:</strong> +1 em testes de ataque;"
    ],
    "id": "marwen",
    "imagem": "Marwen.png",
    "tipos": [
      "Atirador",
      "Combatente"
    ]
  },
  {
    "nome": "Dona Pata",
    "habilidades": [
      "<strong>Fortona iniciante:</strong> Uma vez por rodada, o personagem recebe +1d8 em uma rolagem de dano corpo a corpo.",
      "<strong>Guardião Veterano:</strong> +3 na defesa;"
    ],
    "id": "dona-pata",
    "imagem": "Dona Pata.png",
    "tipos": [
      "Fortão",
      "Guardião"
    ]
  },
  {
    "nome": "Sai'Kn",
    "habilidades": [
      "<strong>Atirador  iniciante:</strong> Uma vez por rodada, recebe +1d6 de dano a distância;",
      "<strong>Combatente iniciante:</strong> +1 em testes de ataque;"
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
      "<strong>Perseguidor iniciante:</strong> +2 em Percepção e Sobrevivência;"
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
      "<strong>Médica Veterana:</strong> Uma vez por rodada , o persoangem pode gastar 3PM para curar 3d8+3 PV ou remover uma condição prejudicial de uma criatura adjacente",
      "<strong>Magivocador Mestra:</strong> A CD para resistir às magias do personagem aumenta em +1 e suas magias que causam dano causam +2 dados de dano do mesmo tipo."
    ],
    "id": "krilie",
    "imagem": "Krilie.png",
    "tipos": [
      "Magivocador",
      "Médico"
    ]
  }
];
