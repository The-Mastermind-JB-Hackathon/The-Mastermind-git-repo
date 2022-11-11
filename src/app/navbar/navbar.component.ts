import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  modalRef: MdbModalRef<ModalComponent> | null = null;

  constructor(private modalService: MdbModalService) { }

  ngOnInit() {

  }
  click(selection:string){
    this.modalRef = this.modalService.open(ModalComponent)
  }

}
