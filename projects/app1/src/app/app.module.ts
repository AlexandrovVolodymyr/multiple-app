import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LibViewsModule } from 'projects/lib-views/src/lib/lib-views.module';
import { ViewDocComponent } from './container/view-doc/view-doc.component';
import { UsersListComponent } from './container/users-list/users-list.component';
import { UserComponent } from './components/user/user.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { LogUpdateService } from 'projects/app1/src/app/services/log-update.service';

@NgModule({
  declarations: [
    AppComponent,
    ViewDocComponent,
    UsersListComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LibViewsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule
  ],
  providers: [LogUpdateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
