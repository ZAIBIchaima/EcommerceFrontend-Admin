import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactureRoutingModule } from './facture-routing.module';
import { FactureComponent } from './facture.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { filterFacture } from './filterFacture';


@NgModule({
  declarations: [FactureComponent, filterFacture],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FactureRoutingModule
  ]
})
export class FactureModule { }
