import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isPasswordVisible: boolean = false;
  isLoading: boolean = false;
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {

  }

  public toggleVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  public async loginFormSubmit(form: FormGroup) {
    this.isLoading = true;
    form.markAllAsTouched();
    if (form.invalid)
      return;
    await this.authService.login(form.value);
    this.isLoading = false;
  }
}
