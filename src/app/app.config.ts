import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { apiInterceptor } from './core/api.interceptor';
import { AuthService } from './core/auth';
import { CsrfService } from './core/csrf.service'; 

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
      withInterceptors([apiInterceptor])
    ),
    provideAppInitializer(async () => {
      const csrf = inject(CsrfService);
      const auth = inject(AuthService);

      try {
        await csrf.renovar();
        await auth.carregarSessao();
      } catch (erro) {
        console.error('Backend indisponível ao iniciar.', erro)
      }
    })
  ]
};
