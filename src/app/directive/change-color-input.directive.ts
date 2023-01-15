import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColorInput]'
})
export class ChangeColorInputDirective {

  constructor(
    private elementRef: ElementRef
  ) { 
    this.elementRef.nativeElement.style.outline = "solid 1.9px red"
  }
  
  @HostBinding('style.outline') outline:string | undefined
  @HostListener('blur')
  @HostListener('focus')
  public checkIsEmpty(){
    const stateEmpty = this.elementRef.nativeElement.value
    !stateEmpty && (this.outline = "solid 2.1px red" )
    stateEmpty && (this.outline = "solid 2.1px blue" )
  }

}
