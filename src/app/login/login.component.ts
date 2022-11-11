import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  submitForm() {
    if (this.form.invalid) {
      return;
    }

    this.authService
      .login(this.form.get('username')?.value!, this.form.get('password')?.value!)
      .subscribe((response) => {
        this.router.navigate(['/dashboard']);
      });
  }
}
