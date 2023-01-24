import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-output-base',
  templateUrl: './output-base.component.html',
  styleUrls: ['./output-base.component.scss']
})
export class OutputBaseComponent {
  @Input() name: string = "Output Name";
}
