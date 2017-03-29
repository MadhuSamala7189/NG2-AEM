import { Component,ElementRef,OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
import { IContactDetailsService } from '../services/Icontactdetails.service';
import { ContactDetailsService } from '../services/contactdetails.service';
import { AddressSuggestion } from '../models/address_suggestion.model';
import { ContactForm } from '../models/contact_form.model';
import { ValidationService } from '../services/formvalidation.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector:'contact-details',
  templateUrl:'/apps/ng2-aem/components/content/contactdetails/contactdetails.component.html',
   providers: [ContactDetailsService]
})

export class ContactDetailsComponent implements OnInit {
  private contactForm: FormGroup;
  private iContactDetailsService: IContactDetailsService;
  private VaulesFromAemDailog: Object;
  private suggestions: AddressSuggestion[]=[];
  //private contactForm: ContactForm;
  private showFormResults : boolean;

  constructor(private contactDetailsService: ContactDetailsService, private elementRef:ElementRef, private formBuilder: FormBuilder) {
    let inputFromRoot = elementRef.nativeElement.getAttribute('message');
    this.VaulesFromAemDailog = JSON.parse(inputFromRoot);
    console.log("this.message json "+this.VaulesFromAemDailog);
    this.iContactDetailsService = contactDetailsService;
    //this.contactForm = new ContactForm();
    this.showFormResults = false;
   }

   ngOnInit() {
     console.log("Oninit");
     //this.getSuggestionsList('3115 whitfield ave cumming');
     this.contactForm = this.formBuilder.group({
       'firstName' : ['', [Validators.required, Validators.minLength(5)]],
       'lastName'  : ['', [Validators.required, Validators.minLength(5)]],
       'email'     : ['', [Validators.required, ValidationService.emailValidator]],
       'phone'     : ['', [Validators.required, Validators.minLength(9)]],
       'address'   : ['', Validators.required ],
       'state'     : ['', Validators.required ],
       'zipcode'   : ['', Validators.required ],
       'country'   : ['', Validators.required ]
    });
   }

   public addressOnBlur(str : string):void {
     if(!str){
       this.contactForm.patchValue({state: ''});
       this.contactForm.patchValue({zipcode: ''});
       this.contactForm.patchValue({country: ''});
      }
     }


   public getSuggestionsList(input : string):void {
     this.suggestions = [];
     if(!input)
       return;
     this.iContactDetailsService.getSuggestionsList(input).subscribe(response => {
        console.log(response);
        this.renderSuggestions(response);
      },err => {
         console.log(err);
      },() => {
         console.log("completed");
      });
   }

   public renderSuggestions(response : any):void {
     let suggestionList: Array<any> = response.predictions;
     this.suggestions = [];
     if (suggestionList) {
      suggestionList.forEach((results,index) => {
        console.log('index '+index);
         if(index > 3){
           console.log('inside index '+index);
           return true;
         }
         let suggestion =  new AddressSuggestion();
         suggestion.description = results.description;
         suggestion.id = results.place_id;
         this.suggestions.push(suggestion);
       });
     }
   }

   public getAddressDetails(selectedsuggestion : AddressSuggestion):void {
     this.suggestions = [];
    //this.contactForm.value.address = selectedsuggestion.description;
    this.contactForm.patchValue({address: selectedsuggestion.description});
     this.iContactDetailsService.getAddressInfo(selectedsuggestion.id).subscribe(response => {
       console.log(response);
       this.renderAddressDetails(response);
     },err => {
        console.log(err);
     });
    }

    public renderAddressDetails(response : any):void {
      let addressComponents : Array<any> = response.result.address_components;
      addressComponents.forEach((results) => {
      if(results.types[0] == 'administrative_area_level_1'){
        this.contactForm.patchValue({state: results.long_name});
        console.log("this.contactForm.state" + this.contactForm.value.state);
      }
      if(results.types[0] == 'postal_code')
        this.contactForm.patchValue({zipcode: results.long_name});
      if(results.types[0] == 'country')
        this.contactForm.patchValue({country: results.long_name});
      })
    }

    public formSubmit(){
      if(this.contactForm.valid)
      this.showFormResults = true;
    }
 }
