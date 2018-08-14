import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { FirstFormComponent } from './pages/first-form/first-form.component';
import { HeaderComponent } from './modules/shared/header/header.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FormSuccessComponent } from './pages/form-success/form-success.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import {NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';

library.add(faCalendar);

@NgModule({
  declarations: [
    AppComponent,
    FirstFormComponent,
    HeaderComponent,
    FormSuccessComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FontAwesomeModule,
    AppRoutingModule,
    RouterModule

  ],
  providers: [HttpModule, HttpClientModule, {provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}],
  bootstrap: [AppComponent]
})
export class AppModule { }
