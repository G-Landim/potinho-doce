import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Presentation } from './components/presentation/presentation';
import { HowToOrder } from './components/how-to-order/how-to-order';
import { DisplayWindow } from './components/display-window/display-window';
import { Baseboard } from './components/baseboard/baseboard';

@Component({
  imports: [Header, Presentation, HowToOrder, DisplayWindow, Baseboard],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
