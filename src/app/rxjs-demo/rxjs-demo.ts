import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  Observable,
  Subject,
  Subscription,
  fromEvent,
  interval,
  takeUntil,
} from 'rxjs';
import { PostsService, Post } from './posts.service';

@Component({
  selector: 'app-rxjs-demo',
  imports: [AsyncPipe, FormsModule],
  templateUrl: './rxjs-demo.html',
  styleUrl: './rxjs-demo.scss',
})
export class RxjsDemo implements OnInit, OnDestroy {
  private postsService = inject(PostsService);
  private destroy$ = new Subject<void>();

  // --- BehaviorSubject (do serviço) ---
  carregando$ = this.postsService.carregando$;
  erro$ = this.postsService.erro$;

  // --- 1. Observable manual ---
  contador = 0;
  intervaloAtivo = false;
  private intervaloSub?: Subscription;

  iniciarContador() {
    this.intervaloAtivo = true;
    this.intervaloSub = interval(1000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(n => (this.contador = n + 1));
  }

  pararContador() {
    this.intervaloSub?.unsubscribe();
    this.intervaloAtivo = false;
  }

  // --- 2. Promise vs Observable ---
  postsPromise: Post[] = [];
  carregandoPromise = false;

  async carregarViaPromise() {
    this.carregandoPromise = true;
    this.postsPromise = await this.postsService.getPostsPromise(3);
    this.carregandoPromise = false;
  }

  // --- 3. async pipe + HttpClient ---
  posts$!: Observable<Post[]>;

  carregarViaObservable() {
    this.posts$ = this.postsService.getPosts(5);
  }

  // --- 4. catchError + loading/error ---
  postErro: Post[] | null = null;
  erroManual: string | null = null;

  forcarErro() {
    this.erroManual = null;
    this.postsService.getPostComErro().subscribe({
      error: (e: Error) => (this.erroManual = e.message),
    });
  }

  // --- 5. switchMap + BehaviorSubject de busca ---
  private termoBusca$ = new Subject<string>();
  resultadosBusca$!: Observable<Post[]>;
  termoBusca = '';

  onBusca(termo: string) {
    this.termoBusca$.next(termo);
  }

  ngOnInit() {
    this.resultadosBusca$ = this.postsService.buscarPorTermoStream(
      this.termoBusca$
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
