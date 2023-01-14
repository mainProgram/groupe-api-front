import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SujetRoutingModule } from './sujet-routing.module';
import { SujetIndexComponent } from './sujet-index/sujet-index.component';


@NgModule({
  declarations: [
    SujetIndexComponent
  ],
  imports: [
    CommonModule,
    SujetRoutingModule
  ],
  exports:[
    SujetIndexComponent
  ]
})
export class SujetModule { }
