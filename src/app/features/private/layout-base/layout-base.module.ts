import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutBaseRoutingModule } from './layout-base-routing.module';
import { TarjetaMateriaComponent } from './pages/tarjeta-materia/tarjeta-materia.component';


@NgModule({
  declarations: [
    TarjetaMateriaComponent
  ],
  imports: [
    CommonModule,
    LayoutBaseRoutingModule
  ]
})
export class LayoutBaseModule { }
