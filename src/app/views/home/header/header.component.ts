import { Component, OnInit, HostListener, HostBinding, Inject, Input } from '@angular/core';
import { Router }            from '@angular/router';
import { DOCUMENT }          from '@angular/platform-browser';
import { WINDOW,
  WINDOW_PROVIDERS }         from '../../../shared/helpers/window.helper';

@Component({
  selector:    'app-header',
  templateUrl: './header.component.html',
  styleUrls:  ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isFixed;
  zero:number = 0;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW)   private window: Window,
                      private router: Router) { }

  ngOnInit() { }

  @HostListener("window:scroll", [])

  onWindowScroll() {
    const offset = this.window.pageYOffset ||
                   this.document.documentElement.scrollTop ||
                   this.document.body.scrollTop ||
                   this.zero;
    this.isFixed = (offset > 10) ? true : false;
  }

  @HostBinding("class.menu-opened")
  public menuOpened:boolean = false;

  headNav(page:string) {
    this.menuOpened = !this.menuOpened;
    this.router.navigate([page]);
  }

  toggleMenu() {
    this.menuOpened = !this.menuOpened
  }

}
