import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';
import { ExtratoComponent } from './extrato/extrato.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';

// snipet digitei araute <enter> em a-routes e ele criou esta constante...
export const routes: Routes = [
  { path: '', redirectTo: 'extrato', pathMatch: 'full' },
  {
    path: 'extrato',
    component: ExtratoComponent,
  },
  {
    path: 'nova-transferencia',
    component: NovaTransferenciaComponent,
  },
];
// foi preciso declarar dentro de {} chaves...
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
