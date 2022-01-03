import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { LoginDetail } from './auth/interfaces/logindetails';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private authService: AuthService, private router: Router) {
    this.autoLogin();
  }

  private autoLogin() {
    const creds: LoginDetail = JSON.parse(localStorage.getItem('creds') as string);
    if (creds)
      this.authService.login(creds);
    else
      this.router.navigate(['auth']);
  }
}
