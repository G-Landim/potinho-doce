import { HttpClient, HttpParams } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs'
import { CsrfService } from './csrf.service';

export interface Cliente {
  id: number;
  nome: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    private readonly http = inject(HttpClient);
    private readonly csrf = inject(CsrfService);

    private readonly clienteAtual = signal<Cliente | null>(null);
    readonly cliente = this.clienteAtual.asReadonly();

    readonly logado = computed(() => this.clienteAtual() !== null); 

    async carregarSessao(): Promise<void> {

      try{
        const cliente = await firstValueFrom(this.http.get<Cliente>('/api/cliente/me'))
        this.clienteAtual.set(cliente);
      }catch (erro) {
        if(erro instanceof HttpErrorResponse && (erro.status === 401 || erro.status === 403)){
            this.clienteAtual.set(null);
            return;
        }
        throw erro;
      }
    }

    async login(email: string, senha: string): Promise<void> {
      if(!this.csrf.token){
        return 
      }
      const corpo = new HttpParams()
        .set('username', email)
        .set('password', senha);

      await firstValueFrom(
        this.http.post('/api/login', corpo)
      );

      this.csrf.renovar();
      this.carregarSessao();
    }
    
}
