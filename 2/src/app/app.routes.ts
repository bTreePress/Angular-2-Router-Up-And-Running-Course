import {RouterModule} from "@angular/router"
import {HomeComponent} from "./home/home.component"
import {ContactsComponent} from "./contacts/contacts.component"

const routes = [
    {path:'', component:HomeComponent},
    {path:'contacts', component:ContactsComponent}
    ]


export const appRoutes =   RouterModule.forRoot(routes)