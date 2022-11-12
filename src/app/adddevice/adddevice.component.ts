import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-adddevice',
  templateUrl: './adddevice.component.html',
  styleUrls: ['./adddevice.component.css'],
})
export class AdddeviceComponent implements OnInit {
  modal = true;
  form = new FormGroup({
    uuid: new FormControl(null, Validators.required),
    device_name: new FormControl(null, Validators.required),
    alert_message: new FormControl(null, Validators.required),
  });

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {}

  onSubmit() {
    const device = {
      uuid: this.form.get('uuid')?.value!,
      device_name: this.form.get('device_name')?.value!,
      alert_message: this.form.get('alert_message')?.value!,
    };

    this.apiService.addDevice(device).subscribe(res => console.log(res));
  }
}
