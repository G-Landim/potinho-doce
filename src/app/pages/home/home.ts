import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Presentation } from './components/presentation/presentation';
import { HowToOrder } from './components/how-to-order/how-to-order';

@Component({
  imports: [Header, Presentation, HowToOrder],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
