import { Component } from '@angular/core';
import { PdButton } from '../../../shared/pd-button/pd-button';

@Component({
  imports: [PdButton],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {}
