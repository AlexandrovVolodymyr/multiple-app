import { NgModule } from '@angular/core';
import { LibViewsComponent } from './lib-views.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { LibVendorsModule } from 'projects/lib-vendors/src/lib/lib-vendors.module';
import { FooterComponent } from './components/shared/footer/footer.component';



@NgModule({
  declarations: [LibViewsComponent, HeaderComponent, FooterComponent],
  imports: [
    LibVendorsModule
  ],
  exports: [LibViewsComponent, HeaderComponent, LibVendorsModule, FooterComponent]
})
export class LibViewsModule { }
