import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from "./public/not-found/not-found.component";
const routes: Routes = [
  { path: 'home', loadChildren: () =>  import('./home/home.module').then(m => m.HomeModule)},
  { path: 'sujets', loadChildren: () =>  import('./sujet/sujet.module').then(m => m.SujetModule)},
  { path: 'etudiants', loadChildren: () =>  import('./etudiant/etudiant.module').then(m => m.EtudiantModule)},
  { path: "**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
