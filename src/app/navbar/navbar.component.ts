import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { LoginComponent } from '../login/login.component';
import { ModalComponent } from '../modal/modal.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  modalRef: MdbModalRef<ModalComponent> | null = null;
  isLogedInState = false;

  constructor(
    private modalService: MdbModalService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe((isLogedIn) => {
      if (!isLogedIn) {
        this.isLogedInState = false;
      } else {
        this.isLogedInState = true;
      }
    });
  }
  click(selection: string) {
    this.modalRef = this.modalService.open(ModalComponent);
  }
  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }
}
