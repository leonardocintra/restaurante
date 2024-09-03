export interface IRestaurante {
  id: number;
  descricao: string;
  ativo: boolean;
}

// ################### ITEM ###################
export interface IItem {
  items: Array<string>
}

export interface ICardapio {
  restaurante: string;
  tipo: string;
  items: IItem[];
}


