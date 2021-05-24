import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../usersservice.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();
  UsersService: any;

  constructor(private usersService: UsersService) {}

  onSetToInactive(id: number) {
    // this.userSetToInactive.emit(id);
    this.usersService.userSetToInactive(id);
  }
}
