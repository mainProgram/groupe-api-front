import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    LayoutModule
  ],
  exports:[
    LayoutModule
  ]
})
export class PublicModule { }
