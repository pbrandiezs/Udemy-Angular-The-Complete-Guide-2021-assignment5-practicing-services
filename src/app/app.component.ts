import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';
import { UsersService } from './usersservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];
  activeToInactiveMoves: number;
  inactiveToActiveMoves: number;

  constructor(private usersService: UsersService, private counterService: CounterService) {}

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  }

}
