import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from '../services/formvalidation.service';

@Component({
  selector: 'display-errors',
  template: `<div *ngIf="errorMessage !== null" style="color:red">{{errorMessage}}</div>`
})
export class DisplayErrorsComponent {
  errorMessage: string;
  @Input() control: FormControl;
  constructor() { }

  get errorMessage():any {
    console.log("errorMessage initialize");
    for (let propertyName in this.control.errors) {
      console.log("errorMessage propertyName" + propertyName);
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }
}
