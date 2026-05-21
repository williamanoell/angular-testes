import { Component } from '@angular/core';
import { CardProduto, Produto } from './card-produto/card-produto';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-inputs-outputs',
  imports: [CardProduto, CurrencyPipe],
  templateUrl: './inputs-outputs.html',
  styleUrl: './inputs-outputs.scss',
})
export class InputsOutputs {
  produtos: Produto[] = [
    { id: 1, nome: 'Teclado Mecânico', preco: 349.9, estoque: 5 },
    { id: 2, nome: 'Mouse Gamer', preco: 199.9, estoque: 0 },
    { id: 3, nome: 'Monitor 24"', preco: 1299.9, estoque: 2 },
  ];

  carrinho: Produto[] = [];
  log: string[] = [];

  get totalCarrinho() {
    return this.carrinho.reduce((acc, p) => acc + p.preco, 0);
  }

  onAdicionarAoCarrinho(produto: Produto) {
    this.carrinho.push(produto);
    this.log.unshift(`Adicionado: ${produto.nome}`);
  }

  onRemover(id: number) {
    const produto = this.produtos.find(p => p.id === id)!;
    this.produtos = this.produtos.filter(p => p.id !== id);
    this.log.unshift(`Removido da lista: ${produto.nome}`);
  }
}
