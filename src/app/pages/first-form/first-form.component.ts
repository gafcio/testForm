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
  employes: object;
  feeShow: boolean;
  date: string;

  constructor(private fb: FormBuilder,
              private service: FormService) {
  }

  ngOnInit() {

    this.getCategories();
    this.getEmployees()
    this.setValidators();

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
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.maxLength(140), Validators.minLength(2)]],
      category_id: ['', Validators.required],
      options: '',
      paid_event: ['', Validators.required],
      event_fee: ['', Validators.required],
      reward: '',
      email: ['', Validators.required],
      coordinator: ['', Validators.required],
      calendar: [this.date, Validators.required],
      timeRadio: ''
      // number: ['', [Validators.required, Validators.maxLength(40)]]
    });
  }

  onSubmit() {
    console.warn(this.aboutForm);
  }

}
