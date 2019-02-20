import { Component, OnInit, OnDestroy } from '@angular/core';
import { LandingFixService } from '../../shared/services/landing-fix.service';

@Component({
  selector: 'app-home-two',
  template: `
  <app-header></app-header>
  <app-cta></app-cta>
  <app-contact [backgroundGray]="true"></app-contact>  
  <app-footer></app-footer>
  `
})
export class HomeTwoComponent implements OnInit, OnDestroy {

  constructor(private fix: LandingFixService) { }

  ngOnInit()    { this.fix.addFix(); }

  ngOnDestroy() { this.fix.removeFix(); }

}
