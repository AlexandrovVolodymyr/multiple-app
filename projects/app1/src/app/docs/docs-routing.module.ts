import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDocComponent } from 'projects/app1/src/app/docs/container/view-doc/view-doc.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'view'
  },
  {
    path: 'view',
    component: ViewDocComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule {}
