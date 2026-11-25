import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from '@angular/core';
import { CsrfService } from './csrf.service';

const METODOS_QUE_MUDAM_DADOS = [
  'POST',
  'PUT',
  'PATCH',
  'DELETE'
];

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  if (!req.url.startsWith('/api')) {
    return next(req);
  }

  const csrf = inject(CsrfService).token();
  let headers = req.headers;

  if (csrf && METODOS_QUE_MUDAM_DADOS.includes(req.method)) {
    headers = headers.set(csrf.headerName, csrf.token);
  }

  return next(
    req.clone({
      withCredentials: true,
      headers
    })
  );
};

