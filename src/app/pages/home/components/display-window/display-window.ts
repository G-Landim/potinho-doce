import { Component } from '@angular/core';
import { ProductCard } from '../../../../shared/components/product-card/product-card';

@Component({
  imports: [ProductCard],
  selector: 'app-display-window',
  styleUrl: './display-window.scss',
  templateUrl: './display-window.html',
})
export class DisplayWindow {}
