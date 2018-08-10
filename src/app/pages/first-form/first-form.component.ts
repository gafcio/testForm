import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../core/services/form-service.service';


@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent implements OnInit {

  aboutForm: FormGroup;
  emplyeesData: object;

  constructor(
    private fb: FormBuilder,
    private service: FormService
  ) {
  }

  ngOnInit() {

    this.getEmployeesData();
    this.setValidators();

  }

  getEmployeesData() {
    this.service.getCategories().subscribe(res => {
      this.emplyeesData = res;
      console.log(this.emplyeesData);
    });
  }

  setValidators() {
    this.aboutForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(140)]],
      category: ['', Validators.required],
      options: '',
      eventRadio: ['', Validators.required]
      // number: ['', [Validators.required, Validators.maxLength(40)]]
    });
  }

}
