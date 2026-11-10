import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { PdButton } from '../../shared/components/pd-button/pd-button';
import { OrderSummary } from './order-summary/order-summary';
import { PhoneMaskDirective } from '../../shared/directives/phone-mask/phone-mask-directive';

@Component({
  imports: [PdButton, ReactiveFormsModule, OrderSummary, PhoneMaskDirective],
  selector: 'app-new-order',
  styleUrl: './new-order.scss',
  templateUrl: './new-order.html',
})
export class NewOrder {
  
  fb = inject(FormBuilder);

  form = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    date: ['', Validators.required],
    time: [''],
    orderType: ['Retirada'],
    address: [''],

  });

  onSubmit(){
    console.log(this.form.value)
  }

}
