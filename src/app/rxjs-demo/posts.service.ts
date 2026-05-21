import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  BehaviorSubject,
  Observable,
  Subject,
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  throwError,
} from 'rxjs';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const API = 'https://jsonplaceholder.typicode.com';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private http = inject(HttpClient);

  // BehaviorSubject: guarda o estado atual e emite para novos subscribers
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private erroSubject = new BehaviorSubject<string | null>(null);

  // Expõe como Observable somente leitura
  readonly carregando$ = this.loadingSubject.asObservable();
  readonly erro$ = this.erroSubject.asObservable();

  setLoading(valor: boolean) {
    this.loadingSubject.next(valor);
  }

  // Observable: retorna lista de posts via HttpClient
  getPosts(limite = 5): Observable<Post[]> {
    return this.http.get<Post[]>(`${API}/posts?_limit=${limite}`);
  }

  // Observable com catchError: passa uma URL inválida para forçar erro
  getPostComErro(): Observable<Post[]> {
    return this.http.get<Post[]>(`${API}/rota-invalida`).pipe(
      catchError(err => {
        const msg = `Erro ${err.status}: ${err.statusText}`;
        this.erroSubject.next(msg);
        return throwError(() => new Error(msg));
      })
    );
  }

  limparErro() {
    this.erroSubject.next(null);
  }

  // switchMap: cancela a requisição anterior ao chegar novo termo
  buscarPorTermoStream(termo$: Subject<string>): Observable<Post[]> {
    return termo$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(termo =>
        this.http.get<Post[]>(`${API}/posts?_limit=100`).pipe(
          switchMap(posts =>
            new Observable<Post[]>(obs => {
              obs.next(
                posts.filter(p =>
                  p.title.toLowerCase().includes(termo.toLowerCase())
                )
              );
              obs.complete();
            })
          ),
          catchError(() => throwError(() => new Error('Falha na busca')))
        )
      )
    );
  }

  // Promise: mesmo dado, mas com Promise em vez de Observable
  getPostsPromise(limite = 3): Promise<Post[]> {
    return fetch(`${API}/posts?_limit=${limite}`).then(r => r.json());
  }
}
