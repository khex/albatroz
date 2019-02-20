import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent implements OnInit {
  
  link = 'https://themeforest.net/item/egret-angular-4-material-design-admin-template/20161805';
  constructor() { }

  ngOnInit() { }
  
  buyEgret() {
    window.open(this.link);
  }
}
