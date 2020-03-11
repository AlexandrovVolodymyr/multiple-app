import { NgModule } from '@angular/core';
import { LibVendorsComponent } from './lib-vendors.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [LibVendorsComponent],
  imports: [
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [LibVendorsComponent, MatButtonModule, MatToolbarModule]
})
export class LibVendorsModule { }
