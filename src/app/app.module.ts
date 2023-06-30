import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material-module';
import { ControllerListComponent } from './controller-list/controller-list.component';
import { ControllerDashboardComponent } from './controller-dashboard/controller-dashboard.component';
import { HomeComponent } from './home/home.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { SchedulingComponent } from './controller-dashboard/scheduling/scheduling.component';
import { StationsComponent } from './controller-dashboard/stations/stations.component';
import { ControllerHomeComponent } from './controller-home/controller-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ControllerListComponent,
    ControllerDashboardComponent,
    HomeComponent,
    AddDeviceComponent,
    SchedulingComponent,
    StationsComponent,
    ControllerHomeComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
