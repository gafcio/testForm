import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';
import {FirstFormComponent} from './pages/first-form/first-form.component';
import { FormSuccessComponent } from './pages/form-success/form-success.component';

const routes: Routes = [
  {path: '', component: FirstFormComponent },
  {path: 'success', component: FormSuccessComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: []
})
export class AppRoutingModule { }
