import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../usersservice.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();
  UsersService: any;

  constructor(private usersService: UsersService) {}

  onSetToActive(id: number) {
    // this.userSetToActive.emit(id);
    this.usersService.userSetToActive(id);
  }
}
