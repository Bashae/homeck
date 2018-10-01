import { Component } from '@angular/core';

@Component({
  selector: 'member-list',
  templateUrl: 'member-list.html'
})
export class MemberListComponent {
  members: any[];

  constructor() {
    this.members = [
      {"name": "Names"},
      {"name": "Will"},
      {"name": "Slide"}
    ];
  }

}
