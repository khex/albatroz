import { NgModule }          from '@angular/core';
import { CommonModule }      from '@angular/common';
import { RouterModule }      from '@angular/router';
import { 
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatChipsModule,
  MatListModule,
  MatInputModule,
  MatRippleModule,
  MatSlideToggleModule,
  MatSnackBarModule }        from '@angular/material';
import { FlexLayoutModule }  from '@angular/flex-layout';
import { NguCarouselModule } from '@ngu/carousel';
// ngx-gallery
import { GalleryModule }     from  '@ngx-gallery/core';
import { LightboxModule }    from  '@ngx-gallery/lightbox';

import { SharedModule }      from '../../shared/shared.module';
import { HomeRoutes }        from "./home.routing";

import { HomeTwoComponent }  from './home-two.component';
import { HeaderComponent }   from './header/header.component';
import { IntroComponent }    from './intro/intro.component';
import { PortfolioComponent} from './portfolio/portfolio.component';
import { PricingsComponent } from './pricings/pricings.component';
import { ContactComponent }  from './contact/contact.component';
import { FooterComponent }   from './footer/footer.component';

import { HomeService }       from './home.service';
import { WINDOW_PROVIDERS }  from '../../shared/helpers/window.helper';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatChipsModule,
    MatInputModule,
    MatListModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    FlexLayoutModule,
    NguCarouselModule,
    GalleryModule,
    LightboxModule,
    RouterModule.forChild(HomeRoutes)
  ],
  declarations: [
    HomeTwoComponent,
    HeaderComponent,
    IntroComponent,
    PortfolioComponent,
    PricingsComponent,
    ContactComponent,
    FooterComponent
  ],
  exports: [
    HomeTwoComponent,
    HeaderComponent,
    IntroComponent,
    PortfolioComponent,
    PricingsComponent,
    ContactComponent,
    FooterComponent
  ],
  providers: [
    HomeService,
    WINDOW_PROVIDERS
  ]
})
export class HomeModule { }
