import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NewOrder } from './pages/new-order/new-order';
import { Flavors } from './pages/flavors/flavors';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'new-order',
        component: NewOrder
    },
    {
        path: 'flavors',
        component: Flavors
    },
   
];
