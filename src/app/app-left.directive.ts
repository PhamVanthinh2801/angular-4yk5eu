import { Directive, Input, ElementRef,HostListener,HostBinding ,Renderer,Output,EventEmitter} from '@angular/core';

/*
 *
 */
@Directive({
  selector: '[checkToggle]'
})
export class SidebarLeftToggleDirective {
  @Input('checkToggle') partner;

  /**
   * @method constructor
   * @param elementRef [description]
   */
  constructor(
    public elementRef: ElementRef,
    public  renderer: Renderer,
  ) {}


@HostBinding("class.active") isOpen = false;

@HostListener("click") toggleOpen($event){
console.log("Hello")
  this.isOpen = !this.isOpen;
}

  
}