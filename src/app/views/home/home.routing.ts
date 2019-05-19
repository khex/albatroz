import { Routes }            from '@angular/router';
import { HomeTwoComponent }  from './home-two.component';

export const HomeRoutes: Routes = [
  { path: ':pagename', component: HomeTwoComponent }
];