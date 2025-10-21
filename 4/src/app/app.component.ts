import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `,
  <nav>
      <a routerLink="" >Home</a>
      <a routerLink="contacts" >Contacts</a>

  </nav>
  <router-outlet></router-outlet>
  `,
  standalone: false
})
export class AppComponent {
  
}
