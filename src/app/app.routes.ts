import { Routes }            from '@angular/router';
import { WelcomeComponent } from './welcome.component';

export const rootRouterConfig: Routes = [

//{ path: '',   redirectTo: 'uk/home', pathMatch: 'full' },
  { path: '',   component: WelcomeComponent },
  { path: 'uk', loadChildren: './views/home/home.module#HomeModule'},
  { path: '**', redirectTo: ''} // 'uk/home'},
  /**
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },
  { path: 'heroes',        component: HeroListComponent, data: { title: 'Heroes List' }},
  { path: '',              redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
  **/
];
