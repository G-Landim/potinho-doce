import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Presentation } from './components/presentation/presentation';

@Component({
  imports: [Header, Presentation],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
