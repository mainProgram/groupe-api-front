import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantIndexComponent } from './etudiant-index/etudiant-index.component';

const routes: Routes = [
  {
    path: "", component: EtudiantIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
