export interface IRestaurante {
  id: number;
  descricao: string;
  ativo: boolean;
}

export interface IItemTipo {
  id: number;
  descricao: string;
  restauranteId: number;
}

export interface IItem {
  id: number;
  descricao: string;
  tipoItem: IItemTipo;
  tipoItemId: number;
}

interface IItemConfiguracoes {
  id: number;
  descricao: string;
}

interface IConfiguracoes {
  id: number;
  quantidade: number;
  item_tipo: IItemConfiguracoes;
}

interface IConfiguracoesData {
  data: IConfiguracoes[];
}

export interface IMarmitex {
  id: number;
  descricao: string;
  ativo: boolean;
  preco: number;
  configuracoes: IConfiguracoesData;
}

export interface ITipoMarmitex {
  id: number;
  descricao: string;
  restauranteId: number;
}

export interface ICardapio {
  id: number;
  data_cardapio: Date;
  items: IItem;
}


