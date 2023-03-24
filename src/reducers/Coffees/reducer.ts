import { Actions } from "./actions";


export interface Coffee {
  id: number
  nome: string
  preco: number
  tipo: string
  descricao: string
  src: string
  qtd: number
  valorTotal?: number
}

export interface Address {
  id: string
  numero: number
  rua: string
  bairro: string
  cidade: string
  complemento?: string
  tipoPagamento: string
}


