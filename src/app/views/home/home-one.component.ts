import { Component, OnInit, OnDestroy } from '@angular/core';
import { LandingFixService } from '../../shared/services/landing-fix.service';

@Component({
  selector: 'app-home-one',
  template: `
  <app-header></app-header>
  <app-intro></app-intro>
  <app-portfolio></app-portfolio>
  <app-pricings [backgroundGray]="true"></app-pricings>
  <app-footer></app-footer>`
})
export class HomeOneComponent implements OnInit, OnDestroy {

  constructor(private fix: LandingFixService) { }

  ngOnInit()    { this.fix.addFix(); }

  ngOnDestroy() { this.fix.removeFix();  }
  
}
