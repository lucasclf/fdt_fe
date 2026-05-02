export type TipoDescricao = {
  nome: string;
  descricao: string;
};

export const tiposDeParceiros: TipoDescricao[] = [
  {
    "nome": "Adepto",
    "descricao": "O custo para lançar suas magias de 1º circulo diminui em 1PM;"
  },
  {
    "nome": "Ajudante",
    "descricao": "Você recebe +2 em duas pericias;"
  },
  {
    "nome": "Assassino",
    "descricao": "Você pode usar Ataque Furtivo +1d6(cumulativo);"
  },
  {
    "nome": "Atirador",
    "descricao": "Uma vez por rodada, recebe +1d6 de dano a distância;"
  },
  {
    "nome": "Combatente",
    "descricao": "+1 em testes de ataque;"
  },
  {
    "nome": "Destruidor",
    "descricao": "uma vez por rodada, você pode gastar 1 PM para causar 2d6 de dano elementao em um alvo de alcance curto;"
  },
  {
    "nome": "Fortão",
    "descricao": "uma vez por rodada, você recebe +1d8 de dado corpo a corpo;"
  },
  {
    "nome": "Guardião",
    "descricao": "+ 2 de defesa;"
  },
  {
    "nome": "Magivocador",
    "descricao": "dano das magias aumenta em +1 dado do mesmo tipo;"
  },
  {
    "nome": "Médico",
    "descricao": "uma vez por rodada, como uma ação livre, você pode gastar 1 PM para curar 1d8+1 PV adjacente;"
  },
  {
    "nome": "Perseguidor",
    "descricao": "+2 em Percepção e Sobrevivência;"
  },
  {
    "nome": "Vigilante",
    "descricao": "+2 Percepção e Iniciativa;"
  }
];
