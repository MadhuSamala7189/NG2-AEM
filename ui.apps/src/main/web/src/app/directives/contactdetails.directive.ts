
import { Directive,Input } from '@angular/core';

@Directive({
  selector: '[welcome]',
  exportAs: 'welcome'
})
export class WelcomeDirective {
  @Input()
  public id:string;

  public bar:string = "Hello Angular2";
  public name:string = "Welcome";

  constructor() {
    console.log("in directive constructor");
  }
}
