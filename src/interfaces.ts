export interface IRestaurante {
  id: number;
  descricao: string;
  ativo: boolean;
}

// ################### ITEM ###################
export interface IItem {
  restaurante: string;
  tipo: string;
  items: Array<string>
}

export interface ICardapio {
  restaurante: string;
  tipo: string;
  items: Array<string>
}

export interface IPedido {
  restaurante: string;
  pedidoId: string;
  telefone: string;
  nome: string;
  dataPedido: Date;
}


