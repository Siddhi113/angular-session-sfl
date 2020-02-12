import { Component, OnInit } from '@angular/core';
import { UserManagementService } from '../user-management.service';
import { Subscription } from 'rxjs';
import { User } from '../user-management.model';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss']
})
export class UserListingComponent implements OnInit {

  name: string;
  age: number;
  user: User[] = [];
  searchUser: string = 'eric';

  subscription = new Subscription();

  constructor(
    private userService: UserManagementService
  ) { }

  ngOnInit() {
    this.name = 'John';
    this.age = 34;
  }

  fetchUsers() {
    this.subscription.add(
      this.userService.getAllUsers(this.searchUser).subscribe((response: any) => {
         this.user = response.items
      })
    )
  }

}
