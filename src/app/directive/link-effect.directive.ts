import { Directive, OnInit,HostListener, HostBinding, Output, TemplateRef, ViewContainerRef, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLiEffects]'
})

export class MostrarSiDirective implements OnInit{
  constructor() { }

    @HostBinding('style.backgroundColor') backgroundColor: string | undefined;
    @HostBinding('style.color') color: string | undefined;
    @HostBinding('style.fontSize') fontSize: string | undefined;
    @HostBinding('style.border') border: string | undefined;
    
    
    @HostListener('mouseover')
    public efectOverLi(){
      this.color = '#212836';
      this.backgroundColor = '#f3f3f3';
    }

    @HostListener('mouseout')
    public efectOutLi(){
      this.color = '#f3f3f3';
      this.backgroundColor = 'inherit';
    }

    ngOnInit(): void {
      
    }

}
