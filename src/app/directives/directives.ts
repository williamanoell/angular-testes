import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [NgClass, NgStyle, FormsModule],
  templateUrl: './directives.html',
  styleUrl: './directives.scss',
})
export class Directives {
  // @if / @else
  logado = false;

  // @for
  frutas = ['Maçã', 'Banana', 'Laranja', 'Uva', 'Manga'];

  // @switch
  diaSemana = 'segunda';
  dias = ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'];

  // ngClass
  alertaTipo: 'sucesso' | 'erro' | 'aviso' = 'sucesso';

  // ngStyle
  tamanhoFonte = 16;
  corTexto = '#333333';
}
