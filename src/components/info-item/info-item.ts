import { Component, Input } from '@angular/core';

@Component({
  selector: 'info-item',
  templateUrl: 'info-item.html'
})
export class InfoItemComponent {
  @Input() item;

  constructor() {
    
  }

}
