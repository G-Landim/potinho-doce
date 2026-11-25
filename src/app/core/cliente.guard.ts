import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth';



export const clienteGuard: CanActivateFn = async (route, state) => {
    const auth = inject(AuthService);
    const router = inject(Router);

    if(!auth.logado()){
        await auth.carregarSessao().catch(() => undefined);
    }

    if(auth.logado()){
        return true
    }

    return router.createUrlTree(['/entrar'], {
        queryParams: {
            voltar: state.url
        }
    })
        
}

export const destinoSeguro = (voltar: string | null) => {
    if(voltar && voltar.startsWith('/') && !voltar.startsWith('//')){
        return voltar
    }

    return '/'
}