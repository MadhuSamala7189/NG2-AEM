
import { Injectable } from '@angular/core';
import { IContactDetailsService } from './Icontactdetails.service';
import { Http, Response, Headers } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class ContactDetailsService implements IContactDetailsService {

  private key: string = 'AIzaSyCpTVONE7xfi0bNmbXFaX9AKNy4SwEgJ_A';
  private header = new Headers({ 'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET'
  });
  constructor(private http: Http) {
  }

  public getSuggestionsList(input: string):Observable<any> {
    let addressInput = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input='+input+'&types=geocode&key='+this.key;
    console.log("in getSuggestionsList service");
      return this.http.get(addressInput, {
        headers: this.header
      }).map((res:Response) => res.json());
    }

  public getAddressInfo(str: string):Observable<any>{
    let placeId = 'https://maps.googleapis.com/maps/api/place/details/json?placeid='+str+'&key='+this.key;
    console.log("in Address Info service");
      return this.http.get(placeId, {
        headers: this.header
      }).map((res:Response) => res.json());
    }

  }

/*  getSuggestionsList():Observable<AddressSuggestion[]> {
console.log("in getSuggestionsList");
    let header = new Headers({ 'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET'
  });
  var sugestions:AddressSuggestion[]=[];

    return this.http.get(this.autoUrl, {
      headers: header
    }).map((res:Response) => {

      console.log("in map"+res.json());

     res.json().subscribe(results => {
          const suggestion =  new AddressSuggestion();
          suggestion.description = results.description;
          suggestion.id = results.place_id;
          sugestions.push(suggestion);
      })
  return sugestions;
    }

  );

}*/
