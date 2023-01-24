import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { InputBaseComponent } from '../input-base/input-base.component';

@Component({
  selector: 'ui-socket-link',
  templateUrl: './socket-link.component.html',
  styleUrls: ['./socket-link.component.scss']
})
export class SocketLinkComponent {
  @Input() socket1!: InputBaseComponent;
  @Input() socket2!: InputBaseComponent;

  @ViewChild('#linkPath') linkPath!: SVGPathElement;

  @ViewChild('#linkPath', { read: ElementRef }) myChartContainer!:ElementRef;

  constructor(private elRef: ElementRef){}

  ngOnInit() {
    let path: SVGPathElement = this.elRef.nativeElement.querySelector("path");
    

    

    //ath.setAttribute("d",`M ${p1.x} ${p1.y} C 362 255 408 370 ${p2.x} ${p2.y}` );
  }
}
