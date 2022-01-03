import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/auth/interfaces/logindetails';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userDetails: UserDetails = {
    last_name: '',
    first_name: '',
    id: null,
    email: '',
    avatar: ''
  };
  constructor(
    private location: Location
  ) { }

  ngOnInit() {
    this.userDetails = history.state.userDetails
    if (!this.userDetails) {
      this.userList();
    }
  }

  public userList() {
    this.location.back();
  }

}
