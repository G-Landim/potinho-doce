import { Component } from '@angular/core';
import { ProductCard } from '../../shared/components/product-card/product-card';

@Component({
  imports: [ProductCard],
  selector: 'app-flavors',
  styleUrl: './flavors.scss',
  templateUrl: './flavors.html',
})
export class Flavors {}
