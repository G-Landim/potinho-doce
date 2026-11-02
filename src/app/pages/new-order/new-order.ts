import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { PdButton } from '../../shared/components/pd-button/pd-button';

@Component({
  imports: [PdButton],
  selector: 'app-new-order',
  styleUrl: './new-order.scss',
  templateUrl: './new-order.html',
})
export class NewOrder {
  fb = inject(FormBuilder);

  form = this.fb.group

}
