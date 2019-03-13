import  './polyfills';

import './vendor/pace/pace.min.js';
import '../node_modules/hammerjs/hammer.js';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}
//platformBrowserDynamic().bootstrapModule(AppModule);

platformBrowserDynamic()
.bootstrapModule(AppModule)
.then(() => {
  console.info('Here service is comming');
  console.log(navigator);
  navigator.serviceWorker.register('ngsw-worker.js');
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('ngsw-worker.js');
  }
})
.catch(err => console.log(err));

