import {
  Directive,
  ElementRef,
  forwardRef,
  HostListener,
  Renderer2
} from '@angular/core';
@Directive({
  selector: '[appPhoneMask]',
  standalone: true
})
export class PhoneMaskDirective {

  constructor(
    private elementRef: ElementRef<HTMLInputElement>,
    private rerender: Renderer2,
  ){}
  
  @HostListener('input')
  onInput(): void {
    console.log('Valor alterado!')
    const input = this.elementRef.nativeElement;
    const numbers = input.value.replace(/\D/g, '');

    this.rerender.setProperty(
      input,
      'value',
      numbers
    )
  }

}
