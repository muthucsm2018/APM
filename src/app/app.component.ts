import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `<div><h1>{{pageTitle}}</h1>
  <a [routerLink]="['/welcome']">welcome</a>
  <a [routerLink]="['/products']">Product List</a>
  </div>
  <div class='container'>
  <router-outlet></router-outlet>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: string = 'Angular: Getting Started';
  name = 'Muthu';
}
