import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjouterEmployeRoutingModule } from './ajouter-employe-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjouterEmployeComponent } from './ajouter-employe.component';


@NgModule({
  declarations: [AjouterEmployeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AjouterEmployeRoutingModule
  ]
})
export class AjouterEmployeModule { }
