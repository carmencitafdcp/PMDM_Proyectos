import { HttpInterceptorFn } from '@angular/common/http';

export const apiKeyInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
