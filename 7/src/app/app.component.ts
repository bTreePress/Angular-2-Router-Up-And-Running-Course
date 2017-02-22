import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles:[`
    a{
      text-decoration: none;
    }

    a.active {
      font-weight:bold;
    }
  
  `],
  template: `
  <nav>
      <a 
      routerLink="" 
      routerLinkActive="active"
      [routerLinkActiveOptions]="{exact:true}"
      >Home</a>
      <a 
      routerLink="contacts" 
      routerLinkActive="active"  
      [routerLinkActiveOptions]="{exact:true}"
      >Contacts</a>
       <a 
      routerLink="contacts/1" 
      routerLinkActive="active"  >Contact 1</a>

  </nav>
  <router-outlet></router-outlet>
  ` 
})
export class AppComponent {
  
}
