import { NgModule }          from '@angular/core';
import { RouterModule }      from '@angular/router';
import { BrowserModule }     from '@angular/platform-browser';
import { Http, HttpModule }  from '@angular/http';
import { SharedModule }      from './shared/shared.module';
import { rootRouterConfig }  from './app.routes';
import { AppComponent }      from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    SharedModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }