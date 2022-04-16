import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfficherEmployeComponent } from './afficher-employe.component';


const routes: Routes = [
  {
    path: '',
    component: AfficherEmployeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfficherEmployeRoutingModule { }
