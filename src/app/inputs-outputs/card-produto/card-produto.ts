import { Component, input, output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  estoque: number;
}

@Component({
  selector: 'app-card-produto',
  imports: [CurrencyPipe],
  templateUrl: './card-produto.html',
  styleUrl: './card-produto.scss',
})
export class CardProduto {
  // Inputs: dados recebidos do componente pai
  produto = input.required<Produto>();
  destaque = input(false);

  // Outputs: eventos emitidos para o componente pai
  adicionarAoCarrinho = output<Produto>();
  remover = output<number>();
}
