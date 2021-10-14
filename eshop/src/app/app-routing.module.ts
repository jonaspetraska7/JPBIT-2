import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduktasComponent } from './produktas/produktas.component';

const routes: Routes = [
  {path: '', component:ProduktasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
