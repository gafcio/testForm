import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent implements OnInit {

  aboutForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.aboutForm = this.fb.group({
      title : ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(140)]],
      category: ['', Validators.required],
      options: '',
      eventRadio: ['', Validators.required]
      // number: ['', [Validators.required, Validators.maxLength(40)]]
    });
  }

}
