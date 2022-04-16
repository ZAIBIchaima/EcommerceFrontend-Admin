import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfficherEmployeRoutingModule } from './afficher-employe-routing.module';
import { AfficherEmployeComponent } from './afficher-employe.component';
import { AjouterEmployeComponent } from '../ajouter-employe/ajouter-employe.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AfficherEmployeComponent],
  imports: [
    CommonModule,
    AfficherEmployeRoutingModule,
    FormsModule
  ]
})
export class AfficherEmployeModule { }
