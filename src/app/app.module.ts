import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';

/* Angular Material */
//import { MatToolbarModule, MatMenuModule, MatIconModule,
//         MatButtonModule, MatSidenavModule } from '@angular/material';
//import { FlexLayoutModule } from '@angular/flex-layout';

/* Custome Modules */
import { SharedModule }     from './shared/shared.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  //MatToolbarModule,
  //MatButtonModule,
  //MatIconModule,
  //MatMenuModule,
  //MatSidenavModule,
  //FlexLayoutModule,
    SharedModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
