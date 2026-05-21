# 📚 Angular Studies

Projeto de estudo do framework **Angular (v21)**, cobrindo os principais conceitos do ecossistema de forma prática e progressiva.

---

## 🎯 Objetivo

Consolidar o aprendizado dos fundamentos e recursos avançados do Angular através de exemplos interativos, organizados por tópico em componentes independentes.

---

## 🗂️ Tópicos abordados

### 1. Data Binding — `src/app/data-binding`
Formas de comunicação entre a classe do componente e o template HTML.

| Tipo | Sintaxe |
|---|---|
| Interpolação | `{{ expressão }}` |
| Property Binding | `[propriedade]="valor"` |
| Event Binding | `(evento)="handler()"` |
| Two-way Binding | `[(ngModel)]="propriedade"` |

---

### 2. Diretivas — `src/app/directives`
Controle de renderização e estilo diretamente no template.

- `@if / @else` — renderização condicional
- `@for` — iteração com `track` e bloco `@empty`
- `@switch / @case` — seleção de caso
- `ngClass` — classes CSS dinâmicas
- `ngStyle` — estilos inline dinâmicos

---

### 3. Input & Output — `src/app/inputs-outputs`
Comunicação entre componente pai e filho.

- `input.required<T>()` — dado obrigatório recebido do pai
- `input(default)` — dado opcional com valor padrão
- `output<T>()` — evento emitido pelo filho para o pai

---

### 4. RxJS — `src/app/rxjs-demo`
Programação reativa com RxJS integrado ao Angular.

- **Observable** — fluxo de dados assíncrono lazy
- **subscribe / unsubscribe** — iniciar e encerrar a escuta
- **takeUntil** — cancelamento automático no `ngOnDestroy`
- **async pipe** — subscribe automático no template, sem risco de memory leak
- **BehaviorSubject** — estado reativo compartilhado entre serviço e componentes
- **switchMap** — cancelamento de requisição anterior ao chegar novo valor
- **debounceTime + distinctUntilChanged** — otimização de busca por digitação
- **catchError** — tratamento de erros no pipe do Observable
- **HttpClient** — requisições HTTP retornando Observables
- **Interceptor funcional** — middleware global para loading/error state
- **Promise vs Observable** — comparativo entre os dois modelos

---

## 🚀 Como rodar

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
ng serve
```

Acesse `http://localhost:4200` no navegador.

---

## 🛠️ Tecnologias

- [Angular 21](https://angular.dev)
- [TypeScript 5.9](https://www.typescriptlang.org)
- [RxJS 7.8](https://rxjs.dev)
- [Angular CLI 21](https://angular.dev/tools/cli)

---

## 👨‍💻 Autor

Feito por **William Manoel** como parte da jornada de aprendizado em Angular.
