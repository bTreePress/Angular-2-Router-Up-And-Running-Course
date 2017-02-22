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
      <a *ngFor="let nav of navs"
      [routerLink]="nav.url" 
      routerLinkActive="active"
      [routerLinkActiveOptions]="{exact:true}"
      > {{nav.content}} </a>
      
  </nav>
  <router-outlet></router-outlet>
  ` 
}) 
export class AppComponent {
  navs = [
    {url:"", content: "home"},
    {url:"contacts", content: "contacts"},
    {url:"contacts/1", content: "One"}
  ]
}
