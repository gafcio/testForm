import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { FirstFormComponent } from './pages/first-form/first-form.component';
import { SecondFormComponent } from './pages/success-alert/second-form.component';
import { ThirdFormComponent } from './pages/third-form/third-form.component';
import { HeaderComponent } from './modules/shared/header/header.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FirstFormComponent,
    SecondFormComponent,
    ThirdFormComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    NgbModule.forRoot()

  ],
  providers: [HttpModule, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
