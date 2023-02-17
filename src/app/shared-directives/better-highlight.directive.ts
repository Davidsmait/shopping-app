import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener, Input,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input('appBetterHighlight') colorStyle: string = 'black'
  @Input() backgroundColorStyle: string = 'transparent'
  @HostBinding('style.backgroundColor') backgroundColor: string

  constructor(private element: ElementRef, private render: Renderer2) { }
  ngOnInit() {
    this.render.setStyle(this.element.nativeElement,"color", this.colorStyle)
    this.backgroundColor = this.backgroundColorStyle
  }

  @HostListener('mouseenter') onMouseEnter(eventData: Event){
    this.render.setStyle(this.element.nativeElement, "color",this.colorStyle)
    this.backgroundColor = this.backgroundColorStyle
  }

  @HostListener('mouseleave') onMouseLeave(eventData: Event) {
    this.render.setStyle(this.element.nativeElement,"color", "black")
    this.backgroundColor = 'transparent'
  }
}
