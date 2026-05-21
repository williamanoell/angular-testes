import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { PostsService } from './posts.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const posts = inject(PostsService);

  posts.setLoading(true);

  return next(req).pipe(
    finalize(() => posts.setLoading(false))
  );
};
