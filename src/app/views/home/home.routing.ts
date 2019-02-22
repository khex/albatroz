import { Routes }            from '@angular/router';

import { HomeOneComponent }  from './home-one.component';
import { HomeTwoComponent }  from './home-two.component';

export const HomeRoutes: Routes = [
  { path: 'home',  component: HomeOneComponent },
  { path: ':pagename', component: HomeTwoComponent }
];