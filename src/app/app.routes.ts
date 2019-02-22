import { Routes }            from '@angular/router';

export const rootRouterConfig: Routes = [

  { 
    path: '', 
    redirectTo: 'uk/home', 
    pathMatch: 'full' 
  },
  { 
    path: 'uk', 
    loadChildren: './views/home/home.module#HomeModule'
  },
  { 
    path: '**', 
    redirectTo: 'uk/home'
  }

];

