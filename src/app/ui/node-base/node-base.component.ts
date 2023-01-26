import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-node-base',
  templateUrl: './node-base.component.html',
  styleUrls: ['./node-base.component.scss']
})
export class NodeBaseComponent {
  @Input() name: string = "Node Name";
  @Input() posX: number = 100;
  @Input() posY: number = 100;
}
