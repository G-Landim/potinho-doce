import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { PdButton } from '../../shared/components/pd-button/pd-button';
import { OrderSummary } from './order-summary/order-summary';

@Component({
  imports: [PdButton, ReactiveFormsModule, OrderSummary],
  selector: 'app-new-order',
  styleUrl: './new-order.scss',
  templateUrl: './new-order.html',
})
export class NewOrder {
  fb = inject(FormBuilder);

  form = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    date: ['', Validators.required, Validators],
    time: [''],
    orderType: ['Retirada'],
    address: [''],

  })

}
