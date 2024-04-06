import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/users';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css'],
})
export class AddUsersComponent {
  user: User = {
    userName: '',
    email: ''
  };
  submitted = false;

  constructor(private userService: UsersService) {}

  saveUser(): void {
    const data = {
      userName: this.user.userName,
      email: this.user.email
    };

    this.userService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.user = {
      userName: '',
      email: ''
    };
  }
}