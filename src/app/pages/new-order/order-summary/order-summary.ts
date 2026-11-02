import { Component } from '@angular/core';
import { PdButton } from '../../../shared/components/pd-button/pd-button';

@Component({
  imports: [PdButton],
  selector: 'app-order-summary',
  styleUrl: './order-summary.scss',
  templateUrl: './order-summary.html',
})
export class OrderSummary {}
