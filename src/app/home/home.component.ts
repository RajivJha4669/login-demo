import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { HttpResponse, UserDetails } from '../auth/interfaces/logindetails';
import { HttpService } from '../services/http.service';
import { Apiurl } from './../collections/collection';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listUsers: UserDetails[] = [];

  constructor(
    private http: HttpService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  private getUserDetails() {
    this.http.get(Apiurl.user).subscribe((user: HttpResponse) => {
      this.listUsers = user.data;
    })
  }

  public showUserDetails(user: UserDetails) {
    let params: NavigationExtras = {
      state: {
        userDetails: user
      }
    }
    this.router.navigate(['home/user-details'], params)
  }
}
