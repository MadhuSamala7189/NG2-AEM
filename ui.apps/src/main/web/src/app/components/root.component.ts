import { Component,ElementRef } from '@angular/core';

@Component({
  selector:'root-app',
  templateUrl:'/apps/ng2-aem/components/structure/page/content.html'
})

export class RootComponent{
  constructor(elementRef:ElementRef) {
    console.log("root app");
   }
}
