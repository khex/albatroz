import { NgModule }        from '@angular/core';
import { CommonModule }    from '@angular/common';

import { MatToolbarModule, MatMenuModule, MatIconModule,
         MatButtonModule, MatSidenavModule } from '@angular/material';
import { FlexLayoutModule} from '@angular/flex-layout';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from '../shared/header/header.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule
  ],
  exports: [FooterComponent, HeaderComponent]
})
export class SharedModule { }
