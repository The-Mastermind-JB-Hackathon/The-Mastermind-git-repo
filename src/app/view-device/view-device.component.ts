import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-device',
  templateUrl: './view-device.component.html',
  styleUrls: ['./view-device.component.css'],
})
export class ViewDeviceComponent implements OnInit {
  phones: any;
  device_id: number | undefined;
  form = new FormGroup({
    phonenumber: new FormControl(null, Validators.required),
  });

  constructor(private http: HttpClient, private actRoute: ActivatedRoute) {}

  ngOnInit() {
    this.actRoute.paramMap.subscribe((params) => {
      this.device_id = +params.get('device_id')!;
    });

    this.http
      .get(
        `${environment.backendApiUrl}/api/devices/getDeviceAssociatedPhoneNumber/${this.device_id}`
      )
      .subscribe((res) => {
        console.log(res);
        this.phones = res;
      });
  }
  submit() {
    const phone = this.form.get('phonenumber')?.value!;
    console.log(phone);

    this.http
      .post(`${environment.backendApiUrl}/api/devices/${this.device_id}`, {
        phonenumber: phone,
      })
      .subscribe((res) => console.log(res));
  }
}
