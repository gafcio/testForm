import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../core/services/form-service.service';

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.css']
})
export class SecondFormComponent implements OnInit {

  coordinatorForm: FormGroup;
  employesData;

  constructor(
    private fb: FormBuilder,
    private service: FormService
  ) {
  }

  ngOnInit() {
    this.setValidators();
    this.getEmployees();
  }

  getEmployees(): void {
    this.service.getEmployees().subscribe(res => {
      this.employesData = res;
      console.log(this.employesData);
    });
  }

  setValidators(): void {
    this.coordinatorForm = this.fb.group({
      email: ['', Validators.required],
      employee: ['', Validators.required]
    });
  }

}
