import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './components/app.component';
import { WelcomeDirective } from './directives/contactdetails.directive';

@NgModule({
  imports: [BrowserModule,FormsModule,HttpModule],
  declarations: [AppComponent,WelcomeDirective],
  bootstrap: [AppComponent]
})
export class RootModule { }
