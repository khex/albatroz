import { Component, OnInit, OnDestroy } from '@angular/core';
import { LandingFixService } from '../../shared/services/landing-fix.service';
import { Router, ActivatedRoute } from '@angular/router';

import { HomeTwoService }    from './home-two.service';

@Component({
  selector: 'app-home-two',
  template: `
  <app-header></app-header>
  <app-cta></app-cta>
  <app-contact [backgroundGray]="true"></app-contact>  
  <app-footer></app-footer>`,
  providers: [HomeTwoService]
})
export class HomeTwoComponent implements OnInit, OnDestroy {

  constructor(private fix: LandingFixService,
              private route: ActivatedRoute,
              private homeTwoService: HomeTwoService) { }

  ngOnInit() {
    this.fix.addFix();
    this.route.params.subscribe(params => {
      this.homeTwoService.textSetter(params.pagename);
    });
  }

  ngOnDestroy() { this.fix.removeFix(); }

}
