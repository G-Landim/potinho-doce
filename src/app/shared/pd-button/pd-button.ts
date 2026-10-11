import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';


export type IButtonTypes = 'primary' | 'secondary' | 'terciary';

@Component({
  imports: [NgClass],
  selector: 'app-pd-button',
  styleUrl: './pd-button.scss',
  templateUrl: './pd-button.html',
})

export class PdButton {

  @Input() title?: string;

  @Input() buttonTypes: IButtonTypes = 'primary';
}
