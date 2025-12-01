import { HttpInterceptorFn } from '@angular/common/http';

const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjYyYzVlYmM1MzRmMjgwYTBjNTcxMDA0ZjAyMTA2NCIsIm5iZiI6MTc2MzM2ODAzOC4wMTIsInN1YiI6IjY5MWFkYzY2MTRjOGZjZWY2MDBiNWRhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BhVUt_U_1yNjMxmdLiv7OxraQhhhU-mIoabrE95dIf4'

export const apiKeyInterceptor: HttpInterceptorFn = (req, next) => {
  const reqWithHeader = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${ACCESS_TOKEN}`),
  });
  return next(reqWithHeader);
};
