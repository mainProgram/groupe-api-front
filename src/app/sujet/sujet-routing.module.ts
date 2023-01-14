import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SujetIndexComponent } from './sujet-index/sujet-index.component';

const routes: Routes = [
  { path:"", component:SujetIndexComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SujetRoutingModule { }
