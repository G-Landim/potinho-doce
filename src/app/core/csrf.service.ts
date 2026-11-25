import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export interface CsrfToken{
  headerName: string,
  token: string
}

@Injectable({
  providedIn: 'root'
})

export class CsrfService {
  readonly http = inject(HttpClient)
  readonly tokenAtual = signal<CsrfToken | null>(null);
  readonly token = this.tokenAtual.asReadonly();

  async renovar(): Promise<void>{
    const token = await firstValueFrom(this.http.get<CsrfToken>('/api/csrf'))

    return this.tokenAtual.set(token);
  }
  
  limpar(): void {
    this.tokenAtual.set(null);
  }
}
