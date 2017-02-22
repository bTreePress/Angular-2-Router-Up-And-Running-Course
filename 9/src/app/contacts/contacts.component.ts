import {Component} from "@angular/core";
import {Http} from "@angular/http"
import "rxjs/add/operator/map";
@Component({
  template:`
  <div *ngFor="let contact of contacts$ |async  ">
   <a [routerLink]="contact.id">
    {{contact.name}}
   </a>
</div>
  `
})
export class ContactsComponent{
 contacts$;
 
     constructor(private http:Http){
        this.contacts$ = http.get('http://localhost:3000/people')
            .map(res => res.json());
    }

}



//https://github.com/bTreePress/starwars-json-server