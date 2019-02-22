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
  MatSnackBarModule
 } from '@angular/material';
import { FlexLayoutModule }  from '@angular/flex-layout';
import { NguCarouselModule } from '@ngu/carousel';
// ngx-gallery
import { GalleryModule }     from  '@ngx-gallery/core';
import { LightboxModule }    from  '@ngx-gallery/lightbox';

// import { CommonDirectivesModule } from '../../directives/common/common-directives.module';
import { SharedModule }      from '../../shared/shared.module';
import { HomeRoutes }        from "./home.routing";

import { HomeOneComponent }  from './home-one.component';
import { HomeTwoComponent }  from './home-two.component';
import { HeaderComponent }   from './header/header.component';
import { IntroOneComponent } from './intro-one/intro-one.component';
import { PortfolioComponent} from './portfolio/portfolio.component';
import { CtaComponent }      from './cta/cta.component';
import { PricingsComponent } from './pricings/pricings.component';
import { ContactComponent }  from './contact/contact.component';
import { FooterComponent }   from './footer/footer.component';

import { HomeTwoService }    from './home-two.service';
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
    HomeOneComponent,
    HomeTwoComponent, 
    HeaderComponent, 
    IntroOneComponent,
    PortfolioComponent, 
    CtaComponent, 
    PricingsComponent, 
    ContactComponent, 
    FooterComponent
  ],
  providers: [
    HomeTwoService,
    WINDOW_PROVIDERS
  ]

})
export class HomeModule { }
