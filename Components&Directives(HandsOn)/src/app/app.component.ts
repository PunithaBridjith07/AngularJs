import { Component } from '@angular/core';
import { DUMMY_USERS } from './DUMMY_USERS';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'handsOn-Components';
  users = DUMMY_USERS;
  selectedUserId!: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)
  }
  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
