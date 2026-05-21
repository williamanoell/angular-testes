import { Component, signal } from '@angular/core';
import { DataBinding } from './data-binding/data-binding';
import { Directives } from './directives/directives';
import { InputsOutputs } from './inputs-outputs/inputs-outputs';
import { RxjsDemo } from './rxjs-demo/rxjs-demo';

@Component({
  selector: 'app-root',
  imports: [DataBinding, Directives, InputsOutputs, RxjsDemo],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-testes');
}
