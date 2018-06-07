import { Directive, Input, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @Input ('highlight') price:number;
  constructor(private el:ElementRef) {         }

  @HostListener('mouseover')
  changeBoder(){
        
        if(this.price>=19000)
          this.el.nativeElement.style.border="2px solid orange";
        else if(this.price>=13000 && this.price<19000) 
          this.el.nativeElement.style.border="2px solid blue"; 
        else
          this.el.nativeElement.style.border="2px solid green"; 
  }
  @HostListener('mouseleave')
  retainBorder()
  {
    this.el.nativeElement.style.border="none";
  }

}
