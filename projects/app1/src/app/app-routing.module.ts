import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDocComponent } from 'projects/app1/src/app/container/view-doc/view-doc.component';


const routes: Routes = [
  {
    path: '', component: ViewDocComponent
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
