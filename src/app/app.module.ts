import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ZeroConfigurationComponent } from './zero-configuration/zero-configuration.component';
import { WithOptionsComponent } from './with-options/with-options.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WithAjaxComponent } from './with-ajax/with-ajax.component';
import { AngularWayComponent } from './angular-way/angular-way.component';
import { ServerSideAngularWayComponent } from './server-side-angular-way/server-side-angular-way.component';
import { CustomFilterComponent } from './custom-filter/custom-filter.component';
import { ColumnFilterComponent } from './column-filter/column-filter.component';
import { ServerSideColumnFilterComponent } from './server-side-column-filter/server-side-column-filter.component';
import { RowClickEventComponent } from './row-click-event/row-click-event.component';
import { RouterLinkComponent } from './router-link/router-link.component';
import { ViewPersonComponent } from './view-person/view-person.component';

@NgModule({
  declarations: [
    AppComponent,
    ZeroConfigurationComponent,
    WithOptionsComponent,
    DashboardComponent,
    WithAjaxComponent,
    AngularWayComponent,
    ServerSideAngularWayComponent,
    CustomFilterComponent,
    ColumnFilterComponent,
    ServerSideColumnFilterComponent,
    RowClickEventComponent,
    RouterLinkComponent,
    ViewPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
