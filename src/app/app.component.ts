import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <router-outlet>
  	<h1>Here comes the sun!</h1>
  </router-outlet>`
})
export class AppComponent implements OnInit {

  constructor( ) { }

  ngOnInit() { }
  
}
