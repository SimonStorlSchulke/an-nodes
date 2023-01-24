import { Component } from '@angular/core';

@Component({
  selector: 'ui-node-base',
  templateUrl: './node-base.component.html',
  styleUrls: ['./node-base.component.scss']
})
export class NodeBaseComponent {
  name: string = "Node Name";
}
