import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import contactRoutes from "./contacts.routes"
import {ContactsComponent} from "./contacts.component";
import {ContactComponent} from "./contact.component";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http"
@NgModule({
    imports:[
        CommonModule,
        contactRoutes




    ],
    declarations:[
        ContactsComponent,
        ContactComponent
         ],
    providers:[provideHttpClient(withInterceptorsFromDi())]

})
export default class ContactsModule
{}