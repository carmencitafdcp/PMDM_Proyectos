import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { TopMovieList } from './app/pages/top-movie-list/top-movie-list';
import { apiKeyInterceptor } from './app/interceptors/api-key-interceptor-interceptor';

bootstrapApplication(TopMovieList, {
  providers: [
    provideHttpClient(
      withInterceptors([apiKeyInterceptor])
    )
  ]
});
