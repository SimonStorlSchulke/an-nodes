import { Component, Input, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { InputBaseComponent } from '../input-base/input-base.component';
import { OutputBaseComponent } from '../output-base/output-base.component';

@Component({
  selector: 'ui-socket-link', 
  templateUrl: './socket-link.component.html',
  styleUrls: ['./socket-link.component.scss']
})
export class SocketLinkComponent {
  @Input() socket1!: OutputBaseComponent;
  @Input() socket2!: InputBaseComponent;

  @ViewChild('#linkPath') linkPath!: SVGPathElement;
  @ViewChild('#linkPath', { read: ElementRef }) myChartContainer!: ElementRef;

  constructor(private elRef: ElementRef) { }

  ngAfterViewInit() {
    let path: SVGPathElement = this.elRef.nativeElement.querySelector("path");

    let p1 = [
      (this.socket1.elRef.nativeElement as HTMLElement).querySelector(".socket")?.getBoundingClientRect().left,
      (this.socket1.elRef.nativeElement as HTMLElement).querySelector(".socket")?.getBoundingClientRect().top,
    ]

    let p2 = [
      (this.socket2.elRef.nativeElement as HTMLElement).querySelector(".socket")?.getBoundingClientRect().x,
      (this.socket2.elRef.nativeElement as HTMLElement).querySelector(".socket")?.getBoundingClientRect().y,
    ]

    let p1b = [
      (p1[0]! + p2[0]!) / 2,
      p1[1]!,
    ]

    let p2b = [
      (p1[0]! + p2[0]!) / 2,
      p2[1]!,
    ]

    path.setAttribute("d", `M ${p1[0]} ${p1[1]} C ${p1b[0]} ${p1b[1]} ${p2b[0]} ${p2b[1]} ${p2[0]} ${p2[1]}`);

  }
}
