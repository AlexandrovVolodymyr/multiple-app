import { NgModule } from '@angular/core';
import { ViewDocComponent } from 'projects/app1/src/app/docs/container/view-doc/view-doc.component';
import { UsersListComponent } from 'projects/app1/src/app/docs/container/users-list/users-list.component';
import { UserComponent } from 'projects/app1/src/app/docs/components/user/user.component';
import { LibViewsModule } from 'projects/lib-views/src/lib/lib-views.module';
import { DocsRoutingModule } from 'projects/app1/src/app/docs/docs-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ViewDocComponent,
    UsersListComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    DocsRoutingModule,
    // FormsModule,
    LibViewsModule,
  ],
  providers: []
})
export class DocsModule {
}
