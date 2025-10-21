import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http"
import {map} from "rxjs/operators";
@Component({
  selector: 'app-contacts',
  template:`
  <div *ngFor="let contact of contacts$ |async  ">
   <a [routerLink]="contact.id">
    {{contact.name}}
   </a>
</div>
  `,
  standalone: false
})
export class ContactsComponent{
 contacts$;

     constructor(private http:HttpClient){
        this.contacts$ = http.get('http://localhost:3000/people');
    }

}



//https://github.com/bTreePress/starwars-json-server