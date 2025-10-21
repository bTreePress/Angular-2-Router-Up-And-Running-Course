import {RouterModule} from "@angular/router"

const routes = [
    {path:'', loadChildren: () => import('./home/home.module').then(m => m.default)},
    {path:'contacts', loadChildren: () => import('./contacts/contacts.module').then(m => m.default)}
    ]


export const appRoutes =   RouterModule.forRoot(routes)