import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ContactsComponent} from "./contacts.component";
import contactRoutes from "./contacts.routes"

@NgModule({
    imports:[
        CommonModule,
        contactRoutes
       
    ],
    declarations:[ContactsComponent]
  
})
export default class ContactsModule
{}