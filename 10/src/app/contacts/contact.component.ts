import {Component} from "@angular/core";
import {ActivatedRoute } from "@angular/router"
import { Http  } from '@angular/http';
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import "rxjs/add/operator/startWith";


@Component({
  template:`
  <h2>contact for {{ (contact$ |async)?.name }} </ h2>
  
  <img [src]="(contact$ |async)?.image ">
  `
})
export class ContactComponent{
    contact$; 
 
    constructor (private route:ActivatedRoute, private http: Http)
    {
      const api =  'http://localhost:3000/'
       this.contact$ = route.params
       .map((p:any) => p.id)
       .switchMap(id => http.get(api+ 'people/' + id )
            .map(res => res.json())
            .map(contact => Object.assign({},contact,{image: api + contact.image}))
       )
       .startWith({name:'',image:''})
    }
}

 