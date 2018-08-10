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
  categories: object;
  employes: object

  constructor(
    private fb: FormBuilder,
    private service: FormService
  ) {
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
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(140)]],
      category: ['', Validators.required],
      options: '',
      eventRadio: ['', Validators.required],
      email: ['', Validators.required],
      employee: ['', Validators.required]
      // number: ['', [Validators.required, Validators.maxLength(40)]]
    });
  }

}
