import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { FirstFormComponent } from './pages/first-form/first-form.component';
import { SecondFormComponent } from './pages/second-form/second-form.component';
import { ThirdFormComponent } from './pages/third-form/third-form.component';
import { HeaderComponent } from './modules/shared/header/header.component';

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
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
