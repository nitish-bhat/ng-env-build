import { Component } from '@angular/core';

import { UserService } from './_services/user/user.svc'
import { IUser } from './_models/user/user.in'
import { User } from './_models/user/user.mdl'
import { UserResponse } from './_models/user/user.response'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: Array<User>;
  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userService.getUsers().subscribe(resp => {
      let usersList = <Array<User>>((resp as any).json().users);
      this.users = usersList;
    });
  }
}
