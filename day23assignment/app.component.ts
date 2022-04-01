import { Component, OnInit, ViewChild, ViewChildren, ContentChild,ContentChildren} from '@angular/core';



/*
ViewChild
ViewChildren
 
ContentChild
ContentChildern
*/
@Component({
  selector: 'app-root',
  template : `
    <h1>Main Component : Power {{ apppower }}</h1>
    <button (click)="increaseChildPower()">Increase Power</button>
    <button (click)="decreaseChildPower()">Decrease Power</button>
    <button (click)="showHide()">Remove Child Component</button>
    <app-child #powerComp *ngIf="show"></app-child>
  `
})
export class AppComponent implements OnInit {
  title = 'steps';
  apppower = 0;
  show = true;
    @ViewChild('powerComp') ab:any;
  //@ViewChildren('powercomp') cc:any;
  // @ContentChild('powercomp') cc:any;
  // @ContentChildren('powercomp') cc:any;
  constructor(){
    console.log("AppComponent's constructor was called");
  }
  ngOnInit(): void {
    this.apppower = 5;
    console.log("AppComponent's ngOnInit was called");
  }
  increaseChildPower(){
    this.ab.increasePower();
  }
  decreaseChildPower(){
    this.ab.decreasePower();
   }
  // increaseChildPower(){
  //   this.ab.increasePower();
  // }
  // decreaseChildPower(){
  //   this.ab.decreasePower();
  // }
  showHide(){
    this.show = !this.show;
  }
}