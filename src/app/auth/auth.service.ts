import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SnackBarService } from '../services/snackbar.service';
import { LoginDetail } from './interfaces/logindetails';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  constructor(
    private router: Router,
    private _snackBar: SnackBarService
  ) { }


  public login(details: LoginDetail) {
    if (
      (details.email === 'samcom@gmail.com' && details.password === '123') ||
      (details.email === 'samcomtechnobrains@gmail.com' && details.password === 'sam123@')
    ) {
      localStorage.setItem('creds', JSON.stringify(details));
      this.isLoggedIn = true;
      this.router.navigate(['home'], { replaceUrl: true });
      this._snackBar.openSnackBar('LoggedIn Successfully', 'Dismiss', 'success-snackbar');
    } else {
      this.isLoggedIn = false;
      this._snackBar.openSnackBar('Invalid Username Or Password', 'Dismiss', 'error-snackbar');
    }
  }
  public logOut() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
