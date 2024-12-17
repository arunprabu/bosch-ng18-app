import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorizer]',
  standalone: true
})
export class ColorizerDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2 ) {
    console.log('Inside colorizer directive');
    // Step 1: find the element in which this directive is used
    console.log(this.elRef.nativeElement);

    // Step 2: apply the styles on that element
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', '#ffffff');
    this.renderer.setStyle(this.elRef.nativeElement, 'height', '400px');
  }

  // Let's handle the click event
  @HostListener('click', ['$event.target'])
  handleClick(element: HTMLElement) {
    console.log('Inside handleClick');
    console.log(element);
    this.renderer.setStyle(element, 'background-color', 'green');
  }

}
