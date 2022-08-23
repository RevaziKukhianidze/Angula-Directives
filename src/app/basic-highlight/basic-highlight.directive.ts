import { OnInit, ElementRef, Directive } from "@angular/core";

@Directive({
  selector: "[appBasicHighLight]",
})
export class BasicHighLightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = "green";
  }
}
