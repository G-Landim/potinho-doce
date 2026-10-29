import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { Header } from './header/header';
import { Baseboard } from './baseboard/baseboard';

@Component({
  imports: [RouterOutlet, Home, Header, Baseboard],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('potinho-doce');
}
