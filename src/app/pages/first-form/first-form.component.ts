import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormService} from '../../core/services/form-service.service';


@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent implements OnInit {

  aboutForm: FormGroup;
  categories: object;
  employes: object

  constructor(private fb: FormBuilder,
              private service: FormService) {
  }

  ngOnInit() {

    this.getCategories();
    this.getEmployees()
    this.setValidators();
    this.setForm();


  }

  getCategories() {
    this.service.getCategories().subscribe(res => {
      this.categories = res;
      console.log(this.categories);
    });
  }

  getEmployees(): void {
    this.service.getEmployees().subscribe(res => {
      this.employes = res;
      console.log(this.employes);
    });
  }

  setValidators() {
    this.aboutForm = this.fb.group({
      title: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(100)])],
      description: ['', [Validators.required, Validators.maxLength(140), Validators.minLength(2)]],
      category: ['', Validators.required],
      options: '',
      eventRadio: ['', Validators.required],
      email: ['', Validators.required],
      employee: ['', Validators.required],
      fee: '',
      calendar: ['', Validators.required],
      timeRadio: ''
      // number: ['', [Validators.required, Validators.maxLength(40)]]
    });
  }

  setForm() {
    this.aboutForm.get('fee').disable();
    this.aboutForm.get('eventRadio').valueChanges.subscribe(radioValue => {
      if (radioValue == 'charge') {
        this.aboutForm.get('fee').enable();
        this.aboutForm.get('fee').setValidators(Validators.required);
      }
      else {
        this.aboutForm.get('fee').disable();
        this.aboutForm.get('fee').clearValidators();
      }
      this.aboutForm.get('fee').updateValueAndValidity();
    });
  }

  onSubmit() {
    console.warn(this.aboutForm);
  }

}
