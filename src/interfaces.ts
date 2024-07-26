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
