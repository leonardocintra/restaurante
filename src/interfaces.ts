export interface IRestaurante {
  id: number;
  descricao: string;
  ativo: boolean;
}

// ################### ITEM ###################
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


// ################### MARMITEX ###################
//Grande, Médio, Pequeno
export interface IMarmitexTipo {
  id: number;
  descricao: string;
  restaurante: IRestaurante;
}

export interface IMarmitexConfiguracao {
  id: number;
  tipoMarmitex: IMarmitexTipo;
  tipoItem: IItemTipo;
  quantidade: number;
}

export interface ICardapio {
  id: number;
  data_cardapio: Date;
  items: IItem;
}


