import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Presentation } from './components/presentation/presentation';
import { DisplayWindow } from './components/display-window/display-window';

@Component({
  imports: [Header, Presentation, DisplayWindow],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
