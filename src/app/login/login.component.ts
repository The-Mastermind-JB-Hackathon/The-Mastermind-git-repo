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
  modal = true;
  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {

    const username = this.form.get('username')?.value!
    const password = this.form.get('password')?.value!


    this.authService.login(username, password).subscribe(res => {
      this.router.navigate(['/dashboard'])
    })


    
    /*
    this.authService
      .login(
        this.form.get('username')?.value!,
        this.form.get('password')?.value!
      )
      .subscribe((response) => {
        this.router.navigate(['/dashboard']);
      });
      */
  }
  
  
}
