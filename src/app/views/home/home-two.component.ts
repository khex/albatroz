import { Component, OnInit, OnDestroy } from '@angular/core';
import { LandingFixService } from '../../shared/services/landing-fix.service';
import { ActivatedRoute }    from '@angular/router';

import { HomeService }       from './home.service';

@Component({
  selector: 'app-home-two',
  template: `
  <app-header></app-header>
  <app-intro></app-intro>
  <app-contact [backgroundGray]="true"></app-contact>  
  <app-footer></app-footer>`,
  providers: [HomeService]
})
export class HomeTwoComponent implements OnInit, OnDestroy {

  constructor(private fix: LandingFixService,
              private route: ActivatedRoute,
              private homeService: HomeService) { }

  ngOnInit() {
    this.fix.addFix();

    this.route.params.subscribe(params => {
      let prms = params.pagename;
      this.homeService.textSetter(prms);
    });

  }

  ngOnDestroy() { this.fix.removeFix(); }

}
