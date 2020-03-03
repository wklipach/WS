import {Directive, ElementRef, HostListener, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTreeRenderer]'
})
export class TreeRendererDirective {

  constructor(private elmenetRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click', ['$event'])
  changeBackground(): void {
    if (this.elmenetRef.nativeElement.parentNode.getElementsByTagName('ul')[0].className === 'nested') {
      this.renderer.setStyle(this.elmenetRef.nativeElement, 'transform', 'rotate(90deg)');
      this.elmenetRef.nativeElement.parentNode.getElementsByTagName('ul')[0].className = '';
      console.log('!!!!!!!!!!!!!');
    } else {
      this.renderer.setStyle(this.elmenetRef.nativeElement, 'transform', 'rotate(0deg)');
      this.elmenetRef.nativeElement.parentNode.getElementsByTagName('ul')[0].className = 'nested';
      console.log('222222222222222222222222222222222');
    }
  }

}
