import { Component, Input } from '@angular/core';

@Component({
  selector: 'member',
  templateUrl: 'member.html'
})
export class MemberComponent {
  @Input() member;

  constructor() {
    
  }

}
