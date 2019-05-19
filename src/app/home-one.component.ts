import { Component, OnInit, OnDestroy } from '@angular/core';
import { LandingFixService } from './shared/services/landing-fix.service';
import { HomeService }       from './views/home/home.service';

@Component({
  selector: 'app-home-one',
  template: `
  <app-header></app-header>
  <app-intro     [backgroundGray]="true"></app-intro>
  <app-portfolio [backgroundGray]="true"></app-portfolio>
  <app-footer></app-footer>
  `,
  //   <app-pricings  [backgroundGray]="true"></app-pricings> 
  providers: [HomeService]
})
export class HomeOneComponent implements OnInit, OnDestroy {

  constructor(private fix: LandingFixService,
              private homeService: HomeService) { }

  ngOnInit() {
    this.fix.addFix();
    // send params for else statement
    this.homeService.textSetter('main');
  }

  ngOnDestroy() { this.fix.removeFix();  }

}
