import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  { 
    path: 'zero-configuration', 
    component: ZeroConfigurationComponent 
  }, { 
    path: 'with-options', 
    component: WithOptionsComponent 
  }, { 
    path: 'with-ajax', 
    component: WithAjaxComponent 
  }, { 
    path: 'angular-way', 
    component: AngularWayComponent 
  }, { 
    path: 'server-side-angular-way', 
    component: ServerSideAngularWayComponent 
  }, { 
    path: 'custom-filter', 
    component: CustomFilterComponent 
  }, { 
    path: 'column-filter', 
    component: ColumnFilterComponent 
  }, { 
    path: 'server-side-column-filter', 
    component: ServerSideColumnFilterComponent 
  }, { 
    path: 'row-click-event', 
    component: RowClickEventComponent 
  }, { 
    path: 'router-link', 
    component: RouterLinkComponent 
  }, { 
    path: 'view-person/:id', 
    component: ViewPersonComponent 
  }, { 
    path: 'dashboard', 
    component: DashboardComponent 
  },
  // otherwise redirect to home
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
