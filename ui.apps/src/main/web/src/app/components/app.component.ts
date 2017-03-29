import { Component,ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  template:`<div> Test App root component <div>`
//  template: `<user [message]='obj'></user>`

})
export class AppComponent {

  private obj:Object;
  constructor(elementRef:ElementRef) {
    let inputFromRootComponent = elementRef.nativeElement.getAttribute('message');
    console.log("this.message "+inputFromRootComponent);
    //this.obj = JSON.parse(inputFromRootComponent);
    //console.log("this.message obj "+this.obj);

   }
 }
