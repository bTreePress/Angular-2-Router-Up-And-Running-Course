import {ContactsComponent} from "./contacts.component";
import {ContactComponent} from "./contact.component";
 
import {RouterModule} from "@angular/router";

const routes = [
    {path:"", component:ContactsComponent},
    {path:":id", component:ContactComponent},
]

export default   RouterModule.forChild(routes)