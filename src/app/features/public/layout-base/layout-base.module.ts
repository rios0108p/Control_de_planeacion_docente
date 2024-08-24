import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutBaseRoutingModule } from './layout-base-routing.module';
import { LayoutBaseComponent } from './layout-base.component';


@NgModule({
  declarations: [LayoutBaseComponent],
  imports: [
    CommonModule,
    LayoutBaseRoutingModule  ]
})
export class LayoutBaseModule { }
