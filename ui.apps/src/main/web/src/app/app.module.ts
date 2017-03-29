import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ContactDetailsComponent } from './components/contactdetails.component';
import { WelcomeDirective } from './directives/contactdetails.directive';
import { DisplayErrorsComponent } from './components/displayerrors.component';

@NgModule({
  imports: [BrowserModule,FormsModule,ReactiveFormsModule,HttpModule],
  declarations: [ContactDetailsComponent,DisplayErrorsComponent,WelcomeDirective],
  bootstrap: [ContactDetailsComponent]
})

export class AppModule { }
