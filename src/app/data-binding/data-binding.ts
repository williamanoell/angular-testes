import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.scss',
})
export class DataBinding {
  // Interpolação
  titulo = 'Exemplos de Data Binding';
  versao = 3;

  // Property Binding
  imagemUrl = 'https://angular.dev/assets/images/press-kit/angular_wordmark_gradient.png';
  imagemAlt = 'Logo do Angular';
  botaoDesabilitado = true;

  // Event Binding
  contadorCliques = 0;
  ultimaAcao = 'Nenhuma ação ainda';

  onClicar() {
    this.contadorCliques++;
    this.ultimaAcao = `Botão clicado ${this.contadorCliques} vez(es)`;
  }

  onMouseOver() {
    this.ultimaAcao = 'Mouse sobre o botão';
  }

  // Two-way Binding
  nome = '';
  get saudacao() {
    return this.nome ? `Olá, ${this.nome}!` : 'Digite seu nome acima...';
  }
}
