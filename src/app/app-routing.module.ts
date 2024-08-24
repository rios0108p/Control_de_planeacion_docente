import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/public/layout-base/layout-base.module').then((m) => m.LayoutBaseModule)
  },
  {
    path: 'spd',
    loadChildren: () => import('./features/private/layout-base/layout-base.module').then((m) => m.LayoutBaseModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
