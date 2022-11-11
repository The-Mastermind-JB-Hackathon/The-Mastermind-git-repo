import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe((isLogedIn) => {
      if (!isLogedIn) {
        this.router.navigate(['/']);
      }
    });
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/'])

  }
}
