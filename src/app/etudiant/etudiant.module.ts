import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { EtudiantIndexComponent } from './etudiant-index/etudiant-index.component';


@NgModule({
  declarations: [
    EtudiantIndexComponent
  ],
  imports: [
    CommonModule,
    EtudiantRoutingModule
  ],
  exports:[
    EtudiantIndexComponent
  ]
})
export class EtudiantModule { }
