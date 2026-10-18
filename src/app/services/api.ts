import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
 private readonly baseUrl = '/api';
 
 async buscarCsrf(){
    const resposta = await fetch(`${this.baseUrl}/csrf`, { credentials: 'include'});

    console.log('Essa é a resposta: ' + resposta)

    if(!resposta.ok){
        throw new Error(`Não foi possível buscar o CSRF. Status: ${resposta.status}`)
    }

    const dados = await resposta.json();

    console.log('Esses são os dados: ' + dados)
    return dados;
 }

}
