import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <ul>
  <li>title is {{title}}</li>
  <li>username is {{username}}</li>
  <li>userage is {{userage}}</li>
  
  </ul>
  
  `
  
})
export class AppComponent {
  title = 'steps';
  username ="batman";
  userage = 18;
  increaseAge(){
    this.userage = this.userage + 1;
  }
}
