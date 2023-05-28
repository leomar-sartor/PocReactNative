import {ImageProps} from 'react-native';

export interface Pedido {
  codigo: number;
  imagem: ImageProps['source'];
  descricao: string;
}

const order1 = require('../dados/assets/Order1.jpg');
const order2 = require('../dados/assets/Order2.jpg');
const order3 = require('../dados/assets/Order3.jpg');

export const PedidoList: Pedido[] = [
  {
    codigo: 1,
    imagem: order1,
    descricao: 'Pedido Um',
  },
  {
    codigo: 2,
    imagem: order2,
    descricao: 'Pedido Dois',
  },
  {
    codigo: 3,
    imagem: order3,
    descricao: 'Pedido Tres',
  },
  {
    codigo: 4,
    imagem: order1,
    descricao: 'Pedido Quatro',
  },
  {
    codigo: 5,
    imagem: order2,
    descricao: 'Pedido Cinco',
  },
  {
    codigo: 6,
    imagem: order3,
    descricao: 'Pedido Seis',
  },
  {
    codigo: 7,
    imagem: order1,
    descricao: 'Pedido Sete',
  },
  {
    codigo: 8,
    imagem: order2,
    descricao: 'Pedido Oito',
  },
  {
    codigo: 9,
    imagem: order3,
    descricao: 'Pedido Nove',
  },
  {
    codigo: 10,
    imagem: order1,
    descricao: 'Pedido Dez',
  },
  {
    codigo: 11,
    imagem: order2,
    descricao: 'Pedido Onze',
  },
  {
    codigo: 12,
    imagem: order3,
    descricao: 'Pedido Doze',
  },
];
