import {Component} from "@angular/core";
import {ActivatedRoute } from "@angular/router"
import {map} from "rxjs/operators";

@Component({
  selector: 'app-contact',
  template:'contact for {{ id |async }}',
  standalone: false
})
export class ContactComponent{
    id;

    constructor (private route:ActivatedRoute)
    {
       this.id = route.params.pipe(
         map((p:any) => p.id)
       )

    }
}

