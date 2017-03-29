
import {Observable} from 'rxjs/Rx';

export interface IContactDetailsService {
   getSuggestionsList(input: string):Observable<any>;
   getAddressInfo(str: string):Observable<any>;
}
