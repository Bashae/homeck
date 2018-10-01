import { Component } from '@angular/core';

@Component({
  selector: 'info-list',
  templateUrl: 'info-list.html'
})
export class InfoListComponent {
  listItems: any[];

  constructor() {
    this.listItems = [
      {"type": "Bills", "color": "green", "categories": ["cat", "dog", "bat"]},
      {"type": "Chores", "color": "red", "categories": ["cat", "dog", "bat"]},
      {"type": "Meals", "color": "yellow", "categories": ["cat", "dog", "bat"]},
      {"type": "Supplies", "color": "blue", "categories": ["cat", "dog", "bat"]}
    ]
  }

}
