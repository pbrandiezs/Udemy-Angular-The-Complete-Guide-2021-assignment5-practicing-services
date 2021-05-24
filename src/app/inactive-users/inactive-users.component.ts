import { Component, Input } from '@angular/core';
import { CounterService } from '../counter.service';
import { UsersService } from '../usersservice.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
  UsersService: any;

  constructor(private usersService: UsersService, private counterService: CounterService) {}

  onSetToActive(id: number) {
    this.usersService.userSetToActive(id);
    this.counterService.moveToActive();
  }
}
