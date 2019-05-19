import { Component, OnInit, Input } from '@angular/core';
import { Subscription }      from 'rxjs';
import { ActivatedRoute }    from '@angular/router';
import { HomeService }       from '../home.service';

@Component({
  selector:    'app-intro',
  templateUrl: './intro.component.html',
  styleUrls:  ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  @Input('backgroundGray') public backgroundGray;
  subs: Subscription;
  pd = {h2: '', p1: '', p2: '', ph: ''};
  link;

  constructor(private router: ActivatedRoute,
              private homeService: HomeService) {
    //  annotate
    this.subs = homeService.textGetter.subscribe(pageData => {
      //  annotate
      this.pd = pageData['html'];
    });

  }

  ngOnInit() { }

}
