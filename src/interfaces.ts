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

interface IMarmitexConfiguracao {
  quantidade: number;
  tipoItem: IItemTipo;
}

export interface IMarmitex {
  tipoMarmitex: number;
  descricao: string;
  configuracao: IMarmitexConfiguracao[]
}

export interface ICardapio {
  id: number;
  data_cardapio: Date;
  items: IItem;
}


