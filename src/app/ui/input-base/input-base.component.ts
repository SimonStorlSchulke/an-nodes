import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-input-base',
  templateUrl: './input-base.component.html',
  styleUrls: ['./input-base.component.scss']
})
export class InputBaseComponent {
  @Input() name: string = "Input Name";
  @Input() defaultValue: any;
}
