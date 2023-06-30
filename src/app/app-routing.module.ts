import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControllerListComponent } from './controller-list/controller-list.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { ControllerDashboardComponent } from './controller-dashboard/controller-dashboard.component';
import { HomeComponent } from './home/home.component';
import { SchedulingComponent } from './controller-dashboard/scheduling/scheduling.component';
import { StationsComponent } from './controller-dashboard/stations/stations.component';
import { ControllerHomeComponent } from './controller-home/controller-home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ControllerListComponent
      },
      {
        path: 'add-device',
        component: AddDeviceComponent
      },
      {
        path: 'my-account',
        component: ControllerListComponent
      },
      {
        path: 'system-settings',
        component: ControllerListComponent
      }
    ]

},
{
  path: 'controller',
  component: ControllerHomeComponent,
  children: [
    {
      path: '',
      component: ControllerDashboardComponent
    },
    {
      path: 'scheduling',
      component: SchedulingComponent
    },
    {
      path: 'stations',
      component: StationsComponent
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
