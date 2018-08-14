import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../core/services/form-service.service';
import { Form } from '../../core/models/form';
import { NgbDatepickerConfig, NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { toDate } from '@angular/common/src/i18n/format_date';


@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css'],
  providers: [NgbDatepickerConfig]
})
export class FirstFormComponent implements OnInit {

  aboutForm: FormGroup;
  categories: object;
  employes: object;
  feeShow: boolean;
  date: Date;
  emailPattern: string;
  formToPost;
  today: any;

  constructor(
    private fb: FormBuilder,
    private service: FormService,
    private config: NgbDatepickerConfig,
    private calendar: NgbCalendar
  ) {

    this.feeShow = false;
    this.emailPattern = '';
    // this.date = '';
    this.today = new Date();
    config.minDate = { year: this.today.getFullYear(), month: this.today.getMonth() + 1, day: this.today.getDate() };

    this.emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  }

  ngOnInit() {

    this.getCategories();
    this.getEmployees();
    this.setValidators();
    this.setForm();
  }

  getCategories(): void {
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

  setValidators(): void {

    this.aboutForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.maxLength(140), Validators.minLength(2)]],
      category_id: ['', Validators.required],
      options: '',
      paid_event: ['', Validators.required],
      event_fee: ['', Validators.required],
      reward: '',
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      id: ['', Validators.required],
      calendar: [this.date, Validators.required],
      time: ['', Validators.required],
      timeRadio: '',
      duration: ''
      // number: ['', [Validators.required, Validators.maxLength(40)]]
    });
  }

  setForm(): void {
    this.aboutForm.get('paid_event').valueChanges.subscribe(radioValue => {
      radioValue === 'true' ? this.feeShow = true : this.feeShow = false;
      this.aboutForm.get('event_fee').updateValueAndValidity();
    });
  }

  onSubmit(): void {
    this.formToPost = {
      title: this.aboutForm.controls.title.value,
      description: this.aboutForm.controls.description.value,
      category_id: this.aboutForm.controls.category_id.value,
      paid_event: this.aboutForm.controls.paid_event.value,
      event_fee: this.aboutForm.controls.event_fee.value,
      reward: this.aboutForm.controls.reward.value,
      email: this.aboutForm.controls.email.value,
      date: this.aboutForm.controls.calendar.value, // YYYY-MM-DDTHH:mm (example: 2018-01-19T15:15)
      duration: (this.aboutForm.controls.duration.value) * 360, // in seconds
      coordinator: {
        email: this.aboutForm.controls.email.value,
        id: '',
      },
    }
    console.warn(this.aboutForm);
    console.log(this.formToPost, 'fsdfdsfsdfs');
  }

}
