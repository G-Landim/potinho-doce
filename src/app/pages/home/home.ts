import { Component } from '@angular/core';
import { Presentation } from './components/presentation/presentation';
import { HowToOrder } from './components/how-to-order/how-to-order';
import { DisplayWindow } from './components/display-window/display-window';


@Component({
  imports: [Presentation, HowToOrder, DisplayWindow],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {

}
