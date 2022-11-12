import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from '../modal/modal.component';
import { ViewDeviceComponent } from '../view-device/view-device.component';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css'],
})
export class DevicesComponent implements OnInit {
  modalRef: MdbModalRef<ModalComponent> | null = null;
  @Input('devices') devices: any;

  constructor(private modalService: MdbModalService, private router:Router) {}

  ngOnInit(): void {}
  openViewDeviceModal(device_id: string) {
    this.router.navigate(['/view_device',device_id])

  }
}
